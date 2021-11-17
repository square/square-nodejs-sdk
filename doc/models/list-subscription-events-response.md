
# List Subscription Events Response

Defines output parameters in a response from the
[ListSubscriptionEvents](/doc/api/subscriptions.md#list-subscription-events).

## Structure

`ListSubscriptionEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscriptionEvents` | [`SubscriptionEvent[] \| undefined`](/doc/models/subscription-event.md) | Optional | The retrieved subscription events. |
| `cursor` | `string \| undefined` | Optional | When the total number of resulting subscription events exceeds the limit of a paged response,<br>the response includes a cursor for you to use in a subsequent request to fetch the next set of events.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |

## Example (as JSON)

```json
{
  "subscription_events": [
    {
      "effective_date": "2020-04-24",
      "id": "06809161-3867-4598-8269-8aea5be4f9de",
      "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "START_SUBSCRIPTION"
    },
    {
      "effective_date": "2020-05-06",
      "id": "a0c08083-5db0-4800-85c7-d398de4fbb6e",
      "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "subscription_event_type": "STOP_SUBSCRIPTION"
    }
  ]
}
```

