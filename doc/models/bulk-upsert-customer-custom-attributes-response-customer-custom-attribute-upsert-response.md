
# Bulk Upsert Customer Custom Attributes Response Customer Custom Attribute Upsert Response

Represents a response for an individual upsert request in a [BulkUpsertCustomerCustomAttributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes) operation.

## Structure

`BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| undefined` | Optional | The ID of the customer profile associated with the custom attribute. |
| `customAttribute` | [`CustomAttribute \| undefined`](../../doc/models/custom-attribute.md) | Optional | A custom attribute value. Each custom attribute value has a corresponding<br>`CustomAttributeDefinition` object. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred while processing the individual request. |

## Example (as JSON)

```json
{
  "custom_attribute": {
    "created_at": "2021-12-08T23:14:47Z",
    "key": "favoritemovie",
    "updated_at": "2021-12-09T00:16:23Z",
    "value": "Dune",
    "version": 1,
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  },
  "customer_id": "N3NCVYY3WS27HF0HKANA3R9FP8"
}
```

