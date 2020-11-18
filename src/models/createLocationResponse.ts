import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/** Response object returned by the [CreateLocation](#endpoint-createlocation) endpoint. */
export interface CreateLocationResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  location?: Location;
}

export const createLocationResponseSchema: Schema<CreateLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
