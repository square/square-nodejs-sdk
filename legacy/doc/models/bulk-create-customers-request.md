
# Bulk Create Customers Request

Defines the body parameters that can be included in requests to the
[BulkCreateCustomers](../../doc/api/customers.md#bulk-create-customers) endpoint.

## Structure

`BulkCreateCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customers` | [`Record<string, BulkCreateCustomerData>`](../../doc/models/bulk-create-customer-data.md) | Required | A map of 1 to 100 individual create requests, represented by `idempotency key: { customer data }`<br>key-value pairs.<br><br>Each key is an [idempotency key](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)<br>that uniquely identifies the create request. Each value contains the customer data used to create the<br>customer profile. |

## Example (as JSON)

```json
{
  "customers": {
    "8bb76c4f-e35d-4c5b-90de-1194cd9179f0": {
      "address": {
        "address_line_1": "500 Electric Ave",
        "address_line_2": "Suite 600",
        "administrative_district_level_1": "NY",
        "country": "US",
        "locality": "New York",
        "postal_code": "10003"
      },
      "email_address": "Amelia.Earhart@example.com",
      "family_name": "Earhart",
      "given_name": "Amelia",
      "note": "a customer",
      "phone_number": "+1-212-555-4240",
      "reference_id": "YOUR_REFERENCE_ID",
      "company_name": "company_name8",
      "nickname": "nickname8"
    },
    "d1689f23-b25d-4932-b2f0-aed00f5e2029": {
      "address": {
        "address_line_1": "500 Electric Ave",
        "address_line_2": "Suite 601",
        "administrative_district_level_1": "NY",
        "country": "US",
        "locality": "New York",
        "postal_code": "10003"
      },
      "email_address": "Marie.Curie@example.com",
      "family_name": "Curie",
      "given_name": "Marie",
      "note": "another customer",
      "phone_number": "+1-212-444-4240",
      "reference_id": "YOUR_REFERENCE_ID",
      "company_name": "company_name8",
      "nickname": "nickname8"
    }
  }
}
```

