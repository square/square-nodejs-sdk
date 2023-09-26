import { object, optional, Schema, string } from '../schema';

export interface DeviceStatus {
  category?: string;
}

export const deviceStatusSchema: Schema<DeviceStatus> = object({
  category: ['category', optional(string())],
});
