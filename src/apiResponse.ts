import { HttpRequest } from './http/httpRequest';

/** An interface for the result of an API call. */
export interface ApiResponse<T> {
  /** Original request that resulted in this response. */
  request: HttpRequest;
  /** Response status code */
  statusCode: number;
  /** Response headers */
  headers: Record<string, string>;
  /** Response data */
  result: T;
  /** Original body from the response */
  body: string | Blob | NodeJS.ReadableStream;
}
