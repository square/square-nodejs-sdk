
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
  "errors": null,
  "vendor": null
}
```

