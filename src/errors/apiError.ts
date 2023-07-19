import JSONBig from '@apimatic/json-bigint';
import { ApiResponse, HttpContext, HttpRequest } from '../core';
import { Error as SquareError } from '../models/error';

/**
 * Thrown when the HTTP status code is not okay.
 *
 * The ApiError extends the ApiResponse interface, so all ApiResponse
 * properties are available.
 */
export class ApiError<T = {}> extends Error
  implements ApiResponse<T | undefined> {
  public request: HttpRequest;
  public statusCode: number;
  public headers: Record<string, string>;
  public result: T | undefined;
  public body: string | Blob | NodeJS.ReadableStream;
  public errors?: SquareError[];

  constructor(context: HttpContext, message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    const { request, response } = context;
    this.request = request;
    this.statusCode = response.statusCode;
    this.headers = response.headers;
    this.body = response.body;

    if (typeof response.body === 'string' && response.body !== '') {
      const JSON = JSONBig();
      try {
        this.result = JSON.parse(response.body);

        if (typeof this.result === 'object') {
          const result = this.result as Record<string, unknown>;
          if ('errors' in result) {
            this.errors = result['errors'] as SquareError[];
          } else {
            this.errors = [
              {
                category: 'V1_ERROR',
                code: (result['type'] as string) ?? 'Unknown',
                detail: result['message'] as string,
                field: result['field'] as string,
              },
            ];
          }
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          if (console) {
            console.warn(
              `Unexpected error: Could not parse HTTP response body as JSON. ${error.message}`
            );
          }
        }
      }
    }
  }
}
