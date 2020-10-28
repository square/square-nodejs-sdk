import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/**
 * Defines the fields that the
 * [RetrieveLocation](#endpoint-retrievelocation) endpoint returns
 * in a response.
 */
export interface RetrieveLocationResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  location?: Location;
}

export const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
