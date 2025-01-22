
# Calculate Order Response

## Structure

`CalculateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "order": {
    "created_at": "2020-05-18T16:30:49.614Z",
    "discounts": [
      {
        "applied_money": {
          "amount": 550,
          "currency": "USD"
        },
        "name": "50% Off",
        "percentage": "50",
        "scope": "ORDER",
        "type": "FIXED_PERCENTAGE",
        "uid": "zGsRZP69aqSSR9lq9euSPB"
      }
    ],
    "line_items": [
      {
        "applied_discounts": [
          {
            "applied_money": {
              "amount": 250,
              "currency": "USD"
            },
            "discount_uid": "zGsRZP69aqSSR9lq9euSPB",
            "uid": "9zr9S4dxvPAixvn0lpa1VC"
          }
        ],
        "base_price_money": {
          "amount": 500,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 500,
          "currency": "USD"
        },
        "name": "Item 1",
        "quantity": "1",
        "total_discount_money": {
          "amount": 250,
          "currency": "USD"
        },
        "total_money": {
          "amount": 250,
          "currency": "USD"
        },
        "total_service_charge_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_tax_money": {
          "amount": 0,
          "currency": "USD"
        },
        "uid": "ULkg0tQTRK2bkU9fNv3IJD",
        "variation_total_price_money": {
          "amount": 500,
          "currency": "USD"
        },
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
        "applied_discounts": [
          {
            "applied_money": {
              "amount": 300,
              "currency": "USD"
            },
            "discount_uid": "zGsRZP69aqSSR9lq9euSPB",
            "uid": "qa8LwwZK82FgSEkQc2HYVC"
          }
        ],
        "base_price_money": {
          "amount": 300,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 600,
          "currency": "USD"
        },
        "name": "Item 2",
        "quantity": "2",
        "total_discount_money": {
          "amount": 300,
          "currency": "USD"
        },
        "total_money": {
          "amount": 300,
          "currency": "USD"
        },
        "total_service_charge_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_tax_money": {
          "amount": 0,
          "currency": "USD"
        },
        "uid": "mumY8Nun4BC5aKe2yyx5a",
        "variation_total_price_money": {
          "amount": 600,
          "currency": "USD"
        },
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
    ],
    "location_id": "D7AVYMEAPJ3A3",
    "net_amounts": {
      "discount_money": {
        "amount": 550,
        "currency": "USD"
      },
      "service_charge_money": {
        "amount": 0,
        "currency": "USD"
      },
      "tax_money": {
        "amount": 0,
        "currency": "USD"
      },
      "tip_money": {
        "amount": 0,
        "currency": "USD"
      },
      "total_money": {
        "amount": 550,
        "currency": "USD"
      }
    },
    "state": "OPEN",
    "total_discount_money": {
      "amount": 550,
      "currency": "USD"
    },
    "total_money": {
      "amount": 550,
      "currency": "USD"
    },
    "total_service_charge_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_tax_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_tip_money": {
      "amount": 0,
      "currency": "USD"
    },
    "updated_at": "2020-05-18T16:30:49.614Z",
    "version": 1,
    "id": "id6",
    "reference_id": "reference_id4",
    "source": {
      "name": "name4"
    },
    "customer_id": "customer_id4"
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

