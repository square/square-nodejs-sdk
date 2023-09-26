import { nullable, object, optional, Schema, string } from '../schema';

export interface DeviceComponentDetailsApplicationDetails {
  applicationType?: string;
  /** The version of the application. */
  version?: string;
  /** The location_id of the session for the application. */
  sessionLocation?: string | null;
  /** The id of the device code that was used to log in to the device. */
  deviceCodeId?: string | null;
}

export const deviceComponentDetailsApplicationDetailsSchema: Schema<DeviceComponentDetailsApplicationDetails> = object(
  {
    applicationType: ['application_type', optional(string())],
    version: ['version', optional(string())],
    sessionLocation: ['session_location', optional(nullable(string()))],
    deviceCodeId: ['device_code_id', optional(nullable(string()))],
  }
);
