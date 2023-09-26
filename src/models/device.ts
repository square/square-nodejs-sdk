import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Component, componentSchema } from './component';
import { DeviceAttributes, deviceAttributesSchema } from './deviceAttributes';
import { DeviceStatus, deviceStatusSchema } from './deviceStatus';

export interface Device {
  /**
   * A synthetic identifier for the device. The identifier includes a standardized prefix and
   * is otherwise an opaque id generated from key device fields.
   */
  id?: string;
  attributes: DeviceAttributes;
  /** A list of components applicable to the device. */
  components?: Component[] | null;
  status?: DeviceStatus;
}

export const deviceSchema: Schema<Device> = object({
  id: ['id', optional(string())],
  attributes: ['attributes', lazy(() => deviceAttributesSchema)],
  components: [
    'components',
    optional(nullable(array(lazy(() => componentSchema)))),
  ],
  status: ['status', optional(lazy(() => deviceStatusSchema))],
});
