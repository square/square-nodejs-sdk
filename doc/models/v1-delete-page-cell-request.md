
# V1 Delete Page Cell Request

## Structure

`V1DeletePageCellRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `row` | `string` | Optional | The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row. |
| `column` | `string` | Optional | The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column. |

## Example (as JSON)

```json
{
  "row": "row0",
  "column": "column4"
}
```

