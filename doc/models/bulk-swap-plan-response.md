
# Bulk Swap Plan Response

Defines output parameters in a response of the
[BulkSwapPlan](../../doc/api/subscriptions.md#bulk-swap-plan) endpoint.

## Structure

`BulkSwapPlanResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `affectedSubscriptions` | `number \| undefined` | Optional | The number of affected subscriptions. |

## Example (as JSON)

```json
{
  "affected_subscriptions": 12,
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

