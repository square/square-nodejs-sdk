
# Update Customer Group Request

Defines the body parameters that can be included in a request to the
[UpdateCustomerGroup](../../doc/api/customer-groups.md#update-customer-group) endpoint.

## Structure

`UpdateCustomerGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`CustomerGroup`](../../doc/models/customer-group.md) | Required | Represents a group of customer profiles.<br><br>Customer groups can be created, be modified, and have their membership defined using<br>the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale. |

## Example (as JSON)

```json
{
  "group": {
    "name": "Loyal Customers",
    "id": "id8",
    "created_at": "created_at4",
    "updated_at": "updated_at6"
  }
}
```

