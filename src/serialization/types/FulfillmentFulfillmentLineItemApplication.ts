/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const FulfillmentFulfillmentLineItemApplication: core.serialization.Schema<
    serializers.FulfillmentFulfillmentLineItemApplication.Raw,
    Square.FulfillmentFulfillmentLineItemApplication
> = core.serialization.enum_(["ALL", "ENTRY_LIST"]);

export declare namespace FulfillmentFulfillmentLineItemApplication {
    export type Raw = "ALL" | "ENTRY_LIST";
}
