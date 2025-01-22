
# Bulk Delete Merchant Custom Attributes Request

Represents a [BulkDeleteMerchantCustomAttributes](../../doc/api/merchant-custom-attributes.md#bulk-delete-merchant-custom-attributes) request.

## Structure

`BulkDeleteMerchantCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>`](../../doc/models/bulk-delete-merchant-custom-attributes-request-merchant-custom-attribute-delete-request.md) | Required | The data used to update the `CustomAttribute` objects.<br>The keys must be unique and are used to map to the corresponding response. |

## Example (as JSON)

```json
{
  "values": {
    "id1": {
      "key": "alternative_seller_name",
      "merchant_id": "DM7VKY8Q63GNP"
    },
    "id2": {
      "key": "has_seen_tutorial",
      "merchant_id": "DM7VKY8Q63GNP"
    }
  }
}
```

