import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/** Response object returned by the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents one of a business's locations. */
  location?: Location;
}

export const createLocationResponseSchema: Schema<CreateLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
