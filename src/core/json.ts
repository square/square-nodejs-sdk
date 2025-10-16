// Credit to Ivan Korolenko
// Code adopted from https://github.com/Ivan-Korolenko/json-with-bigint
// Based on upstream commit 79f8c9eec0017eff0b89b371c045962e5c2da709 (v3.4.4, April 2025)

const noiseValue = /^-?\d+n+$/; // Noise - strings that match the custom format before being converted to it
const originalStringify = JSON.stringify;
const originalParse = JSON.parse;

/*
  Function to serialize value to a JSON string.
  Converts BigInt values to a custom format (strings with digits and "n" at the end) and then converts them to proper big integers in a JSON string.
*/

/**
 * Serialize a value to JSON
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results, or an array of strings and numbers that acts as an approved list for selecting object properties.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns JSON string
 */
export const toJson = (
    value: unknown,
    replacer?: ((this: unknown, key: string, value: unknown) => unknown) | (string | number)[] | null,
    space?: string | number,
): string => {
    // Use native JSON.rawJSON if available (Node 20.12+, Chrome 114+)
    if ('rawJSON' in JSON) {
        return originalStringify(
            value,
            (key, val) => {
                if (typeof val === 'bigint') {
                    return (JSON as unknown as { rawJSON: (text: string) => unknown }).rawJSON(val.toString());
                }

                if (typeof replacer === 'function') {
                    return replacer.call(this, key, val);
                }

                if (Array.isArray(replacer) && replacer.includes(key)) {
                    return val;
                }

                return val;
            },
            space,
        );
    }

    if (!value) {
        return originalStringify(value, replacer as never, space);
    }

    const bigInts = /([\[:])?"(-?\d+)n"($|\s*[,\}\]])/g;
    const noise = /([\[:])?("-?\d+n+)n("$|"\s*[,\}\]])/g;
    const convertedToCustomJSON = originalStringify(
        value,
        (key, val) => {
            const isNoise = typeof val === 'string' && Boolean(val.match(noiseValue));

            if (isNoise) {
                return val.toString() + 'n'; // Mark noise values with additional "n" to offset the deletion of one "n" during the processing
            }

            if (typeof val === 'bigint') {
                return val.toString() + 'n';
            }

            if (typeof replacer === 'function') {
                return replacer.call(this, key, val);
            }

            if (Array.isArray(replacer) && replacer.includes(key)) {
                return val;
            }

            return val;
        },
        space,
    );
    const processedJSON = convertedToCustomJSON.replace(bigInts, '$1$2$3'); // Delete one "n" off the end of every BigInt value
    const denoisedJSON = processedJSON.replace(noise, '$1$2$3'); // Remove one "n" off the end of every noisy string

    return denoisedJSON;
};

/*
  Function to parse JSON.
  If JSON has number values greater than Number.MAX_SAFE_INTEGER, we convert those values to a custom format, then parse them to BigInt values.
  Other types of values are not affected and parsed as native JSON.parse() would parse them.
*/

/**
 * Parse JSON string to object, array, or other type
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns Parsed object, array, or other type
 */
export function fromJson<T = unknown>(
    text: string,
    reviver?: (this: unknown, key: string, value: unknown) => unknown,
): T {
    if (!text) {
        return originalParse(text, reviver);
    }

    const MAX_INT = Number.MAX_SAFE_INTEGER.toString();
    const MAX_DIGITS = MAX_INT.length;
    const stringsOrLargeNumbers = /"(?:[^"\\]|\\.)*"|-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/g;
    const noiseValueWithQuotes = /^"-?\d+n+"$/; // Noise - strings that match the custom format before being converted to it
    const customFormat = /^-?\d+n$/;

    // Find and mark big numbers with "n"
    const serializedData = text.replace(
        stringsOrLargeNumbers,
        (match, digits, fractional, exponential) => {
            const isString = match[0] === '"';
            const isNoise = isString && Boolean(match.match(noiseValueWithQuotes));

            if (isNoise) {
                return match.substring(0, match.length - 1) + 'n"'; // Mark noise values with additional "n" to offset the deletion of one "n" during the processing
            }

            const isFractionalOrExponential = fractional || exponential;
            const isLessThanMaxSafeInt =
                digits &&
                (digits.length < MAX_DIGITS || (digits.length === MAX_DIGITS && digits <= MAX_INT)); // With a fixed number of digits, we can correctly use lexicographical comparison to do a numeric comparison

            if (isString || isFractionalOrExponential || isLessThanMaxSafeInt) {
                return match;
            }

            return '"' + match + 'n"';
        },
    );

    // Convert marked big numbers to BigInt
    return originalParse(serializedData, function (key, value) {
        const isCustomFormatBigInt = typeof value === 'string' && Boolean(value.match(customFormat));

        if (isCustomFormatBigInt) {
            return BigInt(value.substring(0, value.length - 1));
        }

        const isNoiseValue = typeof value === 'string' && Boolean(value.match(noiseValue));

        if (isNoiseValue) {
            return value.substring(0, value.length - 1); // Remove one "n" off the end of the noisy string
        }

        if (typeof reviver !== 'function') {
            return value;
        }

        return reviver.call(this, key, value);
    });
}
