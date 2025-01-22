
# Create Invoice Request

Describes a `CreateInvoice` request.

## Structure

`CreateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | Stores information about an invoice. You use the Invoices API to create and manage<br>invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview). |
| `idempotencyKey` | `string \| undefined` | Optional | A unique string that identifies the `CreateInvoice` request. If you do not<br>provide `idempotency_key` (or provide an empty string as the value), the endpoint<br>treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `128` |

## Example (as JSON)

```json
{
  "idempotency_key": "ce3748f9-5fc1-4762-aa12-aae5e843f1f4",
  "invoice": {
    "accepted_payment_methods": {
      "bank_account": false,
      "buy_now_pay_later": false,
      "card": true,
      "cash_app_pay": false,
      "square_gift_card": false
    },
    "custom_fields": [
      {
        "label": "Event Reference Number",
        "placement": "ABOVE_LINE_ITEMS",
        "value": "Ref. #1234"
      },
      {
        "label": "Terms of Service",
        "placement": "BELOW_LINE_ITEMS",
        "value": "The terms of service are..."
      }
    ],
    "delivery_method": "EMAIL",
    "description": "We appreciate your business!",
    "invoice_number": "inv-100",
    "location_id": "ES0RJRZYEC39A",
    "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY",
    "payment_requests": [
      {
        "automatic_payment_source": "NONE",
        "due_date": "2030-01-24",
        "reminders": [
          {
            "message": "Your invoice is due tomorrow",
            "relative_scheduled_days": -1
          }
        ],
        "request_type": "BALANCE",
        "tipping_enabled": true
      }
    ],
    "primary_recipient": {
      "customer_id": "JDKYHBWT1D4F8MFH63DBMEN8Y4",
      "given_name": "given_name6",
      "family_name": "family_name8",
      "email_address": "email_address2",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "locality": "locality6",
        "sublocality": "sublocality6"
      }
    },
    "sale_or_service_date": "2030-01-24",
    "scheduled_at": "2030-01-13T10:00:00Z",
    "store_payment_method_enabled": false,
    "title": "Event Planning Services",
    "id": "id6",
    "version": 118
  }
}
```

