
# Get Payment Refund Response

Defines the response returned by [GetRefund](/doc/api/refunds.md#get-payment-refund).

Note: If there are errors processing the request, the refund field might not be
present or it might be present in a FAILED state.

## Structure

`GetPaymentRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `refund` | [`PaymentRefund`](/doc/models/payment-refund.md) | Optional | Represents a refund of a payment made using Square. Contains information about<br>the original payment and the amount of money refunded. |

## Example (as JSON)

```json
{
  "refund": {
    "amount_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "created_at": "2019-07-06T18:01:22.123Z",
    "id": "O2QAAhTYs7rUfzlxT38GMO7LvaB_q7JwCHtxmgXrh8fAhV468WQ44VxDtL7CU4yVRlsbXmI",
    "location_id": "XK3DBG77NJBFX",
    "order_id": "2duiyoqbfeXY0DBi15GEyk5Epa4F",
    "payment_id": "O2QAAhTYs7rUfzlxT38GMO7LvaB",
    "processing_fee": [
      {
        "amount_money": {
          "amount": -59,
          "currency": "USD"
        },
        "effective_at": "2019-07-06T20:01:12.000Z",
        "type": "INITIAL"
      }
    ],
    "status": "COMPLETED",
    "updated_at": "2019-07-06T18:06:03.874Z"
  }
}
```

