
# Bulk Create Customer Data

Defines the customer data provided in individual create requests for a
[BulkCreateCustomers](../../doc/api/customers.md#bulk-create-customers) operation.

## Structure

`BulkCreateCustomerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `givenName` | `string \| null \| undefined` | Optional | The given name (that is, the first name) associated with the customer profile.<br>**Constraints**: *Maximum Length*: `300` |
| `familyName` | `string \| null \| undefined` | Optional | The family name (that is, the last name) associated with the customer profile.<br>**Constraints**: *Maximum Length*: `300` |
| `companyName` | `string \| null \| undefined` | Optional | A business name associated with the customer profile.<br>**Constraints**: *Maximum Length*: `500` |
| `nickname` | `string \| null \| undefined` | Optional | A nickname for the customer profile.<br>**Constraints**: *Maximum Length*: `100` |
| `emailAddress` | `string \| null \| undefined` | Optional | The email address associated with the customer profile.<br>**Constraints**: *Maximum Length*: `254` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phoneNumber` | `string \| null \| undefined` | Optional | The phone number associated with the customer profile. The phone number must be valid<br>and can contain 9–16 digits, with an optional `+` prefix and country code. For more information,<br>see [Customer phone numbers](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#phone-number). |
| `referenceId` | `string \| null \| undefined` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system.<br>**Constraints**: *Maximum Length*: `100` |
| `note` | `string \| null \| undefined` | Optional | A custom note associated with the customer profile. |
| `birthday` | `string \| null \| undefined` | Optional | The birthday associated with the customer profile, in `YYYY-MM-DD` or `MM-DD` format.<br>For example, specify `1998-09-21` for September 21, 1998, or `09-21` for September 21.<br>Birthdays are returned in `YYYY-MM-DD` format, where `YYYY` is the specified birth year or<br>`0000` if a birth year is not specified. |
| `taxIds` | [`CustomerTaxIds \| undefined`](../../doc/models/customer-tax-ids.md) | Optional | Represents the tax ID associated with a [customer profile](../../doc/models/customer.md). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.<br>For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids). |

## Example (as JSON)

```json
{
  "given_name": "given_name4",
  "family_name": "family_name4",
  "company_name": "company_name8",
  "nickname": "nickname8",
  "email_address": "email_address0"
}
```

