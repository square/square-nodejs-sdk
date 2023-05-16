
# Create Payment Link Request

## Structure

`CreatePaymentLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Optional | A unique string that identifies this `CreatePaymentLinkRequest` request.<br>If you do not provide a unique string (or provide an empty string as the value),<br>the endpoint treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).<br>**Constraints**: *Maximum Length*: `192` |
| `description` | `string \| undefined` | Optional | A description of the payment link. You provide this optional description that is useful in your<br>application context. It is not used anywhere.<br>**Constraints**: *Maximum Length*: `4096` |
| `quickPay` | [`QuickPay \| undefined`](../../doc/models/quick-pay.md) | Optional | Describes an ad hoc item and price to generate a quick pay checkout link.<br>For more information,<br>see [Quick Pay Checkout](https://developer.squareup.com/docs/checkout-api/quick-pay-checkout). |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `checkoutOptions` | [`CheckoutOptions \| undefined`](../../doc/models/checkout-options.md) | Optional | - |
| `prePopulatedData` | [`PrePopulatedData \| undefined`](../../doc/models/pre-populated-data.md) | Optional | Describes buyer data to prepopulate in the payment form.<br>For more information,<br>see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations). |
| `paymentNote` | `string \| undefined` | Optional | A note for the payment. After processing the payment, Square adds this note to the resulting `Payment`.<br>**Constraints**: *Maximum Length*: `500` |

## Example (as JSON)

```json
{
  "idempotency_key": "cd9e25dc-d9f2-4430-aedb-61605070e95f",
  "quick_pay": {
    "location_id": "A9Y43N9ABXZBP",
    "name": "Auto Detailing",
    "price_money": {
      "amount": 10000,
      "currency": "USD"
    }
  },
  "description": "description0",
  "order": {
    "id": "id6",
    "location_id": "location_id0",
    "reference_id": "reference_id4",
    "source": {
      "name": "name2"
    },
    "customer_id": "customer_id4",
    "line_items": [
      {
        "uid": "uid1",
        "name": "name1",
        "quantity": "quantity7",
        "quantity_unit": {
          "measurement_unit": {
            "custom_unit": {
              "name": "name9",
              "abbreviation": "abbreviation1"
            },
            "area_unit": "METRIC_SQUARE_CENTIMETER",
            "length_unit": "IMPERIAL_MILE",
            "volume_unit": "GENERIC_FLUID_OUNCE",
            "weight_unit": "METRIC_KILOGRAM"
          },
          "precision": 201,
          "catalog_object_id": "catalog_object_id1",
          "catalog_version": 135
        },
        "note": "note3",
        "catalog_object_id": "catalog_object_id5"
      }
    ]
  },
  "checkout_options": {
    "allow_tipping": false,
    "custom_fields": [
      {
        "title": "title9"
      },
      {
        "title": "title0"
      }
    ],
    "subscription_plan_id": "subscription_plan_id8",
    "redirect_url": "redirect_url2",
    "merchant_support_email": "merchant_support_email8"
  }
}
```

