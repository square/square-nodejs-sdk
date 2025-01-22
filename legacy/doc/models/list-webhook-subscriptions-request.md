
# List Webhook Subscriptions Request

Lists all [Subscription](../../doc/models/webhook-subscription.md)s owned by your application.

## Structure

`ListWebhookSubscriptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| null \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: *Maximum Length*: `256` |
| `includeDisabled` | `boolean \| null \| undefined` | Optional | Includes disabled [Subscription](entity:WebhookSubscription)s.<br>By default, all enabled [Subscription](entity:WebhookSubscription)s are returned. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value.<br><br>Default: 100<br>**Constraints**: `>= 1`, `<= 100` |

## Example (as JSON)

```json
{
  "cursor": "cursor2",
  "include_disabled": false,
  "sort_order": "DESC",
  "limit": 190
}
```

