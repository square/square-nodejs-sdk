import { array, lazy, number, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * A response that includes the points that the buyer can earn from
 * a specified purchase.
 */
export interface CalculateLoyaltyPointsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The points that the buyer can earn from a specified purchase. */
  points?: number;
}

export const calculateLoyaltyPointsResponseSchema: Schema<CalculateLoyaltyPointsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    points: ['points', optional(number())],
  }
);
