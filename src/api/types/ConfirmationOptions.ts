/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface ConfirmationOptions {
    /** The title text to display in the confirmation screen flow on the Terminal. */
    title: string;
    /** The agreement details to display in the confirmation flow on the Terminal. */
    body: string;
    /** The button text to display indicating the customer agrees to the displayed terms. */
    agreeButtonText: string;
    /** The button text to display indicating the customer does not agree to the displayed terms. */
    disagreeButtonText?: string | null;
    /** The result of the buyer’s actions when presented with the confirmation screen. */
    decision?: Square.ConfirmationDecision;
}
