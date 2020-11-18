import warning from 'tiny-warning';

/**
 * Validates the protocol and removes duplicate forward slashes
 *
 * @param url URL to clean
 * @returns Sanitized URL
 */
export function sanitizeUrl(url: string): string {
  // ensure that the urls are absolute
  const protocolRegex = /^https?:\/\/[^/]+/;
  const match = url.match(protocolRegex);
  if (match === null) {
    throw new Error(`Invalid URL format: ${url}`);
  }

  // remove redundant double-forward slashes
  const protocol = match[0];
  const queryUrl = url.substring(protocol.length).replace(/\/\/+/g, '/');
  return protocol + queryUrl;
}

/**
 * Check whether value is an instance of Blob
 *
 * @remark
 * Reference: https://github.com/sindresorhus/is-blob/blob/master/index.js
 *
 * @param value Value to check
 * @returns True if the value is a Blob instance
 */
export function isBlob(value: unknown): value is Blob {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return (
    value instanceof Blob ||
    Object.prototype.toString.call(value) === '[object Blob]'
  );
}

// This is used by deprecated() to keep track of "hits".
const deprecatedHits: Record<string, boolean> = {};

/**
 * Create warning for deprecated method usage.
 *
 * This is called once per deprecated method. If this method is called again
 * with the same arguments, no warning is generated.
 *
 * @param methodName Method name for deprecated method
 * @param notice Optional message for deprecation
 */
export function deprecated(methodName: string, notice?: string): void {
  let message = `Method ${methodName} is deprecated.`;
  if (notice) {
    message += ` ${notice}`;
  }
  if (deprecatedHits[message]) {
    return;
  }
  deprecatedHits[message] = true;
  warning(false, message);
}
