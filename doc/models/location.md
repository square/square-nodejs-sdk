
# Location

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-issued ID of the location. |
| `name` | `string` | Optional | The name of the location.<br>This information appears in the dashboard as the nickname.<br>A location name must be unique within a seller account. |
| `address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `timezone` | `string` | Optional | The [IANA Timezone](https://www.iana.org/time-zones) identifier for<br>the timezone of the location. |
| `capabilities` | [`string[]`](/doc/models/location-capability.md) | Optional | The Square features that are enabled for the location.<br>See [LocationCapability](#type-locationcapability) for possible values.<br>See [LocationCapability](#type-locationcapability) for possible values |
| `status` | [`string`](/doc/models/location-status.md) | Optional | The status of the location, whether a location is active or inactive. |
| `createdAt` | `string` | Optional | The time when the location was created, in RFC 3339 format. |
| `merchantId` | `string` | Optional | The ID of the merchant that owns the location. |
| `country` | [`string`](/doc/models/country.md) | Optional | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `languageCode` | `string` | Optional | The language associated with the location, in<br>[BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). |
| `currency` | [`string`](/doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `phoneNumber` | `string` | Optional | The phone number of the location in human readable format. |
| `businessName` | `string` | Optional | The business name of the location<br>This is the name visible to the customers of the location.<br>For example, this name appears on customer receipts. |
| `type` | [`string`](/doc/models/location-type.md) | Optional | A location's physical or mobile type. |
| `websiteUrl` | `string` | Optional | The website URL of the location. |
| `businessHours` | [`BusinessHours`](/doc/models/business-hours.md) | Optional | Represents the hours of operation for a business location. |
| `businessEmail` | `string` | Optional | The email of the location.<br>This email is visible to the customers of the location.<br>For example, the email appears on customer receipts. |
| `description` | `string` | Optional | The description of the location. |
| `twitterUsername` | `string` | Optional | The Twitter username of the location without the '@' symbol. |
| `instagramUsername` | `string` | Optional | The Instagram username of the location without the '@' symbol. |
| `facebookUrl` | `string` | Optional | The Facebook profile URL of the location. The URL should begin with 'facebook.com/'. |
| `coordinates` | [`Coordinates`](/doc/models/coordinates.md) | Optional | Latitude and longitude coordinates. |
| `logoUrl` | `string` | Optional | The URL of the logo image for the location. The Seller must choose this logo in the Seller<br>dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices)<br>that Square generates on behalf of the Seller. This image should have an aspect ratio<br>close to 1:1 and is recommended to be at least 200x200 pixels. |
| `posBackgroundUrl` | `string` | Optional | The URL of the Point of Sale background image for the location. |
| `mcc` | `string` | Optional | The merchant category code (MCC) of the location, as standardized by ISO 18245.<br>The MCC describes the kind of goods or services sold at the location. |
| `fullFormatLogoUrl` | `string` | Optional | The URL of a full-format logo image for the location. The Seller must choose this logo in the<br>Seller dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices)<br>that Square generates on behalf of the Seller. This image can have an aspect ratio of 2:1 or greater<br>and is recommended to be at least 1280x648 pixels. |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  },
  "timezone": "timezone0",
  "capabilities": [
    "CREDIT_CARD_PROCESSING"
  ]
}
```

