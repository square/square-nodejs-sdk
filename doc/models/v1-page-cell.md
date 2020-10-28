
# V1 Page Cell

V1PageCell

## Structure

`V1PageCell`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page_id` | `string` | Optional | The unique identifier of the page the cell is included on. |
| `row` | `number` | Optional | The row of the cell. Always an integer between 0 and 4, inclusive. |
| `column` | `number` | Optional | The column of the cell. Always an integer between 0 and 4, inclusive. |
| `object_type` | [`string`](/doc/models/v1-page-cell-object-type.md) | Optional | - |
| `object_id` | `string` | Optional | The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER. |
| `placeholder_type` | [`string`](/doc/models/v1-page-cell-placeholder-type.md) | Optional | - |

## Example (as JSON)

```json
{
  "page_id": "page_id0",
  "row": 30,
  "column": 204,
  "object_type": "ITEM",
  "object_id": "object_id8"
}
```

