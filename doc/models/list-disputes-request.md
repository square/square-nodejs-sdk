
# List Disputes Request

Defines the request parameters for the `ListDisputes` endpoint.

## Structure

`ListDisputesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |
| `states` | [`string[]`](/doc/models/dispute-state.md) | Optional | The dispute states to filter the result.<br>If not specified, the endpoint returns all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`,<br>or `LOST`).<br>See [DisputeState](#type-disputestate) for possible values |
| `locationId` | `string` | Optional | The ID of the location for which to return a list of disputes. If not specified, the endpoint returns<br>all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`) associated with all locations. |

## Example (as JSON)

```json
{}
```

