
# V1 List Locations Response

## Structure

`V1ListLocationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Merchant[]`](/doc/models/v1-merchant.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "name": "name7",
      "email": "email9",
      "account_type": "BUSINESS",
      "account_capabilities": [
        "account_capabilities5"
      ]
    },
    {
      "id": "id8",
      "name": "name8",
      "email": "email8",
      "account_type": "LOCATION",
      "account_capabilities": [
        "account_capabilities6",
        "account_capabilities7"
      ]
    }
  ]
}
```

