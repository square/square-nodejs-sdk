
# Create Vendor Request

Represents an input to a call to [CreateVendor](../../doc/api/vendors.md#create-vendor).

## Structure

`CreateVendorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A client-supplied, universally unique identifier (UUID) to make this [CreateVendor](../../doc/api/vendors.md#create-vendor) call idempotent.<br><br>See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the<br>[API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more<br>information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `vendor` | [`Vendor \| undefined`](../../doc/models/vendor.md) | Optional | Represents a supplier to a seller. |

## Example (as JSON)

```json
{
  "idempotency_key": "idempotency_key6",
  "vendor": null
}
```

