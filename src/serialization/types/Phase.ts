/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const Phase: core.serialization.ObjectSchema<serializers.Phase.Raw, Square.Phase> = core.serialization.object({
    uid: core.serialization.string().optionalNullable(),
    ordinal: core.serialization.bigint().optionalNullable(),
    orderTemplateId: core.serialization.property("order_template_id", core.serialization.string().optionalNullable()),
    planPhaseUid: core.serialization.property("plan_phase_uid", core.serialization.string().optionalNullable()),
});

export declare namespace Phase {
    export interface Raw {
        uid?: (string | null) | null;
        ordinal?: ((bigint | number) | null) | null;
        order_template_id?: (string | null) | null;
        plan_phase_uid?: (string | null) | null;
    }
}
