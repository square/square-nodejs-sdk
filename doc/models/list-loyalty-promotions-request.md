
# List Loyalty Promotions Request

Represents a [ListLoyaltyPromotions](../../doc/api/loyalty.md#list-loyalty-promotions) request.

## Structure

`ListLoyaltyPromotionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`string \| undefined`](../../doc/models/loyalty-promotion-status.md) | Optional | Indicates the status of a [loyalty promotion](../../doc/models/loyalty-promotion.md). |
| `cursor` | `string \| null \| undefined` | Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of results to return in a single paged response.<br>The minimum value is 1 and the maximum value is 30. The default value is 30.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: `>= 1`, `<= 30` |

## Example (as JSON)

```json
{
  "status": "CANCELED",
  "cursor": "cursor2",
  "limit": 58
}
```

