import { array, object, Schema, string } from '../schema';

/** Filter events by location. */
export interface LoyaltyEventLocationFilter {
  /**
   * The [location](entity:Location) IDs for loyalty events to query.
   * If multiple values are specified, the endpoint uses
   * a logical OR to combine them.
   */
  locationIds: string[];
}

export const loyaltyEventLocationFilterSchema: Schema<LoyaltyEventLocationFilter> = object(
  { locationIds: ['location_ids', array(string())] }
);
