import * as React from "react";

interface TInputs {
    inputString?: string | undefined;
}
interface TOutputs {
    testString: string;
}
interface TEvents {
    testEvent: () => void;
}

class TestControl implements ComponentFramework.StandardControl<TInputs, TOutputs, TEvents> {
    init(
        context: ComponentFramework.Context<TInputs, TEvents>,
        notifyOutputChanged?: () => void,
        state?: ComponentFramework.Dictionary,
        container?: HTMLDivElement,
    ) {}
    updateView(context: ComponentFramework.Context<TInputs, TEvents>) {
        context.events.testEvent();

        context.utils.loadDependency?.("pubprefix_TestNamespace.TestControlName").then(() => {});
    }
    destroy() {}
    getOutputs() {
        return {
            testString: "",
        };
    }
}

class TestReactControl implements ComponentFramework.ReactControl<TInputs, TOutputs, TEvents> {
    init(context: ComponentFramework.Context<TInputs, TEvents>, notifyOutputChanged?: () => void) {
    }
    updateView(context: ComponentFramework.Context<TInputs, TEvents>) {
        context.events.testEvent();
        context.utils.loadDependency?.("pubprefix_TestNamespace.TestControlName").then(() => {});

        return React.createElement("div", { id: "test-id" });
    }
    destroy() {
    }
    getOutputs() {
        return {
            testString: "",
        };
    }
}

const clientTest: ComponentFramework.Client = {
    disableScroll: false,
    getFormFactor: () => 1,
    getClient: () => "",
    isOffline: () => false,
    isNetworkAvailable: () => false,
};

const tmpFile: ComponentFramework.FileObject = { fileContent: "", fileName: "", fileSize: 0, mimeType: "" };
const deviceTest: ComponentFramework.Device = {
    captureAudio: () => Promise.resolve(tmpFile),
    captureImage: () => Promise.resolve(tmpFile),
    captureVideo: () => Promise.resolve(tmpFile),
    getBarcodeValue: () => Promise.resolve(""),

    getCurrentPosition: () =>
        Promise.resolve({
            coords: {
                latitude: 0,
                longitude: 0,
                accuracy: 0,
                altitude: 0,
                heading: 0,
                speed: 0,
                altitudeAccuracy: 0,
            },
            timestamp: new Date(0),
        }),

    pickFile: () => Promise.resolve([tmpFile]),
};

const formattingTest: ComponentFramework.Formatting = {
    formatCurrency: (value: number) => value.toString(),
    formatDecimal: (value: number) => value.toString(),
    formatDateAsFilterStringInUTC: (value: Date) => value.toString(),
    formatDateLong: (value: Date) => value.toString(),
    formatDateLongAbbreviated: (value: Date) => value.toString(),
    formatDateShort: (value: Date) => value.toString(),
    formatDateYearMonth: (value: Date) => value.toString(),
    formatInteger: (value: number) => value.toString(),
    formatLanguage: (value: number) => value.toString(),
    formatTime: (value: Date, behavior: ComponentFramework.FormattingApi.Types.DateTimeFieldBehavior) =>
        value.toString(),
    getWeekOfYear: (value: Date) => 0,
};

const modeTest: ComponentFramework.Mode = {
    allocatedHeight: -1,
    allocatedWidth: -1,
    isControlDisabled: false,
    isVisible: true,
    label: "",
    setControlState: (state: ComponentFramework.Dictionary) => false,
    setFullScreen: (value: boolean) => null,
    trackContainerResize: (value: boolean) => null,
};

const resourcesTest: ComponentFramework.Resources = {
    getResource: (id: string, success: (data: string) => void, failure: () => void) => {},
    getString: (id: string) => "",
};

const dictionary: ComponentFramework.Dictionary = { testKey: "" };

const dataSetApiColumn: ComponentFramework.PropertyHelper.DataSetApi.Column = {
    name: "",
    displayName: "",
    dataType: "",
    alias: "",
    order: 1,
    visualSizeFactor: 1,
    isHidden: false,
    isPrimary: true,
    disableSorting: false,
};

