
# Batch Retrieve Inventory Counts Request

## Structure

`BatchRetrieveInventoryCountsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalog_object_ids` | `string[]` | Optional | Filters results by `CatalogObject` ID.<br>Only applied when set. Max size is 1000 IDs. Default: unset. |
| `location_ids` | `string[]` | Optional | Filters results by `Location` ID. Only<br>applied when set. Default: unset. |
| `updated_after` | `string` | Optional | Provided as an RFC 3339 timestamp. Returns results whose<br>`calculated_at` value is after the given time. Default: UNIX epoch<br>(`1970-01-01T00:00:00Z`). |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "catalog_object_ids": [
    "W62UWFY35CWMYGVWK6TWJDNI"
  ],
  "location_ids": [
    "59TNP9SA8VGDA"
  ],
  "updated_after": "2016-11-16T00:00:00.000Z"
}
```

