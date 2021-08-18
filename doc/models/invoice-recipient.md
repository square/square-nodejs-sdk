
# Invoice Recipient

Provides customer data that Square uses to deliver an invoice.

## Structure

`InvoiceRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| undefined` | Optional | The ID of the customer. This is the customer profile ID that<br>you provide when creating a draft invoice.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `givenName` | `string \| undefined` | Optional | The recipient's given (that is, first) name. |
| `familyName` | `string \| undefined` | Optional | The recipient's family (that is, last) name. |
| `emailAddress` | `string \| undefined` | Optional | The recipient's email address. |
| `address` | [`Address \| undefined`](/doc/models/address.md) | Optional | Represents a postal address in a country. The address format is based<br>on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,<br>see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).<br>This format has dedicated fields for four address components: postal code,<br>locality (city), administrative district (state, prefecture, or province), and<br>sublocality (town or village). These components have dedicated fields in the<br>`Address` object because software sometimes behaves differently based on them.<br>For example, sales tax software may charge different amounts of sales tax<br>based on the postal code, and some software is only available in<br>certain states due to compliance reasons.<br><br>For the remaining address components, the `Address` type provides the<br>`address_line_1` and `address_line_2` fields for free-form data entry.<br>These fields are free-form because the remaining address components have<br>too many variations around the world and typical software does not parse<br>these components. These fields enable users to enter anything they want.<br><br>Note that, in the current implementation, all other `Address` type fields are blank.<br>These include `address_line_3`, `sublocality_2`, `sublocality_3`,<br>`administrative_district_level_2`, `administrative_district_level_3`,<br>`first_name`, `last_name`, and `organization`.<br><br>When it comes to localization, the seller's language preferences<br>(see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))<br>are ignored for addresses. Even though Square products (such as Square Point of Sale<br>and the Seller Dashboard) mostly use a seller's language preference in<br>communication, when it comes to addresses, they will use English for a US address,<br>Japanese for an address in Japan, and so on. |
| `phoneNumber` | `string \| undefined` | Optional | The recipient's phone number. |
| `companyName` | `string \| undefined` | Optional | The name of the recipient's company. |

## Example (as JSON)

```json
{
  "customer_id": "customer_id8",
  "given_name": "given_name2",
  "family_name": "family_name6",
  "email_address": "email_address2",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  }
}
```

