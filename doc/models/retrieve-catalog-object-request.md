
# Retrieve Catalog Object Request

## Structure

`RetrieveCatalogObjectRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `include_related_objects` | `boolean` | Optional | If `true`, the response will include additional objects that are related to the<br>requested object, as follows:<br><br>If the `object` field of the response contains a CatalogItem,<br>its associated CatalogCategory, CatalogTax objects,<br>CatalogImages and CatalogModifierLists<br>will be returned in the `related_objects` field of the response. If the `object`<br>field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response.<br><br>Default value: `false` |

## Example (as JSON)

```json
{
  "include_related_objects": false
}
```

