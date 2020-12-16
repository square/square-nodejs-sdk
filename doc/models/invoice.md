
# Invoice

Stores information about an invoice. You use the Invoices API to create and process
invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).

## Structure

`Invoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-assigned ID of the invoice. |
| `version` | `number` | Optional | The Square-assigned version number, which is incremented each time an update is committed to the invoice. |
| `locationId` | `string` | Optional | The ID of the location that this invoice is associated with.<br>This field is required when creating an invoice. |
| `orderId` | `string` | Optional | The ID of the [order](#type-order) for which the invoice is created.<br><br>This order must be in the `OPEN` state and must belong to the `location_id`<br>specified for this invoice. This field is required when creating an invoice. |
| `primaryRecipient` | [`InvoiceRecipient`](/doc/models/invoice-recipient.md) | Optional | Provides customer data that Square uses to deliver an invoice. |
| `paymentRequests` | [`InvoicePaymentRequest[]`](/doc/models/invoice-payment-request.md) | Optional | The payment schedule for the invoice, represented by one or more payment requests that<br>define payment settings, such as amount due and due date. You can specify a maximum of 13<br>payment requests, with up to 12 `INSTALLMENT` request types. For more information, see<br>[Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).<br><br>This field is required when creating an invoice. It must contain at least one payment request. |
| `invoiceNumber` | `string` | Optional | A user-friendly invoice number. The value is unique within a location.<br>If not provided when creating an invoice, Square assigns a value.<br>It increments from 1 and padded with zeros making it 7 characters long<br>for example, 0000001, 0000002. |
| `title` | `string` | Optional | The title of the invoice. |
| `description` | `string` | Optional | The description of the invoice. This is visible to the customer receiving the invoice. |
| `scheduledAt` | `string` | Optional | The timestamp when the invoice is scheduled for processing, in RFC 3339 format.<br>After the invoice is published, Square processes the invoice on the specified date,<br>based on the settings for the invoice payment requests.<br><br>If the field is not set, Square processes the invoice immediately after it is published. |
| `publicUrl` | `string` | Optional | The URL of the Square-hosted invoice page.<br>After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice<br>page and returns the page URL in the response. |
| `nextPaymentAmountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `status` | [`string`](/doc/models/invoice-status.md) | Optional | Indicates the status of an invoice. |
| `timezone` | `string` | Optional | The time zone of the date values (for example, `due_date`) specified in the invoice. |
| `createdAt` | `string` | Optional | The timestamp when the invoice was created, in RFC 3339 format. |
| `updatedAt` | `string` | Optional | The timestamp when the invoice was last updated, in RFC 3339 format. |
| `customFields` | [`InvoiceCustomField[]`](/doc/models/invoice-custom-field.md) | Optional | Additional seller-defined fields to render on the invoice. These fields are visible to sellers and buyers<br>on the Square-hosted invoice page and in emailed or PDF copies of invoices. For more information, see<br>[Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).<br><br>Max: 2 custom fields |

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

