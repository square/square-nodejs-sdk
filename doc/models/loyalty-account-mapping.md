
# Loyalty Account Mapping

Represents the mapping that associates a loyalty account with a buyer.

Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
[Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).

## Structure

`LoyaltyAccountMapping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-assigned ID of the mapping.<br>**Constraints**: *Maximum Length*: `36` |
| `type` | [`string`](/doc/models/loyalty-account-mapping-type.md) | Optional | The type of mapping. |
| `value` | `string` | Optional | The mapping value, which is used with `type` to represent a phone number mapping. The value can be a phone number in E.164 format. For example, "+14155551111".<br><br>When specifying a mapping, the `phone_number` field is preferred to using `type` and `value`. |
| `createdAt` | `string` | Optional | The timestamp when the mapping was created, in RFC 3339 format. |
| `phoneNumber` | `string` | Optional | The phone number of the buyer, in E.164 format. For example, "+14155551111".<br><br>When specifying a mapping, this `phone_number` field is preferred to using `type` and `value`. |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "PHONE",
  "value": "value2",
  "created_at": "created_at2",
  "phone_number": "phone_number2"
}
```

