
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
    "cover-count": {
      "key": "cover-count",
      "order_id": "7BbXGEIWNldxAzrtGf9GPVZTwZ4F"
    },
    "table-number": {
      "key": "table-number",
      "order_id": "7BbXGEIWNldxAzrtGf9GPVZTwZ4F"
    }
  }
}
```

