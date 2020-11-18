
# Invoice Request Method

Specifies the action for Square to take for processing the invoice. For example,
email the invoice, charge a customer's card on file, or do nothing.

## Enumeration

`InvoiceRequestMethod`

## Fields

| Name | Description |
|  --- | --- |
| `EMAIL` | Directs Square to email the invoice to the customer after the invoice is published<br>(either immediately or at the `scheduled_at` time, if specified in the [invoice](#type-invoice)). |
| `CHARGE_CARD_ON_FILE` | Directs Square to charge the card on file, on the `due_date`, specified in the payment request<br>after the invoice is published. |
| `SHARE_MANUALLY` | Directs Square to take no specific action on the invoice. In this case, the seller<br>(or the application developer) follows up with the customer for payment. For example,<br>a seller might collect a payment in the Seller Dashboard or use the Point of Sale (POS) application.<br>The seller might also share the URL of the Square-hosted invoice page (`public_url`) with the customer requesting payment. |

