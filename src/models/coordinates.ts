import { nullable, number, object, optional, Schema } from '../schema';

/** Latitude and longitude coordinates. */
export interface Coordinates {
  /** The latitude of the coordinate expressed in degrees. */
  latitude?: number | null;
  /** The longitude of the coordinate expressed in degrees. */
  longitude?: number | null;
}

export const coordinatesSchema: Schema<Coordinates> = object({
  latitude: ['latitude', optional(nullable(number()))],
  longitude: ['longitude', optional(nullable(number()))],
});
