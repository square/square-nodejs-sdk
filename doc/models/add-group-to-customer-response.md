
# Add Group to Customer Response

Defines the fields that are included in the response body of
a request to the [AddGroupToCustomer](../../doc/api/customers.md#add-group-to-customer) endpoint.

## Structure

`AddGroupToCustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

