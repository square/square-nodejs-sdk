
# Bulk Retrieve Customers Request

Defines the body parameters that can be included in requests to the
[BulkRetrieveCustomers](../../doc/api/customers.md#bulk-retrieve-customers) endpoint.

## Structure

`BulkRetrieveCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerIds` | `string[]` | Required | The IDs of the [customer profiles](entity:Customer) to retrieve. |

## Example (as JSON)

```json
{
  "customer_ids": [
    "8DDA5NZVBZFGAX0V3HPF81HHE0",
    "N18CPRVXR5214XPBBA6BZQWF3C",
    "2GYD7WNXF7BJZW1PMGNXZ3Y8M8"
  ]
}
```

