import { lazy, nullable, number, object, optional, Schema } from '../schema';
import { MeasurementUnit, measurementUnitSchema } from './measurementUnit';

/**
 * Represents the unit used to measure a `CatalogItemVariation` and
 * specifies the precision for decimal quantities.
 */
export interface CatalogMeasurementUnit {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces
   * or inches. Exactly one of the following fields are required: `custom_unit`,
   * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
   */
  measurementUnit?: MeasurementUnit;
  /**
   * An integer between 0 and 5 that represents the maximum number of
   * positions allowed after the decimal in quantities measured with this unit.
   * For example:
   * - if the precision is 0, the quantity can be 1, 2, 3, etc.
   * - if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * - if the precision is 2, the quantity can be 0.01, 0.12, etc.
   * Default: 3
   */
  precision?: number | null;
}

export const catalogMeasurementUnitSchema: Schema<CatalogMeasurementUnit> = object(
  {
    measurementUnit: [
      'measurement_unit',
      optional(lazy(() => measurementUnitSchema)),
    ],
    precision: ['precision', optional(nullable(number()))],
  }
);
