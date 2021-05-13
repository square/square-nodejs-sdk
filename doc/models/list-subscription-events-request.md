
# List Subscription Events Request

Defines parameters in a
[ListSubscriptionEvents](/doc/api/subscriptions.md#list-subscription-events)
endpoint request.

## Structure

`ListSubscriptionEventsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Optional | The upper limit on the number of subscription events to return<br>in the response.<br><br>Default: `200`<br>**Constraints**: `>= 1` |

## Example (as JSON)

```json
{
  "cursor": "cursor6",
  "limit": 172
}
```

