
# Vendor

Represents a supplier to a seller.

## Structure

`Vendor`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique Square-generated ID for the [Vendor](../../doc/models/vendor.md).<br>This field is required when attempting to update a [Vendor](../../doc/models/vendor.md).<br>**Constraints**: *Maximum Length*: `100` |
| `createdAt` | `string \| undefined` | Optional | An RFC 3339-formatted timestamp that indicates when the<br>[Vendor](../../doc/models/vendor.md) was created.<br>**Constraints**: *Maximum Length*: `34` |
| `updatedAt` | `string \| undefined` | Optional | An RFC 3339-formatted timestamp that indicates when the<br>[Vendor](../../doc/models/vendor.md) was last updated.<br>**Constraints**: *Maximum Length*: `34` |
| `name` | `string \| undefined` | Optional | The name of the [Vendor](../../doc/models/vendor.md).<br>This field is required when attempting to create or update a [Vendor](../../doc/models/vendor.md).<br>**Constraints**: *Maximum Length*: `100` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `contacts` | [`VendorContact[] \| undefined`](../../doc/models/vendor-contact.md) | Optional | The contacts of the [Vendor](../../doc/models/vendor.md). |
| `accountNumber` | `string \| undefined` | Optional | The account number of the [Vendor](../../doc/models/vendor.md).<br>**Constraints**: *Maximum Length*: `100` |
| `note` | `string \| undefined` | Optional | A note detailing information about the [Vendor](../../doc/models/vendor.md).<br>**Constraints**: *Maximum Length*: `4096` |
| `version` | `number \| undefined` | Optional | The version of the [Vendor](../../doc/models/vendor.md). |
| `status` | [`string \| undefined`](../../doc/models/vendor-status.md) | Optional | The status of the [Vendor](../../doc/models/vendor.md),<br>whether a [Vendor](../../doc/models/vendor.md) is active or inactive. |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "address": null,
  "contacts": null,
  "account_number": null,
  "note": null,
  "version": null,
  "status": null
}
```

