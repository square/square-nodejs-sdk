
# List Payment Refunds Response

Defines the response returned by [ListPaymentRefunds](/doc/api/refunds.md#list-payment-refunds).

Either `errors` or `refunds` is present in a given response (never both).

## Structure

`ListPaymentRefundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `refunds` | [`PaymentRefund[]`](/doc/models/payment-refund.md) | Optional | The list of requested refunds. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "cursor": "5evquW1YswHoT4EoyUhzMmTsCnsSXBU9U0WJ4FU4623nrMQcocH0RGU6Up1YkwfiMcF59ood58EBTEGgzMTGHQJpocic7ExOL0NtrTXCeWcv0UJIJNk8eXb",
  "refunds": [
    {
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "created_at": "2019-07-06T18:01:22.335Z",
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
      "updated_at": "2019-07-06T18:06:04.653Z"
    },
    {
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "created_at": "2019-07-06T17:01:54.232Z",
      "id": "8TDIQvFw8PeDIxhSfd5yyX7GuaB_13px5Vrz01qzzuoGzmjsZIxDjfHhbkm2XppBUX1dW7I",
      "location_id": "XK3DBG77NJBFX",
      "order_id": "w6EXfEwS03oTQsnZTCqfE6f67e4F",
      "payment_id": "8TDIQvFw8PeDIxhSfd5yyX7GuaB",
      "processing_fee": [
        {
          "amount_money": {
            "amount": -59,
            "currency": "USD"
          },
          "effective_at": "2019-07-06T19:01:45.000Z",
          "type": "INITIAL"
        }
      ],
      "status": "COMPLETED",
      "updated_at": "2019-07-06T17:21:04.684Z"
    }
  ]
}
```

