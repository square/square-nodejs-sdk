/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TenderSquareAccountDetailsStatus } from "./TenderSquareAccountDetailsStatus";

export const TenderSquareAccountDetails: core.serialization.ObjectSchema<
    serializers.TenderSquareAccountDetails.Raw,
    Square.TenderSquareAccountDetails
> = core.serialization.object({
    status: TenderSquareAccountDetailsStatus.optional(),
});

export declare namespace TenderSquareAccountDetails {
    export interface Raw {
        status?: TenderSquareAccountDetailsStatus.Raw | null;
    }
}
