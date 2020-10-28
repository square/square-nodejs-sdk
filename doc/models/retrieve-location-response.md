
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
    "id": "18YC4JDH91E1H",
    "name": "Jet Fuel Coffee - Grant Park",
    "address": {
      "address_line_1": "123 Main St",
      "locality": "San Francisco",
      "administrative_district_level_1": "CA",
      "postal_code": "94114",
      "country": "US"
    },
    "timezone": "America/Los_Angeles",
    "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "status": "ACTIVE",
    "created_at": "2016-09-19T17:33:12Z",
    "merchant_id": "3MYCJG5GVYQ8Q",
    "country": "US",
    "language_code": "en-US",
    "currency": "USD",
    "phone_number": "+1 650-354-7217",
    "business_name": "Jet Fuel Coffee"
  }
}
```

