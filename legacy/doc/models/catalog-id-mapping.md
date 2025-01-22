
# Catalog Id Mapping

A mapping between a temporary client-supplied ID and a permanent server-generated ID.

When calling [UpsertCatalogObject](../../doc/api/catalog.md#upsert-catalog-object) or
[BatchUpsertCatalogObjects](../../doc/api/catalog.md#batch-upsert-catalog-objects) to
create a [CatalogObject](../../doc/models/catalog-object.md) instance, you can supply
a temporary ID for the to-be-created object, especially when the object is to be referenced
elsewhere in the same request body. This temporary ID can be any string unique within
the call, but must be prefixed by "#".

After the request is submitted and the object created, a permanent server-generated ID is assigned
to the new object. The permanent ID is unique across the Square catalog.

## Structure

`CatalogIdMapping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientObjectId` | `string \| null \| undefined` | Optional | The client-supplied temporary `#`-prefixed ID for a new `CatalogObject`. |
| `objectId` | `string \| null \| undefined` | Optional | The permanent ID for the CatalogObject created by the server. |

## Example (as JSON)

```json
{
  "client_object_id": "client_object_id8",
  "object_id": "object_id0"
}
```

