
# List Webhook Subscriptions Request

Lists all [Subscription](../../doc/models/webhook-subscription.md)s owned by your application.

## Structure

`ListWebhookSubscriptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).<br>**Constraints**: *Maximum Length*: `256` |
| `includeDisabled` | `boolean \| undefined` | Optional | Includes disabled [Subscription](../../doc/models/webhook-subscription.md)s.<br>By default, all enabled [Subscription](../../doc/models/webhook-subscription.md)s are returned. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `limit` | `number \| undefined` | Optional | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value. If the provided value is greater<br>than 100, it is ignored and the default value is used instead.<br><br>Default: 100<br>**Constraints**: `>= 1`, `<= 100` |

## Example (as JSON)

```json
{
  "cursor": null,
  "include_disabled": null,
  "sort_order": null,
  "limit": null
}
```

