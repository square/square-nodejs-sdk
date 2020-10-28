
# V1 List Inventory Request

## Structure

`V1ListInventoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number` | Optional | The maximum number of inventory entries to return in a single response. This value cannot exceed 1000. |
| `batch_token` | `string` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |

## Example (as JSON)

```json
{
  "limit": 172,
  "batch_token": "batch_token2"
}
```

