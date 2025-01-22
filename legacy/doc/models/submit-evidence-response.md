
# Submit Evidence Response

Defines the fields in a `SubmitEvidence` response.

## Structure

`SubmitEvidenceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `dispute` | [`Dispute \| undefined`](../../doc/models/dispute.md) | Optional | Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. |

## Example (as JSON)

```json
{
  "dispute": {
    "amount_money": {
      "amount": 4350,
      "currency": "USD"
    },
    "brand_dispute_id": "100000399240",
    "card_brand": "VISA",
    "created_at": "2022-05-18T16:02:15.313Z",
    "disputed_payment": {
      "payment_id": "2yeBUWJzllJTpmnSqtMRAL19taB"
    },
    "due_at": "2022-06-01T00:00:00.000Z",
    "id": "EAZoK70gX3fyvibecLwIGB",
    "location_id": "LSY8XKGSMMX94",
    "reason": "CUSTOMER_REQUESTS_CREDIT",
    "reported_at": "2022-05-18T00:00:00.000Z",
    "state": "PROCESSING",
    "updated_at": "2022-05-18T16:02:15.313Z",
    "version": 4,
    "dispute_id": "dispute_id8"
  },
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

