
# Bulk Upsert Location Custom Attributes Request Location Custom Attribute Upsert Request

Represents an individual upsert request in a [BulkUpsertLocationCustomAttributes](../../doc/api/location-custom-attributes.md#bulk-upsert-location-custom-attributes)
request. An individual request contains a location ID, the custom attribute to create or update,
and an optional idempotency key.

## Structure

`BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Required | The ID of the target [location](../../doc/models/location.md).<br>**Constraints**: *Minimum Length*: `1` |
| `customAttribute` | [`CustomAttribute`](../../doc/models/custom-attribute.md) | Required | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `idempotencyKey` | `string \| undefined` | Optional | A unique identifier for this individual upsert request, used to ensure idempotency.<br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "custom_attribute": {
    "key": null,
    "value": null,
    "version": null,
    "visibility": null,
    "definition": null
  },
  "idempotency_key": null
}
```

