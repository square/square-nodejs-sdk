import { lazy, object, optional, Schema } from '../schema';
import { Location, locationSchema } from './location';

/** The request object for the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationRequest {
  /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
  location?: Location;
}

export const createLocationRequestSchema: Schema<CreateLocationRequest> = object(
  { location: ['location', optional(lazy(() => locationSchema))] }
);
