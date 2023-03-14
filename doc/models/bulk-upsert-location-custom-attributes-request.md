
# Bulk Upsert Location Custom Attributes Request

Represents a [BulkUpsertLocationCustomAttributes](../../doc/api/location-custom-attributes.md#bulk-upsert-location-custom-attributes) request.

## Structure

`BulkUpsertLocationCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>`](../../doc/models/bulk-upsert-location-custom-attributes-request-location-custom-attribute-upsert-request.md) | Required | A map containing 1 to 25 individual upsert requests. For each request, provide an<br>arbitrary ID that is unique for this `BulkUpsertLocationCustomAttributes` request and the<br>information needed to create or update a custom attribute. |

## Example (as JSON)

```json
{
  "values": {
    "key0": {
      "location_id": "location_id4",
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
      "location_id": "location_id5",
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
      "location_id": "location_id6",
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

