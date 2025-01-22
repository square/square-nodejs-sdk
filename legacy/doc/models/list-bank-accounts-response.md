
# List Bank Accounts Response

Response object returned by ListBankAccounts.

## Structure

`ListBankAccountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `bankAccounts` | [`BankAccount[] \| undefined`](../../doc/models/bank-account.md) | Optional | List of BankAccounts associated with this account. |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can<br>use in a subsequent request to fetch next set of bank accounts.<br>If empty, this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |

## Example (as JSON)

```json
{
  "bank_accounts": [
    {
      "account_number_suffix": "971",
      "account_type": "CHECKING",
      "bank_name": "Bank Name",
      "country": "US",
      "creditable": false,
      "currency": "USD",
      "debitable": false,
      "holder_name": "Jane Doe",
      "id": "ao6iaQ9vhDiaQD7n3GB",
      "location_id": "S8GWD5example",
      "primary_bank_identification_number": "112200303",
      "status": "VERIFICATION_IN_PROGRESS",
      "version": 5,
      "secondary_bank_identification_number": "secondary_bank_identification_number0",
      "debit_mandate_reference_id": "debit_mandate_reference_id4",
      "reference_id": "reference_id8",
      "fingerprint": "fingerprint6"
    },
    {
      "account_number_suffix": "972",
      "account_type": "CHECKING",
      "bank_name": "Bank Name",
      "country": "US",
      "creditable": false,
      "currency": "USD",
      "debitable": false,
      "holder_name": "Jane Doe",
      "id": "4x7WXuaxrkQkVlka3GB",
      "location_id": "S8GWD5example",
      "primary_bank_identification_number": "112200303",
      "status": "VERIFICATION_IN_PROGRESS",
      "version": 5,
      "secondary_bank_identification_number": "secondary_bank_identification_number0",
      "debit_mandate_reference_id": "debit_mandate_reference_id4",
      "reference_id": "reference_id8",
      "fingerprint": "fingerprint6"
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "cursor": "cursor2"
}
```

