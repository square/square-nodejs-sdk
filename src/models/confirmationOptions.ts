import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  ConfirmationDecision,
  confirmationDecisionSchema,
} from './confirmationDecision';

export interface ConfirmationOptions {
  /** The title text to display in the confirmation screen flow on the Terminal. */
  title: string;
  /** The agreement details to display in the confirmation flow on the Terminal. */
  body: string;
  /** The button text to display indicating the customer agrees to the displayed terms. */
  agreeButtonText: string;
  /** The button text to display indicating the customer does not agree to the displayed terms. */
  disagreeButtonText?: string | null;
  decision?: ConfirmationDecision;
}

export const confirmationOptionsSchema: Schema<ConfirmationOptions> = object({
  title: ['title', string()],
  body: ['body', string()],
  agreeButtonText: ['agree_button_text', string()],
  disagreeButtonText: ['disagree_button_text', optional(nullable(string()))],
  decision: ['decision', optional(lazy(() => confirmationDecisionSchema))],
});
