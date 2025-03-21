/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const BankAccountStatus: core.serialization.Schema<serializers.BankAccountStatus.Raw, Square.BankAccountStatus> =
    core.serialization.enum_(["VERIFICATION_IN_PROGRESS", "VERIFIED", "DISABLED"]);

export declare namespace BankAccountStatus {
    export type Raw = "VERIFICATION_IN_PROGRESS" | "VERIFIED" | "DISABLED";
}
