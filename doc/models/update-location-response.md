
# Update Location Response

Response object returned by the [UpdateLocation](/doc/api/locations.md#update-location) endpoint.

## Structure

`UpdateLocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
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
    "business_email": "example@squareup.com",
    "business_hours": {
      "periods": [
        {
          "day_of_week": "MON",
          "end_local_time": "17:00",
          "start_local_time": "09:00"
        }
      ]
    },
    "business_name": "Business Name",
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
    "description": "Updated description",
    "id": "LOCATION_ID",
    "instagram_username": "instagram",
    "language_code": "en-US",
    "mcc": "1234",
    "merchant_id": "MERCHANT_ID",
    "name": "Updated nickname",
    "phone_number": "5559211234",
    "status": "ACTIVE",
    "timezone": "America/New_York",
    "twitter_username": "twitter",
    "type": "MOBILE",
    "website_url": "examplewebsite.com"
  }
}
```

