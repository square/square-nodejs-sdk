import { bigint, nullable, object, optional, Schema, string } from '../schema';

/**
 * Defines input parameters in a request to the
 * [PauseSubscription]($e/Subscriptions/PauseSubscription) endpoint.
 */
export interface PauseSubscriptionRequest {
  /**
   * The `YYYY-MM-DD`-formatted date when the scheduled `PAUSE` action takes place on the subscription.
   * When this date is unspecified or falls within the current billing cycle, the subscription is paused
   * on the starting date of the next billing cycle.
   */
  pauseEffectiveDate?: string | null;
  /**
   * The number of billing cycles the subscription will be paused before it is reactivated.
   * When this is set, a `RESUME` action is also scheduled to take place on the subscription at
   * the end of the specified pause cycle duration. In this case, neither `resume_effective_date`
   * nor `resume_change_timing` may be specified.
   */
  pauseCycleDuration?: bigint | null;
  /**
   * The date when the subscription is reactivated by a scheduled `RESUME` action.
   * This date must be at least one billing cycle ahead of `pause_effective_date`.
   */
  resumeEffectiveDate?: string | null;
  /** Supported timings when a pending change, as an action, takes place to a subscription. */
  resumeChangeTiming?: string;
  /** The user-provided reason to pause the subscription. */
  pauseReason?: string | null;
}

export const pauseSubscriptionRequestSchema: Schema<PauseSubscriptionRequest> = object(
  {
    pauseEffectiveDate: ['pause_effective_date', optional(nullable(string()))],
    pauseCycleDuration: ['pause_cycle_duration', optional(nullable(bigint()))],
    resumeEffectiveDate: [
      'resume_effective_date',
      optional(nullable(string())),
    ],
    resumeChangeTiming: ['resume_change_timing', optional(string())],
    pauseReason: ['pause_reason', optional(nullable(string()))],
  }
);
