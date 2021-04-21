
# Retrieve Catalog Object Request

## Structure

`RetrieveCatalogObjectRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeRelatedObjects` | `boolean` | Optional | If `true`, the response will include additional objects that are related to the<br>requested object, as follows:<br><br>If the `object` field of the response contains a `CatalogItem`, its associated<br>`CatalogCategory`, `CatalogTax`, `CatalogImage` and `CatalogModifierList` objects will<br>be returned in the `related_objects` field of the response. If the `object` field of<br>the response contains a `CatalogItemVariation`, its parent `CatalogItem` will be returned<br>in the `related_objects` field of the response.<br><br>Default value: `false` |
| `catalogVersion` | `bigint` | Optional | Requests objects as of a specific version of the catalog. This allows you to retrieve historical<br>versions of objects. The value to retrieve a specific version of an object can be found<br>in the version field of [CatalogObject](/doc/models/catalog-object.md)s. |

## Example (as JSON)

```json
{
  "include_related_objects": false,
  "catalog_version": 126
}
```

