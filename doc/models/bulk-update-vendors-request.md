
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
      "idempotency_key": "idempotency_key5",
      "vendor": {
        "id": "id5",
        "created_at": "created_at3",
        "updated_at": "updated_at1",
        "name": "name5",
        "address": {
          "address_line_1": "address_line_11",
          "address_line_2": "address_line_21",
          "address_line_3": "address_line_37",
          "locality": "locality1",
          "sublocality": "sublocality1"
        }
      }
    },
    "key1": {
      "idempotency_key": "idempotency_key6",
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
    },
    "key2": {
      "idempotency_key": "idempotency_key7",
      "vendor": {
        "id": "id7",
        "created_at": "created_at5",
        "updated_at": "updated_at3",
        "name": "name7",
        "address": {
          "address_line_1": "address_line_13",
          "address_line_2": "address_line_23",
          "address_line_3": "address_line_39",
          "locality": "locality3",
          "sublocality": "sublocality3"
        }
      }
    }
  }
}
```

