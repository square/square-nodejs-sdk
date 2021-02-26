
# Update Item Taxes Request

## Structure

`UpdateItemTaxesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemIds` | `string[]` | Required | IDs for the CatalogItems associated with the CatalogTax objects being updated. |
| `taxesToEnable` | `string[]` | Optional | IDs of the CatalogTax objects to enable. |
| `taxesToDisable` | `string[]` | Optional | IDs of the CatalogTax objects to disable. |

## Example (as JSON)

```json
{
  "item_ids": [
    "H42BRLUJ5KTZTTMPVSLFAACQ",
    "2JXOBJIHCWBQ4NZ3RIXQGJA6"
  ],
  "taxes_to_disable": [
    "AQCEGCEBBQONINDOHRGZISEX"
  ],
  "taxes_to_enable": [
    "4WRCNHCJZDVLSNDQ35PP6YAD"
  ]
}
```

