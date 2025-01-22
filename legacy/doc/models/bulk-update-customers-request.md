
# Bulk Update Customers Request

Defines the body parameters that can be included in requests to the
[BulkUpdateCustomers](../../doc/api/customers.md#bulk-update-customers) endpoint.

## Structure

`BulkUpdateCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customers` | [`Record<string, BulkUpdateCustomerData>`](../../doc/models/bulk-update-customer-data.md) | Required | A map of 1 to 100 individual update requests, represented by `customer ID: { customer data }`<br>key-value pairs.<br><br>Each key is the ID of the [customer profile](entity:Customer) to update. To update a customer profile<br>that was created by merging existing profiles, provide the ID of the newly created profile.<br><br>Each value contains the updated customer data. Only new or changed fields are required. To add or<br>update a field, specify the new value. To remove a field, specify `null`. |

## Example (as JSON)

```json
{
  "customers": {
    "8DDA5NZVBZFGAX0V3HPF81HHE0": {
      "email_address": "New.Amelia.Earhart@example.com",
      "note": "updated customer note",
      "phone_number": null,
      "version": 2,
      "given_name": "given_name4",
      "family_name": "family_name6",
      "company_name": "company_name8",
      "nickname": "nickname8"
    },
    "N18CPRVXR5214XPBBA6BZQWF3C": {
      "family_name": "Curie",
      "given_name": "Marie",
      "version": 0,
      "company_name": "company_name8",
      "nickname": "nickname8",
      "email_address": "email_address0"
    }
  }
}
```

