
# Catalog Object Batch

A batch of catalog objects.

## Structure

`CatalogObjectBatch`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `objects` | [`CatalogObject[]`](/doc/models/catalog-object.md) | A list of CatalogObjects belonging to this batch. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "type": "ITEM_OPTION_VAL",
      "id": "id8",
      "updated_at": "updated_at4",
      "version": 252,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name9",
          "string_value": "string_value3",
          "custom_attribute_definition_id": "custom_attribute_definition_id3",
          "type": "SELECTION",
          "number_value": "number_value9"
        },
        "key1": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id2",
          "location_id": "location_id2"
        }
      ]
    },
    {
      "type": "ITEM_OPTION",
      "id": "id9",
      "updated_at": "updated_at5",
      "version": 253,
      "is_deleted": true,
      "custom_attribute_values": {
        "key0": {
          "name": "name0",
          "string_value": "string_value4",
          "custom_attribute_definition_id": "custom_attribute_definition_id2",
          "type": "NUMBER",
          "number_value": "number_value0"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id3",
          "location_id": "location_id3"
        },
        {
          "catalog_v1_id": "catalog_v1_id4",
          "location_id": "location_id4"
        }
      ]
    }
  ]
}
```

