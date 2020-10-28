
# Location

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The Square-issued ID of the location. |
| `name` | `string` | Optional | The name of the location.<br>This information appears in the dashboard as the nickname. |
| `address` | [`Address`](/doc/models/address.md) | Optional | Represents a physical address. |
| `timezone` | `string` | Optional | The [IANA Timezone](https://www.iana.org/time-zones) identifier for<br>the timezone of the location. |
| `capabilities` | [`string[]`](/doc/models/location-capability.md) | Optional | The Square features that are enabled for the location.<br>See [LocationCapability](#type-locationcapability) for possible values.<br>See [LocationCapability](#type-locationcapability) for possible values |
| `status` | [`string`](/doc/models/location-status.md) | Optional | The status of the location, whether a location is active or inactive. |
| `created_at` | `string` | Optional | The time when the location was created, in RFC 3339 format. |
| `merchant_id` | `string` | Optional | The ID of the merchant that owns the location. |
| `country` | [`string`](/doc/models/country.md) | Optional | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `language_code` | `string` | Optional | The language associated with the location, in<br>[BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). |
| `currency` | [`string`](/doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `phone_number` | `string` | Optional | The phone number of the location in human readable format. |
| `business_name` | `string` | Optional | The business name of the location<br>This is the name visible to the customers of the location.<br>For example, this name appears on customer receipts. |
| `type` | [`string`](/doc/models/location-type.md) | Optional | A location's physical or mobile type. |
| `website_url` | `string` | Optional | The website URL of the location. |
| `business_hours` | [`BusinessHours`](/doc/models/business-hours.md) | Optional | Represents the hours of operation for a business location. |
| `business_email` | `string` | Optional | The email of the location.<br>This email is visible to the customers of the location.<br>For example, the email appears on customer receipts. |
| `description` | `string` | Optional | The description of the location. |
| `twitter_username` | `string` | Optional | The Twitter username of the location without the '@' symbol. |
| `instagram_username` | `string` | Optional | The Instagram username of the location without the '@' symbol. |
| `facebook_url` | `string` | Optional | The Facebook profile URL of the location. The URL should begin with 'facebook.com/'. |
| `coordinates` | [`Coordinates`](/doc/models/coordinates.md) | Optional | Latitude and longitude coordinates. |
| `logo_url` | `string` | Optional | The URL of the logo image for the location. |
| `pos_background_url` | `string` | Optional | The URL of the Point of Sale background image for the location. |
| `mcc` | `string` | Optional | The merchant category code (MCC) of the location, as standardized by ISO 18245.<br>The MCC describes the kind of goods or services sold at the location. |

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

