
# Retrieve Customer Custom Attribute Definition Request

Represents a [RetrieveCustomerCustomAttributeDefinition](../../doc/api/customer-custom-attributes.md#retrieve-customer-custom-attribute-definition) request.

## Structure

`RetrieveCustomerCustomAttributeDefinitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `number \| undefined` | Optional | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

## Example (as JSON)

```json
{
  "version": 38
}
```

