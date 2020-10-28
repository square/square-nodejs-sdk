
# Create Checkout Response

Defines the fields that are included in the response body of
a request to the __CreateCheckout__ endpoint.

## Structure

`CreateCheckoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkout` | [`Checkout`](/doc/models/checkout.md) | Optional | Square Checkout lets merchants accept online payments for supported<br>payment types using a checkout workflow hosted on squareup.com. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "checkout": {
    "id": "CAISEHGimXh-C3RIT4og1a6u1qw",
    "checkout_page_url": "https://connect.squareup.com/v2/checkout?c=CAISEHGimXh-C3RIT4og1a6u1qw&l=CYTKRM7R7JMV8",
    "ask_for_shipping_address": true,
    "merchant_support_email": "merchant+support@website.com",
    "pre_populate_buyer_email": "example@email.com",
    "pre_populate_shipping_address": {
      "address_line_1": "1455 Market St.",
      "address_line_2": "Suite 600",
      "locality": "San Francisco",
      "administrative_district_level_1": "CA",
      "postal_code": "94103",
      "country": "US",
      "first_name": "Jane",
      "last_name": "Doe"
    },
    "redirect_url": "https://merchant.website.com/order-confirm",
    "order": {
      "location_id": "location_id",
      "customer_id": "customer_id",
      "reference_id": "reference_id",
      "line_items": [
        {
          "name": "Printed T Shirt",
          "quantity": "2",
          "applied_taxes": [
            {
              "tax_uid": "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
              "applied_money": {
                "amount": 103,
                "currency": "USD"
              }
            }
          ],
          "applied_discounts": [
            {
              "discount_uid": "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
              "applied_money": {
                "amount": 100,
                "currency": "USD"
              }
            }
          ],
          "base_price_money": {
            "amount": 1500,
            "currency": "USD"
          },
          "total_tax_money": {
            "amount": 103,
            "currency": "USD"
          },
          "total_discount_money": {
            "amount": 100,
            "currency": "USD"
          },
          "total_money": {
            "amount": 1503,
            "currency": "USD"
          }
        },
        {
          "name": "Slim Jeans",
          "quantity": "1",
          "base_price_money": {
            "amount": 2500,
            "currency": "USD"
          },
          "total_money": {
            "amount": 2500,
            "currency": "USD"
          }
        },
        {
          "name": "Wooven Sweater",
          "quantity": "3",
          "base_price_money": {
            "amount": 3500,
            "currency": "USD"
          },
          "total_money": {
            "amount": 10500,
            "currency": "USD"
          }
        }
      ],
      "taxes": [
        {
          "uid": "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
          "type": "INCLUSIVE",
          "percentage": "7.75",
          "scope": "LINE_ITEM"
        }
      ],
      "discounts": [
        {
          "uid": "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
          "type": "FIXED_AMOUNT",
          "scope": "LINE_ITEM",
          "amount_money": {
            "amount": 100,
            "currency": "USD"
          },
          "applied_money": {
            "amount": 100,
            "currency": "USD"
          }
        }
      ],
      "total_money": {
        "amount": 14503,
        "currency": "USD"
      },
      "total_tax_money": {
        "amount": 103,
        "currency": "USD"
      },
      "total_discount_money": {
        "amount": 100,
        "currency": "USD"
      }
    },
    "created_at": "2017-06-16T22:25:35Z",
    "version": 1,
    "additional_recipients": [
      {
        "location_id": "057P5VYJ4A5X1",
        "description": "Application fees",
        "amount_money": {
          "amount": 60,
          "currency": "USD"
        }
      }
    ]
  }
}
```

