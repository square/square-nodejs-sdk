
# Invoice Recipient

Represents a snapshot of customer data. This object stores customer data that is displayed on the invoice
and that Square uses to deliver the invoice.

When you provide a customer ID for a draft invoice, Square retrieves the associated customer profile and populates
the remaining `InvoiceRecipient` fields. You cannot update these fields after the invoice is published.
Square updates the customer ID in response to a merge operation, but does not update other fields.

## Structure

`InvoiceRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| null \| undefined` | Optional | The ID of the customer. This is the customer profile ID that<br>you provide when creating a draft invoice.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `givenName` | `string \| undefined` | Optional | The recipient's given (that is, first) name. |
| `familyName` | `string \| undefined` | Optional | The recipient's family (that is, last) name. |
| `emailAddress` | `string \| undefined` | Optional | The recipient's email address. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phoneNumber` | `string \| undefined` | Optional | The recipient's phone number. |
| `companyName` | `string \| undefined` | Optional | The name of the recipient's company. |
| `taxIds` | [`InvoiceRecipientTaxIds \| undefined`](../../doc/models/invoice-recipient-tax-ids.md) | Optional | Represents the tax IDs for an invoice recipient. The country of the seller account determines<br>whether the corresponding `tax_ids` field is available for the customer. For more information,<br>see [Invoice recipient tax IDs](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids). |

## Example (as JSON)

```json
{
  "customer_id": "customer_id8",
  "given_name": "given_name2",
  "family_name": "family_name4",
  "email_address": "email_address8",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  }
}
```

