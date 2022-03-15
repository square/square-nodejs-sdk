
# Create Vendor Request

Represents an input to a call to [CreateVendor.](../../doc/api/vendors.md#create-vendor)

## Structure

`CreateVendorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A client-supplied, universally unique identifier (UUID) to make this [CreateVendor](../../doc/api/vendors.md#create-vendor) call idempotent.<br><br>See [Idempotency](../../https://developer.squareup.com/docs/basics/api101/idempotency) in the<br>[API Development 101](../../https://developer.squareup.com/docs/basics/api101/overview) section for more<br>information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `vendor` | [`Vendor \| undefined`](../../doc/models/vendor.md) | Optional | Represents a supplier to a seller. |

## Example (as JSON)

```json
{
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
}
```

