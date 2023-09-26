
# ACH Details

ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.

## Structure

`ACHDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string \| null \| undefined` | Optional | The routing number for the bank account.<br>**Constraints**: *Maximum Length*: `50` |
| `accountNumberSuffix` | `string \| null \| undefined` | Optional | The last few digits of the bank account number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `accountType` | `string \| null \| undefined` | Optional | The type of the bank account performing the transfer. The account type can be `CHECKING`,<br>`SAVINGS`, or `UNKNOWN`.<br>**Constraints**: *Maximum Length*: `50` |

## Example (as JSON)

```json
{
  "routing_number": "routing_number6",
  "account_number_suffix": "account_number_suffix6",
  "account_type": "account_type8"
}
```

