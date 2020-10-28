
# Batch Upsert Catalog Objects Request

## Structure

`BatchUpsertCatalogObjectsRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `idempotency_key` | `string` | A value you specify that uniquely identifies this<br>request among all your requests. A common way to create<br>a valid idempotency key is to use a Universally unique<br>identifier (UUID).<br><br>If you're unsure whether a particular request was successful,<br>you can reattempt it with the same idempotency key without<br>worrying about creating duplicate objects.<br><br>See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. |
| `batches` | [`CatalogObjectBatch[]`](/doc/models/catalog-object-batch.md) | A batch of CatalogObjects to be inserted/updated atomically.<br>The objects within a batch will be inserted in an all-or-nothing fashion, i.e., if an error occurs<br>attempting to insert or update an object within a batch, the entire batch will be rejected. However, an error<br>in one batch will not affect other batches within the same request.<br><br>For each object, its `updated_at` field is ignored and replaced with a current [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), and its<br>`is_deleted` field must not be set to `true`.<br><br>To modify an existing object, supply its ID. To create a new object, use an ID starting<br>with `#`. These IDs may be used to create relationships between an object and attributes of<br>other objects that reference it. For example, you can create a CatalogItem with<br>ID `#ABC` and a CatalogItemVariation with its `item_id` attribute set to<br>`#ABC` in order to associate the CatalogItemVariation with its parent<br>CatalogItem.<br><br>Any `#`-prefixed IDs are valid only within a single atomic batch, and will be replaced by server-generated IDs.<br><br>Each batch may contain up to 1,000 objects. The total number of objects across all batches for a single request<br>may not exceed 10,000. If either of these limits is violated, an error will be returned and no objects will<br>be inserted or updated. |

## Example (as JSON)

```json
{
  "idempotency_key": "789ff020-f723-43a9-b4b5-43b5dc1fa3dc",
  "batches": [
    {
      "objects": [
        {
          "type": "ITEM",
          "id": "#Tea",
          "present_at_all_locations": true,
          "item_data": {
            "name": "Tea",
            "description": "Hot Leaf Juice",
            "category_id": "#Beverages",
            "tax_ids": [
              "#SalesTax"
            ],
            "variations": [
              {
                "type": "ITEM_VARIATION",
                "id": "#Tea_Mug",
                "present_at_all_locations": true,
                "item_variation_data": {
                  "item_id": "#Tea",
                  "name": "Mug",
                  "pricing_type": "FIXED_PRICING",
                  "price_money": {
                    "amount": 150,
                    "currency": "USD"
                  }
                }
              }
            ]
          }
        },
        {
          "type": "ITEM",
          "id": "#Coffee",
          "present_at_all_locations": true,
          "item_data": {
            "name": "Coffee",
            "description": "Hot Bean Juice",
            "category_id": "#Beverages",
            "tax_ids": [
              "#SalesTax"
            ],
            "variations": [
              {
                "type": "ITEM_VARIATION",
                "id": "#Coffee_Regular",
                "present_at_all_locations": true,
                "item_variation_data": {
                  "item_id": "#Coffee",
                  "name": "Regular",
                  "pricing_type": "FIXED_PRICING",
                  "price_money": {
                    "amount": 250,
                    "currency": "USD"
                  }
                }
              },
              {
                "type": "ITEM_VARIATION",
                "id": "#Coffee_Large",
                "present_at_all_locations": true,
                "item_variation_data": {
                  "item_id": "#Coffee",
                  "name": "Large",
                  "pricing_type": "FIXED_PRICING",
                  "price_money": {
                    "amount": 350,
                    "currency": "USD"
                  }
                }
              }
            ]
          }
        },
        {
          "type": "CATEGORY",
          "id": "#Beverages",
          "present_at_all_locations": true,
          "category_data": {
            "name": "Beverages"
          }
        },
        {
          "type": "TAX",
          "id": "#SalesTax",
          "present_at_all_locations": true,
          "tax_data": {
            "name": "Sales Tax",
            "calculation_phase": "TAX_SUBTOTAL_PHASE",
            "inclusion_type": "ADDITIVE",
            "percentage": "5.0",
            "applies_to_custom_amounts": true,
            "enabled": true
          }
        }
      ]
    }
  ]
}
```

