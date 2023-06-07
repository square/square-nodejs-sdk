import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PhaseInput, phaseInputSchema } from './phaseInput';

/**
 * Defines input parameters in a call to the
 * [SwapPlan]($e/Subscriptions/SwapPlan) endpoint.
 */
export interface SwapPlanRequest {
  /**
   * The ID of the new subscription plan variation.
   * This field is required.
   */
  newPlanVariationId?: string | null;
  /** A list of PhaseInputs, to pass phase-specific information used in the swap. */
  phases?: PhaseInput[] | null;
}

export const swapPlanRequestSchema: Schema<SwapPlanRequest> = object({
  newPlanVariationId: ['new_plan_variation_id', optional(nullable(string()))],
  phases: ['phases', optional(nullable(array(lazy(() => phaseInputSchema))))],
});
