
# Customer

Represents a Square customer profile in the Customer Directory of a Square seller.

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique Square-assigned ID for the customer profile.<br><br>If you need this ID for an API request, use the ID returned when you created the customer profile or call the [SearchCustomers](api-endpoint:Customers-SearchCustomers)<br>or [ListCustomers](api-endpoint:Customers-ListCustomers) endpoint. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the customer profile was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the customer profile was last updated, in RFC 3339 format. |
| `cards` | [`Card[] \| null \| undefined`](../../doc/models/card.md) | Optional | Payment details of the credit, debit, and gift cards stored on file for the customer profile.<br><br>DEPRECATED at version 2021-06-16 and will be RETIRED at version 2024-12-18. Replaced by calling [ListCards](api-endpoint:Cards-ListCards) (for credit and debit cards on file)<br>or [ListGiftCards](api-endpoint:GiftCards-ListGiftCards) (for gift cards on file) and including the `customer_id` query parameter.<br>For more information, see [Migration notes](https://developer.squareup.com/docs/customers-api/what-it-does#migrate-customer-cards). |
| `givenName` | `string \| null \| undefined` | Optional | The given name (that is, the first name) associated with the customer profile. |
| `familyName` | `string \| null \| undefined` | Optional | The family name (that is, the last name) associated with the customer profile. |
| `nickname` | `string \| null \| undefined` | Optional | A nickname for the customer profile. |
| `companyName` | `string \| null \| undefined` | Optional | A business name associated with the customer profile. |
| `emailAddress` | `string \| null \| undefined` | Optional | The email address associated with the customer profile. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phoneNumber` | `string \| null \| undefined` | Optional | The phone number associated with the customer profile. |
| `birthday` | `string \| null \| undefined` | Optional | The birthday associated with the customer profile, in `YYYY-MM-DD` format. For example, `1998-09-21`<br>represents September 21, 1998, and `0000-09-21` represents September 21 (without a birth year). |
| `referenceId` | `string \| null \| undefined` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string \| null \| undefined` | Optional | A custom note associated with the customer profile. |
| `preferences` | [`CustomerPreferences \| undefined`](../../doc/models/customer-preferences.md) | Optional | Represents communication preferences for the customer profile. |
| `creationSource` | [`string \| undefined`](../../doc/models/customer-creation-source.md) | Optional | Indicates the method used to create the customer profile. |
| `groupIds` | `string[] \| null \| undefined` | Optional | The IDs of [customer groups](entity:CustomerGroup) the customer belongs to. |
| `segmentIds` | `string[] \| null \| undefined` | Optional | The IDs of [customer segments](entity:CustomerSegment) the customer belongs to. |
| `version` | `bigint \| undefined` | Optional | The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. |
| `taxIds` | [`CustomerTaxIds \| undefined`](../../doc/models/customer-tax-ids.md) | Optional | Represents the tax ID associated with a [customer profile](../../doc/models/customer.md). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.<br>For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids). |

## Example (as JSON)

```json
{
  "id": "id8",
  "created_at": "created_at6",
  "updated_at": "updated_at6",
  "cards": [
    {
      "id": "id8",
      "card_brand": "DISCOVER",
      "last_4": "last_40",
      "exp_month": 152,
      "exp_year": 144
    }
  ],
  "given_name": "given_name0"
}
```

