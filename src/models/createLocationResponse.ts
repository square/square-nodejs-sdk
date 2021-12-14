import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/** Response object returned by the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationResponse {
  /** Information on [errors](https://developer.squareup.com/docs/build-basics/handling-errors) encountered during the request. */
  errors?: Error[];
  /** Represents one of a business's [locations](https://developer.squareup.com/docs/locations-api). */
  location?: Location;
}

export const createLocationResponseSchema: Schema<CreateLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
