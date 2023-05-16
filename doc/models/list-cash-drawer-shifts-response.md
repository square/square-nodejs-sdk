
# List Cash Drawer Shifts Response

## Structure

`ListCashDrawerShiftsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | Opaque cursor for fetching the next page of results. Cursor is not<br>present in the last page of results. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `cashDrawerShifts` | [`CashDrawerShiftSummary[] \| undefined`](../../doc/models/cash-drawer-shift-summary.md) | Optional | A collection of CashDrawerShiftSummary objects for shifts that match<br>the query. |

## Example (as JSON)

```json
{
  "cash_drawer_shifts": [
    {
      "closed_at": "2019-11-22T00:44:49.000Z",
      "closed_cash_money": {
        "amount": 9970,
        "currency": "USD"
      },
      "description": "Misplaced some change",
      "ended_at": "2019-11-22T00:44:49.000Z",
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
      "state": "CLOSED"
    }
  ],
  "cursor": "cursor6",
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

