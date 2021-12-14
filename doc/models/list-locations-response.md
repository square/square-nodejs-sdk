
# List Locations Response

Defines the fields that are included in the response body of a request
to the [ListLocations](/doc/api/locations.md#list-locations) endpoint.

One of `errors` or `locations` is present in a given response (never both).

## Structure

`ListLocationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `locations` | [`Location[] \| undefined`](/doc/models/location.md) | Optional | The business locations. |

## Example (as JSON)

```json
{
  "locations": [
    {
      "address": {
        "address_line_1": "123 Main St",
        "administrative_district_level_1": "CA",
        "country": "US",
        "locality": "San Francisco",
        "postal_code": "94114"
      },
      "business_name": "Jet Fuel Coffee",
      "capabilities": [
        "CREDIT_CARD_PROCESSING"
      ],
      "country": "US",
      "created_at": "2016-09-19T17:33:12Z",
      "currency": "USD",
      "id": "18YC4JDH91E1H",
      "language_code": "en-US",
      "merchant_id": "3MYCJG5GVYQ8Q",
      "name": "Grant Park",
      "phone_number": "+1 650-354-7217",
      "status": "ACTIVE",
      "timezone": "America/Los_Angeles"
    }
  ]
}
```

