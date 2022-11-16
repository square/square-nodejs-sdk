
# Bulk Upsert Order Custom Attributes Request

Represents a bulk upsert request for one or more order custom attributes.

## Structure

`BulkUpsertOrderCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>`](../../doc/models/bulk-upsert-order-custom-attributes-request-upsert-custom-attribute.md) | Required | A map of requests that correspond to individual upsert operations for custom attributes. |

## Example (as JSON)

```json
{
  "values": {
    "key0": {
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null
      },
      "idempotency_key": null,
      "order_id": "order_id4"
    },
    "key1": {
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null
      },
      "idempotency_key": null,
      "order_id": "order_id5"
    },
    "key2": {
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null
      },
      "idempotency_key": null,
      "order_id": "order_id6"
    }
  }
}
```

