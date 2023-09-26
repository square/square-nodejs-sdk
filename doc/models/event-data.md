
# Event Data

## Structure

`EventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | Name of the affected object’s type. |
| `id` | `string \| undefined` | Optional | ID of the affected object. |
| `deleted` | `boolean \| null \| undefined` | Optional | Is true if the affected object was deleted. Otherwise absent. |
| `object` | `Record<string, unknown> \| null \| undefined` | Optional | An object containing fields and values relevant to the event. Is absent if affected object was deleted. |

## Example (as JSON)

```json
{
  "type": "type2",
  "id": "id8",
  "deleted": false,
  "object": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

