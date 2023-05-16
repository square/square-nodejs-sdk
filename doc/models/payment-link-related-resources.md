
# Payment Link Related Resources

## Structure

`PaymentLinkRelatedResources`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orders` | [`Order[] \| undefined`](../../doc/models/order.md) | Optional | The order associated with the payment link. |
| `subscriptionPlans` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | The subscription plan associated with the payment link. |

## Example (as JSON)

```json
{
  "orders": [
    {
      "id": "id6",
      "location_id": "location_id0",
      "reference_id": "reference_id6",
      "source": {
        "name": "name8"
      },
      "customer_id": "customer_id4",
      "line_items": [
        {
          "uid": "uid3",
          "name": "name3",
          "quantity": "quantity9",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name1",
                "abbreviation": "abbreviation3"
              },
              "area_unit": "METRIC_SQUARE_CENTIMETER",
              "length_unit": "IMPERIAL_MILE",
              "volume_unit": "METRIC_MILLILITER",
              "weight_unit": "IMPERIAL_POUND"
            },
            "precision": 217,
            "catalog_object_id": "catalog_object_id7",
            "catalog_version": 105
          },
          "note": "note1",
          "catalog_object_id": "catalog_object_id3"
        }
      ]
    },
    {
      "id": "id7",
      "location_id": "location_id1",
      "reference_id": "reference_id5",
      "source": {
        "name": "name7"
      },
      "customer_id": "customer_id5",
      "line_items": [
        {
          "uid": "uid2",
          "name": "name2",
          "quantity": "quantity8",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name0",
                "abbreviation": "abbreviation2"
              },
              "area_unit": "IMPERIAL_SQUARE_MILE",
              "length_unit": "METRIC_MILLIMETER",
              "volume_unit": "IMPERIAL_CUBIC_YARD",
              "weight_unit": "IMPERIAL_STONE"
            },
            "precision": 216,
            "catalog_object_id": "catalog_object_id8",
            "catalog_version": 106
          },
          "note": "note2",
          "catalog_object_id": "catalog_object_id4"
        },
        {
          "uid": "uid3",
          "name": "name3",
          "quantity": "quantity9",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name1",
                "abbreviation": "abbreviation3"
              },
              "area_unit": "METRIC_SQUARE_CENTIMETER",
              "length_unit": "IMPERIAL_MILE",
              "volume_unit": "METRIC_MILLILITER",
              "weight_unit": "IMPERIAL_POUND"
            },
            "precision": 217,
            "catalog_object_id": "catalog_object_id7",
            "catalog_version": 105
          },
          "note": "note1",
          "catalog_object_id": "catalog_object_id3"
        },
        {
          "uid": "uid4",
          "name": "name4",
          "quantity": "quantity0",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "METRIC_SQUARE_METER",
              "length_unit": "IMPERIAL_YARD",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 218,
            "catalog_object_id": "catalog_object_id6",
            "catalog_version": 104
          },
          "note": "note0",
          "catalog_object_id": "catalog_object_id2"
        }
      ]
    }
  ],
  "subscription_plans": [
    {
      "type": "QUICK_AMOUNTS_SETTINGS",
      "id": "id6",
      "updated_at": "updated_at2",
      "version": 126,
      "is_deleted": false,
      "custom_attribute_values": {
        "key0": {
          "name": "name7",
          "string_value": "string_value1",
          "custom_attribute_definition_id": "custom_attribute_definition_id5",
          "type": "BOOLEAN",
          "number_value": "number_value7"
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
        }
      ]
    },
    {
      "type": "CUSTOM_ATTRIBUTE_DEFINITION",
      "id": "id7",
      "updated_at": "updated_at3",
      "version": 127,
      "is_deleted": true,
      "custom_attribute_values": {
        "key0": {
          "name": "name8",
          "string_value": "string_value2",
          "custom_attribute_definition_id": "custom_attribute_definition_id4",
          "type": "STRING",
          "number_value": "number_value8"
        },
        "key1": {
          "name": "name7",
          "string_value": "string_value1",
          "custom_attribute_definition_id": "custom_attribute_definition_id5",
          "type": "BOOLEAN",
          "number_value": "number_value7"
        },
        "key2": {
          "name": "name6",
          "string_value": "string_value0",
          "custom_attribute_definition_id": "custom_attribute_definition_id6",
          "type": "NUMBER",
          "number_value": "number_value6"
        }
      },
      "catalog_v1_ids": [
        {
          "catalog_v1_id": "catalog_v1_id1",
          "location_id": "location_id1"
        },
        {
          "catalog_v1_id": "catalog_v1_id2",
          "location_id": "location_id2"
        },
        {
          "catalog_v1_id": "catalog_v1_id3",
          "location_id": "location_id3"
        }
      ]
    }
  ]
}
```

