
# Bulk Create Vendors Request

Represents an input to a call to [BulkCreateVendors](../../doc/api/vendors.md#bulk-create-vendors).

## Structure

`BulkCreateVendorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendors` | [`Record<string, Vendor>`](../../doc/models/vendor.md) | Required | Specifies a set of new [Vendor](../../doc/models/vendor.md) objects as represented by a collection of idempotency-key/`Vendor`-object pairs. |

## Example (as JSON)

```json
{
  "vendors": {
    "key0": {
      "id": null,
      "name": null,
      "address": null,
      "contacts": null,
      "account_number": null,
      "note": null,
      "version": null,
      "status": null
    },
    "key1": {
      "id": null,
      "name": null,
      "address": null,
      "contacts": null,
      "account_number": null,
      "note": null,
      "version": null,
      "status": null
    },
    "key2": {
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
```

