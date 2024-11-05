declare class Levenshtein {
    /**
     * Levenshtein string difference
     * @param m First string
     * @param n Second string
     */
    constructor(m: string, n: string);

    /**
     * Distance between strings
     */
    distance: number;

    /**
     * Distance between strings
     * Alias of distance
     */
    valueOf(): number;

    /**
     * Pretty print Levenshtein table.
     */
    inspect(): string;

    /**
     * Pretty print Levenshtein table.
     * Alias of inspect()
     */
    toString(): string;

    /**
     * Return the Levenshtein table.
     */
    getMatrix(): number[][];
}

// Required to make import as syntax work
declare namespace Levenshtein {
}

export = Levenshtein;
