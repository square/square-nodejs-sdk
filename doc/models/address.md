
# Address

Represents a postal address in a country. The address format is based
on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
This format has dedicated fields for four address components: postal code,
locality (city), administrative district (state, prefecture, or province), and
sublocality (town or village). These components have dedicated fields in the
`Address` object because software sometimes behaves differently based on them.
For example, sales tax software may charge different amounts of sales tax
based on the postal code, and some software is only available in
certain states due to compliance reasons.

For the remaining address components, the `Address` type provides the
`address_line_1` and `address_line_2` fields for free-form data entry.
These fields are free-form because the remaining address components have
too many variations around the world and typical software does not parse
these components. These fields enable users to enter anything they want.

Note that, in the current implementation, all other `Address` type fields are blank.
These include `address_line_3`, `sublocality_2`, `sublocality_3`,
`administrative_district_level_2`, `administrative_district_level_3`,
`first_name`, `last_name`, and `organization`.

When it comes to localization, the seller's language preferences
(see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
are ignored for addresses. Even though Square products (such as Square Point of Sale
and the Seller Dashboard) mostly use a seller's language preference in
communication, when it comes to addresses, they will use English for a US address,
Japanese for an address in Japan, and so on.

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | The first line of the address.<br><br>Fields that start with `address_line` provide the address's most specific<br>details, like street number, street name, and building name. They do *not*<br>provide less specific details like city, state/province, or country (these<br>details are provided in other fields). |
| `addressLine2` | `string \| undefined` | Optional | The second line of the address, if any. |
| `addressLine3` | `string \| undefined` | Optional | The third line of the address, if any. |
| `locality` | `string \| undefined` | Optional | The city or town of the address. |
| `sublocality` | `string \| undefined` | Optional | A civil region within the address's `locality`, if any. |
| `sublocality2` | `string \| undefined` | Optional | A civil region within the address's `sublocality`, if any. |
| `sublocality3` | `string \| undefined` | Optional | A civil region within the address's `sublocality_2`, if any. |
| `administrativeDistrictLevel1` | `string \| undefined` | Optional | A civil entity within the address's country. In the US, this<br>is the state. |
| `administrativeDistrictLevel2` | `string \| undefined` | Optional | A civil entity within the address's `administrative_district_level_1`.<br>In the US, this is the county. |
| `administrativeDistrictLevel3` | `string \| undefined` | Optional | A civil entity within the address's `administrative_district_level_2`,<br>if any. |
| `postalCode` | `string \| undefined` | Optional | The address's postal code. |
| `country` | [`string \| undefined`](/doc/models/country.md) | Optional | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `firstName` | `string \| undefined` | Optional | Optional first name when it's representing recipient. |
| `lastName` | `string \| undefined` | Optional | Optional last name when it's representing recipient. |
| `organization` | `string \| undefined` | Optional | Optional organization name when it's representing recipient. |

## Example (as JSON)

```json
{
  "address_line_1": "address_line_10",
  "address_line_2": "address_line_20",
  "address_line_3": "address_line_36",
  "locality": "locality0",
  "sublocality": "sublocality0"
}
```

