
# Enable Events Response

Defines the fields that are included in the response body of
a request to the [EnableEvents](../../doc/api/events.md#enable-events) endpoint.

Note: if there are errors processing the request, the events field will not be
present.

## Structure

`EnableEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

