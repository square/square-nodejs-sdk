
# Create Checkout Request

Defines the parameters that can be included in the body of
a request to the __CreateCheckout__ endpoint.

## Structure

`CreateCheckoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` |  | A unique string that identifies this checkout among others<br>you've created. It can be any valid string but must be unique for every<br>order sent to Square Checkout for a given location ID.<br><br>The idempotency key is used to avoid processing the same order more than<br>once. If you're unsure whether a particular checkout was created<br>successfully, you can reattempt it with the same idempotency key and all the<br>same other parameters without worrying about creating duplicates.<br><br>We recommend using a random number/string generator native to the language<br>you are working in to generate strings for your idempotency keys.<br><br>See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information. |
| `order` | [`CreateOrderRequest`](/doc/models/create-order-request.md) |  | - |
| `ask_for_shipping_address` | `boolean` | Optional | If `true`, Square Checkout will collect shipping information on your<br>behalf and store that information with the transaction information in your<br>Square Dashboard.<br><br>Default: `false`. |
| `merchant_support_email` | `string` | Optional | The email address to display on the Square Checkout confirmation page<br>and confirmation email that the buyer can use to contact the merchant.<br><br>If this value is not set, the confirmation page and email will display the<br>primary email address associated with the merchant's Square account.<br><br>Default: none; only exists if explicitly set. |
| `pre_populate_buyer_email` | `string` | Optional | If provided, the buyer's email is pre-populated on the checkout page<br>as an editable text field.<br><br>Default: none; only exists if explicitly set. |
| `pre_populate_shipping_address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `redirect_url` | `string` | Optional | The URL to redirect to after checkout is completed with `checkoutId`,<br>Square's `orderId`, `transactionId`, and `referenceId` appended as URL<br>parameters. For example, if the provided redirect_url is<br>`http://www.example.com/order-complete`, a successful transaction redirects<br>the customer to:<br><br>`http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`<br><br>If you do not provide a redirect URL, Square Checkout will display an order<br>confirmation page on your behalf; however Square strongly recommends that<br>you provide a redirect URL so you can verify the transaction results and<br>finalize the order through your existing/normal confirmation workflow.<br><br>Default: none; only exists if explicitly set. |
| `additional_recipients` | [`ChargeRequestAdditionalRecipient[]`](/doc/models/charge-request-additional-recipient.md) | Optional | The basic primitive of multi-party transaction. The value is optional.<br>The transaction facilitated by you can be split from here.<br><br>If you provide this value, the `amount_money` value in your additional_recipients<br>must not be more than 90% of the `total_money` calculated by Square for your order.<br>The `location_id` must be the valid location of the app owner merchant.<br><br>This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.<br><br>This field is currently not supported in sandbox. |
| `note` | `string` | Optional | An optional note to associate with the checkout object.<br><br>This value cannot exceed 60 characters. |

## Example (as JSON)

```json
{
  "idempotency_key": "86ae1696-b1e3-4328-af6d-f1e04d947ad6",
  "redirect_url": "https://merchant.website.com/order-confirm",
  "order": {
    "idempotency_key": "12ae1696-z1e3-4328-af6d-f1e04d947gd4",
    "order": {
      "location_id": "location_id",
      "customer_id": "customer_id",
      "reference_id": "reference_id",
      "line_items": [
        {
          "name": "Printed T Shirt",
          "quantity": "2",
          "base_price_money": {
            "amount": 1500,
            "currency": "USD"
          },
          "applied_discounts": [
            {
              "discount_uid": "56ae1696-z1e3-9328-af6d-f1e04d947gd4"
            }
          ],
          "applied_taxes": [
            {
              "tax_uid": "38ze1696-z1e3-5628-af6d-f1e04d947fg3"
            }
          ]
        },
        {
          "name": "Slim Jeans",
          "quantity": "1",
          "base_price_money": {
            "amount": 2500,
            "currency": "USD"
          }
        },
        {
          "name": "Woven Sweater",
          "quantity": "3",
          "base_price_money": {
            "amount": 3500,
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
          }
        }
      ]
    }
  },
  "additional_recipients": [
    {
      "location_id": "057P5VYJ4A5X1",
      "description": "Application fees",
      "amount_money": {
        "amount": 60,
        "currency": "USD"
      }
    }
  ],
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
  }
}
```

