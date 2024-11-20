
# Bulk Update Customers Response

Defines the fields included in the response body from the
[BulkUpdateCustomers](../../doc/api/customers.md#bulk-update-customers) endpoint.

## Structure

`BulkUpdateCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responses` | [`Record<string, UpdateCustomerResponse> \| undefined`](../../doc/models/update-customer-response.md) | Optional | A map of responses that correspond to individual update requests, represented by<br>key-value pairs.<br><br>Each key is the customer ID that was specified for an update request and each value<br>is the corresponding response.<br>If the request succeeds, the value is the updated customer profile.<br>If the request fails, the value contains any errors that occurred during the request. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any top-level errors that prevented the bulk operation from running. |

## Example (as JSON)

```json
{
  "responses": {
    "8DDA5NZVBZFGAX0V3HPF81HHE0": {
      "customer": {
        "birthday": "1897-07-24",
        "created_at": "2024-01-19T00:27:54.59Z",
        "creation_source": "THIRD_PARTY",
        "email_address": "New.Amelia.Earhart@example.com",
        "family_name": "Earhart",
        "given_name": "Amelia",
        "id": "8DDA5NZVBZFGAX0V3HPF81HHE0",
        "note": "updated customer note",
        "preferences": {
          "email_unsubscribed": false
        },
        "updated_at": "2024-01-19T00:38:06Z",
        "version": 3,
        "cards": [
          {
            "id": "id8",
            "card_brand": "DISCOVER",
            "last_4": "last_40",
            "exp_month": 152,
            "exp_year": 144
          }
        ]
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
      "customer": {
        "created_at": "2024-01-19T00:27:54.59Z",
        "creation_source": "THIRD_PARTY",
        "family_name": "Curie",
        "given_name": "Marie",
        "id": "N18CPRVXR5214XPBBA6BZQWF3C",
        "preferences": {
          "email_unsubscribed": false
        },
        "updated_at": "2024-01-19T00:38:06Z",
        "version": 1,
        "cards": [
          {
            "id": "id8",
            "card_brand": "DISCOVER",
            "last_4": "last_40",
            "exp_month": 152,
            "exp_year": 144
          }
        ]
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

