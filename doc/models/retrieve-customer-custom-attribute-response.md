
# Retrieve Customer Custom Attribute Response

Represents a [RetrieveCustomerCustomAttribute](../../doc/api/customer-custom-attributes.md#retrieve-customer-custom-attribute) response.
Either `custom_attribute_definition` or `errors` is present in the response.

## Structure

`RetrieveCustomerCustomAttributeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customAttribute` | [`CustomAttribute \| undefined`](../../doc/models/custom-attribute.md) | Optional | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "custom_attribute": {
    "created_at": "2022-04-26T15:50:27Z",
    "key": "favoritemovie",
    "updated_at": "2022-04-26T15:50:27Z",
    "value": "Dune",
    "version": 1,
    "visibility": "VISIBILITY_READ_ONLY"
  }
}
```

