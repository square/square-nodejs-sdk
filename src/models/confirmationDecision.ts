import { boolean, object, optional, Schema } from '../schema';

export interface ConfirmationDecision {
  /** The buyer's decision to the displayed terms. */
  hasAgreed?: boolean;
}

export const confirmationDecisionSchema: Schema<ConfirmationDecision> = object({
  hasAgreed: ['has_agreed', optional(boolean())],
});
