
# List Payment Refunds Response

Defines the response returned by [ListPaymentRefunds](../../doc/api/refunds.md#list-payment-refunds).

Either `errors` or `refunds` is present in a given response (never both).

## Structure

`ListPaymentRefundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `refunds` | [`PaymentRefund[] \| undefined`](../../doc/models/payment-refund.md) | Optional | The list of requested refunds. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "cursor": "5evquW1YswHoT4EoyUhzMmTsCnsSXBU9U0WJ4FU4623nrMQcocH0RGU6Up1YkwfiMcF59ood58EBTEGgzMTGHQJpocic7ExOL0NtrTXCeWcv0UJIJNk8eXb",
  "refunds": [
    {
      "amount_money": {
        "amount": 555,
        "currency": "USD"
      },
      "created_at": "2021-10-13T19:59:05.342Z",
      "id": "bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY_69MmgHubkLqx9wGhnmenRUHOaKitE6llfZuxcWYjGxd",
      "location_id": "L88917AVBK2S5",
      "order_id": "9ltv0bx5PuvGXUYHYHxYSKEqC3IZY",
      "payment_id": "bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY",
      "processing_fee": [
        {
          "amount_money": {
            "amount": -34,
            "currency": "USD"
          },
          "effective_at": "2021-10-13T21:34:35.000Z",
          "type": "INITIAL"
        }
      ],
      "reason": "Example Refund",
      "status": "COMPLETED",
      "updated_at": "2021-10-13T20:00:03.497Z",
      "unlinked": false,
      "destination_type": "destination_type2",
      "destination_details": {
        "card_details": {
          "card": {
            "id": "id6",
            "card_brand": "OTHER_BRAND",
            "last_4": "last_48",
            "exp_month": 228,
            "exp_year": 68
          },
          "entry_method": "entry_method8",
          "auth_result_code": "auth_result_code0"
        },
        "cash_details": {
          "seller_supplied_money": {
            "amount": 36,
            "currency": "MKD"
          },
          "change_back_money": {
            "amount": 78,
            "currency": "XBD"
          }
        },
        "external_details": {
          "type": "type6",
          "source": "source0",
          "source_id": "source_id8"
        }
      }
    }
  ],
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

