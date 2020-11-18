/**
 * Set a header in the headers map.
 *
 * This method performs case-insensitive handling of header names.
 *
 * @param headers Map of headers
 * @param name Header name
 * @param value Header value
 */
export function setHeader(
  headers: Record<string, string>,
  name: string,
  value?: string
): void {
  const realHeaderName = lookupCaseInsensitive(headers, name);
  setHeaderInternal(headers, realHeaderName, name, value);
}

function setHeaderInternal(
  headers: Record<string, string>,
  realHeaderName: string | null,
  name: string,
  value: string | undefined
): void {
  if (realHeaderName) {
    delete headers[realHeaderName];
  }
  if (value) {
    headers[name] = value;
  }
}

/**
 * Set a header in the headers map if it is not already set.
 *
 * This method performs case-insensitive handling of header names.
 *
 * @param headers Map of headers
 * @param name Header name
 * @param value Header value
 */
export function setHeaderIfNotSet(
  headers: Record<string, string>,
  name: string,
  value?: string
): void {
  const realHeaderName = lookupCaseInsensitive(headers, name);
  if (!realHeaderName) {
    setHeaderInternal(headers, realHeaderName, name, value);
  }
}

/**
 * Get header from a map of headers.
 *
 * This method performs case-insensitive handling of header names.
 *
 * @param headers Map of headers
 * @param name Header name
 */
export function getHeader(
  headers: Record<string, string>,
  name: string
): string | null {
  const prop = lookupCaseInsensitive(headers, name);
  if (prop) {
    return headers[prop];
  }
  return null;
}

/**
 * Looks up and returns the matching property name from the object.
 *
 * This method returns the matching property name in the object which might or might
 * not have the same case as the prop argument.
 *
 * @param obj Object with string property names
 * @param prop Property to lookup
 */
export function lookupCaseInsensitive(
  obj: Record<string, unknown>,
  prop: string
): string | null {
  prop = prop.toLowerCase();
  for (const p in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, p) &&
      prop === p.toLowerCase()
    ) {
      return p;
    }
  }
  return null;
}

/**
 * Merge headers
 *
 * Header names are compared using case-insensitive comparison. This method
 * preserves the original header name. If the headersToMerge overrides an existing
 * header, then the new header name (with its casing) is used.
 *
 * @param headers Headers to merge into
 * @param headersToMerge Headers to set
 */
export function mergeHeaders(
  headers: Record<string, string>,
  headersToMerge: Record<string, string>
): void {
  const headerKeys: Record<string, string> = {};

  // Create a map of lower-cased-header-name to original-header-names
  for (const headerName of Object.getOwnPropertyNames(headers)) {
    headerKeys[headerName.toLowerCase()] = headerName;
  }

  // Override headers with new values
  for (const headerName of Object.getOwnPropertyNames(headersToMerge)) {
    const lowerCasedName = headerName.toLowerCase();
    if (headerKeys[lowerCasedName]) {
      delete headers[headerKeys[lowerCasedName]];
    }
    headerKeys[lowerCasedName] = headerName;
    headers[headerName] = headersToMerge[headerName];
  }
}

/**
 * Assert headers object is valid
 */
export function assertHeaders(
  headers: unknown
): asserts headers is Record<string, string> {
  if (headers === null || typeof headers !== 'object') {
    throw new TypeError('Headers must be an object.');
  }

  for (const headerName of Object.getOwnPropertyNames(headers)) {
    if (!isValidHeaderName(headerName)) {
      throw new Error(`"${headerName}" is not a valid header name.`);
    }
    const headerValue = (headers as Record<string, unknown>)[headerName];
    if (typeof headerValue !== 'string') {
      throw new TypeError(
        `Header value must be string but ${typeof headerValue} provided.`
      );
    }
  }
}

/**
 * Return true if header name is valid
 * @param headerName Header name
 */
export function isValidHeaderName(headerName: string): boolean {
  return /^[\w!#$%&'*+.^`|~-]+$/.test(headerName);
}

export const CONTENT_TYPE_HEADER = 'content-type';
export const ACCEPT_HEADER = 'accept';
export const CONTENT_LENGTH_HEADER = 'content-length';
export const AUTHORIZATION_HEADER = 'authorization';
export const FORM_URLENCODED_CONTENT_TYPE = 'application/x-www-form-urlencoded';
export const JSON_CONTENT_TYPE = 'application/json';
export const TEXT_CONTENT_TYPE = 'text/plain; charset=utf-8';
export const XML_CONTENT_TYPE = 'application/xml';
