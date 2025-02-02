// Type definitions for parse-cache-control 1.0
// Project: https://github.com/roryf/parse-cache-control
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Simple function to parse Cache-Control headers.
 * Taken from {@link https://github.com/hapijs/wreck|Wreck}.
 */
declare function parseCacheControl(field: string): parseCacheControl.Header | null;

declare namespace parseCacheControl {
    interface Header {
        "max-age"?: number | undefined;
        "must-revalidate"?: boolean | undefined;
        "no-cache"?: boolean | undefined;
        "no-store"?: boolean | undefined;
        private?: boolean | undefined;
    }
}

export = parseCacheControl;
