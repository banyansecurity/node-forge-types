declare class Color {
    static ALICEBLUE: Color;
    static ANTIQUEWHITE: Color;
    static AQUA: Color;
    static AQUAMARINE: Color;
    static AZURE: Color;
    static BEIGE: Color;
    static BISQUE: Color;
    static BLACK: Color;
    static BLANCHEDALMOND: Color;
    static BLUE: Color;
    static BLUEVIOLET: Color;
    static BROWN: Color;
    static BURLYWOOD: Color;
    static CADETBLUE: Color;
    static CHARTREUSE: Color;
    static CHOCOLATE: Color;
    static CORAL: Color;
    static CORNFLOWERBLUE: Color;
    static CORNSILK: Color;
    static CRIMSON: Color;
    static CYAN: Color;
    static DARKBLUE: Color;
    static DARKCYAN: Color;
    static DARKGOLDENROD: Color;
    static DARKGRAY: Color;
    static DARKGREEN: Color;
    static DARKGREY: Color;
    static DARKKHAKI: Color;
    static DARKMAGENTA: Color;
    static DARKOLIVEGREEN: Color;
    static DARKORANGE: Color;
    static DARKORCHID: Color;
    static DARKRED: Color;
    static DARKSALMON: Color;
    static DARKSEAGREEN: Color;
    static DARKSLATEBLUE: Color;
    static DARKSLATEGRAY: Color;
    static DARKSLATEGREY: Color;
    static DARKTURQUOISE: Color;
    static DARKVIOLET: Color;
    static DEEPPINK: Color;
    static DEEPSKYBLUE: Color;
    static DIMGRAY: Color;
    static DIMGREY: Color;
    static DODGERBLUE: Color;
    static FIREBRICK: Color;
    static FLORALWHITE: Color;
    static FORESTGREEN: Color;
    static FUCHSIA: Color;
    static GAINSBORO: Color;
    static GHOSTWHITE: Color;
    static GOLD: Color;
    static GOLDENROD: Color;
    static GRAY: Color;
    static GREEN: Color;
    static GREENYELLOW: Color;
    static GREY: Color;
    static HONEYDEW: Color;
    static HOTPINK: Color;
    static INDIANRED: Color;
    static INDIGO: Color;
    static IVORY: Color;
    static KHAKI: Color;
    static LAVENDER: Color;
    static LAVENDERBLUSH: Color;
    static LAWNGREEN: Color;
    static LEMONCHIFFON: Color;
    static LIGHTBLUE: Color;
    static LIGHTCORAL: Color;
    static LIGHTCYAN: Color;
    static LIGHTGOLDENRODYELLOW: Color;
    static LIGHTGRAY: Color;
    static LIGHTGREEN: Color;
    static LIGHTGREY: Color;
    static LIGHTPINK: Color;
    static LIGHTSALMON: Color;
    static LIGHTSEAGREEN: Color;
    static LIGHTSKYBLUE: Color;
    static LIGHTSLATEGRAY: Color;
    static LIGHTSLATEGREY: Color;
    static LIGHTSTEELBLUE: Color;
    static LIGHTYELLOW: Color;
    static LIME: Color;
    static LIMEGREEN: Color;
    static LINEN: Color;
    static MAGENTA: Color;
    static MAROON: Color;
    static MEDIUMAQUAMARINE: Color;
    static MEDIUMBLUE: Color;
    static MEDIUMORCHID: Color;
    static MEDIUMPURPLE: Color;
    static MEDIUMSEAGREEN: Color;
    static MEDIUMSLATEBLUE: Color;
    static MEDIUMSPRINGGREEN: Color;
    static MEDIUMTURQUOISE: Color;
    static MEDIUMVIOLETRED: Color;
    static MIDNIGHTBLUE: Color;
    static MINTCREAM: Color;
    static MISTYROSE: Color;
    static MOCCASIN: Color;
    static NAVAJOWHITE: Color;
    static NAVY: Color;
    static OLDLACE: Color;
    static OLIVE: Color;
    static OLIVEDRAB: Color;
    static ORANGE: Color;
    static ORANGERED: Color;
    static ORCHID: Color;
    static PALEGOLDENROD: Color;
    static PALEGREEN: Color;
    static PALETURQUOISE: Color;
    static PALEVIOLETRED: Color;
    static PAPAYAWHIP: Color;
    static PEACHPUFF: Color;
    static PERU: Color;
    static PINK: Color;
    static PLUM: Color;
    static POWDERBLUE: Color;
    static PURPLE: Color;
    static REBECCAPURPLE: Color;
    static RED: Color;
    static ROSYBROWN: Color;
    static ROYALBLUE: Color;
    static SADDLEBROWN: Color;
    static SALMON: Color;
    static SANDYBROWN: Color;
    static SEAGREEN: Color;
    static SEASHELL: Color;
    static SIENNA: Color;
    static SILVER: Color;
    static SKYBLUE: Color;
    static SLATEBLUE: Color;
    static SLATEGRAY: Color;
    static SLATEGREY: Color;
    static SNOW: Color;
    static SPRINGGREEN: Color;
    static STEELBLUE: Color;
    static TAN: Color;
    static TEAL: Color;
    static THISTLE: Color;
    static TOMATO: Color;
    static TRANSPARENT: Color;
    static TURQUOISE: Color;
    static VIOLET: Color;
    static WHEAT: Color;
    static WHITE: Color;
    static WHITESMOKE: Color;
    static YELLOW: Color;
    static YELLOWGREEN: Color;
    constructor(color: string | Color.RGBA | Color.HSLA | Color.HSVA);
    getAlpha(): number;
    getBlue(doNotRound?: boolean): number;
    getGreen(doNotRound?: boolean): number;
    getRed(doNotRound?: boolean): number;
    isEqual(color: Color): boolean;
    toString(): string;
}
declare namespace Color {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type HSLA = {
        h: number;
        s: number;
        l: number;
        a?: number | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type HSVA = {
        h: number;
        s: number;
        v: number;
        a?: number | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type RGBA = {
        r: number;
        g: number;
        b: number;
        a?: number | undefined;
    };
}
export = Color;