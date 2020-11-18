
# Retrieve Location Response

Defines the fields that the
[RetrieveLocation](#endpoint-retrievelocation) endpoint returns
in a response.

## Structure

`RetrieveLocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `location` | [`Location`](/doc/models/location.md) | Optional | - |

## Example (as JSON)

```json
{
  "location": {
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
    "name": "Jet Fuel Coffee - Grant Park",
    "phone_number": "+1 650-354-7217",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles"
  }
}
```

