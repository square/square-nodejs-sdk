
# Address

Represents a postal address in a country.
For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| null \| undefined` | Optional | The first line of the address.<br><br>Fields that start with `address_line` provide the address's most specific<br>details, like street number, street name, and building name. They do *not*<br>provide less specific details like city, state/province, or country (these<br>details are provided in other fields). |
| `addressLine2` | `string \| null \| undefined` | Optional | The second line of the address, if any. |
| `addressLine3` | `string \| null \| undefined` | Optional | The third line of the address, if any. |
| `locality` | `string \| null \| undefined` | Optional | The city or town of the address. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `sublocality` | `string \| null \| undefined` | Optional | A civil region within the address's `locality`, if any. |
| `sublocality2` | `string \| null \| undefined` | Optional | A civil region within the address's `sublocality`, if any. |
| `sublocality3` | `string \| null \| undefined` | Optional | A civil region within the address's `sublocality_2`, if any. |
| `administrativeDistrictLevel1` | `string \| null \| undefined` | Optional | A civil entity within the address's country. In the US, this<br>is the state. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `administrativeDistrictLevel2` | `string \| null \| undefined` | Optional | A civil entity within the address's `administrative_district_level_1`.<br>In the US, this is the county. |
| `administrativeDistrictLevel3` | `string \| null \| undefined` | Optional | A civil entity within the address's `administrative_district_level_2`,<br>if any. |
| `postalCode` | `string \| null \| undefined` | Optional | The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `country` | [`string \| undefined`](../../doc/models/country.md) | Optional | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `firstName` | `string \| null \| undefined` | Optional | Optional first name when it's representing recipient. |
| `lastName` | `string \| null \| undefined` | Optional | Optional last name when it's representing recipient. |

## Example (as JSON)

```json
{
  "address_line_1": "address_line_18",
  "address_line_2": "address_line_28",
  "address_line_3": "address_line_34",
  "locality": "locality8",
  "sublocality": "sublocality8"
}
```

