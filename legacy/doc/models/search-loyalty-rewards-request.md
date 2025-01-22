
# Search Loyalty Rewards Request

A request to search for loyalty rewards.

## Structure

`SearchLoyaltyRewardsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`SearchLoyaltyRewardsRequestLoyaltyRewardQuery \| undefined`](../../doc/models/search-loyalty-rewards-request-loyalty-reward-query.md) | Optional | The set of search requirements. |
| `limit` | `number \| undefined` | Optional | The maximum number of results to return in the response. The default value is 30.<br>**Constraints**: `>= 1`, `<= 30` |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to<br>this endpoint. Provide this to retrieve the next set of<br>results for the original query.<br>For more information,<br>see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "limit": 10,
  "query": {
    "loyalty_account_id": "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    "status": "ISSUED"
  },
  "cursor": "cursor4"
}
```

