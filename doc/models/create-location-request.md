
# Create Location Request

Request object for the [CreateLocation](/doc/api/locations.md#create-location) endpoint.

## Structure

`CreateLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location \| undefined`](/doc/models/location.md) | Optional | Represents one of a business's locations. |

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
    "description": "My new location.",
    "facebook_url": "null",
    "name": "New location name"
  }
}
```

