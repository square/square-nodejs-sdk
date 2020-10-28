import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';

/**
 * Context for an HTTP call
 */
export interface HttpContext {
  /** HTTP request */
  request: HttpRequest;
  /** HTTP response */
  response: HttpResponse;
}
