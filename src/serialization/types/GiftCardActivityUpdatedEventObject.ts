/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { GiftCardActivity } from "./GiftCardActivity";

export const GiftCardActivityUpdatedEventObject: core.serialization.ObjectSchema<
    serializers.GiftCardActivityUpdatedEventObject.Raw,
    Square.GiftCardActivityUpdatedEventObject
> = core.serialization.object({
    giftCardActivity: core.serialization.property("gift_card_activity", GiftCardActivity.optional()),
});

export declare namespace GiftCardActivityUpdatedEventObject {
    export interface Raw {
        gift_card_activity?: GiftCardActivity.Raw | null;
    }
}
