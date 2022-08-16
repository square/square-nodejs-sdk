import { array, object, optional, Schema, string } from '../schema';

/**
 * Represents scheduling information that determines when purchases can qualify to earn points
 * from a [loyalty promotion]($m/LoyaltyPromotion).
 */
export interface LoyaltyPromotionAvailableTimeData {
  /**
   * The date that the promotion starts, in `YYYY-MM-DD` format. Square populates this field
   * based on the provided `time_periods`.
   */
  startDate?: string;
  /**
   * The date that the promotion ends, in `YYYY-MM-DD` format. Square populates this field
   * based on the provided `time_periods`. If an end date is not specified, an `ACTIVE` promotion
   * remains available until it is canceled.
   */
  endDate?: string;
  /**
   * A list of [iCalendar (RFC 5545) events](https://tools.ietf.org/html/rfc5545#section-3.6.1)
   * (`VEVENT`). Each event represents an available time period per day or days of the week.
   * A day can have a maximum of one available time period.
   * Only `DTSTART`, `DURATION`, and `RRULE` are supported. `DTSTART` and `DURATION` are required and
   * timestamps must be in local (unzoned) time format. Include `RRULE` to specify recurring promotions,
   * an end date (using the `UNTIL` keyword), or both. For more information, see
   * [Available time](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#available-time).
   * Note that `BEGIN:VEVENT` and `END:VEVENT` are optional in a `CreateLoyaltyPromotion` request
   * but are always included in the response.
   */
  timePeriods: string[];
}

export const loyaltyPromotionAvailableTimeDataSchema: Schema<LoyaltyPromotionAvailableTimeData> = object(
  {
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    timePeriods: ['time_periods', array(string())],
  }
);