const linkEntityExposeExpression: ComponentFramework.PropertyHelper.DataSetApi.LinkEntityExposedExpression = {
    name: "",
    from: "",
    to: "",
    linkType: "",
    alias: "",
};

enum ImeMode {
    Auto = 0,
    Inactive = 1,
    Active = 2,
    Disabled = 3,
}

enum DateTimeFieldBehavior {
    None = 0,
    UserLocal = 1,
    TimeZoneIndependent = 3,
}

const stringMetadataTest: ComponentFramework.PropertyHelper.FieldPropertyMetadata.DateTimeMetadata = {
    DisplayName: "",
    LogicalName: "",
    RequiredLevel: 0,
    IsSecured: false,
    SourceType: 0,
    Description: "",
    ImeMode: ImeMode.Inactive,
    Format: "",
    Behavior: DateTimeFieldBehavior.TimeZoneIndependent,
};

const EntityReferenceTest: ComponentFramework.EntityReference = {
    id: { guid: "" },
    etn: "",
    name: "",
};

const metadataTest: ComponentFramework.PropertyHelper.FieldPropertyMetadata.Metadata = {
    DisplayName: "",
    LogicalName: "",
    RequiredLevel: -1,
    IsSecured: false,
    SourceType: 0,
    Description: "",
};

const propertyTest: ComponentFramework.PropertyTypes.Property = {
    error: false,
    errorMessage: "",
    formatted: "",
    raw: "",
    type: "",
    attributes: metadataTest,
};

const lookupValueTest: ComponentFramework.LookupValue = {
    id: "",
    name: "",
    entityType: "",
};

const lookupPropertyTest: ComponentFramework.PropertyTypes.LookupProperty = {
    error: false,
    errorMessage: "",
    type: "",
    raw: [lookupValueTest],
    getTargetEntityType: () => "",
    getViewId: () => "",
};

const webApiTest: ComponentFramework.WebApi = {
    createRecord: () => Promise.resolve(lookupValueTest),
    updateRecord: () => Promise.resolve(lookupValueTest),
    deleteRecord: () => Promise.resolve(lookupValueTest),
    retrieveMultipleRecords: () => Promise.resolve({ entities: [], nextLink: "" }),
    retrieveRecord: () => Promise.resolve({}),
};

const pagingTest: ComponentFramework.PropertyHelper.DataSetApi.Paging = {
    totalResultCount: 1000,
    firstPageNumber: 4,
    lastPageNumber: 4,
    pageSize: 20,
    hasNextPage: true,
    hasPreviousPage: true,
    loadNextPage: (loadOnlyNewPage?: boolean) => {},
    loadPreviousPage: (loadOnlyNewPage?: boolean) => {},
    reset: () => {},
    setPageSize: (pageSize: number) => {},
    loadExactPage: (pageNumber: number) => {},
};

