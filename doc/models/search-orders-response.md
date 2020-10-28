
# Search Orders Response

Only one of `order_entries` or `orders` fields will be set, depending on whether
`return_entries` was set on the [SearchOrdersRequest](#type-searchorderrequest).

## Structure

`SearchOrdersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order_entries` | [`OrderEntry[]`](/doc/models/order-entry.md) | Optional | List of [OrderEntries](#type-orderentry) that fit the query<br>conditions. Populated only if `return_entries` was set to `true` in the request. |
| `orders` | [`Order[]`](/doc/models/order.md) | Optional | List of<br>[Order](#type-order) objects that match query conditions. Populated only if<br>`return_entries` in the request is set to `false`. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | [Errors](#type-error) encountered during the search. |

## Example (as JSON)

```json
{
  "order_entries": [
    {
      "order_id": "CAISEM82RcpmcFBM0TfOyiHV3es",
      "location_id": "057P5VYJ4A5X1",
      "version": 1
    },
    {
      "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY",
      "location_id": "18YC4JDH91E1H"
    },
    {
      "order_id": "CAISEM52YcpmcWAzERDOyiWS3ty",
      "location_id": "057P5VYJ4A5X1"
    }
  ],
  "cursor": "123"
}
```

