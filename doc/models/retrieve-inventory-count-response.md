
# Retrieve Inventory Count Response

## Structure

`RetrieveInventoryCountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `counts` | [`InventoryCount[]`](/doc/models/inventory-count.md) | Optional | The current calculated inventory counts for the requested object and<br>locations. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br><br>See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "errors": [],
  "counts": [
    {
      "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
      "catalog_object_type": "ITEM_VARIATION",
      "state": "IN_STOCK",
      "location_id": "C6W5YS5QM06F5",
      "quantity": "22",
      "calculated_at": "2016-11-16T22:28:01.223Z"
    }
  ]
}
```

