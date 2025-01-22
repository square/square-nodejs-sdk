
# List Merchant Custom Attributes Response

Represents a [ListMerchantCustomAttributes](../../doc/api/merchant-custom-attributes.md#list-merchant-custom-attributes) response.
Either `custom_attributes`, an empty object, or `errors` is present in the response. If additional
results are available, the `cursor` field is also present along with `custom_attributes`.

## Structure

`ListMerchantCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributes` | [`CustomAttribute[] \| undefined`](../../doc/models/custom-attribute.md) | Optional | The retrieved custom attributes. If `with_definitions` was set to `true` in the request,<br>the custom attribute definition is returned in the `definition` field of each custom attribute.<br>If no custom attributes are found, Square returns an empty object (`{}`). |
| `cursor` | `string \| undefined` | Optional | The cursor to use in your next call to this endpoint to retrieve the next page of results<br>for your original request. This field is present only if the request succeeded and additional<br>results are available. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attributes": [
    {
      "key": "key8",
      "value": {
        "key1": "val1",
        "key2": "val2"
      },
      "version": 180,
      "visibility": "VISIBILITY_HIDDEN",
      "definition": {
        "key": "key0",
        "schema": {
          "key1": "val1",
          "key2": "val2"
        },
        "name": "name0",
        "description": "description0",
        "visibility": "VISIBILITY_HIDDEN"
      }
    }
  ],
  "cursor": "cursor6",
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

