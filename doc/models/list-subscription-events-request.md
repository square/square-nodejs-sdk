
# List Subscription Events Request

Defines parameters in a
[ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents)
endpoint request.

## Structure

`ListSubscriptionEventsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number` | Optional | The upper limit on the number of subscription events to return<br>in the response.<br><br>Default: `200` |

## Example (as JSON)

```json
{
  "cursor": "cursor6",
  "limit": 172
}
```

