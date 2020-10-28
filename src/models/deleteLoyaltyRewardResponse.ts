import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** A response returned by the API call. */
export interface DeleteLoyaltyRewardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteLoyaltyRewardResponseSchema: Schema<DeleteLoyaltyRewardResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
