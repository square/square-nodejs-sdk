import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/**
 * Defines the fields that the [RetrieveLocation]($e/Locations/RetrieveLocation)
 * endpoint returns in a response.
 */
export interface RetrieveLocationResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
  location?: Location;
}

export const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
