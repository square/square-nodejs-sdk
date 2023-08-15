
# Square Account Details

Additional details about Square Account payments.

## Structure

`SquareAccountDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentSourceToken` | `string \| null \| undefined` | Optional | Unique identifier for the payment source used for this payment.<br>**Constraints**: *Maximum Length*: `255` |
| `errors` | [`Error[] \| null \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |

## Example (as JSON)

```json
{
  "payment_source_token": "payment_source_token4",
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

