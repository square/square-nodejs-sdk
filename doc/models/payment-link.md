
# Payment Link

## Structure

`PaymentLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the payment link. |
| `version` | `number` | Required | The Square-assigned version number, which is incremented each time an update is committed to the payment link.<br>**Constraints**: `<= 65535` |
| `description` | `string \| null \| undefined` | Optional | The optional description of the `payment_link` object.<br>It is primarily for use by your application and is not used anywhere.<br>**Constraints**: *Maximum Length*: `4096` |
| `orderId` | `string \| undefined` | Optional | The ID of the order associated with the payment link.<br>**Constraints**: *Maximum Length*: `192` |
| `checkoutOptions` | [`CheckoutOptions \| undefined`](../../doc/models/checkout-options.md) | Optional | - |
| `prePopulatedData` | [`PrePopulatedData \| undefined`](../../doc/models/pre-populated-data.md) | Optional | Describes buyer data to prepopulate in the payment form.<br>For more information,<br>see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations). |
| `url` | `string \| undefined` | Optional | The shortened URL of the payment link.<br>**Constraints**: *Maximum Length*: `255` |
| `longUrl` | `string \| undefined` | Optional | The long URL of the payment link.<br>**Constraints**: *Maximum Length*: `255` |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the payment link was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the payment link was last updated, in RFC 3339 format. |
| `paymentNote` | `string \| null \| undefined` | Optional | An optional note. After Square processes the payment, this note is added to the<br>resulting `Payment`.<br>**Constraints**: *Maximum Length*: `500` |

## Example (as JSON)

```json
{
  "id": "id2",
  "version": 64,
  "description": "description8",
  "order_id": "order_id4",
  "checkout_options": {
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
```

