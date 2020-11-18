
# List Customers Response

Defines the fields that are included in the response body of
a request to the ListCustomers endpoint.

One of `errors` or `customers` is present in a given response (never both).

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `customers` | [`Customer[]`](/doc/models/customer.md) | Optional | An array of `Customer` objects that match the provided query. |
| `cursor` | `string` | Optional | A pagination cursor to retrieve the next set of results for the<br>original query. Only present if the request succeeded and additional results<br>are available.<br><br>See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |

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
      "email_address": "Amelia.Earhart@example.com",
      "family_name": "Earhart",
      "given_name": "Amelia",
      "group_ids": [
        "545AXB44B4XXWMVQ4W8SBT3HHF"
      ],
      "groups": [
        {
          "id": "545AXB44B4XXWMVQ4W8SBT3HHF",
          "name": "Aviation Enthusiasts"
        },
        {
          "id": "1KB9JE5EGJXCW.REACHABLE",
          "name": "Reachable"
        }
      ],
      "id": "JDKYHBWT1D4F8MFH63DBMEN8Y4",
      "note": "a customer",
      "phone_number": "1-212-555-4240",
      "reference_id": "YOUR_REFERENCE_ID",
      "segment_ids": [
        "1KB9JE5EGJXCW.REACHABLE"
      ],
      "updated_at": "2016-03-23T20:21:55Z"
    }
  ]
}
```

