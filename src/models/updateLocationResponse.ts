import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/** Response object returned by the [UpdateLocation]($e/Locations/UpdateLocation) endpoint. */
export interface UpdateLocationResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents one of a business's [locations](https://developer.squareup.com/docs/locations-api). */
  location?: Location;
}

export const updateLocationResponseSchema: Schema<UpdateLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
