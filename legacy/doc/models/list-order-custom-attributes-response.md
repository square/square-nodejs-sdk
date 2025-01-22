
# List Order Custom Attributes Response

Represents a response from listing order custom attributes.

## Structure

`ListOrderCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributes` | [`CustomAttribute[] \| undefined`](../../doc/models/custom-attribute.md) | Optional | The retrieved custom attributes. If no custom attribute are found, Square returns an empty object (`{}`). |
| `cursor` | `string \| undefined` | Optional | The cursor to provide in your next call to this endpoint to retrieve the next page of results for your original request.<br>This field is present only if the request succeeded and additional results are available.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).<br>**Constraints**: *Minimum Length*: `1` |
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
    },
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
  "cursor": "cursor4",
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

