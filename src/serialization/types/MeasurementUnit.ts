/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { MeasurementUnitCustom } from "./MeasurementUnitCustom";
import { MeasurementUnitArea } from "./MeasurementUnitArea";
import { MeasurementUnitLength } from "./MeasurementUnitLength";
import { MeasurementUnitVolume } from "./MeasurementUnitVolume";
import { MeasurementUnitWeight } from "./MeasurementUnitWeight";
import { MeasurementUnitGeneric } from "./MeasurementUnitGeneric";
import { MeasurementUnitTime } from "./MeasurementUnitTime";
import { MeasurementUnitUnitType } from "./MeasurementUnitUnitType";

export const MeasurementUnit: core.serialization.ObjectSchema<serializers.MeasurementUnit.Raw, Square.MeasurementUnit> =
    core.serialization.object({
        customUnit: core.serialization.property("custom_unit", MeasurementUnitCustom.optional()),
        areaUnit: core.serialization.property("area_unit", MeasurementUnitArea.optional()),
        lengthUnit: core.serialization.property("length_unit", MeasurementUnitLength.optional()),
        volumeUnit: core.serialization.property("volume_unit", MeasurementUnitVolume.optional()),
        weightUnit: core.serialization.property("weight_unit", MeasurementUnitWeight.optional()),
        genericUnit: core.serialization.property("generic_unit", MeasurementUnitGeneric.optional()),
        timeUnit: core.serialization.property("time_unit", MeasurementUnitTime.optional()),
        type: MeasurementUnitUnitType.optional(),
    });

export declare namespace MeasurementUnit {
    export interface Raw {
        custom_unit?: MeasurementUnitCustom.Raw | null;
        area_unit?: MeasurementUnitArea.Raw | null;
        length_unit?: MeasurementUnitLength.Raw | null;
        volume_unit?: MeasurementUnitVolume.Raw | null;
        weight_unit?: MeasurementUnitWeight.Raw | null;
        generic_unit?: MeasurementUnitGeneric.Raw | null;
        time_unit?: MeasurementUnitTime.Raw | null;
        type?: MeasurementUnitUnitType.Raw | null;
    }
}
