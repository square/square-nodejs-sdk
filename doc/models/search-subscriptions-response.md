
# Search Subscriptions Response

Defines the fields that are included in the response from the
[SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint.

## Structure

`SearchSubscriptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `subscriptions` | [`Subscription[]`](/doc/models/subscription.md) | Optional | The search result. |
| `cursor` | `string` | Optional | When a response is truncated, it includes a cursor that you can<br>use in a subsequent request to fetch the next set of subscriptions.<br>If empty, this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). |

## Example (as JSON)

```json
{
  "subscriptions": [
    {
      "id": "de86fc96-8664-474b-af1a-abbe59cacf0e",
      "location_id": "S8GWD5R9QB376",
      "plan_id": "L3TJVDHVBEQEGQDEZL2JJM7R",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "start_date": "2020-04-14",
      "canceled_date": "2020-04-14",
      "charged_through_date": "2020-05-14",
      "status": "CANCELED",
      "created_at": "2020-08-03T21:53:10Z",
      "card_id": "ccof:mueUsvgajChmjEbp4GB",
      "paid_until_date": "2020-05-14",
      "timezone": "UTC"
    },
    {
      "id": "56214fb2-cc85-47a1-93bc-44f3766bb56f",
      "location_id": "S8GWD5R9QB376",
      "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "start_date": "2020-08-01",
      "status": "PENDING",
      "tax_percentage": "5",
      "price_override_money": {
        "amount": 100,
        "currency": "USD"
      },
      "version": 1594155459464,
      "created_at": "2020-08-03T21:53:10Z",
      "timezone": "America/Los_Angeles"
    },
    {
      "id": "8151fc89-da15-4eb9-a685-1a70883cebfc",
      "location_id": "S8GWD5R9QB376",
      "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "start_date": "2020-05-11",
      "charged_through_date": "2020-06-11",
      "status": "ACTIVE",
      "invoice_ids": [
        "grebK0Q_l8H4fqoMMVvt-Q",
        "rcX_i3sNmHTGKhI4W2mceA"
      ],
      "price_override_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "created_at": "2020-08-03T21:53:10Z",
      "paid_until_date": "2020-06-11",
      "timezone": "America/Los_Angeles"
    }
  ]
}
```

