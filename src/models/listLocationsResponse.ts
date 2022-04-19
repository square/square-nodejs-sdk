import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/**
 * Defines the fields that are included in the response body of a request
 * to the [ListLocations]($e/Locations/ListLocations) endpoint.
 * Either `errors` or `locations` is present in a given response (never both).
 */
export interface ListLocationsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The business locations. */
  locations?: Location[];
}

export const listLocationsResponseSchema: Schema<ListLocationsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    locations: ['locations', optional(array(lazy(() => locationSchema)))],
  }
);
