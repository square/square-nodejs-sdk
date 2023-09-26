
# Update Payment Link Request

## Structure

`UpdatePaymentLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentLink` | [`PaymentLink`](../../doc/models/payment-link.md) | Required | - |

## Example (as JSON)

```json
{
  "payment_link": {
    "checkout_options": {
      "ask_for_shipping_address": true,
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
    "version": 1,
    "id": "id2",
    "description": "description2",
    "order_id": "order_id6",
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
  }
}
```

