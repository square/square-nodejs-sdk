
# Loyalty Account Mapping

Associates a loyalty account with the buyer's phone number.
For more information, see
[Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).

## Structure

`LoyaltyAccountMapping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-assigned ID of the mapping.<br>**Constraints**: *Maximum Length*: `36` |
| `type` | `string` | Required | The type of mapping.<br>**Default**: `'PHONE'`<br>*Default: `'PHONE'`* |
| `value` | `string` | Required | The phone number, in E.164 format. For example, "+14155551111".<br>**Constraints**: *Minimum Length*: `1` |
| `createdAt` | `string` | Optional | The timestamp when the mapping was created, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "type0",
  "value": "value2",
  "created_at": "created_at2"
}
```

