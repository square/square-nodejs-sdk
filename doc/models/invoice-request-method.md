
# Invoice Request Method

Specifies the action for Square to take for processing the invoice. For example,
email the invoice, charge a customer's card on file, or do nothing. DEPRECATED at version 2021-01-21. The corresponding `request_method` field is replaced by the `Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields.

## Enumeration

`InvoiceRequestMethod`

## Fields

| Name | Description |
|  --- | --- |
| `EMAIL` | Directs Square to email the invoice to the customer after the invoice is published<br>(either immediately or at the `scheduled_at` time, if specified in the [invoice](#type-invoice)). |
| `CHARGE_CARD_ON_FILE` | Directs Square to charge the card on file on the `due_date` specified in the payment request,<br>after the invoice is published. |
| `SHARE_MANUALLY` | Directs Square to take no specific action on the invoice. In this case, the seller<br>(or the application developer) follows up with the customer for payment. For example,<br>a seller might collect a payment in the Seller Dashboard or use the Point of Sale (POS) application.<br>The seller might also share the URL of the Square-hosted invoice page (`public_url`) with the customer requesting payment. |
| `CHARGE_BANK_ON_FILE` | Directs Square to charge the bank account on file on the `due_date` specified in the<br>payment request, after the invoice is published.<br><br>This payment method applies only to recurring invoices that sellers create in the Seller Dashboard or other<br>Square first-party application. The bank account is provided by the customer during the payment flow. You<br>cannot set `CHARGE_BANK_ON_FILE` as a payment source using the Invoices API. |

