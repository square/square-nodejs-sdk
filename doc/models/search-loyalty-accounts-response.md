
# Search Loyalty Accounts Response

A response that includes loyalty accounts that satisfy the search criteria.

## Structure

`SearchLoyaltyAccountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `loyalty_accounts` | [`LoyaltyAccount[]`](/doc/models/loyalty-account.md) | Optional | The loyalty accounts that met the search criteria,  <br>in order of creation date. |
| `cursor` | `string` | Optional | The pagination cursor to use in a subsequent<br>request. If empty, this is the final response.<br>For more information,<br>see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "loyalty_accounts": [
    {
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
      "balance": 10,
      "lifetime_points": 20,
      "customer_id": "Q8002FAM9V1EZ0ADB2T5609X6NET1H0",
      "created_at": "2020-05-08T21:44:32Z",
      "updated_at": "2020-05-08T21:44:32Z"
    }
  ]
}
```

