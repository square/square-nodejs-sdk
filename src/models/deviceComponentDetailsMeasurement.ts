import { nullable, number, object, optional, Schema } from '../schema';

/** A value qualified by unit of measure. */
export interface DeviceComponentDetailsMeasurement {
  value?: number | null;
}

export const deviceComponentDetailsMeasurementSchema: Schema<DeviceComponentDetailsMeasurement> = object(
  { value: ['value', optional(nullable(number()))] }
);
