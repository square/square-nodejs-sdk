/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a payout fee that can incur as part of a payout.
 */
export interface PayoutFee {
    /** The money amount of the payout fee. */
    amountMoney?: Square.Money;
    /** The timestamp of when the fee takes effect, in RFC 3339 format. */
    effectiveAt?: string | null;
    /**
     * The type of fee assessed as part of the payout.
     * See [PayoutFeeType](#type-payoutfeetype) for possible values
     */
    type?: Square.PayoutFeeType;
}
