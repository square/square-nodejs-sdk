
# Create Terminal Action Response

## Structure

`CreateTerminalActionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `action` | [`TerminalAction \| undefined`](../../doc/models/terminal-action.md) | Optional | Represents an action processed by the Square Terminal. |

## Example (as JSON)

```json
{
  "action": {
    "app_id": "APP_ID",
    "created_at": "2021-07-28T23:22:07.476Z",
    "deadline_duration": "PT5M",
    "device_id": "DEVICE_ID",
    "id": "termapia:jveJIAkkAjILHkdCE",
    "location_id": "LOCATION_ID",
    "save_card_options": {
      "customer_id": "CUSTOMER_ID",
      "reference_id": "user-id-1"
    },
    "status": "PENDING",
    "type": "SAVE_CARD",
    "updated_at": "2021-07-28T23:22:07.476Z",
    "cancel_reason": "TIMED_OUT"
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

