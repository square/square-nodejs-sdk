
# Accept Dispute Response

Defines the fields in an `AcceptDispute` response.

## Structure

`AcceptDisputeResponse`

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
      "amount": 2500,
      "currency": "USD"
    },
    "brand_dispute_id": "100000809947",
    "card_brand": "VISA",
    "created_at": "2022-06-29T18:45:22.265Z",
    "disputed_payment": {
      "payment_id": "zhyh1ch64kRBrrlfVhwjCEjZWzNZY"
    },
    "due_at": "2022-07-13T00:00:00.000Z",
    "id": "XDgyFu7yo1E2S5lQGGpYn",
    "location_id": "L1HN3ZMQK64X9",
    "reason": "NO_KNOWLEDGE",
    "reported_at": "2022-06-29T00:00:00.000Z",
    "state": "ACCEPTED",
    "updated_at": "2022-07-07T19:14:42.650Z",
    "version": 2,
    "dispute_id": "dispute_id8"
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

