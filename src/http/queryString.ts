import { FileWrapper, isFileWrapper, cloneFileWrapper } from '../fileWrapper';

/**
 * Type for Key-value pair for form-urlencoded serialization
 */
export type FormKeyValuePair = { key: string; value: string | FileWrapper };

/**
 * Type for list of key-value pairs for form-urlencoded serialization
 */
export type FormKeyValuePairList = FormKeyValuePair[];

/**
 * Type for formatting function used to create key for nested arrays
 */
export type ArrayPrefixFunction = (
  prefix: string,
  key: number | string
) => string;

/**
 * Array prefix format: item[1]=1&item[2]=2
 */
export const indexedPrefix: ArrayPrefixFunction = (prefix, key) =>
  `${prefix}[${key}]`;

/**
 * Array prefix format: item[]=1&item[]=2
 */
export const unindexedPrefix: ArrayPrefixFunction = prefix => prefix + '[]';

/**
 * Array prefix format: item=1&item=2
 */
export const plainPrefix: ArrayPrefixFunction = prefix => prefix;

/**
 * Converts an object to a list of key-value pairs for form-urlencoded serialization.
 *
 * @param obj The object to serialize
 * @param prefixFormat Formatting function to create key for nested arrays
 * @return Result of serialization
 */
export function formDataEncodeObject(
  obj: Record<string, unknown>,
  prefixFormat: ArrayPrefixFunction = indexedPrefix
): FormKeyValuePairList {
  const result: FormKeyValuePairList = [];

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value === null || value === undefined) {
      continue;
    } else if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'bigint'
    ) {
      result.push({ key, value: value.toString() });
    } else if (isFileWrapper(value)) {
      result.push({ key, value: cloneFileWrapper(value) });
    } else if (Array.isArray(value)) {
      for (let iter = 0; iter < value.length; iter += 1) {
        result.push(
          ...formDataEncodeObject({ [prefixFormat(key, iter)]: value[iter] })
        );
      }
    } else if (typeof value === 'object') {
      for (const objectKey in value) {
        if (Object.prototype.hasOwnProperty.call(value, objectKey)) {
          const element = value[objectKey as keyof typeof value];
          result.push(
            ...formDataEncodeObject({
              [indexedPrefix(key, objectKey)]: element,
            })
          );
        }
      }
    }
  }

  return result;
}

/**
 * Return a new list with all key-value pairs, which have a FileWrapper as value, removed
 *
 * @param params List of key-value pairs
 */
export function filterFileWrapperFromKeyValuePairs(
  params: FormKeyValuePairList
): { key: string; value: string }[] {
  return params.filter(p => !isFileWrapper(p.value)) as any;
}

/**
 * Serializes an object for a form-urlencoded request.
 *
 * Nested and complex types in values will be flattened using {@link formDataEncodeObject() function} method.
 *
 * @param  obj The object to be serialized
 * @return The result of serialization
 */
export function urlEncodeObject(obj: Record<string, unknown>): string {
  const params = formDataEncodeObject(obj);
  return urlEncodeKeyValuePairs(params);
}

/**
 * Serializes a list of key-value pairs for a form-urlencoded request.
 *
 * @param params List of key-value pairs to serialize
 * @return The result of serialization
 */
export function urlEncodeKeyValuePairs(
  params: FormKeyValuePairList | undefined
): string {
  const encode = encodeURIComponent;
  return (params || [])
    .map(p => `${encode(p.key)}=${encode(p.value.toString())}`)
    .join('&');
}
