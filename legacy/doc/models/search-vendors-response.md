
# Search Vendors Response

Represents an output from a call to [SearchVendors](../../doc/api/vendors.md#search-vendors).

## Structure

`SearchVendorsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered when the request fails. |
| `vendors` | [`Vendor[] \| undefined`](../../doc/models/vendor.md) | Optional | The [Vendor](entity:Vendor) objects matching the specified search filter. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "vendors": [
    {
      "id": "id8",
      "created_at": "created_at6",
      "updated_at": "updated_at4",
      "name": "name8",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "locality": "locality6",
        "sublocality": "sublocality6"
      }
    },
    {
      "id": "id8",
      "created_at": "created_at6",
      "updated_at": "updated_at4",
      "name": "name8",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "locality": "locality6",
        "sublocality": "sublocality6"
      }
    }
  ],
  "cursor": "cursor8"
}
```

