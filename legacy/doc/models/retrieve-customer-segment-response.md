
# Retrieve Customer Segment Response

Defines the fields that are included in the response body for requests to the `RetrieveCustomerSegment` endpoint.

Either `errors` or `segment` is present in a given response (never both).

## Structure

`RetrieveCustomerSegmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `segment` | [`CustomerSegment \| undefined`](../../doc/models/customer-segment.md) | Optional | Represents a group of customer profiles that match one or more predefined filter criteria.<br><br>Segments (also known as Smart Groups) are defined and created within the Customer Directory in the<br>Square Seller Dashboard or Point of Sale. |

## Example (as JSON)

```json
{
  "segment": {
    "created_at": "2020-01-09T19:33:24.469Z",
    "id": "GMNXRZVEXNQDF.CHURN_RISK",
    "name": "Lapsed",
    "updated_at": "2020-04-13T23:01:13Z"
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

