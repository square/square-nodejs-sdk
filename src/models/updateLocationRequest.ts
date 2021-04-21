import { lazy, object, optional, Schema } from '../schema';
import { Location, locationSchema } from './location';

/** Request object for the [UpdateLocation]($e/Locations/UpdateLocation) endpoint. */
export interface UpdateLocationRequest {
  location?: Location;
}

export const updateLocationRequestSchema: Schema<UpdateLocationRequest> = object(
  { location: ['location', optional(lazy(() => locationSchema))] }
);
