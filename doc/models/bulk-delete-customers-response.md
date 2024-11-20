
# Bulk Delete Customers Response

Defines the fields included in the response body from the
[BulkDeleteCustomers](../../doc/api/customers.md#bulk-delete-customers) endpoint.

## Structure

`BulkDeleteCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responses` | [`Record<string, DeleteCustomerResponse> \| undefined`](../../doc/models/delete-customer-response.md) | Optional | A map of responses that correspond to individual delete requests, represented by<br>key-value pairs.<br><br>Each key is the customer ID that was specified for a delete request and each value<br>is the corresponding response.<br>If the request succeeds, the value is an empty object (`{ }`).<br>If the request fails, the value contains any errors that occurred during the request. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any top-level errors that prevented the bulk operation from running. |

## Example (as JSON)

```json
{
  "responses": {
    "2GYD7WNXF7BJZW1PMGNXZ3Y8M8": {
      "errors": [
        {
          "category": "INVALID_REQUEST_ERROR",
          "code": "NOT_FOUND",
          "detail": "Customer with ID `2GYD7WNXF7BJZW1PMGNXZ3Y8M8` not found.",
          "field": "field4"
        }
      ]
    },
    "8DDA5NZVBZFGAX0V3HPF81HHE0": {
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        }
      ]
    },
    "N18CPRVXR5214XPBBA6BZQWF3C": {
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        }
      ]
    }
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

