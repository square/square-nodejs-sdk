
# Search Catalog Objects Request

## Structure

`SearchCatalogObjectsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `object_types` | [`string[]`](/doc/models/catalog-object-type.md) | Optional | The desired set of object types to appear in the search results.<br>The legal values are taken from the CatalogObjectType enum: `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`,<br>`"DISCOUNT"`, `"TAX"`, `"MODIFIER"`, or `"MODIFIER_LIST"`.<br>See [CatalogObjectType](#type-catalogobjecttype) for possible values |
| `include_deleted_objects` | `boolean` | Optional | If `true`, deleted objects will be included in the results. Deleted objects will have their<br>`is_deleted` field set to `true`. |
| `include_related_objects` | `boolean` | Optional | If `true`, the response will include additional objects that are related to the<br>requested object, as follows:<br><br>If a CatalogItem is returned in the object field of the response,<br>its associated CatalogCategory, CatalogTax objects,<br>CatalogImage objects and CatalogModifierList objects<br>will be included in the `related_objects` field of the response.<br><br>If a CatalogItemVariation is returned in the object field of the<br>response, its parent CatalogItem will be included in the `related_objects` field of<br>the response. |
| `begin_time` | `string` | Optional | Return objects modified after this [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), in RFC 3339<br>format, e.g., `2016-09-04T23:59:33.123Z`. The timestamp is exclusive - objects with a<br>timestamp equal to `begin_time` will not be included in the response. |
| `query` | [`CatalogQuery`](/doc/models/catalog-query.md) | Optional | A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.<br><br>Although a query can have multiple filters, only one query is allowed per call to [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects).<br><br>When a query filter is based on an attribute, the attribute must be searchable.<br>Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.<br><br>Searchable attribute and objects queryable by searchable attributes **<br><br>- `name`:  `CatalogItem`, `CatalogItemVariation`, `CatelogCatogry`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, 'CatalogModifierList`,`CatalogItemOption`,`CatalogItemOptionValue`<br>- `description`: `CatalogItem`, `CatalogItemOptionValue`<br>- `abbreviation`: `CatalogItem`<br>- `upc`: `CatalogItemVariation`<br>- `sku`: `CatalogItemVariation`<br>- `caption`: `CatalogImage`<br>- `display_name`: `CatalogItemOption`<br><br>For example, to search for [CatalogItem](#type-CatalogItem) objects by searchable attributes, you can use<br>the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query filter. |
| `limit` | `number` | Optional | A limit on the number of results to be returned in a single page. The limit is advisory -<br>the implementation may return more or fewer results. If the supplied limit is negative, zero, or<br>is higher than the maximum limit of 1,000, it will be ignored. |

## Example (as JSON)

```json
{
  "object_types": [
    "ITEM"
  ],
  "query": {
    "prefix_query": {
      "attribute_name": "name",
      "attribute_prefix": "tea"
    }
  },
  "limit": 100
}
```

