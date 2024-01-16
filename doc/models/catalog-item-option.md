
# Catalog Item Option

A group of variations for a `CatalogItem`.

## Structure

`CatalogItemOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The item option's display name for the seller. Must be unique across<br>all item options. This is a searchable attribute for use in applicable query filters. |
| `displayName` | `string \| null \| undefined` | Optional | The item option's display name for the customer. This is a searchable attribute for use in applicable query filters. |
| `description` | `string \| null \| undefined` | Optional | The item option's human-readable description. Displayed in the Square<br>Point of Sale app for the seller and in the Online Store or on receipts for<br>the buyer. This is a searchable attribute for use in applicable query filters. |
| `showColors` | `boolean \| null \| undefined` | Optional | If true, display colors for entries in `values` when present. |
| `values` | [`CatalogObject[] \| null \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of CatalogObjects containing the<br>`CatalogItemOptionValue`s for this item. |

## Example (as JSON)

```json
{
  "name": "name2",
  "display_name": "display_name2",
  "description": "description2",
  "show_colors": false,
  "values": [
    {
      "type": "IMAGE",
      "id": "id0",
      "updated_at": "updated_at6",
      "version": 116,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key1": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key2": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    },
    {
      "type": "IMAGE",
      "id": "id0",
      "updated_at": "updated_at6",
      "version": 116,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key1": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key2": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    }
  ]
}
```

