import { nullable, object, optional, Schema, string } from '../schema';

/**
 * Defines input parameters in a request to the
 * [ResumeSubscription]($e/Subscriptions/ResumeSubscription) endpoint.
 */
export interface ResumeSubscriptionRequest {
  /** The `YYYY-MM-DD`-formatted date when the subscription reactivated. */
  resumeEffectiveDate?: string | null;
  /** Supported timings when a pending change, as an action, takes place to a subscription. */
  resumeChangeTiming?: string;
}

export const resumeSubscriptionRequestSchema: Schema<ResumeSubscriptionRequest> = object(
  {
    resumeEffectiveDate: [
      'resume_effective_date',
      optional(nullable(string())),
    ],
    resumeChangeTiming: ['resume_change_timing', optional(string())],
  }
);
