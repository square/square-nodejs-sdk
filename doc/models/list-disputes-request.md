
# List Disputes Request

Defines request parameters for the ListDisputes endpoint.

## Structure

`ListDisputesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br>For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination). |
| `states` | [`string[]`](/doc/models/dispute-state.md) | Optional | The dispute states to filter the result.<br>If not specified, the endpoint<br>returns all open disputes (dispute status is not<br>`INQUIRY_CLOSED`, `WON`, or `LOST`).<br>See [DisputeState](#type-disputestate) for possible values |
| `location_id` | `string` | Optional | The ID of the location for which to return<br>a list of disputes. If not specified,<br>the endpoint returns all open disputes<br>(dispute status is not `INQUIRY_CLOSED`, `WON`, or<br>`LOST`) associated with all locations. |

## Example (as JSON)

```json
{}
```

