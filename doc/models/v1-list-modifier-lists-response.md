
# V1 List Modifier Lists Response

## Structure

`V1ListModifierListsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1ModifierList[]`](/doc/models/v1-modifier-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "name": "name7",
      "selection_type": "MULTIPLE",
      "modifier_options": [
        {
          "id": "id9",
          "name": "name9",
          "price_money": {
            "amount": 155,
            "currency_code": "NPR"
          },
          "on_by_default": true,
          "ordinal": 127
        },
        {
          "id": "id0",
          "name": "name0",
          "price_money": {
            "amount": 154,
            "currency_code": "NOK"
          },
          "on_by_default": false,
          "ordinal": 128
        },
        {
          "id": "id1",
          "name": "name1",
          "price_money": {
            "amount": 153,
            "currency_code": "NIO"
          },
          "on_by_default": true,
          "ordinal": 129
        }
      ],
      "v2_id": "v2_id5"
    },
    {
      "id": "id8",
      "name": "name8",
      "selection_type": "SINGLE",
      "modifier_options": [
        {
          "id": "id8",
          "name": "name8",
          "price_money": {
            "amount": 156,
            "currency_code": "NZD"
          },
          "on_by_default": false,
          "ordinal": 126
        },
        {
          "id": "id9",
          "name": "name9",
          "price_money": {
            "amount": 155,
            "currency_code": "NPR"
          },
          "on_by_default": true,
          "ordinal": 127
        }
      ],
      "v2_id": "v2_id4"
    }
  ]
}
```

