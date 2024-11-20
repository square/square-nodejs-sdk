
# Bulk Create Customers Response

Defines the fields included in the response body from the
[BulkCreateCustomers](../../doc/api/customers.md#bulk-create-customers) endpoint.

## Structure

`BulkCreateCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responses` | [`Record<string, CreateCustomerResponse> \| undefined`](../../doc/models/create-customer-response.md) | Optional | A map of responses that correspond to individual create requests, represented by<br>key-value pairs.<br><br>Each key is the idempotency key that was provided for a create request and each value<br>is the corresponding response.<br>If the request succeeds, the value is the new customer profile.<br>If the request fails, the value contains any errors that occurred during the request. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any top-level errors that prevented the bulk operation from running. |

## Example (as JSON)

```json
{
  "responses": {
    "8bb76c4f-e35d-4c5b-90de-1194cd9179f4": {
      "customer": {
        "address": {
          "address_line_1": "500 Electric Ave",
          "address_line_2": "Suite 600",
          "administrative_district_level_1": "NY",
          "country": "US",
          "locality": "New York",
          "postal_code": "10003"
        },
        "created_at": "2024-03-23T20:21:54.859Z",
        "creation_source": "THIRD_PARTY",
        "email_address": "Amelia.Earhart@example.com",
        "family_name": "Earhart",
        "given_name": "Amelia",
        "id": "8DDA5NZVBZFGAX0V3HPF81HHE0",
        "note": "a customer",
        "phone_number": "+1-212-555-4240",
        "preferences": {
          "email_unsubscribed": false
        },
        "reference_id": "YOUR_REFERENCE_ID",
        "updated_at": "2024-03-23T20:21:54.859Z",
        "version": 0,
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
    "d1689f23-b25d-4932-b2f0-aed00f5e2029": {
      "customer": {
        "address": {
          "address_line_1": "500 Electric Ave",
          "address_line_2": "Suite 601",
          "administrative_district_level_1": "NY",
          "country": "US",
          "locality": "New York",
          "postal_code": "10003"
        },
        "created_at": "2024-03-23T20:21:54.859Z",
        "creation_source": "THIRD_PARTY",
        "email_address": "Marie.Curie@example.com",
        "family_name": "Curie",
        "given_name": "Marie",
        "id": "N18CPRVXR5214XPBBA6BZQWF3C",
        "note": "another customer",
        "phone_number": "+1-212-444-4240",
        "preferences": {
          "email_unsubscribed": false
        },
        "reference_id": "YOUR_REFERENCE_ID",
        "updated_at": "2024-03-23T20:21:54.859Z",
        "version": 0,
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
    }
  ]
}
```

