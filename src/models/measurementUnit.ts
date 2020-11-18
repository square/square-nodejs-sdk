import { lazy, object, optional, Schema, string } from '../schema';
import {
  MeasurementUnitCustom,
  measurementUnitCustomSchema,
} from './measurementUnitCustom';

/**
 * Represents a unit of measurement to use with a quantity, such as ounces
 * or inches. Exactly one of the following fields are required: `custom_unit`,
 * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 */
export interface MeasurementUnit {
  /** The information needed to define a custom unit, provided by the seller. */
  customUnit?: MeasurementUnitCustom;
  /** Unit of area used to measure a quantity. */
  areaUnit?: string;
  /** The unit of length used to measure a quantity. */
  lengthUnit?: string;
  /** The unit of volume used to measure a quantity. */
  volumeUnit?: string;
  /** Unit of weight used to measure a quantity. */
  weightUnit?: string;
  genericUnit?: string;
  /** Unit of time used to measure a quantity (a duration). */
  timeUnit?: string;
  /** Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. */
  type?: string;
}

export const measurementUnitSchema: Schema<MeasurementUnit> = object({
  customUnit: [
    'custom_unit',
    optional(lazy(() => measurementUnitCustomSchema)),
  ],
  areaUnit: ['area_unit', optional(string())],
  lengthUnit: ['length_unit', optional(string())],
  volumeUnit: ['volume_unit', optional(string())],
  weightUnit: ['weight_unit', optional(string())],
  genericUnit: ['generic_unit', optional(string())],
  timeUnit: ['time_unit', optional(string())],
  type: ['type', optional(string())],
});
