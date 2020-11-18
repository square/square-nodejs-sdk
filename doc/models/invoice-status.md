
# Invoice Status

Indicates the status of an invoice.

## Enumeration

`InvoiceStatus`

## Fields

| Name | Description |
|  --- | --- |
| `DRAFT` | The invoice is a draft. You must publish a draft invoice before Square can process it.<br>A draft invoice has no `public_url`, so it is not available to customers. |
| `UNPAID` | The invoice is published but not yet paid. |
| `SCHEDULED` | The invoice is scheduled to be processed. On the scheduled date,<br>Square emails the invoice (if the `request_method` is `EMAIL`),<br>charges the customer's card (if the `request_method` is `CHARGE_CARD_ON_FILE`),<br>or takes no action (if the `request_method` is `SHARE_MANUALLY`).<br>The invoice status then changes accordingly (`UNPAID`, `PAID`, or `PARTIALLY_PAID`). |
| `PARTIALLY_PAID` | A partial payment is received for the invoice. |
| `PAID` | The customer paid the invoice in full. |
| `PARTIALLY_REFUNDED` | The invoice is paid (or partially paid) and some but not all the amount paid is<br>refunded. |
| `REFUNDED` | The full amount that the customer paid for the invoice is refunded. |
| `CANCELED` | The invoice is canceled. Square no longer requests payments from the customer.<br>The `public_url` page remains and is accessible, but it displays the invoice<br>as cancelled and does not accept payment. |
| `FAILED` | Square canceled the invoice due to suspicious activity. |
| `PAYMENT_PENDING` | A payment on the invoice was initiated but has not yet been processed.<br><br>When in this state, invoices cannot be updated and other payments cannot be initiated. |

