
# Invoice Accepted Payment Methods

The payment methods that customers can use to pay an invoice on the Square-hosted invoice page.

## Structure

`InvoiceAcceptedPaymentMethods`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | `boolean` | Optional | Indicates whether credit card or debit card payments are accepted. The default value is `false`. |
| `squareGiftCard` | `boolean` | Optional | Indicates whether Square gift card payments are accepted. The default value is `false`. |
| `bankAccount` | `boolean` | Optional | Indicates whether bank transfer payments are accepted. The default value is `false`.<br><br>This option is allowed only for invoices that have a single payment request of type `BALANCE`. |

## Example (as JSON)

```json
{
  "card": false,
  "square_gift_card": false,
  "bank_account": false
}
```

