
# Calculate Order Response

## Structure

`CalculateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order`](/doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. Order objects also<br>include information on any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "order": {
    "location_id": "D7AVYMEAPJ3A3",
    "line_items": [
      {
        "uid": "ULkg0tQTRK2bkU9fNv3IJD",
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
          "amount": 250,
          "currency": "USD"
        },
        "total_money": {
          "amount": 250,
          "currency": "USD"
        },
        "variation_total_price_money": {
          "amount": 500,
          "currency": "USD"
        },
        "applied_discounts": [
          {
            "uid": "9zr9S4dxvPAixvn0lpa1VC",
            "discount_uid": "zGsRZP69aqSSR9lq9euSPB",
            "applied_money": {
              "amount": 250,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "uid": "mumY8Nun4BC5aKe2yyx5a",
        "quantity": "2",
        "name": "Item 2",
        "base_price_money": {
          "amount": 300,
          "currency": "USD"
        },
        "gross_sales_money": {
          "amount": 600,
          "currency": "USD"
        },
        "total_tax_money": {
          "amount": 0,
          "currency": "USD"
        },
        "total_discount_money": {
          "amount": 300,
          "currency": "USD"
        },
        "total_money": {
          "amount": 300,
          "currency": "USD"
        },
        "variation_total_price_money": {
          "amount": 600,
          "currency": "USD"
        },
        "applied_discounts": [
          {
            "uid": "qa8LwwZK82FgSEkQc2HYVC",
            "discount_uid": "zGsRZP69aqSSR9lq9euSPB",
            "applied_money": {
              "amount": 300,
              "currency": "USD"
            }
          }
        ]
      }
    ],
    "discounts": [
      {
        "uid": "zGsRZP69aqSSR9lq9euSPB",
        "name": "50% Off",
        "percentage": "50",
        "applied_money": {
          "amount": 550,
          "currency": "USD"
        },
        "type": "FIXED_PERCENTAGE",
        "scope": "ORDER"
      }
    ],
    "created_at": "2020-05-18T16:30:49.614Z",
    "updated_at": "2020-05-18T16:30:49.614Z",
    "state": "OPEN",
    "version": 1,
    "total_tax_money": {
      "amount": 0,
      "currency": "USD"
    },
    "total_discount_money": {
      "amount": 550,
      "currency": "USD"
    },
    "total_tip_money": {
      "amount": 0,
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
    "net_amounts": {
      "total_money": {
        "amount": 550,
        "currency": "USD"
      },
      "tax_money": {
        "amount": 0,
        "currency": "USD"
      },
      "discount_money": {
        "amount": 550,
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
    }
  }
}
```

