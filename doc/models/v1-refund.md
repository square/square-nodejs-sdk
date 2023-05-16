
# V1 Refund

V1Refund

## Structure

`V1Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string \| undefined`](../../doc/models/v1-refund-type.md) | Optional | - |
| `reason` | `string \| undefined` | Optional | The merchant-specified reason for the refund. |
| `refundedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedProcessingFeeMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedTaxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedAdditiveTaxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedAdditiveTax` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | All of the additive taxes associated with the refund. |
| `refundedInclusiveTaxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedInclusiveTax` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | All of the inclusive taxes associated with the refund. |
| `refundedTipMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedDiscountMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedSurchargeMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedSurcharges` | [`V1PaymentSurcharge[] \| undefined`](../../doc/models/v1-payment-surcharge.md) | Optional | A list of all surcharges associated with the refund. |
| `createdAt` | `string \| undefined` | Optional | The time when the merchant initiated the refund for Square to process, in ISO 8601 format. |
| `processedAt` | `string \| undefined` | Optional | The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. |
| `paymentId` | `string \| undefined` | Optional | A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders. |
| `merchantId` | `string \| undefined` | Optional | - |
| `isExchange` | `boolean \| undefined` | Optional | Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. |

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

