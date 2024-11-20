
# Checkout Location Settings Tipping

## Structure

`CheckoutLocationSettingsTipping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `percentages` | `number[] \| null \| undefined` | Optional | Set three custom percentage amounts that buyers can select at checkout. If Smart Tip is enabled, this only applies to transactions totaling $10 or more. |
| `smartTippingEnabled` | `boolean \| null \| undefined` | Optional | Enables Smart Tip Amounts. If Smart Tip Amounts is enabled, tipping works as follows:<br>If a transaction is less than $10, the available tipping options include No Tip, $1, $2, or $3.<br>If a transaction is $10 or more, the available tipping options include No Tip, 15%, 20%, or 25%.<br>You can set custom percentage amounts with the `percentages` field. |
| `defaultPercent` | `number \| null \| undefined` | Optional | Set the pre-selected percentage amounts that appear at checkout. If Smart Tip is enabled, this only applies to transactions totaling $10 or more. |
| `smartTips` | [`Money[] \| null \| undefined`](../../doc/models/money.md) | Optional | Show the Smart Tip Amounts for this location. |
| `defaultSmartTip` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "percentages": [
    192,
    193
  ],
  "smart_tipping_enabled": false,
  "default_percent": 72,
  "smart_tips": [
    {
      "amount": 152,
      "currency": "GEL"
    },
    {
      "amount": 152,
      "currency": "GEL"
    },
    {
      "amount": 152,
      "currency": "GEL"
    }
  ],
  "default_smart_tip": {
    "amount": 58,
    "currency": "KWD"
  }
}
```

