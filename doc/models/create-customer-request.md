
# Create Customer Request

Defines the body parameters that can be included in a request to the
`CreateCustomer` endpoint.

## Structure

`CreateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Optional | The idempotency key for the request.	For more information, see<br>[Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency). |
| `givenName` | `string \| undefined` | Optional | The given name (that is, the first name) associated with the customer profile. |
| `familyName` | `string \| undefined` | Optional | The family name (that is, the last name) associated with the customer profile. |
| `companyName` | `string \| undefined` | Optional | A business name associated with the customer profile. |
| `nickname` | `string \| undefined` | Optional | A nickname for the customer profile. |
| `emailAddress` | `string \| undefined` | Optional | The email address associated with the customer profile. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number associated with the customer profile. A phone number can contain 9–16 digits, with an optional `+` prefix. |
| `referenceId` | `string \| undefined` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string \| undefined` | Optional | A custom note associated with the customer profile. |
| `birthday` | `string \| undefined` | Optional | The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.<br>For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998.<br>You can also specify this value in `YYYY-MM-DD` format. |
| `taxIds` | [`CustomerTaxIds \| undefined`](../../doc/models/customer-tax-ids.md) | Optional | Represents the tax ID associated with a [customer profile](../../doc/models/customer.md). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.<br>For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids). |

## Example (as JSON)

```json
{
  "address": {
    "address_line_1": "500 Electric Ave",
    "address_line_2": "Suite 600",
    "administrative_district_level_1": "NY",
    "country": "US",
    "locality": "New York",
    "postal_code": "10003"
  },
  "email_address": "Amelia.Earhart@example.com",
  "family_name": "Earhart",
  "given_name": "Amelia",
  "note": "a customer",
  "phone_number": "1-212-555-4240",
  "reference_id": "YOUR_REFERENCE_ID"
}
```

