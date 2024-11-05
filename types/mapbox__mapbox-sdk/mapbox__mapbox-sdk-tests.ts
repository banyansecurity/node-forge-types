import mbxClient from "@mapbox/mapbox-sdk";
import { SdkConfig } from "@mapbox/mapbox-sdk/lib/classes/mapi-client";
import { MapiRequest } from "@mapbox/mapbox-sdk/lib/classes/mapi-request";
import { MapiResponse } from "@mapbox/mapbox-sdk/lib/classes/mapi-response";
import Directions, { DirectionsResponse, DirectionsService } from "@mapbox/mapbox-sdk/services/directions";
import Geocoding, { GeocodeService } from "@mapbox/mapbox-sdk/services/geocoding";
import GeocodingV6, { GeocodeService as GeocodeServiceV6 } from "@mapbox/mapbox-sdk/services/geocoding-v6";
import Isochrone, { IsochroneService } from "@mapbox/mapbox-sdk/services/isochrone";
import MapMatching, { MapMatchingResponse, MapMatchingService } from "@mapbox/mapbox-sdk/services/map-matching";
import Optimization, { OptimizationService } from "@mapbox/mapbox-sdk/services/optimization";
import StaticMap, { StaticMapService } from "@mapbox/mapbox-sdk/services/static";
import Styles, { StylesService } from "@mapbox/mapbox-sdk/services/styles";
import { LineString } from "geojson";

const config: SdkConfig = {
    accessToken: "access-token",
};
const client = mbxClient(config);

const directionsService: DirectionsService = Directions(client);

const mapiRequest: MapiRequest = directionsService.getDirections({
    profile: "walking",
    waypoints: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
    exclude: [],
});

mapiRequest.send().then((response: MapiResponse) => {
    const body = response.body;
    const routes = body.routes;
    const polyline = routes[0].geometry;
});

const mapiRequestGeoJSON: MapiRequest = directionsService.getDirections({
    profile: "walking",
    geometries: "geojson",
    waypoints: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
    exclude: [],
});

mapiRequestGeoJSON.send().then((response: MapiResponse) => {
    const body = response.body;
    const routes = body.routes;
    const coordinates = routes[0].geometry.coordinates;
});

const drivingDirectionsRequest: MapiRequest = directionsService.getDirections({
    profile: "driving",
    waypoints: [],
    arriveBy: "2023-10-24T10:43",
    departAt: "2023-10-23T5:00",
    maxHeight: 4.5,
    maxWeight: 40,
    maxWidth: 10,
});

drivingDirectionsRequest.send().then((response: MapiResponse) => {});

const drivingTrafficDirectionsRequest: MapiRequest = directionsService.getDirections({
    profile: "driving-traffic",
    waypoints: [],
    departAt: "2023-10-23T5:00",
    maxHeight: 4.5,
    maxWeight: 40,
    maxWidth: 10,
});

drivingTrafficDirectionsRequest.send().then((response: MapiResponse) => {});

const isochroneService: IsochroneService = Isochrone(client);

const isochroneRequestLine = isochroneService.getContours({ coordinates: [-3.599431, 54.507913], minutes: [20, 40] });

const isochroneRequestPoly = isochroneService.getContours({
    coordinates: [-3.599431, 54.507913],
    minutes: [20, 40],
    polygons: true,
});

isochroneRequestLine.send().then((response) => {
    const body = response.body;
    const features = body.features;
    features.map((feature) => {
        feature.geometry.type === "LineString";
    });
});

isochroneRequestPoly.send().then((response) => {
    const body = response.body;
    const features = body.features;
    features.map((feature) => {
        feature.geometry.type === "Polygon";
    });
});

const mapMatchingService: MapMatchingService = MapMatching(client);

const mapMatchingRequest: MapiRequest = mapMatchingService.getMatch({
    profile: "walking",
    points: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
});

mapMatchingRequest.send().then((response: MapiResponse) => {
    const body = response.body as MapMatchingResponse;
    const matchings = body.matchings;
});

const stylesService: StylesService = Styles(config);
stylesService.putStyleIcon({
    styleId: "style-id",
    iconId: "icon-id",
    file: "path-to-file.file",
});

const staticMapService: StaticMapService = StaticMap(client);
const geoOverlay: LineString = {
    type: "LineString",
    coordinates: [
        [0, 1],
        [2, 3],
    ],
};
staticMapService.getStaticImage({
    ownerId: "owner-id",
    styleId: "some-style",
    width: 16,
    height: 16,
    position: "auto",
    overlays: [
        {
            geoJson: geoOverlay,
        },
    ],
});

