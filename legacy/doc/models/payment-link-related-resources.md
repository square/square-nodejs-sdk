
# Payment Link Related Resources

## Structure

`PaymentLinkRelatedResources`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orders` | [`Order[] \| null \| undefined`](../../doc/models/order.md) | Optional | The order associated with the payment link. |
| `subscriptionPlans` | [`CatalogObject[] \| null \| undefined`](../../doc/models/catalog-object.md) | Optional | The subscription plan associated with the payment link. |

## Example (as JSON)

```json
{
  "orders": [
    {
      "id": "id2",
      "location_id": "location_id6",
      "reference_id": "reference_id0",
      "source": {
        "name": "name4"
      },
      "customer_id": "customer_id0",
      "line_items": [
        {
          "uid": "uid8",
          "name": "name8",
          "quantity": "quantity4",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
          "catalog_object_id": "catalog_object_id2"
        },
        {
          "uid": "uid8",
          "name": "name8",
          "quantity": "quantity4",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
          "catalog_object_id": "catalog_object_id2"
        }
      ]
    },
    {
      "id": "id2",
      "location_id": "location_id6",
      "reference_id": "reference_id0",
      "source": {
        "name": "name4"
      },
      "customer_id": "customer_id0",
      "line_items": [
        {
          "uid": "uid8",
          "name": "name8",
          "quantity": "quantity4",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
          "catalog_object_id": "catalog_object_id2"
        },
        {
          "uid": "uid8",
          "name": "name8",
          "quantity": "quantity4",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
          "catalog_object_id": "catalog_object_id2"
        }
      ]
    }
  ],
  "subscription_plans": [
    {
      "type": "ITEM_OPTION",
      "id": "id4",
      "updated_at": "updated_at0",
      "version": 112,
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
    {
      "type": "ITEM_OPTION",
      "id": "id4",
      "updated_at": "updated_at0",
      "version": 112,
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
    }
  ]
}
```

