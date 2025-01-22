
# Location

Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api).

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A short generated string of letters and numbers that uniquely identifies this location instance.<br>**Constraints**: *Maximum Length*: `32` |
| `name` | `string \| null \| undefined` | Optional | The name of the location.<br>This information appears in the Seller Dashboard as the nickname.<br>A location name must be unique within a seller account.<br>**Constraints**: *Maximum Length*: `255` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `timezone` | `string \| null \| undefined` | Optional | The [IANA time zone](https://www.iana.org/time-zones) identifier for<br>the time zone of the location. For example, `America/Los_Angeles`.<br>**Constraints**: *Maximum Length*: `30` |
| `capabilities` | [`string[] \| undefined`](../../doc/models/location-capability.md) | Optional | The Square features that are enabled for the location.<br>See [LocationCapability](entity:LocationCapability) for possible values.<br>See [LocationCapability](#type-locationcapability) for possible values |
| `status` | [`string \| undefined`](../../doc/models/location-status.md) | Optional | A location's status. |
| `createdAt` | `string \| undefined` | Optional | The time when the location was created, in RFC 3339 format.<br>For more information, see [Working with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `25` |
| `merchantId` | `string \| undefined` | Optional | The ID of the merchant that owns the location.<br>**Constraints**: *Maximum Length*: `32` |
| `country` | [`string \| undefined`](../../doc/models/country.md) | Optional | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `languageCode` | `string \| null \| undefined` | Optional | The language associated with the location, in<br>[BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).<br>For more information, see [Language Preferences](https://developer.squareup.com/docs/build-basics/general-considerations/language-preferences).<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `5` |
| `currency` | [`string \| undefined`](../../doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `phoneNumber` | `string \| null \| undefined` | Optional | The phone number of the location. For example, `+1 855-700-6000`.<br>**Constraints**: *Maximum Length*: `17` |
| `businessName` | `string \| null \| undefined` | Optional | The name of the location's overall business. This name is present on receipts and other customer-facing branding, and can be changed no more than three times in a twelve-month period.<br>**Constraints**: *Maximum Length*: `255` |
| `type` | [`string \| undefined`](../../doc/models/location-type.md) | Optional | A location's type. |
| `websiteUrl` | `string \| null \| undefined` | Optional | The website URL of the location.  For example, `https://squareup.com`.<br>**Constraints**: *Maximum Length*: `255` |
| `businessHours` | [`BusinessHours \| undefined`](../../doc/models/business-hours.md) | Optional | The hours of operation for a location. |
| `businessEmail` | `string \| null \| undefined` | Optional | The email address of the location. This can be unique to the location and is not always the email address for the business owner or administrator.<br>**Constraints**: *Maximum Length*: `255` |
| `description` | `string \| null \| undefined` | Optional | The description of the location. For example, `Main Street location`.<br>**Constraints**: *Maximum Length*: `1024` |
| `twitterUsername` | `string \| null \| undefined` | Optional | The Twitter username of the location without the '@' symbol. For example, `Square`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15` |
| `instagramUsername` | `string \| null \| undefined` | Optional | The Instagram username of the location without the '@' symbol. For example, `square`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `facebookUrl` | `string \| null \| undefined` | Optional | The Facebook profile URL of the location. The URL should begin with 'facebook.com/'. For example, `https://www.facebook.com/square`.<br>**Constraints**: *Maximum Length*: `255` |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Latitude and longitude coordinates. |
| `logoUrl` | `string \| undefined` | Optional | The URL of the logo image for the location. When configured in the Seller<br>Dashboard (Receipts section), the logo appears on transactions (such as receipts and invoices) that Square generates on behalf of the seller.<br>This image should have a roughly square (1:1) aspect ratio and should be at least 200x200 pixels.<br>**Constraints**: *Maximum Length*: `255` |
| `posBackgroundUrl` | `string \| undefined` | Optional | The URL of the Point of Sale background image for the location.<br>**Constraints**: *Maximum Length*: `255` |
| `mcc` | `string \| null \| undefined` | Optional | A four-digit number that describes the kind of goods or services sold at the location.<br>The [merchant category code (MCC)](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code) of the location as standardized by ISO 18245.<br>For example, `5045`, for a location that sells computer goods and software.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `fullFormatLogoUrl` | `string \| undefined` | Optional | The URL of a full-format logo image for the location. When configured in the Seller<br>Dashboard (Receipts section), the logo appears on transactions (such as receipts and invoices) that Square generates on behalf of the seller.<br>This image can be wider than it is tall and should be at least 1280x648 pixels. |
| `taxIds` | [`TaxIds \| undefined`](../../doc/models/tax-ids.md) | Optional | Identifiers for the location used by various governments for tax purposes. |

## Example (as JSON)

```json
{
  "id": "id4",
  "name": "name4",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  },
  "timezone": "timezone4",
  "capabilities": [
    "CREDIT_CARD_PROCESSING"
  ]
}
```

