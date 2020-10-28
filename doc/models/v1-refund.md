
# V1 Refund

V1Refund

## Structure

`V1Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string`](/doc/models/v1-refund-type.md) | Optional | - |
| `reason` | `string` | Optional | The merchant-specified reason for the refund. |
| `refunded_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_processing_fee_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_tax_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_additive_tax_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_additive_tax` | [`V1PaymentTax[]`](/doc/models/v1-payment-tax.md) | Optional | All of the additive taxes associated with the refund. |
| `refunded_inclusive_tax_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_inclusive_tax` | [`V1PaymentTax[]`](/doc/models/v1-payment-tax.md) | Optional | All of the inclusive taxes associated with the refund. |
| `refunded_tip_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_discount_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_surcharge_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `refunded_surcharges` | [`V1PaymentSurcharge[]`](/doc/models/v1-payment-surcharge.md) | Optional | A list of all surcharges associated with the refund. |
| `created_at` | `string` | Optional | The time when the merchant initiated the refund for Square to process, in ISO 8601 format. |
| `processed_at` | `string` | Optional | The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. |
| `payment_id` | `string` | Optional | A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders. |
| `merchant_id` | `string` | Optional | - |
| `is_exchange` | `boolean` | Optional | Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. |

## Example (as JSON)

```json
{
  "type": "FULL",
  "reason": "reason4",
  "refunded_money": {
    "amount": 214,
    "currency_code": "CHW"
  },
  "refunded_processing_fee_money": {
    "amount": 0,
    "currency_code": "LBP"
  },
  "refunded_tax_money": {
    "amount": 148,
    "currency_code": "BAM"
  }
}
```

