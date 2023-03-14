
# Bulk Upsert Customer Custom Attributes Request

Represents a [BulkUpsertCustomerCustomAttributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes) request.

## Structure

`BulkUpsertCustomerCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>`](../../doc/models/bulk-upsert-customer-custom-attributes-request-customer-custom-attribute-upsert-request.md) | Required | A map containing 1 to 25 individual upsert requests. For each request, provide an<br>arbitrary ID that is unique for this `BulkUpsertCustomerCustomAttributes` request and the<br>information needed to create or update a custom attribute. |

## Example (as JSON)

```json
{
  "values": {
    "key0": {
      "customer_id": "customer_id8",
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null,
        "updated_at": null,
        "created_at": null
      },
      "idempotency_key": null
    },
    "key1": {
      "customer_id": "customer_id9",
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null,
        "updated_at": null,
        "created_at": null
      },
      "idempotency_key": null
    },
    "key2": {
      "customer_id": "customer_id0",
      "custom_attribute": {
        "key": null,
        "value": null,
        "version": null,
        "visibility": null,
        "definition": null,
        "updated_at": null,
        "created_at": null
      },
      "idempotency_key": null
    }
  }
}
```

