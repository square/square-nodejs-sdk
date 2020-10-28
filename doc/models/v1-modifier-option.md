
# V1 Modifier Option

V1ModifierOption

## Structure

`V1ModifierOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The modifier option's unique ID. |
| `name` | `string` | Optional | The modifier option's name. |
| `price_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `on_by_default` | `boolean` | Optional | If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE. |
| `ordinal` | `number` | Optional | Indicates the modifier option's list position when displayed in Square Point of Sale and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order. |
| `modifier_list_id` | `string` | Optional | The ID of the modifier list the option belongs to. |
| `v2_id` | `string` | Optional | The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "price_money": {
    "amount": 202,
    "currency_code": "XBB"
  },
  "on_by_default": false,
  "ordinal": 80
}
```

