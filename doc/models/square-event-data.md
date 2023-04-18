
# Square Event Data

## Structure

`SquareEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | Name of the affected object’s type. |
| `id` | `string \| undefined` | Optional | ID of the affected object. |
| `deleted` | `boolean \| undefined` | Optional | Is true if the affected object was deleted. Otherwise absent. |
| `object` | `Record<string, unknown> \| undefined` | Optional | An object containing fields and values relevant to the event. Is absent if affected object was deleted. |

## Example (as JSON)

```json
{
  "type": "type0",
  "id": "id0",
  "deleted": false,
  "object": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

