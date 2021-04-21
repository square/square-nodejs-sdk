
# Batch Retrieve Catalog Objects Request

## Structure

`BatchRetrieveCatalogObjectsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectIds` | `string[]` | Required | The IDs of the CatalogObjects to be retrieved. |
| `includeRelatedObjects` | `boolean` | Optional | If `true`, the response will include additional objects that are related to the<br>requested objects, as follows:<br><br>If the `objects` field of the response contains a CatalogItem, its associated<br>CatalogCategory objects, CatalogTax objects, CatalogImage objects and<br>CatalogModifierLists will be returned in the `related_objects` field of the<br>response. If the `objects` field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response. |
| `catalogVersion` | `bigint` | Optional | The specific version of the catalog objects to be included in the response.<br>This allows you to retrieve historical versions of objects. The specified version value is matched against<br>the [CatalogObject](/doc/models/catalog-object.md)s' `version` attribute. |

## Example (as JSON)

```json
{
  "include_related_objects": true,
  "object_ids": [
    "W62UWFY35CWMYGVWK6TWJDNI",
    "AA27W3M2GGTF3H6AVPNB77CK"
  ]
}
```

