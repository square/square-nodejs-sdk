
# Range

The range of a number value between the specified lower and upper bounds.

## Structure

`Range`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `min` | `string \| null \| undefined` | Optional | The lower bound of the number range. At least one of `min` or `max` must be specified.<br>If unspecified, the results will have no minimum value. |
| `max` | `string \| null \| undefined` | Optional | The upper bound of the number range. At least one of `min` or `max` must be specified.<br>If unspecified, the results will have no maximum value. |

## Example (as JSON)

```json
{
  "min": "min8",
  "max": "max0"
}
```

