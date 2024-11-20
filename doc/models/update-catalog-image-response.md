
# Update Catalog Image Response

## Structure

`UpdateCatalogImageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `image` | [`CatalogObject \| undefined`](../../doc/models/catalog-object.md) | Optional | The wrapper object for the catalog entries of a given object type.<br><br>Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.<br><br>For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.<br><br>In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |

## Example (as JSON)

```json
{
  "image": {
    "id": "L52QOQN2SW3M5QTF9JOCQKNB",
    "image_data": {
      "caption": "A picture of a cup of coffee",
      "name": "Coffee",
      "url": "https://..."
    },
    "type": "IMAGE",
    "updated_at": "updated_at2",
    "version": 100,
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
      }
    },
    "catalog_v1_ids": [
      {
        "catalog_v1_id": "catalog_v1_id4",
        "location_id": "location_id4"
      },
      {
        "catalog_v1_id": "catalog_v1_id4",
        "location_id": "location_id4"
      },
      {
        "catalog_v1_id": "catalog_v1_id4",
        "location_id": "location_id4"
      }
    ]
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

