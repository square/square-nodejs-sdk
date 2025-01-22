
# Bulk Delete Merchant Custom Attributes Response

Represents a [BulkDeleteMerchantCustomAttributes](../../doc/api/merchant-custom-attributes.md#bulk-delete-merchant-custom-attributes) response,
which contains a map of responses that each corresponds to an individual delete request.

## Structure

`BulkDeleteMerchantCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>`](../../doc/models/bulk-delete-merchant-custom-attributes-response-merchant-custom-attribute-delete-response.md) | Required | A map of responses that correspond to individual delete requests. Each response has the<br>same key as the corresponding request. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "values": {
    "id1": {
      "errors": [],
      "merchant_id": "DM7VKY8Q63GNP"
    },
    "id2": {
      "errors": [],
      "merchant_id": "DM7VKY8Q63GNP"
    }
  },
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
    }
  ]
}
```

