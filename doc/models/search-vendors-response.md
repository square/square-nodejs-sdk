
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
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "vendors": [
    {
      "id": "id9",
      "created_at": "created_at7",
      "updated_at": "updated_at5",
      "name": "name9",
      "address": {
        "address_line_1": "address_line_15",
        "address_line_2": "address_line_25",
        "address_line_3": "address_line_31",
        "locality": "locality5",
        "sublocality": "sublocality5"
      }
    },
    {
      "id": "id0",
      "created_at": "created_at8",
      "updated_at": "updated_at4",
      "name": "name0",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "locality": "locality6",
        "sublocality": "sublocality6"
      }
    },
    {
      "id": "id1",
      "created_at": "created_at9",
      "updated_at": "updated_at3",
      "name": "name1",
      "address": {
        "address_line_1": "address_line_17",
        "address_line_2": "address_line_27",
        "address_line_3": "address_line_33",
        "locality": "locality7",
        "sublocality": "sublocality7"
      }
    }
  ],
  "cursor": "cursor6"
}
```

