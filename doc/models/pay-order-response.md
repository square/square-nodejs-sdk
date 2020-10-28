
# Pay Order Response

Defines the fields that are included in the response body of a request to the
[PayOrder](#endpoint-payorder) endpoint.

## Structure

`PayOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `order` | [`Order`](/doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. Order objects also<br>include information on any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |

## Example (as JSON)

```json
{
  "order": {
    "id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
    "location_id": "P3CCK6HSNDAS7",
    "line_items": [
      {
        "uid": "QW6kofLHJK7JEKMjlSVP5C",
        "quantity": "1",
        "name": "Item 1",
        "base_price_money": {
          "amount": 500,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 500,
          "currency": "USD"
        },
        "total_tax_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_discount_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_money": {
          "amount": 500,
          "currency": "USD"
        }
      },
      {
        "uid": "zhw8MNfRGdFQMI2WE1UBJD",
        "quantity": "2",
        "name": "Item 2",
        "base_price_money": {
          "amount": 750,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 1500,
          "currency": "USD"
        },
        "total_tax_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_discount_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_money": {
          "amount": 1500,
          "currency": "USD"
        }
      }
    ],
    "created_at": "2019-08-06T02:47:35.693Z",
    "updated_at": "2019-08-06T02:47:37.140Z",
    "version": 4,
    "total_tax_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_discount_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "closed_at": "2019-08-06T02:47:37.140Z",
    "tenders": [
      {
        "id": "EnZdNAlWCmfh6Mt5FMNST1o7taB",
        "location_id": "P3CCK6HSNDAS7",
        "transaction_id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
        "created_at": "2019-08-06T02:47:36.293Z",
        "amount_money": {
          "amount": 1000,
          "currency": "USD"
        },
        "type": "CARD",
        "card_details": {
          "status": "CAPTURED",
          "card": {
            "card_brand": "VISA",
            "last_4": "1111",
            "exp_month": 2,
            "exp_year": 2022,
            "fingerprint": "sq-1-n_BL15KP87ClDa4-h2nXOI0fp5VnxNH6hfhzqhptTfAgxgLuGFcg6jIPngDz4IkkTQ"
          },
          "entry_method": "KEYED"
        },
        "payment_id": "EnZdNAlWCmfh6Mt5FMNST1o7taB"
      },
      {
        "id": "0LRiVlbXVwe8ozu4KbZxd12mvaB",
        "location_id": "P3CCK6HSNDAS7",
        "transaction_id": "lgwOlEityYPJtcuvKTVKT1pA986YY",
        "created_at": "2019-08-06T02:47:36.809Z",
        "amount_money": {
          "amount": 1000,
          "currency": "USD"
        },
        "type": "CARD",
        "card_details": {
          "status": "CAPTURED",
          "card": {
            "card_brand": "VISA",
            "last_4": "1111",
            "exp_month": 2,
            "exp_year": 2022,
            "fingerprint": "sq-1-n_BL15KP87ClDa4-h2nXOI0fp5VnxNH6hfhzqhptTfAgxgLuGFcg6jIPngDz4IkkTQ"
          },
          "entry_method": "KEYED"
        },
        "payment_id": "0LRiVlbXVwe8ozu4KbZxd12mvaB"
      }
    ],
    "total_service_charge_money": {
      "amount": 0,
      "currency": "USD"
    },
    "net_amounts": {
      "total_money": {
        "amount": 2000,
        "currency": "USD"
      },
      "tax_money": {
        "amount": 0,
        "currency": "USD"
      },
      "discount_money": {
        "amount": 0,
        "currency": "USD"
      },
      "tip_money": {
        "amount": 0,
        "currency": "USD"
      },
      "service_charge_money": {
        "amount": 0,
        "currency": "USD"
      }
    },
    "source": {
      "name": "Source Name"
    },
    "state": "COMPLETED"
  }
}
```