const fluentDesignLanguage: ComponentFramework.FluentDesignState = {
    tokenTheme: {
        borderRadiusNone: "0",
        borderRadiusSmall: "2px",
        borderRadiusMedium: "4px",
        borderRadiusLarge: "6px",
        borderRadiusXLarge: "8px",
        borderRadiusCircular: "10000px",
        fontSizeBase100: "10px",
        fontSizeBase200: "12px",
        fontSizeBase300: "14px",
        fontSizeBase400: "16px",
        fontSizeBase500: "20px",
        fontSizeBase600: "24px",
        fontSizeHero700: "28px",
        fontSizeHero800: "32px",
        fontSizeHero900: "40px",
        fontSizeHero1000: "68px",
        lineHeightBase100: "14px",
        lineHeightBase200: "16px",
        lineHeightBase300: "20px",
        lineHeightBase400: "22px",
        lineHeightBase500: "28px",
        lineHeightBase600: "32px",
        lineHeightHero700: "36px",
        lineHeightHero800: "40px",
        lineHeightHero900: "52px",
        lineHeightHero1000: "92px",
        fontFamilyBase:
            "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
        fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
        fontFamilyNumeric:
            "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemibold: 600,
        fontWeightBold: 700,
        strokeWidthThin: "1px",
        strokeWidthThick: "2px",
        strokeWidthThicker: "3px",
        strokeWidthThickest: "4px",
        spacingHorizontalNone: "0",
        spacingHorizontalXXS: "2px",
        spacingHorizontalXS: "4px",
        spacingHorizontalSNudge: "6px",
        spacingHorizontalS: "8px",
        spacingHorizontalMNudge: "10px",
        spacingHorizontalM: "12px",
        spacingHorizontalL: "16px",
        spacingHorizontalXL: "20px",
        spacingHorizontalXXL: "24px",
        spacingHorizontalXXXL: "32px",
        spacingVerticalNone: "0",
        spacingVerticalXXS: "2px",
        spacingVerticalXS: "4px",
        spacingVerticalSNudge: "6px",
        spacingVerticalS: "8px",
        spacingVerticalMNudge: "10px",
        spacingVerticalM: "12px",
        spacingVerticalL: "16px",
        spacingVerticalXL: "20px",
        spacingVerticalXXL: "24px",
        spacingVerticalXXXL: "32px",
        durationUltraFast: "50ms",
        durationFaster: "100ms",
        durationFast: "150ms",
        durationNormal: "200ms",
        durationGentle: "250ms",
        durationSlow: "300ms",
        durationSlower: "400ms",
        durationUltraSlow: "500ms",
        curveAccelerateMax: "cubic-bezier(1,0,1,1)",
        curveAccelerateMid: "cubic-bezier(0.7,0,1,0.5)",
        curveAccelerateMin: "cubic-bezier(0.8,0,1,1)",
        curveDecelerateMax: "cubic-bezier(0,0,0,1)",
        curveDecelerateMid: "cubic-bezier(0.1,0.9,0.2,1)",
        curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
        curveEasyEaseMax: "cubic-bezier(0.8,0,0.1,1)",
        curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
        curveLinear: "cubic-bezier(0,0,1,1)",
        colorNeutralForeground1: "#242424",
        colorNeutralForeground1Hover: "#242424",
        colorNeutralForeground1Pressed: "#242424",
        colorNeutralForeground1Selected: "#242424",
        colorNeutralForeground2: "#424242",
        colorNeutralForeground2Hover: "#242424",
        colorNeutralForeground2Pressed: "#242424",
        colorNeutralForeground2Selected: "#242424",
        colorNeutralForeground2BrandHover: "#1267b4",
        colorNeutralForeground2BrandPressed: "#18599b",
        colorNeutralForeground2BrandSelected: "#1267b4",
        colorNeutralForeground3: "#616161",
        colorNeutralForeground3Hover: "#424242",
        colorNeutralForeground3Pressed: "#424242",
        colorNeutralForeground3Selected: "#424242",
        colorNeutralForeground3BrandHover: "#1267b4",
        colorNeutralForeground3BrandPressed: "#18599b",
        colorNeutralForeground3BrandSelected: "#1267b4",
        colorNeutralForeground4: "#707070",
        colorNeutralForegroundDisabled: "#bdbdbd",
        colorNeutralForegroundInvertedDisabled: "rgba(255, 255, 255, 0.4)",
        colorBrandForegroundLink: "#18599b",
        colorBrandForegroundLinkHover: "#1b4c82",
        colorBrandForegroundLinkPressed: "#193253",
        colorBrandForegroundLinkSelected: "#18599b",
        colorNeutralForeground2Link: "#424242",
        colorNeutralForeground2LinkHover: "#242424",
        colorNeutralForeground2LinkPressed: "#242424",
        colorNeutralForeground2LinkSelected: "#242424",
        colorCompoundBrandForeground1: "#1267b4",
        colorCompoundBrandForeground1Hover: "#18599b",
        colorCompoundBrandForeground1Pressed: "#1b4c82",
        colorBrandForeground1: "#1267b4",
        colorBrandForeground2: "#18599b",
        colorBrandForeground2Hover: "#1b4c82",
        colorBrandForeground2Pressed: "#16263d",
        colorNeutralForeground1Static: "#242424",
        colorNeutralForegroundStaticInverted: "#ffffff",
        colorNeutralForegroundInverted: "#ffffff",
        colorNeutralForegroundInvertedHover: "#ffffff",
        colorNeutralForegroundInvertedPressed: "#ffffff",
        colorNeutralForegroundInvertedSelected: "#ffffff",
        colorNeutralForegroundInverted2: "#ffffff",
        colorNeutralForegroundOnBrand: "#ffffff",
        colorNeutralForegroundInvertedLink: "#ffffff",
        colorNeutralForegroundInvertedLinkHover: "#ffffff",
        colorNeutralForegroundInvertedLinkPressed: "#ffffff",
        colorNeutralForegroundInvertedLinkSelected: "#ffffff",
        colorBrandForegroundInverted: "#4f82c8",
        colorBrandForegroundInvertedHover: "#6790cf",
        colorBrandForegroundInvertedPressed: "#4f82c8",
        colorBrandForegroundOnLight: "#1267b4",
        colorBrandForegroundOnLightHover: "#18599b",
        colorBrandForegroundOnLightPressed: "#1b3f6a",
        colorBrandForegroundOnLightSelected: "#1b4c82",
        colorNeutralBackground1: "#ffffff",
        colorNeutralBackground1Hover: "#f5f5f5",
        colorNeutralBackground1Pressed: "#e0e0e0",
        colorNeutralBackground1Selected: "#ebebeb",
        colorNeutralBackground2: "#fafafa",
        colorNeutralBackground2Hover: "#f0f0f0",
        colorNeutralBackground2Pressed: "#dbdbdb",
        colorNeutralBackground2Selected: "#e6e6e6",
        colorNeutralBackground3: "#f5f5f5",
        colorNeutralBackground3Hover: "#ebebeb",
        colorNeutralBackground3Pressed: "#d6d6d6",
        colorNeutralBackground3Selected: "#e0e0e0",
        colorNeutralBackground4: "#f0f0f0",
        colorNeutralBackground4Hover: "#fafafa",
        colorNeutralBackground4Pressed: "#f5f5f5",
        colorNeutralBackground4Selected: "#ffffff",
        colorNeutralBackground5: "#ebebeb",
        colorNeutralBackground5Hover: "#f5f5f5",
        colorNeutralBackground5Pressed: "#f0f0f0",
        colorNeutralBackground5Selected: "#fafafa",
        colorNeutralBackground6: "#e6e6e6",
        colorNeutralBackgroundInverted: "#292929",
        colorNeutralBackgroundStatic: "#333333",
        colorNeutralBackgroundAlpha: "rgba(255, 255, 255, 0.5)",
        colorNeutralBackgroundAlpha2: "rgba(255, 255, 255, 0.8)",
        colorSubtleBackground: "transparent",
        colorSubtleBackgroundHover: "#f5f5f5",
        colorSubtleBackgroundPressed: "#e0e0e0",
        colorSubtleBackgroundSelected: "#ebebeb",
        colorSubtleBackgroundLightAlphaHover: "rgba(255, 255, 255, 0.7)",
        colorSubtleBackgroundLightAlphaPressed: "rgba(255, 255, 255, 0.5)",
        colorSubtleBackgroundLightAlphaSelected: "transparent",
        colorSubtleBackgroundInverted: "transparent",
        colorSubtleBackgroundInvertedHover: "rgba(0, 0, 0, 0.1)",
        colorSubtleBackgroundInvertedPressed: "rgba(0, 0, 0, 0.3)",
        colorSubtleBackgroundInvertedSelected: "rgba(0, 0, 0, 0.2)",
        colorTransparentBackground: "transparent",
        colorTransparentBackgroundHover: "transparent",
        colorTransparentBackgroundPressed: "transparent",
        colorTransparentBackgroundSelected: "transparent",
        colorNeutralBackgroundDisabled: "#f0f0f0",
        colorNeutralBackgroundInvertedDisabled: "rgba(255, 255, 255, 0.1)",
        colorNeutralStencil1: "#e6e6e6",
        colorNeutralStencil2: "#fafafa",
        colorNeutralStencil1Alpha: "rgba(0, 0, 0, 0.1)",
        colorNeutralStencil2Alpha: "rgba(0, 0, 0, 0.05)",
        colorBackgroundOverlay: "rgba(0, 0, 0, 0.4)",
        colorScrollbarOverlay: "rgba(0, 0, 0, 0.5)",
        colorBrandBackground: "#1267b4",
        colorBrandBackgroundHover: "#18599b",
        colorBrandBackgroundPressed: "#193253",
        colorBrandBackgroundSelected: "#1b4c82",
        colorCompoundBrandBackground: "#1267b4",
        colorCompoundBrandBackgroundHover: "#18599b",
        colorCompoundBrandBackgroundPressed: "#1b4c82",
        colorBrandBackgroundStatic: "#1267b4",
        colorBrandBackground2: "#cdd8ef",
        colorBrandBackground2Hover: "#bac9e9",
        colorBrandBackground2Pressed: "#92acdc",
        colorBrandBackgroundInverted: "#ffffff",
        colorBrandBackgroundInvertedHover: "#cdd8ef",
        colorBrandBackgroundInvertedPressed: "#a6bae2",
        colorBrandBackgroundInvertedSelected: "#bac9e9",
        colorNeutralStrokeAccessible: "#616161",
        colorNeutralStrokeAccessibleHover: "#575757",
        colorNeutralStrokeAccessiblePressed: "#4d4d4d",
        colorNeutralStrokeAccessibleSelected: "#1267b4",
        colorNeutralStroke1: "#d1d1d1",
        colorNeutralStroke1Hover: "#c7c7c7",
        colorNeutralStroke1Pressed: "#b3b3b3",
        colorNeutralStroke1Selected: "#bdbdbd",
        colorNeutralStroke2: "#e0e0e0",
        colorNeutralStroke3: "#f0f0f0",
        colorNeutralStrokeSubtle: "#e0e0e0",
        colorNeutralStrokeOnBrand: "#ffffff",
        colorNeutralStrokeOnBrand2: "#ffffff",
        colorNeutralStrokeOnBrand2Hover: "#ffffff",
        colorNeutralStrokeOnBrand2Pressed: "#ffffff",
        colorNeutralStrokeOnBrand2Selected: "#ffffff",
        colorBrandStroke1: "#1267b4",
        colorBrandStroke2: "#a6bae2",
        colorBrandStroke2Hover: "#7d9ed5",
        colorBrandStroke2Pressed: "#1267b4",
        colorBrandStroke2Contrast: "#a6bae2",
        colorCompoundBrandStroke: "#1267b4",
        colorCompoundBrandStrokeHover: "#18599b",
        colorCompoundBrandStrokePressed: "#1b4c82",
        colorNeutralStrokeDisabled: "#e0e0e0",
        colorNeutralStrokeInvertedDisabled: "rgba(255, 255, 255, 0.4)",
        colorTransparentStroke: "transparent",
        colorTransparentStrokeInteractive: "transparent",
        colorTransparentStrokeDisabled: "transparent",
        colorNeutralStrokeAlpha: "rgba(0, 0, 0, 0.05)",
        colorNeutralStrokeAlpha2: "rgba(255, 255, 255, 0.2)",
        colorStrokeFocus1: "#ffffff",
        colorStrokeFocus2: "#000000",
        colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
        colorNeutralShadowKey: "rgba(0,0,0,0.14)",
        colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
        colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
        colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
        colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
        colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
        colorBrandShadowKey: "rgba(0,0,0,0.25)",
        colorPaletteRedBackground1: "#fdf6f6",
        colorPaletteRedBackground2: "#f1bbbc",
        colorPaletteRedBackground3: "#d13438",
        colorPaletteRedForeground1: "#bc2f32",
        colorPaletteRedForeground2: "#751d1f",
        colorPaletteRedForeground3: "#d13438",
        colorPaletteRedBorderActive: "#d13438",
        colorPaletteRedBorder1: "#f1bbbc",
        colorPaletteRedBorder2: "#d13438",
        colorPaletteGreenBackground1: "#f1faf1",
        colorPaletteGreenBackground2: "#9fd89f",
        colorPaletteGreenBackground3: "#107c10",
        colorPaletteGreenForeground1: "#0e700e",
        colorPaletteGreenForeground2: "#094509",
        colorPaletteGreenForeground3: "#107c10",
        colorPaletteGreenBorderActive: "#107c10",
        colorPaletteGreenBorder1: "#9fd89f",
        colorPaletteGreenBorder2: "#107c10",
        colorPaletteDarkOrangeBackground1: "#fdf6f3",
        colorPaletteDarkOrangeBackground2: "#f4bfab",
        colorPaletteDarkOrangeBackground3: "#da3b01",
        colorPaletteDarkOrangeForeground1: "#c43501",
        colorPaletteDarkOrangeForeground2: "#7a2101",
        colorPaletteDarkOrangeForeground3: "#da3b01",
        colorPaletteDarkOrangeBorderActive: "#da3b01",
        colorPaletteDarkOrangeBorder1: "#f4bfab",
        colorPaletteDarkOrangeBorder2: "#da3b01",
        colorPaletteYellowBackground1: "#fffef5",
        colorPaletteYellowBackground2: "#fef7b2",
        colorPaletteYellowBackground3: "#fde300",
        colorPaletteYellowForeground1: "#817400",
        colorPaletteYellowForeground2: "#817400",
        colorPaletteYellowForeground3: "#fde300",
        colorPaletteYellowBorderActive: "#fde300",
        colorPaletteYellowBorder1: "#fef7b2",
        colorPaletteYellowBorder2: "#fde300",
        colorPaletteBerryBackground1: "#fdf5fc",
        colorPaletteBerryBackground2: "#edbbe7",
        colorPaletteBerryBackground3: "#c239b3",
        colorPaletteBerryForeground1: "#af33a1",
        colorPaletteBerryForeground2: "#6d2064",
        colorPaletteBerryForeground3: "#c239b3",
        colorPaletteBerryBorderActive: "#c239b3",
        colorPaletteBerryBorder1: "#edbbe7",
        colorPaletteBerryBorder2: "#c239b3",
        colorPaletteLightGreenBackground1: "#f2fbf2",
        colorPaletteLightGreenBackground2: "#a7e3a5",
        colorPaletteLightGreenBackground3: "#13a10e",
        colorPaletteLightGreenForeground1: "#11910d",
        colorPaletteLightGreenForeground2: "#0b5a08",
        colorPaletteLightGreenForeground3: "#13a10e",
        colorPaletteLightGreenBorderActive: "#13a10e",
        colorPaletteLightGreenBorder1: "#a7e3a5",
        colorPaletteLightGreenBorder2: "#13a10e",
        colorPaletteMarigoldBackground1: "#fefbf4",
        colorPaletteMarigoldBackground2: "#f9e2ae",
        colorPaletteMarigoldBackground3: "#eaa300",
        colorPaletteMarigoldForeground1: "#d39300",
        colorPaletteMarigoldForeground2: "#835b00",
        colorPaletteMarigoldForeground3: "#eaa300",
        colorPaletteMarigoldBorderActive: "#eaa300",
        colorPaletteMarigoldBorder1: "#f9e2ae",
        colorPaletteMarigoldBorder2: "#eaa300",
        colorPaletteRedForegroundInverted: "#dc5e62",
        colorPaletteGreenForegroundInverted: "#359b35",
        colorPaletteYellowForegroundInverted: "#fef7b2",
        colorPaletteDarkRedBackground2: "#d69ca5",
        colorPaletteDarkRedForeground2: "#420610",
        colorPaletteDarkRedBorderActive: "#750b1c",
        colorPaletteCranberryBackground2: "#eeacb2",
        colorPaletteCranberryForeground2: "#6e0811",
        colorPaletteCranberryBorderActive: "#c50f1f",
        colorPalettePumpkinBackground2: "#efc4ad",
        colorPalettePumpkinForeground2: "#712d09",
        colorPalettePumpkinBorderActive: "#ca5010",
        colorPalettePeachBackground2: "#ffddb3",
        colorPalettePeachForeground2: "#8f4e00",
        colorPalettePeachBorderActive: "#ff8c00",
        colorPaletteGoldBackground2: "#ecdfa5",
        colorPaletteGoldForeground2: "#6c5700",
        colorPaletteGoldBorderActive: "#c19c00",
        colorPaletteBrassBackground2: "#e0cea2",
        colorPaletteBrassForeground2: "#553e06",
        colorPaletteBrassBorderActive: "#986f0b",
        colorPaletteBrownBackground2: "#ddc3b0",
        colorPaletteBrownForeground2: "#50301a",
        colorPaletteBrownBorderActive: "#8e562e",
        colorPaletteForestBackground2: "#bdd99b",
        colorPaletteForestForeground2: "#294903",
        colorPaletteForestBorderActive: "#498205",
        colorPaletteSeafoamBackground2: "#a8f0cd",
        colorPaletteSeafoamForeground2: "#00723b",
        colorPaletteSeafoamBorderActive: "#00cc6a",
        colorPaletteDarkGreenBackground2: "#9ad29a",
        colorPaletteDarkGreenForeground2: "#063b06",
        colorPaletteDarkGreenBorderActive: "#0b6a0b",
        colorPaletteLightTealBackground2: "#a6e9ed",
        colorPaletteLightTealForeground2: "#00666d",
        colorPaletteLightTealBorderActive: "#00b7c3",
        colorPaletteTealBackground2: "#9bd9db",
        colorPaletteTealForeground2: "#02494c",
        colorPaletteTealBorderActive: "#038387",
        colorPaletteSteelBackground2: "#94c8d4",
        colorPaletteSteelForeground2: "#00333f",
        colorPaletteSteelBorderActive: "#005b70",
        colorPaletteBlueBackground2: "#a9d3f2",
        colorPaletteBlueForeground2: "#004377",
        colorPaletteBlueBorderActive: "#0078d4",
        colorPaletteRoyalBlueBackground2: "#9abfdc",
        colorPaletteRoyalBlueForeground2: "#002c4e",
        colorPaletteRoyalBlueBorderActive: "#004e8c",
        colorPaletteCornflowerBackground2: "#c8d1fa",
        colorPaletteCornflowerForeground2: "#2c3c85",
        colorPaletteCornflowerBorderActive: "#4f6bed",
        colorPaletteNavyBackground2: "#a3b2e8",
        colorPaletteNavyForeground2: "#001665",
        colorPaletteNavyBorderActive: "#0027b4",
        colorPaletteLavenderBackground2: "#d2ccf8",
        colorPaletteLavenderForeground2: "#3f3682",
        colorPaletteLavenderBorderActive: "#7160e8",
        colorPalettePurpleBackground2: "#c6b1de",
        colorPalettePurpleForeground2: "#341a51",
        colorPalettePurpleBorderActive: "#5c2e91",
        colorPaletteGrapeBackground2: "#d9a7e0",
        colorPaletteGrapeForeground2: "#4c0d55",
        colorPaletteGrapeBorderActive: "#881798",
        colorPaletteLilacBackground2: "#e6bfed",
        colorPaletteLilacForeground2: "#63276d",
        colorPaletteLilacBorderActive: "#b146c2",
        colorPalettePinkBackground2: "#f7c0e3",
        colorPalettePinkForeground2: "#80215d",
        colorPalettePinkBorderActive: "#e43ba6",
        colorPaletteMagentaBackground2: "#eca5d1",
        colorPaletteMagentaForeground2: "#6b0043",
        colorPaletteMagentaBorderActive: "#bf0077",
        colorPalettePlumBackground2: "#d696c0",
        colorPalettePlumForeground2: "#43002b",
        colorPalettePlumBorderActive: "#77004d",
        colorPaletteBeigeBackground2: "#d7d4d4",
        colorPaletteBeigeForeground2: "#444241",
        colorPaletteBeigeBorderActive: "#7a7574",
        colorPaletteMinkBackground2: "#cecccb",
        colorPaletteMinkForeground2: "#343231",
        colorPaletteMinkBorderActive: "#5d5a58",
        colorPalettePlatinumBackground2: "#cdd6d8",
        colorPalettePlatinumForeground2: "#3b4447",
        colorPalettePlatinumBorderActive: "#69797e",
        colorPaletteAnchorBackground2: "#bcc3c7",
        colorPaletteAnchorForeground2: "#202427",
        colorPaletteAnchorBorderActive: "#394146",
        colorStatusSuccessBackground1: "#f1faf1",
        colorStatusSuccessBackground2: "#9fd89f",
        colorStatusSuccessBackground3: "#107c10",
        colorStatusSuccessForeground1: "#0e700e",
        colorStatusSuccessForeground2: "#094509",
        colorStatusSuccessForeground3: "#107c10",
        colorStatusSuccessForegroundInverted: "#54b054",
        colorStatusSuccessBorderActive: "#107c10",
        colorStatusSuccessBorder1: "#9fd89f",
        colorStatusSuccessBorder2: "#107c10",
        colorStatusWarningBackground1: "#fff9f5",
        colorStatusWarningBackground2: "#fdcfb4",
        colorStatusWarningBackground3: "#f7630c",
        colorStatusWarningForeground1: "#bc4b09",
        colorStatusWarningForeground2: "#8a3707",
        colorStatusWarningForeground3: "#bc4b09",
        colorStatusWarningForegroundInverted: "#faa06b",
        colorStatusWarningBorderActive: "#f7630c",
        colorStatusWarningBorder1: "#fdcfb4",
        colorStatusWarningBorder2: "#bc4b09",
        colorStatusDangerBackground1: "#fdf3f4",
        colorStatusDangerBackground2: "#eeacb2",
        colorStatusDangerBackground3: "#c50f1f",
        colorStatusDangerForeground1: "#b10e1c",
        colorStatusDangerForeground2: "#6e0811",
        colorStatusDangerForeground3: "#c50f1f",
        colorStatusDangerForegroundInverted: "#dc626d",
        colorStatusDangerBorderActive: "#c50f1f",
        colorStatusDangerBorder1: "#eeacb2",
        colorStatusDangerBorder2: "#c50f1f",
        shadow2: "0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)",
        shadow4: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
        shadow8: "0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)",
        shadow16: "0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)",
        shadow28: "0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14)",
        shadow64: "0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)",
        shadow2Brand: "0 0 2px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.25)",
        shadow4Brand: "0 0 2px rgba(0,0,0,0.30), 0 2px 4px rgba(0,0,0,0.25)",
        shadow8Brand: "0 0 2px rgba(0,0,0,0.30), 0 4px 8px rgba(0,0,0,0.25)",
        shadow16Brand: "0 0 2px rgba(0,0,0,0.30), 0 8px 16px rgba(0,0,0,0.25)",
        shadow28Brand: "0 0 8px rgba(0,0,0,0.30), 0 14px 28px rgba(0,0,0,0.25)",
        shadow64Brand: "0 0 8px rgba(0,0,0,0.30), 0 32px 64px rgba(0,0,0,0.25)",
    },
    brand: {
        10: "",
        20: "",
        30: "",
        40: "",
        50: "",
        60: "",
        70: "",
        80: "",
        90: "",
        100: "",
        110: "",
        120: "",
        130: "",
        140: "",
        150: "",
        160: "",
    },
    typographyTokens: ComponentFramework.typographyStyles,
    isDarkTheme: false,
};

const lookupOptionsTest: ComponentFramework.UtilityApi.LookupOptions = {
    entityTypes: [],
};

const entityFormOptionsTest: ComponentFramework.NavigationApi.EntityFormOptions = {
    entityName: "",
    entityId: "",
    createFromEntity: {
        id: "",
        name: "",
        entityType: "",
    },
};
