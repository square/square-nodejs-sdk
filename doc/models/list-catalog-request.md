
# List Catalog Request

## Structure

`ListCatalogRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>The page size is currently set to be 100.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `types` | `string \| undefined` | Optional | An optional case-insensitive, comma-separated list of object types to retrieve.<br><br>The valid values are defined in the [CatalogObjectType](/doc/models/catalog-object-type.md) enum, including<br>`ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,<br>`MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.<br><br>If this is unspecified, the operation returns objects of all the types at the version of the Square API used to make the request. |
| `catalogVersion` | `bigint \| undefined` | Optional | The specific version of the catalog objects to be included in the response.<br>This allows you to retrieve historical<br>versions of objects. The specified version value is matched against<br>the [CatalogObject](/doc/models/catalog-object.md)s' `version` attribute. |

## Example (as JSON)

```json
{
  "cursor": "cursor6",
  "types": "types6",
  "catalog_version": 126
}
```

