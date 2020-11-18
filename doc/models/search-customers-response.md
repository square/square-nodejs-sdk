
# Search Customers Response

Defines the fields that are included in the response body of
a request to the SearchCustomers endpoint.

One of `errors` or `customers` is present in a given response (never both).

## Structure

`SearchCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `customers` | [`Customer[]`](/doc/models/customer.md) | Optional | An array of `Customer` objects that match a query. |
| `cursor` | `string` | Optional | A pagination cursor that can be used during subsequent calls<br>to SearchCustomers to retrieve the next set of results associated<br>with the original query. Pagination cursors are only present when<br>a request succeeds and additional results are available.<br><br>See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |

## Example (as JSON)

```json
{
  "cursor": "9dpS093Uy12AzeE",
  "customers": [
    {
      "address": {
        "address_line_1": "505 Electric Ave",
        "address_line_2": "Suite 600",
        "administrative_district_level_1": "NY",
        "country": "US",
        "locality": "New York",
        "postal_code": "10003"
      },
      "created_at": "2018-01-23T20:21:54.859Z",
      "creation_source": "THIRD_PARTY",
      "email_address": "james.bond@example.com",
      "family_name": "Bond",
      "given_name": "James",
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
      "phone_number": "1-212-555-4250",
      "reference_id": "YOUR_REFERENCE_ID_2",
      "segment_ids": [
        "1KB9JE5EGJXCW.REACHABLE"
      ],
      "updated_at": "2018-04-20T10:02:43.083Z"
    },
    {
      "address": {
        "address_line_1": "500 Electric Ave",
        "address_line_2": "Suite 600",
        "administrative_district_level_1": "NY",
        "country": "US",
        "locality": "New York",
        "postal_code": "10003"
      },
      "created_at": "2018-01-30T14:10:54.859Z",
      "creation_source": "THIRD_PARTY",
      "email_address": "amelia.earhart@example.com",
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
      "reference_id": "YOUR_REFERENCE_ID_1",
      "segment_ids": [
        "1KB9JE5EGJXCW.REACHABLE"
      ],
      "updated_at": "2018-03-08T18:25:54.859Z"
    }
  ]
}
```

