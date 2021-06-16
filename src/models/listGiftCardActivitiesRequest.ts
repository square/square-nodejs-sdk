import { number, object, optional, Schema, string } from '../schema';

/**
 * Returns a list of gift card activities. You can optionally specify a filter to retrieve a
 * subset of activites.
 */
export interface ListGiftCardActivitiesRequest {
  /**
   * If you provide a gift card ID, the endpoint returns activities that belong
   * to the specified gift card. Otherwise, the endpoint returns all gift card activities for
   * the seller.
   */
  giftCardId?: string;
  /**
   * If you provide a type, the endpoint returns gift card activities of this type.
   * Otherwise, the endpoint returns all types of gift card activities.
   */
  type?: string;
  /**
   * If you provide a location ID, the endpoint returns gift card activities for that location.
   * Otherwise, the endpoint returns gift card activities for all locations.
   */
  locationId?: string;
  /**
   * The timestamp for the beginning of the reporting period, in RFC 3339 format.
   * Inclusive. Default: The current time minus one year.
   */
  beginTime?: string;
  /**
   * The timestamp for the end of the reporting period, in RFC 3339 format.
   * Inclusive. Default: The current time.
   */
  endTime?: string;
  /**
   * If you provide a limit value, the endpoint returns the specified number
   * of results (or less) per page. A maximum value is 100. The default value is 50.
   */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * If you do not provide the cursor, the call returns the first page of the results.
   */
  cursor?: string;
  /**
   * The order in which the endpoint returns the activities, based on `created_at`.
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string;
}

export const listGiftCardActivitiesRequestSchema: Schema<ListGiftCardActivitiesRequest> = object(
  {
    giftCardId: ['gift_card_id', optional(string())],
    type: ['type', optional(string())],
    locationId: ['location_id', optional(string())],
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
    sortOrder: ['sort_order', optional(string())],
  }
);
