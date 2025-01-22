
# Search Subscriptions Response

Defines output parameters in a response from the
[SearchSubscriptions](../../doc/api/subscriptions.md#search-subscriptions) endpoint.

## Structure

`SearchSubscriptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscriptions` | [`Subscription[] \| undefined`](../../doc/models/subscription.md) | Optional | The subscriptions matching the specified query expressions. |
| `cursor` | `string \| undefined` | Optional | When the total number of resulting subscription exceeds the limit of a paged response,<br>the response includes a cursor for you to use in a subsequent request to fetch the next set of results.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "subscriptions": [
    {
      "canceled_date": "2021-10-30",
      "card_id": "ccof:mueUsvgajChmjEbp4GB",
      "charged_through_date": "2021-11-20",
      "created_at": "2021-10-20T21:53:10Z",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "id": "de86fc96-8664-474b-af1a-abbe59cacf0e",
      "location_id": "S8GWD5R9QB376",
      "paid_until_date": "2021-11-20",
      "plan_variation_id": "L3TJVDHVBEQEGQDEZL2JJM7R",
      "source": {
        "name": "My Application"
      },
      "start_date": "2021-10-20",
      "status": "CANCELED",
      "timezone": "UTC"
    },
    {
      "charged_through_date": "2022-08-19",
      "created_at": "2022-01-19T21:53:10Z",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "id": "56214fb2-cc85-47a1-93bc-44f3766bb56f",
      "invoice_ids": [
        "grebK0Q_l8H4fqoMMVvt-Q",
        "rcX_i3sNmHTGKhI4W2mceA"
      ],
      "location_id": "S8GWD5R9QB376",
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "price_override_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "source": {
        "name": "My Application"
      },
      "start_date": "2022-01-19",
      "status": "PAUSED",
      "tax_percentage": "5",
      "timezone": "America/Los_Angeles",
      "version": 2
    },
    {
      "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
      "created_at": "2023-06-20T21:53:10Z",
      "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
      "id": "56214fb2-cc85-47a1-93bc-44f3766bb56f",
      "location_id": "S8GWD5R9QB376",
      "phases": [
        {
          "order_template_id": "U2NaowWxzXwpsZU697x7ZHOAnCNZY",
          "ordinal": 0,
          "plan_phase_uid": "X2Q2AONPB3RB64Y27S25QCZP",
          "uid": "873451e0-745b-4e87-ab0b-c574933fe616"
        }
      ],
      "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
      "source": {
        "name": "My Application"
      },
      "start_date": "2023-06-20",
      "status": "ACTIVE",
      "timezone": "America/Los_Angeles",
      "version": 1
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "cursor": "cursor2"
}
```

