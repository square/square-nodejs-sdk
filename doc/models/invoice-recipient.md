
# Invoice Recipient

Provides customer data that Square uses to deliver an invoice.

## Structure

`InvoiceRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer_id` | `string` | Optional | The ID of the customer. This is the customer profile ID that<br>you provide when creating a draft invoice. |
| `given_name` | `string` | Optional | The recipient's given (that is, first) name. |
| `family_name` | `string` | Optional | The recipient's family (that is, last) name. |
| `email_address` | `string` | Optional | The recipient's email address. |
| `address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `phone_number` | `string` | Optional | The recipient's phone number. |
| `company_name` | `string` | Optional | The name of the recipient's company. |

## Example (as JSON)

```json
{
  "customer_id": "customer_id8",
  "given_name": "given_name2",
  "family_name": "family_name6",
  "email_address": "email_address2",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  }
}
```

