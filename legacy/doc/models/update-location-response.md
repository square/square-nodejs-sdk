
# Update Location Response

The response object returned by the [UpdateLocation](../../doc/api/locations.md#update-location) endpoint.

## Structure

`UpdateLocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). |

## Example (as JSON)

```json
{
  "location": {
    "address": {
      "address_line_1": "1234 Peachtree St. NE",
      "administrative_district_level_1": "GA",
      "locality": "Atlanta",
      "postal_code": "30309",
      "address_line_2": "address_line_26",
      "address_line_3": "address_line_32",
      "sublocality": "sublocality6"
    },
    "business_hours": {
      "periods": [
        {
          "day_of_week": "FRI",
          "end_local_time": "18:00",
          "start_local_time": "07:00"
        },
        {
          "day_of_week": "SAT",
          "end_local_time": "18:00",
          "start_local_time": "07:00"
        },
        {
          "day_of_week": "SUN",
          "end_local_time": "15:00",
          "start_local_time": "09:00"
        }
      ]
    },
    "business_name": "Jet Fuel Coffee",
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "coordinates": {
      "latitude": 33.7889,
      "longitude": -84.3841
    },
    "country": "US",
    "created_at": "2022-02-19T17:58:25Z",
    "currency": "USD",
    "description": "Midtown Atlanta store - Open weekends",
    "id": "3Z4V4WHQK64X9",
    "language_code": "en-US",
    "mcc": "7299",
    "merchant_id": "3MYCJG5GVYQ8Q",
    "name": "Midtown",
    "status": "ACTIVE",
    "timezone": "America/New_York",
    "type": "PHYSICAL"
  },
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
    }
  ]
}
```

