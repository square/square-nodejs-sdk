
# Update Location Response

Response object returned by the [UpdateLocation](#endpoint-updatelocation) endpoint.

## Structure

`UpdateLocationResponse`

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
    "name": "Updated nickname",
    "address": {
      "address_line_1": "1234 Peachtree St. NE",
      "locality": "Atlanta",
      "administrative_district_level_1": "GA",
      "postal_code": "30309"
    },
    "timezone": "America/New_York",
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "status": "ACTIVE",
    "created_at": "2019-07-19T17:58:25Z",
    "merchant_id": "MERCHANT_ID",
    "country": "US",
    "language_code": "en-US",
    "currency": "USD",
    "phone_number": "5559211234",
    "business_name": "Business Name",
    "type": "MOBILE",
    "website_url": "examplewebsite.com",
    "business_hours": {
      "periods": [
        {
          "day_of_week": "MON",
          "start_local_time": "09:00",
          "end_local_time": "17:00"
        }
      ]
    },
    "business_email": "example@squareup.com",
    "description": "Updated description",
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

