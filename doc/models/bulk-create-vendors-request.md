
# Bulk Create Vendors Request

Represents an input to a call to [BulkCreateVendors](../../doc/api/vendors.md#bulk-create-vendors).

## Structure

`BulkCreateVendorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendors` | [`Record<string, Vendor>`](../../doc/models/vendor.md) | Required | Specifies a set of new [Vendor](entity:Vendor) objects as represented by a collection of idempotency-key/`Vendor`-object pairs. |

## Example (as JSON)

```json
{
  "vendors": {
    "key0": {
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
    "key1": {
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
    "key2": {
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
  }
}
```

