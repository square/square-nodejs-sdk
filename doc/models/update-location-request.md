
# Update Location Request

The request object for the [UpdateLocation](../../doc/api/locations.md#update-location) endpoint.

## Structure

`UpdateLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). |

## Example (as JSON)

```json
{
  "location": {
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
    "description": "Midtown Atlanta store - Open weekends",
    "id": "id4",
    "name": "name4",
    "address": {
      "address_line_1": "address_line_16",
      "address_line_2": "address_line_26",
      "address_line_3": "address_line_32",
      "locality": "locality6",
      "sublocality": "sublocality6"
    },
    "timezone": "timezone6",
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ]
  }
}
```

