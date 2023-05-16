
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
        "key": "key8",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 82,
        "visibility": "VISIBILITY_READ_WRITE_VALUES",
        "definition": {
          "key": "key8",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name8",
          "description": "description8",
          "visibility": "VISIBILITY_HIDDEN"
        }
      },
      "idempotency_key": "idempotency_key6",
      "order_id": "order_id4"
    },
    "key1": {
      "custom_attribute": {
        "key": "key9",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 83,
        "visibility": "VISIBILITY_READ_ONLY",
        "definition": {
          "key": "key9",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name9",
          "description": "description9",
          "visibility": "VISIBILITY_READ_ONLY"
        }
      },
      "idempotency_key": "idempotency_key7",
      "order_id": "order_id5"
    },
    "key2": {
      "custom_attribute": {
        "key": "key0",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 84,
        "visibility": "VISIBILITY_HIDDEN",
        "definition": {
          "key": "key0",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name0",
          "description": "description0",
          "visibility": "VISIBILITY_READ_WRITE_VALUES"
        }
      },
      "idempotency_key": "idempotency_key8",
      "order_id": "order_id6"
    }
  }
}
```

