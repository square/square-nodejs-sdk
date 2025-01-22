
# List Order Custom Attribute Definitions Response

Represents a response from listing order custom attribute definitions.

## Structure

`ListOrderCustomAttributeDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttributeDefinitions` | [`CustomAttributeDefinition[]`](../../doc/models/custom-attribute-definition.md) | Required | The retrieved custom attribute definitions. If no custom attribute definitions are found, Square returns an empty object (`{}`). |
| `cursor` | `string \| undefined` | Optional | The cursor to provide in your next call to this endpoint to retrieve the next page of results for your original request.<br>This field is present only if the request succeeded and additional results are available.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).<br>**Constraints**: *Minimum Length*: `1` |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute_definitions": [
    {
      "created_at": "2022-11-16T18:03:44.051Z",
      "description": "The number of people seated at a table",
      "key": "cover-count",
      "name": "Cover count",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "updated_at": "2022-11-16T18:03:44.051Z",
      "version": 1,
      "visibility": "VISIBILITY_READ_WRITE_VALUES"
    },
    {
      "created_at": "2022-11-16T18:04:32.059Z",
      "description": "The identifier for a particular seat",
      "key": "seat-number",
      "name": "Seat number",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "updated_at": "2022-11-16T18:04:32.059Z",
      "version": 1,
      "visibility": "VISIBILITY_READ_WRITE_VALUES"
    },
    {
      "created_at": "2022-11-16T18:04:21.912Z",
      "description": "The identifier for a particular table",
      "key": "table-number",
      "name": "Table number",
      "schema": {
        "key1": "val1",
        "key2": "val2"
      },
      "updated_at": "2022-11-16T18:04:21.912Z",
      "version": 1,
      "visibility": "VISIBILITY_READ_WRITE_VALUES"
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

