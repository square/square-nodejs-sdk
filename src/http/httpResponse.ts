/**
 * Interface for HTTP response data
 */
export interface HttpResponse {
  /** Response status code */
  statusCode: number;
  /** Original body from the response */
  body: string | Blob | NodeJS.ReadableStream;
  /** Response headers */
  headers: Record<string, string>;
}
