import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { MeasurementUnit, measurementUnitSchema } from './measurementUnit';

/** Contains the name and abbreviation for standard measurement unit. */
export interface StandardUnitDescription {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces
   * or inches. Exactly one of the following fields are required: `custom_unit`,
   * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
   */
  unit?: MeasurementUnit;
  /** UI display name of the measurement unit. For example, 'Pound'. */
  name?: string | null;
  /** UI display abbreviation for the measurement unit. For example, 'lb'. */
  abbreviation?: string | null;
}

export const standardUnitDescriptionSchema: Schema<StandardUnitDescription> = object(
  {
    unit: ['unit', optional(lazy(() => measurementUnitSchema))],
    name: ['name', optional(nullable(string()))],
    abbreviation: ['abbreviation', optional(nullable(string()))],
  }
);
