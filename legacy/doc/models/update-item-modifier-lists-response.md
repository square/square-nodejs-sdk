
# Update Item Modifier Lists Response

## Structure

`UpdateItemModifierListsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `updatedAt` | `string \| undefined` | Optional | The database [timestamp](https://developer.squareup.com/docs/build-basics/common-data-types/working-with-dates) of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. |

## Example (as JSON)

```json
{
  "updated_at": "2016-11-16T22:25:24.878Z",
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

