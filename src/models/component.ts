import { lazy, object, optional, Schema, string } from '../schema';
import {
  DeviceComponentDetailsApplicationDetails,
  deviceComponentDetailsApplicationDetailsSchema,
} from './deviceComponentDetailsApplicationDetails';
import {
  DeviceComponentDetailsBatteryDetails,
  deviceComponentDetailsBatteryDetailsSchema,
} from './deviceComponentDetailsBatteryDetails';
import {
  DeviceComponentDetailsCardReaderDetails,
  deviceComponentDetailsCardReaderDetailsSchema,
} from './deviceComponentDetailsCardReaderDetails';
import {
  DeviceComponentDetailsEthernetDetails,
  deviceComponentDetailsEthernetDetailsSchema,
} from './deviceComponentDetailsEthernetDetails';
import {
  DeviceComponentDetailsWiFiDetails,
  deviceComponentDetailsWiFiDetailsSchema,
} from './deviceComponentDetailsWiFiDetails';

/** The wrapper object for the component entries of a given component type. */
export interface Component {
  /** An enum for ComponentType. */
  type: string;
  applicationDetails?: DeviceComponentDetailsApplicationDetails;
  cardReaderDetails?: DeviceComponentDetailsCardReaderDetails;
  batteryDetails?: DeviceComponentDetailsBatteryDetails;
  wifiDetails?: DeviceComponentDetailsWiFiDetails;
  ethernetDetails?: DeviceComponentDetailsEthernetDetails;
}

export const componentSchema: Schema<Component> = object({
  type: ['type', string()],
  applicationDetails: [
    'application_details',
    optional(lazy(() => deviceComponentDetailsApplicationDetailsSchema)),
  ],
  cardReaderDetails: [
    'card_reader_details',
    optional(lazy(() => deviceComponentDetailsCardReaderDetailsSchema)),
  ],
  batteryDetails: [
    'battery_details',
    optional(lazy(() => deviceComponentDetailsBatteryDetailsSchema)),
  ],
  wifiDetails: [
    'wifi_details',
    optional(lazy(() => deviceComponentDetailsWiFiDetailsSchema)),
  ],
  ethernetDetails: [
    'ethernet_details',
    optional(lazy(() => deviceComponentDetailsEthernetDetailsSchema)),
  ],
});
