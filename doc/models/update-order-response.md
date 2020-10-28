
# Update Order Response

Defines the fields that are included in the response body of
a request to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.

## Structure

`UpdateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order`](/doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. Order objects also<br>include information on any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "order": {
    "version": 2,
    "total_money": {
      "currency": "USD",
      "amount": 900
    },
    "source": {
      "name": "Cookies"
    },
    "line_items": [
      {
        "total_tax_money": {
          "currency": "USD",
          "amount": 0
        },
        "total_money": {
          "amount": 500,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 500,
          "currency": "USD"
        },
        "base_price_money": {
          "amount": 500,
          "currency": "USD"
        },
        "quantity": "1",
        "total_discount_money": {
          "currency": "USD",
          "amount": 0
        },
        "name": "Small Coffee",
        "uid": "EuYkakhmu3ksHIds5Hiot",
        "variation_total_price_money": {
          "amount": 500,
          "currency": "USD"
        }
      },
      {
        "total_money": {
          "amount": 400,
          "currency": "USD"
        },
        "gross_sales_money": {
          "currency": "USD",
          "amount": 400
        },
        "total_tax_money": {
          "currency": "USD",
          "amount": 0
        },
        "variation_total_price_money": {
          "currency": "USD",
          "amount": 400
        },
        "name": "COOKIE",
        "uid": "cookie_uid",
        "base_price_money": {
          "amount": 200,
          "currency": "USD"
        },
        "quantity": "2",
        "total_discount_money": {
          "amount": 0,
          "currency": "USD"
        }
      }
    ],
    "state": "OPEN",
    "total_service_charge_money": {
      "amount": 0,
      "currency": "USD"
    },
    "id": "DREk7wJcyXNHqULq8JJ2iPAsluJZY",
    "location_id": "MXVQSVNDGN3C8",
    "total_tax_money": {
      "amount": 0,
      "currency": "USD"
    },
    "created_at": "2019-08-23T18:26:18.243Z",
    "total_discount_money": {
      "amount": 0,
      "currency": "USD"
    },
    "net_amounts": {
      "service_charge_money": {
        "currency": "USD",
        "amount": 0
      },
      "total_money": {
        "amount": 900,
        "currency": "USD"
      },
      "discount_money": {
        "currency": "USD",
        "amount": 0
      },
      "tax_money": {
        "currency": "USD",
        "amount": 0
      }
    },
    "updated_at": "2019-08-23T18:33:47.523Z"
  }
}
```

