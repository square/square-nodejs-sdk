
# Bulk Delete Order Custom Attributes Request Delete Custom Attribute

Represents one delete within the bulk operation.

## Structure

`BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | The key of the custom attribute to delete.  This key must match the key<br>of an existing custom attribute definition.<br>**Constraints**: *Minimum Length*: `1`, *Pattern*: `^([a-zA-Z0-9_-]+:)?[a-zA-Z0-9_-]{1,60}$` |
| `orderId` | `string` | Required | The ID of the target [order](entity:Order).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "key": "key2",
  "order_id": "order_id6"
}
```

