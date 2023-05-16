
# Catalog Object Batch

A batch of catalog objects.

## Structure

`CatalogObjectBatch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objects` | [`CatalogObject[]`](../../doc/models/catalog-object.md) | Required | A list of CatalogObjects belonging to this batch. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "type": "CUSTOM_ATTRIBUTE_DEFINITION",
      "id": "id8",
      "item_data": {
        "object": {
          "id": "#Cocoa",
          "item_data": {
            "abbreviation": "Ch",
            "description": "Hot chocolate",
            "name": "Cocoa",
            "visibility": "PRIVATE"
          },
          "present_at_all_locations": true,
          "type": "ITEM"
        }
      },
      "category_data": {
        "object": {
          "category_data": {
            "name": "Beverages"
          },
          "id": "#Beverages",
          "present_at_all_locations": true,
          "type": "CATEGORY"
        }
      },
      "tax_data": {
        "object": {
          "id": "#SalesTax",
          "present_at_all_locations": true,
          "tax_data": {
            "calculation_phase": "TAX_SUBTOTAL_PHASE",
            "enabled": true,
            "fee_applies_to_custom_amounts": true,
            "inclusion_type": "ADDITIVE",
            "name": "Sales Tax",
            "percentage": "5.0"
          },
          "type": "TAX"
        }
      },
      "discount_data": {
        "object": {
          "discount_data": {
            "discount_type": "FIXED_PERCENTAGE",
            "label_color": "red",
            "name": "Welcome to the Dark(Roast) Side!",
            "percentage": "5.4",
            "pin_required": false
          },
          "id": "#Maythe4th",
          "present_at_all_locations": true,
          "type": "DISCOUNT"
        }
      },
      "modifier_list_data": {
        "id": "#MilkType",
        "modifier_list_data": {
          "allow_quantities": false,
          "modifiers": [
            {
              "modifier_data": {
                "name": "Whole Milk",
                "price_money": {
                  "amount": 0,
                  "currency": "USD"
                }
              },
              "present_at_all_locations": true,
              "type": "MODIFIER"
            },
            {
              "modifier_data": {
                "name": "Almond Milk",
                "price_money": {
                  "amount": 250,
                  "currency": "USD"
                }
              },
              "present_at_all_locations": true,
              "type": "MODIFIER"
            },
            {
              "modifier_data": {
                "name": "Soy Milk",
                "price_money": {
                  "amount": 250,
                  "currency": "USD"
                }
              },
              "present_at_all_locations": true,
              "type": "MODIFIER"
            }
          ],
          "name": "Milk Type",
          "selection_type": "SINGLE"
        },
        "present_at_all_locations": true,
        "type": "MODIFIER_LIST"
      },
      "modifier_data": {
        "object": {
          "modifier_data": {
            "name": "Almond Milk",
            "price_money": {
              "amount": 250,
              "currency": "USD"
            }
          },
          "present_at_all_locations": true,
          "type": "MODIFIER"
        }
      },
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
    }
  ]
}
```

