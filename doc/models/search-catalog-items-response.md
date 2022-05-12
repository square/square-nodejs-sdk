
# Search Catalog Items Response

Defines the response body returned from the [SearchCatalogItems](../../doc/api/catalog.md#search-catalog-items) endpoint.

## Structure

`SearchCatalogItemsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `items` | [`CatalogObject[] \| undefined`](../../doc/models/catalog-object.md) | Optional | Returned items matching the specified query expressions. |
| `cursor` | `string \| undefined` | Optional | Pagination token used in the next request to return more of the search result. |
| `matchedVariationIds` | `string[] \| undefined` | Optional | Ids of returned item variations matching the specified query expression. |

## Example (as JSON)

```json
{
  "errors": null,
  "items": null,
  "cursor": null,
  "matched_variation_ids": null
}
```

