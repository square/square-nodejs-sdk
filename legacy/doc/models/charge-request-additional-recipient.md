
# Charge Request Additional Recipient

Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
Support is currently limited to USD, CAD and GBP currencies

## Structure

`ChargeRequestAdditionalRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Required | The location ID for a recipient (other than the merchant) receiving a portion of the tender.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `description` | `string` | Required | The description of the additional recipient.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `amountMoney` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "location_id": "location_id6",
  "description": "description2",
  "amount_money": {
    "amount": 186,
    "currency": "AUD"
  }
}
```

