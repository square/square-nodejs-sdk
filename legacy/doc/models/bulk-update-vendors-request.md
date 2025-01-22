
# Bulk Update Vendors Request

Represents an input to a call to [BulkUpdateVendors](../../doc/api/vendors.md#bulk-update-vendors).

## Structure

`BulkUpdateVendorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendors` | [`Record<string, UpdateVendorRequest>`](../../doc/models/update-vendor-request.md) | Required | A set of [UpdateVendorRequest](entity:UpdateVendorRequest) objects encapsulating to-be-updated [Vendor](entity:Vendor)<br>objects. The set is represented by  a collection of `Vendor`-ID/`UpdateVendorRequest`-object pairs. |

## Example (as JSON)

```json
{
  "vendors": {
    "key0": {
      "idempotency_key": "idempotency_key4",
      "vendor": {
        "id": "id6",
        "created_at": "created_at4",
        "updated_at": "updated_at2",
        "name": "name6",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "locality": "locality6",
          "sublocality": "sublocality6"
        }
      }
    },
    "key1": {
      "idempotency_key": "idempotency_key4",
      "vendor": {
        "id": "id6",
        "created_at": "created_at4",
        "updated_at": "updated_at2",
        "name": "name6",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "locality": "locality6",
          "sublocality": "sublocality6"
        }
      }
    },
    "key2": {
      "idempotency_key": "idempotency_key4",
      "vendor": {
        "id": "id6",
        "created_at": "created_at4",
        "updated_at": "updated_at2",
        "name": "name6",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "locality": "locality6",
          "sublocality": "sublocality6"
        }
      }
    }
  }
}
```

