
# Cancel Invoice Request

Describes a `CancelInvoice` request.

## Structure

`CancelInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `number` | Required | The version of the [invoice](/doc/models/invoice.md) to cancel.<br>If you do not know the version, you can call<br>[GetInvoice](/doc/api/invoices.md#get-invoice) or [ListInvoices](/doc/api/invoices.md#list-invoices). |

## Example (as JSON)

```json
{
  "version": 0
}
```

