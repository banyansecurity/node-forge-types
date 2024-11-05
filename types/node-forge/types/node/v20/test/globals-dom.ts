// fetch
{
    // This tsconfig.json references lib.dom.d.ts. The fetch
    // types included in globals.d.ts are designed to be empty
    // merges when lib.dom.d.ts is included. This test ensures
    // the merge works, but the types observed are from lib.dom.d.ts.
    fetch("https://example.com").then(response => {
        response.arrayBuffer(); // $ExpectType Promise<ArrayBuffer>
        response.blob(); // $ExpectType Promise<Blob>
        response.formData(); // $ExpectType Promise<FormData>

        // undici-types uses `Promise<unknown>` for `json()`
        // This $ExpectType will change if tsconfig.json drops
        // lib.dom.d.ts.
        response.json(); // $ExpectType Promise<any>
        response.text(); // $ExpectType Promise<string>
    });
    const fd = new FormData();
    fd.append("foo", "bar");
    const headers = new Headers();
    headers.append("Accept", "application/json");
    fetch("https://example.com", { body: fd });

    fetch(new URL("https://example.com"), {
        // @ts-expect-error this should not be available when lib.dom.d.ts is present
        dispatcher: undefined,
    });

    const reqinit: RequestInit = {};
    reqinit.method; // $ExpectType string | undefined
    const resinit: ResponseInit = {};
    resinit.status; // $ExpectType number | undefined

    const f: File = {} as any;
    f.name; // $ExpectType string
}

{
    crypto.randomUUID(); // $ExpectType `${string}-${string}-${string}-${string}-${string}` || string
    crypto.getRandomValues(Buffer.alloc(8)); // $ExpectType Buffer || Buffer<ArrayBuffer>
    crypto.getRandomValues(new BigInt64Array(4)); // $ExpectType BigInt64Array || BigInt64Array<ArrayBuffer>

    crypto.subtle.generateKey({ name: "HMAC", hash: "SHA-1" }, true, ["sign", "decrypt", "deriveBits"]).then(
        (out) => {
            out.algorithm; // $ExpectType KeyAlgorithm
            out.extractable; // $ExpectType boolean
            out.usages; // $ExpectType KeyUsage[]
        },
    );
}
