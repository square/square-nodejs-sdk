
# Bank Account

Represents a bank account. For more information about
linking a bank account to a Square account, see
[Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).

## Structure

`BankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique, Square-issued identifier for the bank account.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `accountNumberSuffix` | `string` | Required | The last few digits of the account number.<br>**Constraints**: *Minimum Length*: `1` |
| `country` | [`string`](../../doc/models/country.md) | Required | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `currency` | [`string`](../../doc/models/currency.md) | Required | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `accountType` | [`string`](../../doc/models/bank-account-type.md) | Required | Indicates the financial purpose of the bank account. |
| `holderName` | `string` | Required | Name of the account holder. This name must match the name<br>on the targeted bank account record.<br>**Constraints**: *Minimum Length*: `1` |
| `primaryBankIdentificationNumber` | `string` | Required | Primary identifier for the bank. For more information, see<br>[Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).<br>**Constraints**: *Maximum Length*: `40` |
| `secondaryBankIdentificationNumber` | `string \| null \| undefined` | Optional | Secondary identifier for the bank. For more information, see<br>[Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).<br>**Constraints**: *Maximum Length*: `40` |
| `debitMandateReferenceId` | `string \| null \| undefined` | Optional | Reference identifier that will be displayed to UK bank account owners<br>when collecting direct debit authorization. Only required for UK bank accounts. |
| `referenceId` | `string \| null \| undefined` | Optional | Client-provided identifier for linking the banking account to an entity<br>in a third-party system (for example, a bank account number or a user identifier). |
| `locationId` | `string \| null \| undefined` | Optional | The location to which the bank account belongs. |
| `status` | [`string`](../../doc/models/bank-account-status.md) | Required | Indicates the current verification status of a `BankAccount` object. |
| `creditable` | `boolean` | Required | Indicates whether it is possible for Square to send money to this bank account. |
| `debitable` | `boolean` | Required | Indicates whether it is possible for Square to take money from this<br>bank account. |
| `fingerprint` | `string \| null \| undefined` | Optional | A Square-assigned, unique identifier for the bank account based on the<br>account information. The account fingerprint can be used to compare account<br>entries and determine if the they represent the same real-world bank account. |
| `version` | `number \| undefined` | Optional | The current version of the `BankAccount`. |
| `bankName` | `string \| null \| undefined` | Optional | Read only. Name of actual financial institution.<br>For example "Bank of America".<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "id": "id2",
  "account_number_suffix": "account_number_suffix6",
  "country": "TT",
  "currency": "MVR",
  "account_type": "OTHER",
  "holder_name": "holder_name8",
  "primary_bank_identification_number": "primary_bank_identification_number0",
  "secondary_bank_identification_number": "secondary_bank_identification_number2",
  "debit_mandate_reference_id": "debit_mandate_reference_id2",
  "reference_id": "reference_id0",
  "location_id": "location_id6",
  "status": "VERIFICATION_IN_PROGRESS",
  "creditable": false,
  "debitable": false,
  "fingerprint": "fingerprint8"
}
```

