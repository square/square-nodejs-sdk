import { array, lazy, number, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines output parameters in a response of the
 * [BulkSwapPlan]($e/Subscriptions/BulkSwapPlan) endpoint.
 */
export interface BulkSwapPlanResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The number of affected subscriptions. */
  affectedSubscriptions?: number;
}

export const bulkSwapPlanResponseSchema: Schema<BulkSwapPlanResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  affectedSubscriptions: ['affected_subscriptions', optional(number())],
});
