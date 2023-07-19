
# V1 List Refunds Response

## Structure

`V1ListRefundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Refund[] \| undefined`](../../doc/models/v1-refund.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "type": "PARTIAL",
      "reason": "reason7",
      "refunded_money": {
        "amount": 17,
        "currency_code": "USS"
      },
      "refunded_processing_fee_money": {
        "amount": 59,
        "currency_code": "ANG"
      },
      "refunded_tax_money": {
        "amount": 115,
        "currency_code": "LSL"
      }
    },
    {
      "type": "FULL",
      "reason": "reason6",
      "refunded_money": {
        "amount": 18,
        "currency_code": "UYI"
      },
      "refunded_processing_fee_money": {
        "amount": 60,
        "currency_code": "AOA"
      },
      "refunded_tax_money": {
        "amount": 116,
        "currency_code": "LTL"
      }
    }
  ]
}
```

