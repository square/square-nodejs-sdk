
# Create Payment Link Response

## Structure

`CreatePaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `paymentLink` | [`PaymentLink \| undefined`](../../doc/models/payment-link.md) | Optional | - |
| `relatedResources` | [`PaymentLinkRelatedResources \| undefined`](../../doc/models/payment-link-related-resources.md) | Optional | - |

## Example (as JSON)

```json
{
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
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "payment_link": {
    "id": "id2",
    "version": 184,
    "description": "description2",
    "order_id": "order_id6",
    "checkout_options": {
      "allow_tipping": false,
      "custom_fields": [
        {
          "title": "title8"
        },
        {
          "title": "title8"
        }
      ],
      "subscription_plan_id": "subscription_plan_id8",
      "redirect_url": "redirect_url2",
      "merchant_support_email": "merchant_support_email8"
    },
    "pre_populated_data": {
      "buyer_email": "buyer_email8",
      "buyer_phone_number": "buyer_phone_number0",
      "buyer_address": {
        "address_line_1": "address_line_12",
        "address_line_2": "address_line_22",
        "address_line_3": "address_line_38",
        "locality": "locality2",
        "sublocality": "sublocality2"
      }
    }
  },
  "related_resources": {
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
}
```

