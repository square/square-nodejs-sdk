
# Bulk Update Vendors Request

Represents an input to a call to [BulkUpdateVendors](../../doc/api/vendors.md#bulk-update-vendors).

## Structure

`BulkUpdateVendorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendors` | [`Record<string, UpdateVendorRequest>`](../../doc/models/update-vendor-request.md) | Required | A set of [UpdateVendorRequest](../../doc/models/update-vendor-request.md) objects encapsulating to-be-updated [Vendor](../../doc/models/vendor.md)<br>objects. The set is represented by  a collection of `Vendor`-ID/`UpdateVendorRequest`-object pairs. |

## Example (as JSON)

```json
{
  "vendors": {
    "key0": {
      "idempotency_key": null,
      "vendor": {
        "id": null,
        "name": null,
        "address": null,
        "contacts": null,
        "account_number": null,
        "note": null,
        "version": null,
        "status": null
      }
    },
    "key1": {
      "idempotency_key": null,
      "vendor": {
        "id": null,
        "name": null,
        "address": null,
        "contacts": null,
        "account_number": null,
        "note": null,
        "version": null,
        "status": null
      }
    },
    "key2": {
      "idempotency_key": null,
      "vendor": {
        "id": null,
        "name": null,
        "address": null,
        "contacts": null,
        "account_number": null,
        "note": null,
        "version": null,
        "status": null
      }
    }
  }
}
```

