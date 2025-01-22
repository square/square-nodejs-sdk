
# Pay Order Response

Defines the fields that are included in the response body of a request to the
[PayOrder](../../doc/api/orders.md#pay-order) endpoint.

## Structure

`PayOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |

## Example (as JSON)

```json
{
  "order": {
    "closed_at": "2019-08-06T02:47:37.140Z",
    "created_at": "2019-08-06T02:47:35.693Z",
    "id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
    "line_items": [
      {
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
          "amount": 0,
          "currency": "USD"
        },
        "total_money": {
          "amount": 500,
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
        "uid": "QW6kofLHJK7JEKMjlSVP5C",
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
        "base_price_money": {
          "amount": 750,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 1500,
          "currency": "USD"
        },
        "name": "Item 2",
        "quantity": "2",
        "total_discount_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_money": {
          "amount": 1500,
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
        "uid": "zhw8MNfRGdFQMI2WE1UBJD",
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
    "location_id": "P3CCK6HSNDAS7",
    "net_amounts": {
      "discount_money": {
        "amount": 0,
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
        "amount": 2000,
        "currency": "USD"
      }
    },
    "source": {
      "name": "Source Name"
    },
    "state": "COMPLETED",
    "tenders": [
      {
        "amount_money": {
          "amount": 1000,
          "currency": "USD"
        },
        "card_details": {
          "card": {
            "card_brand": "VISA",
            "exp_month": 2,
            "exp_year": 2022,
            "fingerprint": "sq-1-n_BL15KP87ClDa4-h2nXOI0fp5VnxNH6hfhzqhptTfAgxgLuGFcg6jIPngDz4IkkTQ",
            "last_4": "1111"
          },
          "entry_method": "KEYED",
          "status": "CAPTURED"
        },
        "created_at": "2019-08-06T02:47:36.293Z",
        "id": "EnZdNAlWCmfh6Mt5FMNST1o7taB",
        "location_id": "P3CCK6HSNDAS7",
        "payment_id": "EnZdNAlWCmfh6Mt5FMNST1o7taB",
        "transaction_id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
        "type": "CARD"
      },
      {
        "amount_money": {
          "amount": 1000,
          "currency": "USD"
        },
        "card_details": {
          "card": {
            "card_brand": "VISA",
            "exp_month": 2,
            "exp_year": 2022,
            "fingerprint": "sq-1-n_BL15KP87ClDa4-h2nXOI0fp5VnxNH6hfhzqhptTfAgxgLuGFcg6jIPngDz4IkkTQ",
            "last_4": "1111"
          },
          "entry_method": "KEYED",
          "status": "CAPTURED"
        },
        "created_at": "2019-08-06T02:47:36.809Z",
        "id": "0LRiVlbXVwe8ozu4KbZxd12mvaB",
        "location_id": "P3CCK6HSNDAS7",
        "payment_id": "0LRiVlbXVwe8ozu4KbZxd12mvaB",
        "transaction_id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
        "type": "CARD"
      }
    ],
    "total_discount_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_money": {
      "amount": 2000,
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
    "updated_at": "2019-08-06T02:47:37.140Z",
    "version": 4,
    "reference_id": "reference_id4",
    "customer_id": "customer_id4"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

