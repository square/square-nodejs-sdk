import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [RegisterDomain]($e/ApplePay/RegisterDomain) endpoint.
 * Either `errors` or `status` are present in a given response (never both).
 */
export interface RegisterDomainResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The status of the domain registration. */
  status?: string;
}

export const registerDomainResponseSchema: Schema<RegisterDomainResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    status: ['status', optional(string())],
  }
);
