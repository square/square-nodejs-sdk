
# Get Payout Response

## Structure

`GetPayoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payout` | [`Payout \| undefined`](../../doc/models/payout.md) | Optional | An accounting of the amount owed the seller and record of the actual transfer to their<br>external bank account or to the Square balance. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |

## Example (as JSON)

```json
{
  "payout": {
    "amount_money": {
      "amount": -103,
      "currency_code": "USD",
      "currency": "HKD"
    },
    "arrival_date": "2022-03-24",
    "created_at": "2022-03-24T03:07:09Z",
    "destination": {
      "id": "bact:ZPp3oedR3AeEUNd3z7",
      "type": "BANK_ACCOUNT"
    },
    "id": "po_f3c0fb38-a5ce-427d-b858-52b925b72e45",
    "location_id": "L88917AVBK2S5",
    "status": "PAID",
    "type": "BATCH",
    "updated_at": "2022-03-24T03:07:09Z",
    "version": 1
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

