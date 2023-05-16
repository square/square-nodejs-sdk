
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
    "version": 1,
    "id": "id2",
    "description": "description2",
    "order_id": "order_id6",
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
  }
}
```

