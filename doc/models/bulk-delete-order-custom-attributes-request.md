
# Bulk Delete Order Custom Attributes Request

Represents a bulk delete request for one or more order custom attributes.

## Structure

`BulkDeleteOrderCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>`](../../doc/models/bulk-delete-order-custom-attributes-request-delete-custom-attribute.md) | Required | A map of requests that correspond to individual delete operations for custom attributes. |

## Example (as JSON)

```json
{
  "values": {
    "entry-1": {
      "key": "wayne-test-15",
      "order_id": "VilxhxZHuWEqDC6GQNgiLNshRMYZY"
    },
    "entry-2": {
      "key": "wayne-test-13",
      "order_id": "XNWR6zjcEXWQy6kbsIsQRTxS0wOZY"
    },
    "entry-3": {
      "key": "ca-key5",
      "order_id": "9QC9RohBVxfsaSOtYjY7KhmjqrLZY"
    }
  }
}
```

