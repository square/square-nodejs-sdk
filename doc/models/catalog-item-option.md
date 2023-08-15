
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
  "name": "name0",
  "display_name": "display_name0",
  "description": "description0",
  "show_colors": false,
  "values": [
    {
      "type": "TAX",
      "id": "id0",
      "updated_at": "updated_at6",
      "version": 100,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "SELECTION",
          "number_value": "number_value1"
        },
        "key1": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "STRING",
          "number_value": "number_value0"
        },
        "key2": {
          "name": "name9",
          "string_value": "string_value3",
          "custom_attribute_definition_id": "custom_attribute_definition_id3",
          "type": "BOOLEAN",
          "number_value": "number_value9"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        },
        {
          "catalog_v1_id": "catalog_v1_id5",
          "location_id": "location_id5"
        },
        {
          "catalog_v1_id": "catalog_v1_id6",
          "location_id": "location_id6"
        }
      ]
    },
    {
      "type": "ITEM_VARIATION",
      "id": "id1",
      "updated_at": "updated_at7",
      "version": 101,
      "is_deleted": true,
      "custom_attribute_values": {
        "key0": {
          "name": "name2",
          "string_value": "string_value6",
          "custom_attribute_definition_id": "custom_attribute_definition_id0",
          "type": "NUMBER",
          "number_value": "number_value2"
        },
        "key1": {
          "name": "name1",
          "string_value": "string_value5",
          "custom_attribute_definition_id": "custom_attribute_definition_id1",
          "type": "SELECTION",
          "number_value": "number_value1"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id5",
          "location_id": "location_id5"
        }
      ]
    },
    {
      "type": "CATEGORY",
      "id": "id2",
      "updated_at": "updated_at8",
      "version": 102,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name3",
          "string_value": "string_value7",
          "custom_attribute_definition_id": "custom_attribute_definition_id9",
          "type": "BOOLEAN",
          "number_value": "number_value3"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id6",
          "location_id": "location_id6"
        },
        {
          "catalog_v1_id": "catalog_v1_id7",
          "location_id": "location_id7"
        }
      ]
    }
  ]
}
```

