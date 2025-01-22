
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
  "subscription_events": [
    {
      "effective_date": "2020-04-24",
      "id": "06809161-3867-4598-8269-8aea5be4f9de",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "START_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2020-05-01",
      "id": "f2736603-cd2e-47ec-8675-f815fff54f88",
      "info": {
        "code": "CUSTOMER_NO_NAME",
        "detail": "The customer with ID `V74BMG0GPS2KNCWJE1BTYJ37Y0` does not have a name on record."
      },
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "DEACTIVATE_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2022-05-01",
      "id": "b426fc85-6859-450b-b0d0-fe3a5d1b565f",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "RESUME_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2022-09-01",
      "id": "09f14de1-2f53-4dae-9091-49aa53f83d01",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "PAUSE_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2022-12-01",
      "id": "f28a73ac-1a1b-4b0f-8eeb-709a72945776",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "RESUME_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2023-04-01",
      "id": "1eee8790-472d-4efe-8c69-8ad84e9cefe0",
      "plan_variation_id": "02CD53CFA4d1498AFAD42",
      "subscription_event_type": "PLAN_CHANGE",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    },
    {
      "effective_date": "2023-06-21",
      "id": "a0c08083-5db0-4800-85c7-d398de4fbb6e",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "STOP_SUBSCRIPTION",
      "monthly_billing_anchor_date": 16,
      "info": {
        "detail": "detail6",
        "code": "CUSTOMER_DELETED"
      },
      "phases": [
        {
          "uid": "uid0",
          "ordinal": 78,
          "order_template_id": "order_template_id2",
          "plan_phase_uid": "plan_phase_uid6"
        }
      ]
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "cursor": "cursor4"
}
```

