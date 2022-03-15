
# Vendor Contact

Represents a contact of a [Vendor](../../doc/models/vendor.md).

## Structure

`VendorContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique Square-generated ID for the [VendorContact](../../doc/models/vendor-contact.md).<br>This field is required when attempting to update a [VendorContact](../../doc/models/vendor-contact.md).<br>**Constraints**: *Maximum Length*: `100` |
| `name` | `string \| undefined` | Optional | The name of the [VendorContact](../../doc/models/vendor-contact.md).<br>This field is required when attempting to create a [Vendor](../../doc/models/vendor.md).<br>**Constraints**: *Maximum Length*: `255` |
| `emailAddress` | `string \| undefined` | Optional | The email address of the [VendorContact](../../doc/models/vendor-contact.md).<br>**Constraints**: *Maximum Length*: `255` |
| `phoneNumber` | `string \| undefined` | Optional | The phone number of the [VendorContact](../../doc/models/vendor-contact.md).<br>**Constraints**: *Maximum Length*: `255` |
| `removed` | `boolean \| undefined` | Optional | The state of the [VendorContact](../../doc/models/vendor-contact.md). |
| `ordinal` | `number` | Required | The ordinal of the [VendorContact](../../doc/models/vendor-contact.md). |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "email_address": "email_address2",
  "phone_number": "phone_number2",
  "removed": false,
  "ordinal": 80
}
```