staticMapService.getStaticImage({
    width: 16,
    height: 16,
    overlays: [
        {
            marker: {
                // @ts-expect-error - Object literal may only specify known properties, and 'lng' does not exist in type '[number, number]'
                coordinates: { lng: 0, lat: 0 },
            },
        },
    ],
    position: "auto",
    ownerId: "owner-id",
    styleId: "some-style",
});

staticMapService.getStaticImage({
    ownerId: "owner-id",
    styleId: "some-style",
    width: 16,
    height: 16,
    position: "auto",
    overlays: [
        {
            path: {
                coordinates: [
                    [8.1298828125, 10.098670120603392],
                    [9.4921875, 15.792253570362446],
                    [11.77734375, 14.179186142354181],
                    [11.513671874999998, 11.6522364041154],
                ],
                strokeColor: "ff0000",
                strokeWidth: 10,
                strokeOpacity: 0.4,
                fillColor: "000",
                fillOpacity: 0.75,
            },
        },
        {
            marker: {
                coordinates: [0, 1],
                color: "yellow",
                size: "large",
            },
        },
        {
            marker: {
                coordinates: [0, 1],
                url: "http://example.net",
            },
        },
        {
            geoJson: geoOverlay,
        },
    ],
});

staticMapService.getStaticImage({
    ownerId: "owner-id",
    styleId: "some-style",
    width: 16,
    height: 16,
    position: "auto",
    addlayer: {
        id: "better-boundary",
        type: "line",
        source: "composite",
        "source-layer": "admin",
        filter: [
            "all",
            ["==", ["get", "admin_level"], 1],
            ["==", ["get", "maritime"], "false"],
            ["match", ["get", "worldview"], ["all", "US"], true, false],
        ],
        layout: { "line-join": "bevel" },
        paint: { "line-color": "%236898B3", "line-width": 1.5, "line-dasharray": [1.5, 1] },
    },
    before_layer: "road-label",
});

staticMapService.getStaticImage({
    ownerId: "owner-id",
    styleId: "some-style",
    width: 16,
    height: 16,
    position: "auto",
    setfilter: [">", "height", 300],
    layer_id: "building",
});

staticMapService.getStaticImage({
    ownerId: "owner-id",
    styleId: "some-style",
    width: 16,
    height: 16,
    position: { bbox: [-7.66571044921875, 49.882247460433376, 1.7633056640625, 58.67051177185283] },
});

const geocodeService: GeocodeService = Geocoding(config);
geocodeService
    .forwardGeocode({
        bbox: [1, 2, 3, 4],
        query: "Paris, France",
        mode: "mapbox.places",
    })
    .send()
    .then(({ body }) => {
        body.features.forEach((feature) => {
            const shortCode = feature.short_code;
        });
    });

const geocodeServiceV6: GeocodeServiceV6 = GeocodingV6(config);
geocodeServiceV6
    .forwardGeocode({
        bbox: [1, 2, 3, 4],
        query: "Paris, France",
        mode: "standard",
    })
    .send()
    .then(({ body }) => {
        body.features.forEach((feature) => {
            const shortCode = feature.properties.context.place?.short_code;
        });
    });

geocodeServiceV6
    .forwardGeocode({
        postcode: "75013",
        mode: "structured",
    })
    .send()
    .then(({ body }) => {
        body.features.forEach((feature) => {
            const shortCode = feature.properties.context.place?.short_code;
        });
    });

const optimizationService: OptimizationService = Optimization(config);
optimizationService.getOptimization({
    profile: "driving",
    waypoints: [
        {
            coordinates: [-122.42, 37.78],
            bearing: [45, 90],
            radius: "unlimited",
            approach: "unrestricted",
        },
        {
            coordinates: [-122.45, 37.91],
            bearing: [90, 1],
            radius: "unlimited",
            approach: "curb",
        },
        {
            coordinates: [-122.48, 37.73],
            bearing: [340, 45],
            radius: 1234,
            approach: "unrestricted",
        },
    ],
    destination: "last",
    distributions: [
        {
            pickup: 0,
            dropoff: 1,
        },
    ],
    geometries: "geojson",
    language: "en",
    overview: "full",
    source: "first",
    roundtrip: true,
    steps: true,
});
