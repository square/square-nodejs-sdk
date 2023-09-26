import { object, optional, Schema, string } from '../schema';

export interface DeviceComponentDetailsCardReaderDetails {
  /** The version of the card reader. */
  version?: string;
}

export const deviceComponentDetailsCardReaderDetailsSchema: Schema<DeviceComponentDetailsCardReaderDetails> = object(
  { version: ['version', optional(string())] }
);
