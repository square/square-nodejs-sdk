
# Search Loyalty Accounts Request

A request to search for loyalty accounts.

## Structure

`SearchLoyaltyAccountsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`SearchLoyaltyAccountsRequestLoyaltyAccountQuery`](/doc/models/search-loyalty-accounts-request-loyalty-account-query.md) | Optional | The search criteria for the loyalty accounts. |
| `limit` | `number` | Optional | The maximum number of results to include in the response.<br>**Constraints**: `>= 1`, `<= 30` |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to<br>this endpoint. Provide this to retrieve the next set of<br>results for the original query.<br><br>For more information,<br>see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "limit": 10,
  "query": {
    "mappings": [
      {
        "type": "PHONE",
        "value": "+14155551234"
      }
    ]
  }
}
```

