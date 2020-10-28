
# Customer

Represents a Square customer profile, which can have one or more
cards on file associated with it.

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | A unique Square-assigned ID for the customer profile. |
| `created_at` | `string` | Optional | The timestamp when the customer profile was created, in RFC 3339 format. |
| `updated_at` | `string` | Optional | The timestamp when the customer profile was last updated, in RFC 3339 format. |
| `cards` | [`Card[]`](/doc/models/card.md) | Optional | Payment details of cards stored on file for the customer profile. |
| `given_name` | `string` | Optional | The given (i.e., first) name associated with the customer profile. |
| `family_name` | `string` | Optional | The family (i.e., last) name associated with the customer profile. |
| `nickname` | `string` | Optional | A nickname for the customer profile. |
| `company_name` | `string` | Optional | A business name associated with the customer profile. |
| `email_address` | `string` | Optional | The email address associated with the customer profile. |
| `address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `phone_number` | `string` | Optional | The 11-digit phone number associated with the customer profile. |
| `birthday` | `string` | Optional | The birthday associated with the customer profile, in RFC-3339 format.<br>Year is optional, timezone and times are not allowed.<br>For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st.<br>`1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__. |
| `reference_id` | `string` | Optional | An optional, second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string` | Optional | A custom note associated with the customer profile. |
| `preferences` | [`CustomerPreferences`](/doc/models/customer-preferences.md) | Optional | Represents communication preferences for the customer profile. |
| `groups` | [`CustomerGroupInfo[]`](/doc/models/customer-group-info.md) | Optional | The customer groups and segments the customer belongs to. This deprecated field has been replaced with  the dedicated `group_ids` for customer groups and the dedicated `segment_ids` field for customer segments. You can retrieve information about a given customer group and segment respectively using the Customer Groups API and Customer Segments API. |
| `creation_source` | [`string`](/doc/models/customer-creation-source.md) | Optional | Indicates the method used to create the customer profile. |
| `group_ids` | `string[]` | Optional | The IDs of customer groups the customer belongs to. |
| `segment_ids` | `string[]` | Optional | The IDs of segments the customer belongs to. |

## Example (as JSON)

```json
{
  "id": "id0",
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "cards": [
    {
      "id": "id7",
      "card_brand": "AMERICAN_EXPRESS",
      "last_4": "last_49",
      "exp_month": 79,
      "exp_year": 217
    },
    {
      "id": "id8",
      "card_brand": "MASTERCARD",
      "last_4": "last_40",
      "exp_month": 78,
      "exp_year": 218
    }
  ],
  "given_name": "given_name2"
}
```

