
# V1 Create Modifier List Request

## Structure

`V1CreateModifierListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1ModifierList`](/doc/models/v1-modifier-list.md) | Optional | V1ModifierList |

## Example (as JSON)

```json
{
  "body": {
    "id": "id6",
    "name": "name6",
    "selection_type": "SINGLE",
    "modifier_options": [
      {
        "id": "id0",
        "name": "name0",
        "price_money": {
          "amount": 104,
          "currency_code": "UAH"
        },
        "on_by_default": false,
        "ordinal": 178
      },
      {
        "id": "id1",
        "name": "name1",
        "price_money": {
          "amount": 103,
          "currency_code": "TZS"
        },
        "on_by_default": true,
        "ordinal": 179
      }
    ],
    "v2_id": "v2_id6"
  }
}
```

