
# Dismiss Terminal Action Response

## Structure

`DismissTerminalActionResponse`

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
    "await_next_action": true,
    "await_next_action_duration": "PT5M",
    "confirmation_options": {
      "agree_button_text": "Agree",
      "body": "I agree to receive promotional emails about future events and activities.",
      "decision": {
        "has_agreed": true
      },
      "disagree_button_text": "Decline",
      "title": "Marketing communications"
    },
    "created_at": "2021-07-28T23:22:07.476Z",
    "deadline_duration": "PT5M",
    "device_id": "DEVICE_ID",
    "id": "termapia:abcdefg1234567",
    "status": "COMPLETED",
    "type": "CONFIRMATION",
    "updated_at": "2021-07-28T23:22:29.511Z",
    "cancel_reason": "TIMED_OUT"
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

