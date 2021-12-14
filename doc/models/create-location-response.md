
# Create Location Response

Response object returned by the [CreateLocation](/doc/api/locations.md#create-location) endpoint.

## Structure

`CreateLocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information on [errors](https://developer.squareup.com/docs/build-basics/handling-errors) encountered during the request. |
| `location` | [`Location \| undefined`](/doc/models/location.md) | Optional | Represents one of a business's [locations](https://developer.squareup.com/docs/locations-api). |

## Example (as JSON)

```json
{
  "location": {
    "address": {
      "address_line_1": "1234 Peachtree St. NE",
      "administrative_district_level_1": "GA",
      "locality": "Atlanta",
      "postal_code": "30309"
    },
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "coordinates": {
      "latitude": 33.788567,
      "longitude": -84.466947
    },
    "country": "US",
    "created_at": "2019-07-19T17:58:25Z",
    "currency": "USD",
    "description": "My new location.",
    "id": "3Z4V4WHQK64X9",
    "instagram_username": "instagram",
    "language_code": "en-US",
    "mcc": "1234",
    "merchant_id": "BS11H1A5M511E",
    "name": "New location name",
    "status": "ACTIVE",
    "twitter_username": "twitter",
    "type": "PHYSICAL",
    "website_url": "examplewebsite.com"
  }
}
```

