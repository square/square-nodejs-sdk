
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
  "customer_id": null,
  "custom_attribute": null,
  "errors": null
}
```

