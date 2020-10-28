
# Create Subscription Request

Defines parameters in a
[CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint request.

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` |  | A unique string that identifies this `CreateSubscription` request.<br>If you do not provide a unique string (or provide an empty string as the value),<br>the endpoint treats each request as independent.<br><br>For more information, see [Idempotency keys](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). |
| `location_id` | `string` |  | The ID of the location the subscription is associated with. |
| `plan_id` | `string` |  | The ID of the subscription plan. For more information, see<br>[Subscription Plan Overview](https://developer.squareup.com/docs/docs/subscriptions/overview). |
| `customer_id` | `string` |  | The ID of the [customer](#type-customer) profile. |
| `start_date` | `string` | Optional | The start date of the subscription, in YYYY-MM-DD format. For example,<br>2013-01-15. If the start date is left empty, the subscription begins<br>immediately. |
| `canceled_date` | `string` | Optional | The date when the subscription should be canceled, in<br>YYYY-MM-DD format (for example, 2025-02-29). This overrides the plan configuration<br>if it comes before the date the subscription would otherwise end. |
| `tax_percentage` | `string` | Optional | The tax to add when billing the subscription.<br>The percentage is expressed in decimal form, using a `'.'` as the decimal<br>separator and without a `'%'` sign. For example, a value of 7.5<br>corresponds to 7.5%. |
| `price_override_money` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `card_id` | `string` | Optional | The ID of the [customer](#type-customer) [card](#type-card) to charge.<br>If not specified, Square sends an invoice via email. For an example to<br>create a customer and add a card on file, see [Subscriptions Walkthrough](https://developer.squareup.com/docs/docs/subscriptions-api/walkthrough). |
| `timezone` | `string` | Optional | The timezone that is used in date calculations for the subscription. If unset, defaults to<br>the location timezone. If a timezone is not configured for the location, defaults to "America/New_York".<br>Format: the IANA Timezone Database identifier for the location timezone. For<br>a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |

## Example (as JSON)

```json
{
  "idempotency_key": "8193148c-9586-11e6-99f9-28cfe92138cf",
  "location_id": "S8GWD5R9QB376",
  "plan_id": "6JHXF3B2CW3YKHDV4XEM674H",
  "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
  "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
  "start_date": "2020-08-01",
  "tax_percentage": "5",
  "price_override_money": {
    "amount": 100,
    "currency": "USD"
  },
  "timezone": "America/Los_Angeles"
}
```

