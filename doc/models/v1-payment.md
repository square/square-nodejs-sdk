
# V1 Payment

A payment represents a paid transaction between a Square merchant and a
customer. Payment details are usually available from Connect API endpoints
within a few minutes after the transaction completes.

Each Payment object includes several fields that end in `_money`. These fields
describe the various amounts of money that contribute to the payment total:

<ul>
<li>
Monetary values are <b>positive</b> if they represent an
<em>increase</em> in the amount of money the merchant receives (e.g.,
<code>tax_money</code>, <code>tip_money</code>).
</li>
<li>
Monetary values are <b>negative</b> if they represent an
<em>decrease</em> in the amount of money the merchant receives (e.g.,
<code>discount_money</code>, <code>refunded_money</code>).
</li>
</ul>


## Structure

`V1Payment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The payment's unique identifier. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant that took the payment. |
| `createdAt` | `string \| undefined` | Optional | The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object represents an incomplete partial payment, and the time of the last or complete payment otherwise. |
| `creatorId` | `string \| undefined` | Optional | The unique identifier of the Square account that took the payment. |
| `device` | [`Device \| undefined`](../../doc/models/device.md) | Optional | - |
| `paymentUrl` | `string \| undefined` | Optional | The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page. |
| `receiptUrl` | `string \| undefined` | Optional | The URL of the receipt for the payment. Note that for split tender<br>payments, this URL corresponds to the receipt for the first tender<br>listed in the payment's tender field. Each Tender object has its own<br>receipt_url field you can use to get the other receipts associated with<br>a split tender payment. |
| `inclusiveTaxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `additiveTaxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `taxMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `tipMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `discountMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `totalCollectedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `processingFeeMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `netTotalMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `swedishRoundingMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `grossSalesMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `netSalesMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `inclusiveTax` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | All of the inclusive taxes associated with the payment. |
| `additiveTax` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | All of the additive taxes associated with the payment. |
| `tender` | [`V1Tender[] \| undefined`](../../doc/models/v1-tender.md) | Optional | All of the tenders associated with the payment. |
| `refunds` | [`V1Refund[] \| undefined`](../../doc/models/v1-refund.md) | Optional | All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange. |
| `itemizations` | [`V1PaymentItemization[] \| undefined`](../../doc/models/v1-payment-itemization.md) | Optional | The items purchased in the payment. |
| `surchargeMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `surcharges` | [`V1PaymentSurcharge[] \| undefined`](../../doc/models/v1-payment-surcharge.md) | Optional | A list of all surcharges associated with the payment. |
| `isPartial` | `boolean \| undefined` | Optional | Indicates whether or not the payment is only partially paid for.<br>If true, this payment will have the tenders collected so far, but the<br>itemizations will be empty until the payment is completed. |

## Example (as JSON)

```json
{
  "id": null,
  "merchant_id": null,
  "created_at": null,
  "creator_id": null,
  "device": null,
  "payment_url": null,
  "receipt_url": null,
  "inclusive_tax_money": null,
  "additive_tax_money": null,
  "tax_money": null,
  "tip_money": null,
  "discount_money": null,
  "total_collected_money": null,
  "processing_fee_money": null,
  "net_total_money": null,
  "refunded_money": null,
  "swedish_rounding_money": null,
  "gross_sales_money": null,
  "net_sales_money": null,
  "inclusive_tax": null,
  "additive_tax": null,
  "tender": null,
  "refunds": null,
  "itemizations": null,
  "surcharge_money": null,
  "surcharges": null,
  "is_partial": null
}
```

