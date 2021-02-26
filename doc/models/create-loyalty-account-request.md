
# Create Loyalty Account Request

A request to create a new loyalty account.

## Structure

`CreateLoyaltyAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAccount` | [`LoyaltyAccount`](/doc/models/loyalty-account.md) | Required | Describes a loyalty account. For more information, see<br>[Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview). |
| `idempotencyKey` | `string` | Required | A unique string that identifies this `CreateLoyaltyAccount` request.<br>Keys can be any valid string, but must be unique for every request.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |

## Example (as JSON)

```json
{
  "idempotency_key": "ec78c477-b1c3-4899-a209-a4e71337c996",
  "loyalty_account": {
    "mappings": [
      {
        "type": "PHONE",
        "value": "+14155551234"
      }
    ],
    "program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd"
  }
}
```

