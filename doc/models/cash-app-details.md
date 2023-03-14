
# Cash App Details

Additional details about `WALLET` type payments with the `brand` of `CASH_APP`.

## Structure

`CashAppDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buyerFullName` | `string \| undefined` | Optional | The name of the Cash App account holder.<br>**Constraints**: *Maximum Length*: `255` |
| `buyerCountryCode` | `string \| undefined` | Optional | The country of the Cash App account holder, in ISO 3166-1-alpha-2 format.<br><br>For possible values, see [Country](../../doc/models/country.md).<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `buyerCashtag` | `string \| undefined` | Optional | $Cashtag of the Cash App account holder.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `21` |

## Example (as JSON)

```json
{
  "buyer_full_name": null,
  "buyer_country_code": null,
  "buyer_cashtag": null
}
```

