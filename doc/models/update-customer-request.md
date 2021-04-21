
# Update Customer Request

Defines the body parameters that can be included in a request to the
`UpdateCustomer` endpoint.

## Structure

`UpdateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `givenName` | `string` | Optional | The given name (that is, the first name) associated with the customer profile. |
| `familyName` | `string` | Optional | The family name (that is, the last name) associated with the customer profile. |
| `companyName` | `string` | Optional | A business name associated with the customer profile. |
| `nickname` | `string` | Optional | A nickname for the customer profile. |
| `emailAddress` | `string` | Optional | The email address associated with the customer profile. |
| `address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `phoneNumber` | `string` | Optional | The 11-digit phone number associated with the customer profile. |
| `referenceId` | `string` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string` | Optional | A custom note associated with the customer profile. |
| `birthday` | `string` | Optional | The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.<br>For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998.<br>You can also specify this value in `YYYY-MM-DD` format. |
| `version` | `bigint` | Optional | The current version of the customer profile.<br><br>As a best practice, you should include this field to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. For more information, see [Update a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#update-a-customer-profile). |

## Example (as JSON)

```json
{
  "email_address": "New.Amelia.Earhart@example.com",
  "note": "updated customer note",
  "phone_number": "",
  "version": 2
}
```

