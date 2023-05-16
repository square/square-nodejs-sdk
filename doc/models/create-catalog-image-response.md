
# Create Catalog Image Response

## Structure

`CreateCatalogImageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `image` | [`CatalogObject \| undefined`](../../doc/models/catalog-object.md) | Optional | The wrapper object for the catalog entries of a given object type.<br><br>Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.<br><br>For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.<br><br>In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |

## Example (as JSON)

```json
{
  "image": {
    "id": "KQLFFHA6K6J3YQAQAWDQAL57",
    "image_data": {
      "caption": "A picture of a cup of coffee",
      "url": "https://..."
    },
    "type": "IMAGE",
    "updated_at": "updated_at2",
    "version": 100,
    "is_deleted": false,
    "custom_attribute_values": {
      "key0": {
        "name": "name9",
        "string_value": "string_value3",
        "custom_attribute_definition_id": "custom_attribute_definition_id3",
        "type": "BOOLEAN",
        "number_value": "number_value9"
      },
      "key1": {
        "name": "name0",
        "string_value": "string_value4",
        "custom_attribute_definition_id": "custom_attribute_definition_id2",
        "type": "STRING",
        "number_value": "number_value0"
      }
    },
    "catalog_v1_ids": [
      {
        "catalog_v1_id": "catalog_v1_id0",
        "location_id": "location_id0"
      },
      {
        "catalog_v1_id": "catalog_v1_id1",
        "location_id": "location_id1"
      },
      {
        "catalog_v1_id": "catalog_v1_id2",
        "location_id": "location_id2"
      }
    ]
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

