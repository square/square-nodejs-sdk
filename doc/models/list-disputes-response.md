
# List Disputes Response

Defines fields in a ListDisputes response.

## Structure

`ListDisputesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `disputes` | [`Dispute[]`](/doc/models/dispute.md) | Optional | The list of Disputes. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request.<br>If unset, this is the final response.<br>For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_SHORT",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "CARD_EXPIRED",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "disputes": [
    {
      "dispute_id": "dispute_id5",
      "amount_money": {
        "amount": 29,
        "currency": "GHS"
      },
      "reason": "CANCELLED",
      "state": "INQUIRY_EVIDENCE_REQUIRED",
      "due_at": "due_at9"
    },
    {
      "dispute_id": "dispute_id6",
      "amount_money": {
        "amount": 30,
        "currency": "GIP"
      },
      "reason": "AMOUNT_DIFFERS",
      "state": "UNKNOWN_STATE",
      "due_at": "due_at8"
    },
    {
      "dispute_id": "dispute_id7",
      "amount_money": {
        "amount": 31,
        "currency": "GMD"
      },
      "reason": "EMV_LIABILITY_SHIFT",
      "state": "WAITING_THIRD_PARTY",
      "due_at": "due_at7"
    }
  ],
  "cursor": "cursor6"
}
```

