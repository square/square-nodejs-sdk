
# List Customers Response

Defines the fields that are included in the response body of
a request to the `ListCustomers` endpoint.

Either `errors` or `customers` is present in a given response (never both).

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `customers` | [`Customer[] \| undefined`](../../doc/models/customer.md) | Optional | The customer profiles associated with the Square account or an empty object (`{}`) if none are found.<br>Only customer profiles with public information (`given_name`, `family_name`, `company_name`, `email_address`, or<br>`phone_number`) are included in the response. |
| `cursor` | `string \| undefined` | Optional | A pagination cursor to retrieve the next set of results for the<br>original query. A cursor is only present if the request succeeded and additional results<br>are available.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `count` | `bigint \| undefined` | Optional | The total count of customers associated with the Square account. Only customer profiles with public information<br>(`given_name`, `family_name`, `company_name`, `email_address`, or `phone_number`) are counted. This field is present<br>only if `count` is set to `true` in the request. |

## Example (as JSON)

```json
{
  "customers": [
    {
      "address": {
        "address_line_1": "500 Electric Ave",
        "address_line_2": "Suite 600",
        "administrative_district_level_1": "NY",
        "country": "US",
        "locality": "New York",
        "postal_code": "10003"
      },
      "created_at": "2016-03-23T20:21:54.859Z",
      "creation_source": "THIRD_PARTY",
      "email_address": "Amelia.Earhart@example.com",
      "family_name": "Earhart",
      "given_name": "Amelia",
      "group_ids": [
        "545AXB44B4XXWMVQ4W8SBT3HHF"
      ],
      "id": "JDKYHBWT1D4F8MFH63DBMEN8Y4",
      "note": "a customer",
      "phone_number": "+1-212-555-4240",
      "preferences": {
        "email_unsubscribed": false
      },
      "reference_id": "YOUR_REFERENCE_ID",
      "segment_ids": [
        "1KB9JE5EGJXCW.REACHABLE"
      ],
      "updated_at": "2016-03-23T20:21:55Z",
      "version": 1,
      "cards": [
        {
          "id": "id8",
          "card_brand": "DISCOVER",
          "last_4": "last_40",
          "exp_month": 152,
          "exp_year": 144
        },
        {
          "id": "id8",
          "card_brand": "DISCOVER",
          "last_4": "last_40",
          "exp_month": 152,
          "exp_year": 144
        }
      ]
    }
  ],
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
  ],
  "cursor": "cursor6",
  "count": 184
}
```

