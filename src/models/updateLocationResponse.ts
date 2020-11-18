import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Location, locationSchema } from './location';

/** Response object returned by the [UpdateLocation](#endpoint-updatelocation) endpoint. */
export interface UpdateLocationResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  location?: Location;
}

export const updateLocationResponseSchema: Schema<UpdateLocationResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
  }
);
