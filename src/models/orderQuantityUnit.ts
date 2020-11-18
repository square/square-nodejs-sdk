import { lazy, number, object, optional, Schema } from '../schema';
import { MeasurementUnit, measurementUnitSchema } from './measurementUnit';

/**
 * Contains the measurement unit for a quantity and a precision which
 * specifies the number of digits after the decimal point for decimal quantities.
 */
export interface OrderQuantityUnit {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces
   * or inches. Exactly one of the following fields are required: `custom_unit`,
   * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
   */
  measurementUnit?: MeasurementUnit;
  /**
   * For non-integer quantities, represents the number of digits after the decimal point that are
   * recorded for this quantity.
   * For example, a precision of 1 allows quantities like `"1.0"` and `"1.1"`, but not `"1.01"`.
   * Min: 0. Max: 5.
   */
  precision?: number;
}

export const orderQuantityUnitSchema: Schema<OrderQuantityUnit> = object({
  measurementUnit: [
    'measurement_unit',
    optional(lazy(() => measurementUnitSchema)),
  ],
  precision: ['precision', optional(number())],
});
