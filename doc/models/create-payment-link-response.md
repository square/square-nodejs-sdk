
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
          "title": "title1"
        },
        {
          "title": "title2"
        }
      ],
      "subscription_plan_id": "subscription_plan_id0",
      "redirect_url": "redirect_url4",
      "merchant_support_email": "merchant_support_email0"
    },
    "pre_populated_data": {
      "buyer_email": "buyer_email6",
      "buyer_phone_number": "buyer_phone_number8",
      "buyer_address": {
        "address_line_1": "address_line_14",
        "address_line_2": "address_line_24",
        "address_line_3": "address_line_30",
        "locality": "locality4",
        "sublocality": "sublocality4"
      }
    }
  },
  "related_resources": {
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
                "area_unit": "METRIC_SQUARE_KILOMETER",
                "length_unit": "IMPERIAL_FOOT",
                "volume_unit": "GENERIC_PINT",
                "weight_unit": "METRIC_MILLIGRAM"
              },
              "precision": 99,
              "catalog_object_id": "catalog_object_id7",
              "catalog_version": 223
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
                "area_unit": "IMPERIAL_ACRE",
                "length_unit": "IMPERIAL_INCH",
                "volume_unit": "GENERIC_QUART",
                "weight_unit": "IMPERIAL_STONE"
              },
              "precision": 100,
              "catalog_object_id": "catalog_object_id6",
              "catalog_version": 222
            },
            "note": "note0",
            "catalog_object_id": "catalog_object_id2"
          }
        ]
      }
    ],
    "subscription_plans": [
      {
        "type": "PRICING_RULE",
        "id": "id0",
        "updated_at": "updated_at6",
        "version": 172,
        "is_deleted": false,
        "custom_attribute_values": {
          "key0": {
            "name": "name3",
            "string_value": "string_value7",
            "custom_attribute_definition_id": "custom_attribute_definition_id9",
            "type": "BOOLEAN",
            "number_value": "number_value3"
          },
          "key1": {
            "name": "name4",
            "string_value": "string_value8",
            "custom_attribute_definition_id": "custom_attribute_definition_id8",
            "type": "STRING",
            "number_value": "number_value4"
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
        "type": "PRODUCT_SET",
        "id": "id1",
        "updated_at": "updated_at7",
        "version": 173,
        "is_deleted": true,
        "custom_attribute_values": {
          "key0": {
            "name": "name4",
            "string_value": "string_value8",
            "custom_attribute_definition_id": "custom_attribute_definition_id8",
            "type": "STRING",
            "number_value": "number_value4"
          },
          "key1": {
            "name": "name5",
            "string_value": "string_value9",
            "custom_attribute_definition_id": "custom_attribute_definition_id7",
            "type": "SELECTION",
            "number_value": "number_value5"
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
            "catalog_v1_id": "catalog_v1_id5",
            "location_id": "location_id5"
          }
        ]
      },
      {
        "type": "TIME_PERIOD",
        "id": "id2",
        "updated_at": "updated_at8",
        "version": 174,
        "is_deleted": false,
        "custom_attribute_values": {
          "key0": {
            "name": "name5",
            "string_value": "string_value9",
            "custom_attribute_definition_id": "custom_attribute_definition_id7",
            "type": "SELECTION",
            "number_value": "number_value5"
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
}
```

