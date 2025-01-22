
# Upsert Catalog Object Request

## Structure

`UpsertCatalogObjectRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A value you specify that uniquely identifies this<br>request among all your requests. A common way to create<br>a valid idempotency key is to use a Universally unique<br>identifier (UUID).<br><br>If you're unsure whether a particular request was successful,<br>you can reattempt it with the same idempotency key without<br>worrying about creating duplicate objects.<br><br>See [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.<br>**Constraints**: *Minimum Length*: `1` |
| `object` | [`CatalogObject`](../../doc/models/catalog-object.md) | Required | The wrapper object for the catalog entries of a given object type.<br><br>Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.<br><br>For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.<br><br>In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.<br><br>For a more detailed discussion of the Catalog data model, please see the<br>[Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide. |

## Example (as JSON)

```json
{
  "idempotency_key": "af3d1afc-7212-4300-b463-0bfc5314a5ae",
  "object": {
    "id": "#Cocoa",
    "item_data": {
      "abbreviation": "Ch",
      "description_html": "<p><strong>Hot</strong> Chocolate</p>",
      "name": "Cocoa",
      "variations": [
        {
          "id": "#Small",
          "item_variation_data": {
            "item_id": "#Cocoa",
            "name": "Small",
            "pricing_type": "VARIABLE_PRICING"
          },
          "type": "ITEM_VARIATION"
        },
        {
          "id": "#Large",
          "item_variation_data": {
            "item_id": "#Cocoa",
            "name": "Large",
            "price_money": {
              "amount": 400,
              "currency": "USD"
            },
            "pricing_type": "FIXED_PRICING"
          },
          "type": "ITEM_VARIATION"
        }
      ]
    },
    "type": "ITEM",
    "updated_at": "updated_at8",
    "version": 4,
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
      }
    ]
  }
}
```

