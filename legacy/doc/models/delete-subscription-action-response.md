
# Delete Subscription Action Response

Defines output parameters in a response of the [DeleteSubscriptionAction](../../doc/api/subscriptions.md#delete-subscription-action)
endpoint.

## Structure

`DeleteSubscriptionActionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered during the request. |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | Represents a subscription purchased by a customer.<br><br>For more information, see<br>[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions). |

## Example (as JSON)

```json
{
  "subscription": {
    "card_id": "ccof:IkWfpLj4tNHMyFii3GB",
    "charged_through_date": "2023-11-20",
    "created_at": "2022-07-27T21:53:10Z",
    "customer_id": "JDKYHBWT1D4F8MFH63DBMEN8Y4",
    "id": "8151fc89-da15-4eb9-a685-1a70883cebfc",
    "invoice_ids": [
      "inv:0-ChCHu2mZEabLeeHahQnXDjZQECY",
      "inv:0-ChrcX_i3sNmfsHTGKhI4Wg2mceA"
    ],
    "location_id": "S8GWD5R9QB376",
    "paid_until_date": "2024-08-01",
    "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
    "price_override_money": {
      "amount": 25000,
      "currency": "USD"
    },
    "source": {
      "name": "My Application"
    },
    "start_date": "2022-07-27",
    "status": "ACTIVE",
    "timezone": "America/Los_Angeles"
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

