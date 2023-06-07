
# List Subscription Events Response

Defines output parameters in a response from the
[ListSubscriptionEvents](../../doc/api/subscriptions.md#list-subscription-events).

## Structure

`ListSubscriptionEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscriptionEvents` | [`SubscriptionEvent[] \| undefined`](../../doc/models/subscription-event.md) | Optional | The retrieved subscription events. |
| `cursor` | `string \| undefined` | Optional | When the total number of resulting subscription events exceeds the limit of a paged response,<br>the response includes a cursor for you to use in a subsequent request to fetch the next set of events.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
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
  ],
  "subscription_events": [
    {
      "id": "id6",
      "subscription_event_type": "STOP_SUBSCRIPTION",
      "effective_date": "effective_date4",
      "info": {
        "detail": "detail2",
        "code": "CUSTOMER_NO_NAME"
      },
      "phases": [
        {
          "uid": "uid1",
          "ordinal": 17,
          "order_template_id": "order_template_id3",
          "plan_phase_uid": "plan_phase_uid7"
        },
        {
          "uid": "uid0",
          "ordinal": 16,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        },
        {
          "uid": "uid9",
          "ordinal": 15,
          "order_template_id": "order_template_id1",
          "plan_phase_uid": "plan_phase_uid5"
        }
      ],
      "plan_variation_id": "plan_variation_id0"
    },
    {
      "id": "id7",
      "subscription_event_type": "PLAN_CHANGE",
      "effective_date": "effective_date3",
      "info": {
        "detail": "detail3",
        "code": "USER_PROVIDED"
      },
      "phases": [
        {
          "uid": "uid2",
          "ordinal": 18,
          "order_template_id": "order_template_id4",
          "plan_phase_uid": "plan_phase_uid8"
        },
        {
          "uid": "uid1",
          "ordinal": 17,
          "order_template_id": "order_template_id3",
          "plan_phase_uid": "plan_phase_uid7"
        }
      ],
      "plan_variation_id": "plan_variation_id1"
    }
  ],
  "cursor": "cursor6"
}
```

