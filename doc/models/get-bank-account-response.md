
# Get Bank Account Response

Response object returned by `GetBankAccount`.

## Structure

`GetBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `bank_account` | [`BankAccount`](/doc/models/bank-account.md) | Optional | Represents a bank account. For more information about<br>linking a bank account to a Square account, see<br>[Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api). |

## Example (as JSON)

```json
{
  "bank_account": {
    "id": "w3yRgCGYQnwmdl0R3GB",
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
  }
}
```

