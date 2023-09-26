import { nullable, object, optional, Schema, string } from '../schema';

export interface V1Device {
  /** The device's Square-issued ID. */
  id?: string;
  /** The device's merchant-specified name. */
  name?: string | null;
}

export const v1DeviceSchema: Schema<V1Device> = object({
  id: ['id', optional(string())],
  name: ['name', optional(nullable(string()))],
});
