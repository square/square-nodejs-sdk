import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking. */
export interface LocationBookingProfile {
  /** The ID of the [location](entity:Location). */
  locationId?: string | null;
  /** Url for the online booking site for this location. */
  bookingSiteUrl?: string | null;
  /** Indicates whether the location is enabled for online booking. */
  onlineBookingEnabled?: boolean | null;
}

export const locationBookingProfileSchema: Schema<LocationBookingProfile> = object(
  {
    locationId: ['location_id', optional(nullable(string()))],
    bookingSiteUrl: ['booking_site_url', optional(nullable(string()))],
    onlineBookingEnabled: [
      'online_booking_enabled',
      optional(nullable(boolean())),
    ],
  }
);
