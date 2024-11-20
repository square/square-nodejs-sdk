
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
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

