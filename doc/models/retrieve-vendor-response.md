
# Retrieve Vendor Response

Represents an output from a call to [RetrieveVendor](../../doc/api/vendors.md#retrieve-vendor).

## Structure

`RetrieveVendorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered when the request fails. |
| `vendor` | [`Vendor \| undefined`](../../doc/models/vendor.md) | Optional | Represents a supplier to a seller. |

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
  "vendor": {
    "id": "id6",
    "created_at": "created_at4",
    "updated_at": "updated_at2",
    "name": "name6",
    "address": {
      "address_line_1": "address_line_12",
      "address_line_2": "address_line_22",
      "address_line_3": "address_line_38",
      "locality": "locality2",
      "sublocality": "sublocality2"
    }
  }
}
```

