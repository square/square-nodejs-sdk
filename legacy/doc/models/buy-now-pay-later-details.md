
# Buy Now Pay Later Details

Additional details about a Buy Now Pay Later payment type.

## Structure

`BuyNowPayLaterDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| null \| undefined` | Optional | The brand used for the Buy Now Pay Later payment.<br>The brand can be `AFTERPAY`, `CLEARPAY` or `UNKNOWN`.<br>**Constraints**: *Maximum Length*: `50` |
| `afterpayDetails` | [`AfterpayDetails \| undefined`](../../doc/models/afterpay-details.md) | Optional | Additional details about Afterpay payments. |
| `clearpayDetails` | [`ClearpayDetails \| undefined`](../../doc/models/clearpay-details.md) | Optional | Additional details about Clearpay payments. |

## Example (as JSON)

```json
{
  "brand": "brand6",
  "afterpay_details": {
    "email_address": "email_address4"
  },
  "clearpay_details": {
    "email_address": "email_address4"
  }
}
```

