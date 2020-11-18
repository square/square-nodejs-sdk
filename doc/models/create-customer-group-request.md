
# Create Customer Group Request

Defines the body parameters that can be provided in a request to the
[CreateCustomerGroup](#endpoint-createcustomegroup) endpoint.

## Structure

`CreateCustomerGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Optional | The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency)<br>guide for more information. |
| `group` | [`CustomerGroup`](/doc/models/customer-group.md) |  | Represents a group of customer profiles.<br><br>Customer groups can be created, modified, and have their membership defined either via<br>the Customers API or within Customer Directory in the Square Dashboard or Point of Sale. |

## Example (as JSON)

```json
{
  "group": {
    "name": "Loyal Customers"
  }
}
```

