import { object, Schema, string } from '../schema';

/**
 * Defines input parameters in a call to the
 * [SwapPlan]($e/Subscriptions/SwapPlan) endpoint.
 */
export interface SwapPlanRequest {
  /** The ID of the new subscription plan. */
  newPlanId: string;
}

export const swapPlanRequestSchema: Schema<SwapPlanRequest> = object({
  newPlanId: ['new_plan_id', string()],
});
