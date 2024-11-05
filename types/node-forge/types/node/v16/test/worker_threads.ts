import * as workerThreads from "node:worker_threads";
import assert = require("node:assert");
import * as fs from "node:fs";
import { EventLoopUtilization } from "node:perf_hooks";
import { Readable } from "node:stream";
import { createContext } from "node:vm";

{
    if (workerThreads.isMainThread) {
        const { port1 } = new workerThreads.MessageChannel();
        module.exports = async function parseJSAsync(script: string) {
            return new Promise((resolve, reject) => {
                const worker = new workerThreads.Worker(__filename, {
                    resourceLimits: {
                        codeRangeSizeMb: 123,
                    },
                    argv: ["asd"],
                    workerData: script,
                    transferList: [port1],
                });
                worker.on("message", resolve);
                worker.on("error", reject);
                worker.on("exit", (code) => {
                    if (code !== 0) {
                        reject(new Error(`Worker stopped with exit code ${code}`));
                    }
                });
            });
        };
    } else {
        const script = workerThreads.workerData;
        workerThreads.parentPort!.postMessage(script);
    }
}

{
    const { port1, port2 } = new workerThreads.MessageChannel();
    port1.on("message", (message) => console.log("received", message));
    port2.postMessage({ foo: "bar" });
}

{
    if (workerThreads.isMainThread) {
        const worker = new workerThreads.Worker(__filename);
        const subChannel = new workerThreads.MessageChannel();
        worker.postMessage(
            { hereIsYourPort: subChannel.port1 },
            [subChannel.port1] as readonly workerThreads.TransferListItem[],
        );
        subChannel.port2.on("message", (value) => {
            console.log("received:", value);
        });
        const movedPort = workerThreads.moveMessagePortToContext(
            new workerThreads.MessagePort(),
            createContext(),
        );
        workerThreads.receiveMessageOnPort(movedPort);
    } else {
        workerThreads.parentPort!.once("message", (value) => {
            assert(value.hereIsYourPort instanceof workerThreads.MessagePort);
            value.hereIsYourPort.postMessage("the worker is sending this");
            value.hereIsYourPort.close();
        });
    }
}

{
    const w = new workerThreads.Worker(__filename);
    w.getHeapSnapshot().then((stream: Readable) => {
        //
    });
    w.terminate().then(() => {
        // woot
    });

    const ww = new workerThreads.Worker(__filename, {
        env: workerThreads.SHARE_ENV,
    });

    const www = new workerThreads.Worker(__filename, {
        env: process.env,
    });

    const wwww = new workerThreads.Worker(__filename, {
        env: { doot: "woot" },
    });

    const wwwww = new workerThreads.Worker(__filename, {
        trackUnmanagedFds: true,
    });
}

{
    const pooledBuffer = new ArrayBuffer(8);
    const typedArray1 = new Uint8Array(pooledBuffer);
    const typedArray2 = new Float64Array(pooledBuffer);

    workerThreads.markAsUntransferable(pooledBuffer);

    const { port1 } = new workerThreads.MessageChannel();
    port1.postMessage(typedArray1, [typedArray1.buffer] as readonly workerThreads.TransferListItem[]);

    console.log(typedArray1);
    console.log(typedArray2);
}

{
    (async () => {
        const fileHandle = await fs.promises.open("thefile.txt", "r");
        const worker = new workerThreads.Worker(__filename);
        worker.postMessage("some message", [fileHandle] as readonly workerThreads.TransferListItem[]);
    })();
}

{
    const worker = new workerThreads.Worker(__filename);
    const utilization: EventLoopUtilization = worker.performance.eventLoopUtilization();
}

{
    const bc: workerThreads.BroadcastChannel = new workerThreads.BroadcastChannel("test");
    const name: string = bc.name;
    bc.postMessage({
        test: 1.,
    });

    bc.close();
    bc.ref();
    bc.unref();
    bc.onmessage = (msg: unknown) => {};
    bc.onmessageerror = (msg: unknown) => {};
}

{
    workerThreads.setEnvironmentData("test", 1);
    workerThreads.setEnvironmentData(123, { a: 1 });
    workerThreads.getEnvironmentData("test"); // $ExpectType Serializable
    workerThreads.getEnvironmentData(1); // $ExpectType Serializable
}

{
    // Test addEventListener, removeEventListener and dispatchEvent
    if (workerThreads.isMainThread) {
        const worker = new workerThreads.Worker(__filename);
        const { port1, port2 } = new workerThreads.MessageChannel();
        const events: string[] = [];

        const customEvent = (event: Event) => events.push(event.type);

        // addEventListener
        port1.addEventListener("message", (event) => events.push(event.type));
        port1.addEventListener("close", (event) => events.push(event.type));
        port1.addEventListener("dispatch", (event) => events.push(event.type));
        port1.addEventListener("custom_event", customEvent);

        // emit custom_event
        port1.emit("custom_event", "test");

        // removeEventListener
        port1.removeEventListener("custom_event", customEvent);
        port1.emit("custom_event", "It won't emit as it has been removed");

        // emit dispatch event
        port1.dispatchEvent(new Event("dispatch"));

        // emit message event
        worker.postMessage({ port: port2 }, [port2]);
        port1.postMessage("From main to parent");

        // close event
        setTimeout(() => {
            port1.close();
            port2.close();

            assert.deepStrictEqual(events, [
                "custom_event",
                "dispatch",
                "message",
                "close",
            ], "Main Events");
        }, 250);
    } else if (workerThreads.parentPort) {
        const events: string[] = [];

        workerThreads.parentPort.once("message", ({ port: parentPort }) => {
            const port: workerThreads.MessagePort = parentPort;

            port.addEventListener("message", (event) => {
                events.push(event.type);
                port.postMessage("From parent to main");
            });

            setTimeout(() => {
                port.close();

                assert.deepStrictEqual(events, ["message"], "Parent Events");
            }, 125);
        });
    }
}
