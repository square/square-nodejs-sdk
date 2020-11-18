import { object, Schema, string } from '../schema';

export interface RetrieveCashDrawerShiftRequest {
  /** The ID of the location to retrieve cash drawer shifts from. */
  locationId: string;
}

export const retrieveCashDrawerShiftRequestSchema: Schema<RetrieveCashDrawerShiftRequest> = object(
  { locationId: ['location_id', string()] }
);
