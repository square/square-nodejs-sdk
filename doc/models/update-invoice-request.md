
# Update Invoice Request

Describes a `UpdateInvoice` request.

## Structure

`UpdateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`Invoice`](/doc/models/invoice.md) |  | Stores information about an invoice. You use the Invoices API to create and process<br>invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/docs/invoices-api/overview). |
| `idempotency_key` | `string` | Optional | A unique string that identifies the `UpdateInvoice` request. If you do not<br>provide `idempotency_key` (or provide an empty string as the value), the endpoint<br>treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). |
| `fields_to_clear` | `string[]` | Optional | List of fields to clear.<br>For examples, see [Update an invoice](https://developer.squareup.com/docs/docs/invoices-api/overview#update-an-invoice). |

## Example (as JSON)

```json
{
  "idempotency_key": "4ee82288-0910-499e-ab4c-5d0071dad1be",
  "invoice": {
    "payment_requests": [
      {
        "uid": "2da7964f-f3d2-4f43-81e8-5aa220bf3355",
        "tipping_enabled": false
      }
    ]
  },
  "fields_to_clear": [
    "payments_requests[2da7964f-f3d2-4f43-81e8-5aa220bf3355].reminders"
  ]
}
```

