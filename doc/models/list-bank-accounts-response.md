
# List Bank Accounts Response

Response object returned by ListBankAccounts.

## Structure

`ListBankAccountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `bank_accounts` | [`BankAccount[]`](/doc/models/bank-account.md) | Optional | List of BankAccounts associated with this account. |
| `cursor` | `string` | Optional | When a response is truncated, it includes a cursor that you can<br>use in a subsequent request to fetch next set of bank accounts.<br>If empty, this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). |

## Example (as JSON)

```json
{
  "bank_accounts": [
    {
      "id": "ao6iaQ9vhDiaQD7n3GB",
      "account_number_suffix": "971",
      "country": "US",
      "currency": "USD",
      "account_type": "CHECKING",
      "holder_name": "Jane Doe",
      "primary_bank_identification_number": "112200303",
      "location_id": "S8GWD5example",
      "status": "VERIFICATION_IN_PROGRESS",
      "creditable": false,
      "debitable": false,
      "version": 5,
      "bank_name": "Bank Name"
    },
    {
      "id": "4x7WXuaxrkQkVlka3GB",
      "account_number_suffix": "972",
      "country": "US",
      "currency": "USD",
      "account_type": "CHECKING",
      "holder_name": "Jane Doe",
      "primary_bank_identification_number": "112200303",
      "location_id": "S8GWD5example",
      "status": "VERIFICATION_IN_PROGRESS",
      "creditable": false,
      "debitable": false,
      "version": 5,
      "bank_name": "Bank Name"
    }
  ]
}
```

