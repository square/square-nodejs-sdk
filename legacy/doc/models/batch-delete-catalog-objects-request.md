
# Batch Delete Catalog Objects Request

## Structure

`BatchDeleteCatalogObjectsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectIds` | `string[] \| null \| undefined` | Optional | The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects<br>in the graph that depend on that object will be deleted as well (for example, deleting a<br>CatalogItem will delete its CatalogItemVariation. |

## Example (as JSON)

```json
{
  "object_ids": [
    "W62UWFY35CWMYGVWK6TWJDNI",
    "AA27W3M2GGTF3H6AVPNB77CK"
  ]
}
```

