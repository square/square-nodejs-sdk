import { HttpRequest } from '../http/httpRequest';
import { ApiResponse } from '../apiResponse';
import { SchemaValidationError } from '../schema';

/**
 * Thrown when the API response does not match the schema.
 */
export class ResponseValidationError extends Error
  implements ApiResponse<never> {
  public request: HttpRequest;
  public statusCode: number;
  public headers: Record<string, string>;
  public result: never;
  public body: string | Blob | NodeJS.ReadableStream;
  public errors: SchemaValidationError[];

  constructor(apiResponse: ApiResponse<any>, errors: SchemaValidationError[]) {
    let message = 'The response did not match the response schema.';

    if (errors.length === 1) {
      message += `\n\n${errors[0].message}`;
    } else {
      message += errors
        .map((e, i) => `\n\n> Issue #${i + 1}\n\n${e.message}`)
        .join('');
    }

    super(message);

    this.request = apiResponse.request;
    this.statusCode = apiResponse.statusCode;
    this.headers = apiResponse.headers;
    this.body = apiResponse.body;
    this.errors = errors;
  }
}
