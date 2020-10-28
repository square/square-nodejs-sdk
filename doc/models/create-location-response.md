
# Create Location Response

Response object returned by the [CreateLocation](#endpoint-createlocation) endpoint.

## Structure

`CreateLocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `location` | [`Location`](/doc/models/location.md) | Optional | - |

## Example (as JSON)

```json
{
  "location": {
    "id": "LOCATION_ID",
    "name": "New location name",
    "address": {
      "address_line_1": "1234 Peachtree St. NE",
      "locality": "Atlanta",
      "administrative_district_level_1": "GA",
      "postal_code": "30309"
    },
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "status": "ACTIVE",
    "created_at": "2019-07-19T17:58:25Z",
    "merchant_id": "MERCHANT_ID",
    "country": "US",
    "language_code": "en-US",
    "currency": "USD",
    "type": "PHYSICAL",
    "description": "My new location.",
    "website_url": "examplewebsite.com",
    "twitter_username": "twitter",
    "instagram_username": "instagram",
    "coordinates": {
      "latitude": 33.788567,
      "longitude": -84.466947
    },
    "mcc": "1234"
  }
}
```

