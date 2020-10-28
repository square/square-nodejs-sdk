
# Get Payment Refund Response

Defines the fields that are included in the response body of
a request to the [GetRefund](#endpoint-refunds-getpaymentrefund) endpoint.

Note: if there are errors processing the request, the refund field may not be
present, or it may be present in a FAILED state.

## Structure

`GetPaymentRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `refund` | [`PaymentRefund`](/doc/models/payment-refund.md) | Optional | Represents a refund of a payment made using Square. Contains information on<br>the original payment and the amount of money refunded. |

## Example (as JSON)

```json
{
  "refund": {
    "id": "O2QAAhTYs7rUfzlxT38GMO7LvaB_q7JwCHtxmgXrh8fAhV468WQ44VxDtL7CU4yVRlsbXmI",
    "created_at": "2019-07-06T18:01:22.123Z",
    "updated_at": "2019-07-06T18:06:03.874Z",
    "status": "COMPLETED",
    "amount_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "payment_id": "O2QAAhTYs7rUfzlxT38GMO7LvaB",
    "order_id": "2duiyoqbfeXY0DBi15GEyk5Epa4F",
    "location_id": "XK3DBG77NJBFX",
    "processing_fee": [
      {
        "effective_at": "2019-07-06T20:01:12.000Z",
        "type": "INITIAL",
        "amount_money": {
          "amount": -59,
          "currency": "USD"
        }
      }
    ]
  }
}
```

