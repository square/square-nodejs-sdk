
# Create Invoice Request

Describes a `CreateInvoice` request.

## Structure

`CreateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`Invoice`](/doc/models/invoice.md) |  | Stores information about an invoice. You use the Invoices API to create and process<br>invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/docs/invoices-api/overview). |
| `idempotency_key` | `string` | Optional | A unique string that identifies the `CreateInvoice` request. If you do not<br>provide `idempotency_key` (or provide an empty string as the value), the endpoint<br>treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). |

## Example (as JSON)

```json
{
  "idempotency_key": "ce3748f9-5fc1-4762-aa12-aae5e843f1f4",
  "invoice": {
    "location_id": "ES0RJRZYEC39A",
    "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY",
    "scheduled_at": "2030-01-13T10:00:00Z",
    "primary_recipient": {
      "customer_id": "JDKYHBWT1D4F8MFH63DBMEN8Y4"
    },
    "payment_requests": [
      {
        "request_method": "EMAIL",
        "request_type": "BALANCE",
        "due_date": "2030-01-24",
        "tipping_enabled": true,
        "reminders": [
          {
            "message": "Your invoice is due tomorrow",
            "relative_scheduled_days": -1
          }
        ]
      }
    ],
    "invoice_number": "inv-100",
    "title": "Event Planning Services",
    "description": "We appreciate your business!"
  }
}
```

