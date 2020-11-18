import { lazy, object, optional, Schema } from '../schema';
import { Location, locationSchema } from './location';

/** Request object for the [CreateLocation](#endpoint-createlocation) endpoint. */
export interface CreateLocationRequest {
  location?: Location;
}

export const createLocationRequestSchema: Schema<CreateLocationRequest> = object(
  { location: ['location', optional(lazy(() => locationSchema))] }
);
