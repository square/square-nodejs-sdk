
# List Merchant Custom Attribute Definitions Response

Represents a [ListMerchantCustomAttributeDefinitions](../../doc/api/merchant-custom-attributes.md#list-merchant-custom-attribute-definitions) response.
Either `custom_attribute_definitions`, an empty object, or `errors` is present in the response.
If additional results are available, the `cursor` field is also present along with `custom_attribute_definitions`.

## Structure

`ListMerchantCustomAttributeDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinitions` | [`CustomAttributeDefinition[] \| undefined`](../../doc/models/custom-attribute-definition.md) | Optional | The retrieved custom attribute definitions. If no custom attribute definitions are found,<br>Square returns an empty object (`{}`). |
| `cursor` | `string \| undefined` | Optional | The cursor to provide in your next call to this endpoint to retrieve the next page of<br>results for your original request. This field is present only if the request succeeded and<br>additional results are available. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "cursor": "ImfNzWVSiAYyiAR4gEcxDJ75KZAOSjX8H2BVHUTR0ofCtp4SdYvrUKbwYY2aCH2WqZ2FsfAuylEVUlTfaINg3ecIlFpP9Y5Ie66w9NSg9nqdI5fCJ6qdH2s0za5m2plFonsjIuFaoN89j78ROUwuSOzD6mFZPcJHhJ0CxEKc0SBH",
  "custom_attribute_definitions": [
    {
      "created_at": "2023-05-05T16:50:21.832Z",
      "description": "Whether the merchant has seen the tutorial screen for using the app.",
      "key": "has_seen_tutorial",
      "name": "NAME",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "updated_at": "2023-05-05T16:50:21.832Z",
      "version": 1,
      "visibility": "VISIBILITY_READ_WRITE_VALUES"
    },
    {
      "created_at": "2023-05-05T19:06:36.559Z",
      "description": "This is the other name this merchant goes by.",
      "key": "alternative_seller_name",
      "name": "Alternative Merchant Name",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "updated_at": "2023-05-05T10:17:52.341Z",
      "version": 4,
      "visibility": "VISIBILITY_READ_ONLY"
    }
  ],
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

