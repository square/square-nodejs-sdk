
# Digital Wallet Details

Additional details about `WALLET` type payments. Contains only non-confidential information.

## Structure

`DigitalWalletDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Optional | The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or<br>`FAILED`.<br>**Constraints**: *Maximum Length*: `50` |

## Example (as JSON)

```json
{
  "status": "status8"
}
```

