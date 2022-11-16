import { nullable, object, optional, Schema, string } from '../schema';

export interface Device {
  /** The device's Square-issued ID. */
  id?: string;
  /** The device's merchant-specified name. */
  name?: string | null;
}

export const deviceSchema: Schema<Device> = object({
  id: ['id', optional(string())],
  name: ['name', optional(nullable(string()))],
});
