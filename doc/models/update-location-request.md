
# Update Location Request

Request object for the [UpdateLocation](/doc/api/locations.md#update-location) endpoint.

## Structure

`UpdateLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location \| undefined`](/doc/models/location.md) | Optional | - |

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
    "business_hours": {
      "periods": [
        {
          "day_of_week": "MON",
          "end_local_time": "17:00",
          "start_local_time": "09:00"
        }
      ]
    },
    "description": "Updated description",
    "facebook_url": "null",
    "instagram_username": "instagram",
    "name": "Updated nickname",
    "twitter_username": "twitter"
  }
}
```

