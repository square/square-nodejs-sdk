
# Retrieve Cash Drawer Shift Response

## Structure

`RetrieveCashDrawerShiftResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cashDrawerShift` | [`CashDrawerShift \| undefined`](../../doc/models/cash-drawer-shift.md) | Optional | This model gives the details of a cash drawer shift.<br>The cash_payment_money, cash_refund_money, cash_paid_in_money,<br>and cash_paid_out_money fields are all computed by summing their respective<br>event types. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "cash_drawer_shift": {
    "cash_paid_in_money": {
      "amount": 10000,
      "currency": "USD"
    },
    "cash_paid_out_money": {
      "amount": -10000,
      "currency": "USD"
    },
    "cash_payment_money": {
      "amount": 100,
      "currency": "USD"
    },
    "cash_refunds_money": {
      "amount": -100,
      "currency": "USD"
    },
    "closed_at": "2019-11-22T00:44:49.000Z",
    "closed_cash_money": {
      "amount": 9970,
      "currency": "USD"
    },
    "closing_team_member_id": "",
    "description": "Misplaced some change",
    "device": {
      "name": "My iPad"
    },
    "ended_at": "2019-11-22T00:44:49.000Z",
    "ending_team_member_id": "",
    "expected_cash_money": {
      "amount": 10000,
      "currency": "USD"
    },
    "id": "DCC99978-09A6-4926-849F-300BE9C5793A",
    "opened_at": "2019-11-22T00:42:54.000Z",
    "opened_cash_money": {
      "amount": 10000,
      "currency": "USD"
    },
    "opening_team_member_id": "",
    "state": "CLOSED"
  },
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

