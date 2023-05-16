import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Lists all [Subscription]($m/WebhookSubscription)s owned by your application. */
export interface ListWebhookSubscriptionsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * Includes disabled [Subscription](entity:WebhookSubscription)s.
   * By default, all enabled [Subscription](entity:WebhookSubscription)s are returned.
   */
  includeDisabled?: boolean | null;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * The default value of 100 is also the maximum allowed value.
   * Default: 100
   */
  limit?: number | null;
}

export const listWebhookSubscriptionsRequestSchema: Schema<ListWebhookSubscriptionsRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    includeDisabled: ['include_disabled', optional(nullable(boolean()))],
    sortOrder: ['sort_order', optional(string())],
    limit: ['limit', optional(nullable(number()))],
  }
);
