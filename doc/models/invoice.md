
# Invoice

Stores information about an invoice. You use the Invoices API to create and process
invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/docs/invoices-api/overview).

## Structure

`Invoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-assigned ID of the invoice. |
| `version` | `number` | Optional | The version number, which is incremented each time an update is committed to the invoice. |
| `location_id` | `string` | Optional | The ID of the location that this invoice is associated with.<br>This field is required when creating an invoice. |
| `order_id` | `string` | Optional | The ID of the [order](#type-order) for which the invoice is created.<br><br>This order must be in the `OPEN` state and must belong to the `location_id`<br>specified for this invoice. This field is required when creating an invoice. |
| `primary_recipient` | [`InvoiceRecipient`](/doc/models/invoice-recipient.md) | Optional | Provides customer data that Square uses to deliver an invoice. |
| `payment_requests` | [`InvoicePaymentRequest[]`](/doc/models/invoice-payment-request.md) | Optional | An array of `InvoicePaymentRequest` objects. Each object defines<br>a payment request in an invoice payment schedule. It provides information<br>such as when and how Square processes payments. You can specify maximum of<br>nine payment requests. All all the payment requests must specify the<br>same `request_method`.<br><br>This field is required when creating an invoice. |
| `invoice_number` | `string` | Optional | A user-friendly invoice number. The value is unique within a location.<br>If not provided when creating an invoice, Square assigns a value.<br>It increments from 1 and padded with zeros making it 7 characters long<br>for example, 0000001, 0000002. |
| `title` | `string` | Optional | The title of the invoice. |
| `description` | `string` | Optional | The description of the invoice. This is visible the customer receiving the invoice. |
| `scheduled_at` | `string` | Optional | The timestamp when the invoice is scheduled for processing, in RFC 3339 format.<br>At the specified time, depending on the `request_method`, Square sends the<br>invoice to the customer's email address or charge the customer's card on file.<br><br>If the field is not set, Square processes the invoice immediately after publication. |
| `public_url` | `string` | Optional | The URL of the Square-hosted invoice page.<br>After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice<br>page and returns the page URL in the response. |
| `next_payment_amount_money` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `status` | [`string`](/doc/models/invoice-status.md) | Optional | Indicates the status of an invoice. |
| `timezone` | `string` | Optional | The time zone of the date values (for example, `due_date`) specified in the invoice. |
| `created_at` | `string` | Optional | The timestamp when the invoice was created, in RFC 3339 format. |
| `updated_at` | `string` | Optional | The timestamp when the invoice was last updated, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "version": 172,
  "location_id": "location_id4",
  "order_id": "order_id6",
  "primary_recipient": {
    "customer_id": "customer_id2",
    "given_name": "given_name6",
    "family_name": "family_name8",
    "email_address": "email_address2",
    "address": {
      "address_line_1": "address_line_10",
      "address_line_2": "address_line_20",
      "address_line_3": "address_line_36",
      "locality": "locality0",
      "sublocality": "sublocality0"
    }
  }
}
```

