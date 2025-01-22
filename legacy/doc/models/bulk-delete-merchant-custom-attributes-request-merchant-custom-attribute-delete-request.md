
# Bulk Delete Merchant Custom Attributes Request Merchant Custom Attribute Delete Request

Represents an individual delete request in a [BulkDeleteMerchantCustomAttributes](../../doc/api/merchant-custom-attributes.md#bulk-delete-merchant-custom-attributes)
request. An individual request contains an optional ID of the associated custom attribute definition
and optional key of the associated custom attribute definition.

## Structure

`BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | The key of the associated custom attribute definition.<br>Represented as a qualified key if the requesting app is not the definition owner.<br>**Constraints**: *Pattern*: `^([a-zA-Z0-9_-]+:)?[a-zA-Z0-9_-]{1,60}$` |

## Example (as JSON)

```json
{
  "key": "key0"
}
```

