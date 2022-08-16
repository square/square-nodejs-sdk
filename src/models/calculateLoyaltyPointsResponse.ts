import { array, lazy, number, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a [CalculateLoyaltyPoints]($e/Loyalty/CalculateLoyaltyPoints) response. */
export interface CalculateLoyaltyPointsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The number of points that the buyer can earn from the base loyalty program. */
  points?: number;
  /**
   * The number of points that the buyer can earn from a loyalty promotion. To be eligible
   * to earn promotion points, the purchase must first qualify for program points. When `order_id`
   * is not provided in the request, this value is always 0.
   */
  promotionPoints?: number;
}

export const calculateLoyaltyPointsResponseSchema: Schema<CalculateLoyaltyPointsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    points: ['points', optional(number())],
    promotionPoints: ['promotion_points', optional(number())],
  }
);
