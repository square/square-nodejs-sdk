
# List Merchants Response

The response object returned by the [ListMerchant](../../doc/api/merchants.md#list-merchants) endpoint.

## Structure

`ListMerchantsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `merchant` | [`Merchant[] \| undefined`](../../doc/models/merchant.md) | Optional | The requested `Merchant` entities. |
| `cursor` | `number \| undefined` | Optional | If the  response is truncated, the cursor to use in next  request to fetch next set of objects. |

## Example (as JSON)

```json
{
  "merchant": [
    {
      "business_name": "Apple A Day",
      "country": "US",
      "created_at": "2021-12-10T19:25:52.484Z",
      "currency": "USD",
      "id": "DM7VKY8Q63GNP",
      "language_code": "en-US",
      "main_location_id": "9A65CGC72ZQG1",
      "status": "ACTIVE"
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "cursor": 124
}
```

