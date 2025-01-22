
# Create Location Request

The request object for the [CreateLocation](../../doc/api/locations.md#create-location) endpoint.

## Structure

`CreateLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
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
    "description": "Midtown Atlanta store",
    "name": "Midtown",
    "id": "id4",
    "timezone": "timezone6",
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ]
  }
}
```

