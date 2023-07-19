
# List Webhook Event Types Response

Defines the fields that are included in the response body of
a request to the [ListWebhookEventTypes](../../doc/api/webhook-subscriptions.md#list-webhook-event-types) endpoint.

Note: if there are errors processing the request, the event types field will not be
present.

## Structure

`ListWebhookEventTypesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `eventTypes` | `string[] \| undefined` | Optional | The list of event types. |
| `metadata` | [`EventTypeMetadata[] \| undefined`](../../doc/models/event-type-metadata.md) | Optional | Contains the metadata of a webhook event type. For more information, see [EventTypeMetadata](entity:EventTypeMetadata). |

## Example (as JSON)

```json
{
  "event_types": [
    "inventory.count.updated"
  ],
  "metadata": [
    {
      "api_version_introduced": "2018-07-12",
      "event_type": "inventory.count.updated",
      "release_status": "PUBLIC"
    }
  ],
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

