
# Bulk Retrieve Customers Response

Defines the fields included in the response body from the
[BulkRetrieveCustomers](../../doc/api/customers.md#bulk-retrieve-customers) endpoint.

## Structure

`BulkRetrieveCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responses` | [`Record<string, RetrieveCustomerResponse> \| undefined`](../../doc/models/retrieve-customer-response.md) | Optional | A map of responses that correspond to individual retrieve requests, represented by<br>key-value pairs.<br><br>Each key is the customer ID that was specified for a retrieve request and each value<br>is the corresponding response.<br>If the request succeeds, the value is the requested customer profile.<br>If the request fails, the value contains any errors that occurred during the request. |
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
      ],
      "customer": {
        "id": "id0",
        "created_at": "created_at2",
        "updated_at": "updated_at4",
        "cards": [
          {
            "id": "id8",
            "card_brand": "DISCOVER",
            "last_4": "last_40",
            "exp_month": 152,
            "exp_year": 144
          }
        ],
        "given_name": "given_name2"
      }
    },
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
        "version": 3
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
        "version": 1
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

