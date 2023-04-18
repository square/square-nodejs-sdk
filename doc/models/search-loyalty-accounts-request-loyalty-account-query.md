
# Search Loyalty Accounts Request Loyalty Account Query

The search criteria for the loyalty accounts.

## Structure

`SearchLoyaltyAccountsRequestLoyaltyAccountQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mappings` | [`LoyaltyAccountMapping[] \| undefined`](../../doc/models/loyalty-account-mapping.md) | Optional | The set of mappings to use in the loyalty account search.<br><br>This cannot be combined with `customer_ids`.<br><br>Max: 30 mappings |
| `customerIds` | `string[] \| undefined` | Optional | The set of customer IDs to use in the loyalty account search.<br><br>This cannot be combined with `mappings`.<br><br>Max: 30 customer IDs |

## Example (as JSON)

```json
{
  "mappings": [
    {
      "id": "id4",
      "created_at": "created_at8",
      "phone_number": "phone_number8"
    }
  ],
  "customer_ids": [
    "customer_ids1",
    "customer_ids2"
  ]
}
```

