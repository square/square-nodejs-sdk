
# Update Customer Response

Defines the fields that are included in the response body of
a request to the UpdateCustomer endpoint.

One of `errors` or `customer` is present in a given response (never both).

## Structure

`UpdateCustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `customer` | [`Customer`](/doc/models/customer.md) | Optional | Represents a Square customer profile, which can have one or more<br>cards on file associated with it. |

## Example (as JSON)

```json
{
  "customer": {
    "address": {
      "address_line_1": "500 Electric Ave",
      "address_line_2": "Suite 600",
      "administrative_district_level_1": "NY",
      "country": "US",
      "locality": "New York",
      "postal_code": "10003"
    },
    "created_at": "2016-03-23T20:21:54.859Z",
    "email_address": "New.Amelia.Earhart@example.com",
    "family_name": "Earhart",
    "given_name": "Amelia",
    "groups": [
      {
        "id": "16894e93-96eb-4ced-b24b-f71d42bf084c",
        "name": "Aviation Enthusiasts"
      }
    ],
    "id": "JDKYHBWT1D4F8MFH63DBMEN8Y4",
    "note": "updated customer note",
    "reference_id": "YOUR_REFERENCE_ID",
    "updated_at": "2016-03-25T20:21:55Z"
  }
}
```

