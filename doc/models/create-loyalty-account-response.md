
# Create Loyalty Account Response

A response that includes loyalty account created.

## Structure

`CreateLoyaltyAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `loyalty_account` | [`LoyaltyAccount`](/doc/models/loyalty-account.md) | Optional | Describes a loyalty account. For more information, see<br>[Loyalty Overview](https://developer.squareup.com/docs/docs/loyalty/overview). |

## Example (as JSON)

```json
{
  "loyalty_account": {
    "id": "79b807d2-d786-46a9-933b-918028d7a8c5",
    "mappings": [
      {
        "id": "66aaab3f-da99-49ed-8b19-b87f851c844f",
        "type": "PHONE",
        "value": "+14155551234",
        "created_at": "2020-05-08T21:44:32Z"
      }
    ],
    "program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd",
    "balance": 0,
    "lifetime_points": 0,
    "created_at": "2020-05-08T21:44:32Z",
    "updated_at": "2020-05-08T21:44:32Z"
  }
}
```

