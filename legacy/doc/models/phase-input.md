
# Phase Input

Represents the arguments used to construct a new phase.

## Structure

`PhaseInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ordinal` | `bigint` | Required | index of phase in total subscription plan |
| `orderTemplateId` | `string \| null \| undefined` | Optional | id of order to be used in billing |

## Example (as JSON)

```json
{
  "ordinal": 234,
  "order_template_id": "order_template_id4"
}
```

