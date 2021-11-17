import { number, object, optional, Schema, string } from '../schema';

/**
 * Returns a list of gift card activities. You can optionally specify a filter to retrieve a
 * subset of activites.
 */
export interface ListGiftCardActivitiesRequest {
  /**
   * If a gift card ID is provided, the endpoint returns activities related
   * to the specified gift card. Otherwise, the endpoint returns all gift card activities for
   * the seller.
   */
  giftCardId?: string;
  /**
   * If a [type]($m/GiftCardActivityType) is provided, the endpoint returns gift card activities of the specified type.
   * Otherwise, the endpoint returns all types of gift card activities.
   */
  type?: string;
  /**
   * If a location ID is provided, the endpoint returns gift card activities for the specified location.
   * Otherwise, the endpoint returns gift card activities for all locations.
   */
  locationId?: string;
  /**
   * The timestamp for the beginning of the reporting period, in RFC 3339 format.
   * This start time is inclusive. The default value is the current time minus one year.
   */
  beginTime?: string;
  /**
   * The timestamp for the end of the reporting period, in RFC 3339 format.
   * This end time is inclusive. The default value is the current time.
   */
  endTime?: string;
  /**
   * If a limit is provided, the endpoint returns the specified number
   * of results (or fewer) per page. The maximum value is 100. The default value is 50.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * If a cursor is not provided, the endpoint returns the first page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
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
