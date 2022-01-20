
# Merchant

Represents a Square seller.

## Structure

`Merchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-issued ID of the merchant. |
| `businessName` | `string \| undefined` | Optional | The business name of the merchant. |
| `country` | [`string`](/doc/models/country.md) | Required | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `languageCode` | `string \| undefined` | Optional | The language code associated with the merchant account, in BCP 47 format. |
| `currency` | [`string \| undefined`](/doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `status` | [`string \| undefined`](/doc/models/merchant-status.md) | Optional | - |
| `mainLocationId` | `string \| undefined` | Optional | The ID of the main `Location` for this merchant. |
| `createdAt` | `string \| undefined` | Optional | The time when the merchant was created, in RFC 3339 format.<br>For more information, see [Working with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates). |

## Example (as JSON)

```json
{
  "id": "id0",
  "business_name": "business_name4",
  "country": "FO",
  "language_code": "language_code8",
  "currency": "YER",
  "status": "ACTIVE"
}
```

