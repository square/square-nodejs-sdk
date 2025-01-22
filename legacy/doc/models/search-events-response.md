
# Search Events Response

Defines the fields that are included in the response body of
a request to the [SearchEvents](../../doc/api/events.md#search-events) endpoint.

Note: if there are errors processing the request, the events field will not be
present.

## Structure

`SearchEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `events` | [`Event[] \| undefined`](../../doc/models/event.md) | Optional | The list of [Event](entity:Event)s returned by the search. |
| `metadata` | [`EventMetadata[] \| undefined`](../../doc/models/event-metadata.md) | Optional | Contains the metadata of an event. For more information, see [Event](entity:Event). |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can use in a subsequent request to fetch the next set of events. If empty, this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "cursor": "6b571fc9773647f=",
  "events": [
    {
      "created_at": "2022-04-26T10:08:40.454726",
      "data": {
        "id": "ORSEVtZAJxb37RA1EiGw",
        "object": {
          "dispute": {
            "amount_money": {
              "amount": 8801,
              "currency": "USD"
            },
            "brand_dispute_id": "r9rKGSBBQbywBNnWWIiGFg",
            "card_brand": "VISA",
            "created_at": "2020-02-19T21:24:53.258Z",
            "disputed_payment": {
              "payment_id": "fbmsaEOpoARDKxiSGH1fqPuqoqFZY"
            },
            "due_at": "2020-03-04T00:00:00.000Z",
            "id": "ORSEVtZAJxb37RA1EiGw",
            "location_id": "VJDQQP3CG14EY",
            "reason": "AMOUNT_DIFFERS",
            "reported_at": "2020-02-19T00:00:00.000Z",
            "state": "WON",
            "updated_at": "2020-02-19T21:34:41.851Z",
            "version": 6
          }
        },
        "type": "dispute"
      },
      "event_id": "73ecd468-0aba-424f-b862-583d44efe7c8",
      "location_id": "VJDQQP3CG14EY",
      "merchant_id": "0HPGX5JYE6EE1",
      "type": "dispute.state.updated"
    }
  ],
  "metadata": [
    {
      "api_version": "2022-12-13",
      "event_id": "73ecd468-0aba-424f-b862-583d44efe7c8"
    }
  ],
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

