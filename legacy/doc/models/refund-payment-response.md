
# Refund Payment Response

Defines the response returned by
[RefundPayment](../../doc/api/refunds.md#refund-payment).

If there are errors processing the request, the `refund` field might not be
present, or it might be present with a status of `FAILED`.

## Structure

`RefundPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `refund` | [`PaymentRefund \| undefined`](../../doc/models/payment-refund.md) | Optional | Represents a refund of a payment made using Square. Contains information about<br>the original payment and the amount of money refunded. |

## Example (as JSON)

```json
{
  "refund": {
    "amount_money": {
      "amount": 1000,
      "currency": "USD"
    },
    "app_fee_money": {
      "amount": 10,
      "currency": "USD"
    },
    "created_at": "2021-10-13T21:23:19.116Z",
    "id": "R2B3Z8WMVt3EAmzYWLZvz7Y69EbZY_KlWP8IC1557ddwc9QWTKrCVU6m0JXDz15R2Qym5eQfR",
    "location_id": "L88917AVBK2S5",
    "order_id": "1JLEUZeEooAIX8HMqm9kvWd69aQZY",
    "payment_id": "R2B3Z8WMVt3EAmzYWLZvz7Y69EbZY",
    "reason": "Example",
    "status": "PENDING",
    "updated_at": "2021-10-13T21:23:19.508Z",
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
    }
  ]
}
```

