import { lazy, object, optional, Schema } from '../schema';
import { Location, locationSchema } from './location';

/** Request object for the [UpdateLocation]($e/Locations/UpdateLocation) endpoint. */
export interface UpdateLocationRequest {
  /** Represents one of a business's [locations](https://developer.squareup.com/docs/locations-api). */
  location?: Location;
}

export const updateLocationRequestSchema: Schema<UpdateLocationRequest> = object(
  { location: ['location', optional(lazy(() => locationSchema))] }
);
