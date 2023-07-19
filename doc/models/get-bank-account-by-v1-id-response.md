
# Get Bank Account by V1 Id Response

Response object returned by GetBankAccountByV1Id.

## Structure

`GetBankAccountByV1IdResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `bankAccount` | [`BankAccount \| undefined`](../../doc/models/bank-account.md) | Optional | Represents a bank account. For more information about<br>linking a bank account to a Square account, see<br>[Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api). |

## Example (as JSON)

```json
{
  "bank_account": {
    "account_number_suffix": "971",
    "account_type": "CHECKING",
    "bank_name": "Bank Name",
    "country": "US",
    "creditable": false,
    "currency": "USD",
    "debitable": false,
    "holder_name": "Jane Doe",
    "id": "w3yRgCGYQnwmdl0R3GB",
    "location_id": "S8GWD5example",
    "primary_bank_identification_number": "112200303",
    "status": "VERIFICATION_IN_PROGRESS",
    "version": 5,
    "secondary_bank_identification_number": "secondary_bank_identification_number4",
    "debit_mandate_reference_id": "debit_mandate_reference_id0",
    "reference_id": "reference_id2",
    "fingerprint": "fingerprint0"
  },
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

