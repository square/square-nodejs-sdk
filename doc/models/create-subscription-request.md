
# Create Subscription Request

Defines input parameters in a request to the
[CreateSubscription](../../doc/api/subscriptions.md#create-subscription) endpoint.

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Optional | A unique string that identifies this `CreateSubscription` request.<br>If you do not provide a unique string (or provide an empty string as the value),<br>the endpoint treats each request as independent.<br><br>For more information, see [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency). |
| `locationId` | `string` | Required | The ID of the location the subscription is associated with.<br>**Constraints**: *Minimum Length*: `1` |
| `planVariationId` | `string \| undefined` | Optional | The ID of the [subscription plan variation](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations#plan-variations) created using the Catalog API. |
| `customerId` | `string` | Required | The ID of the [customer](entity:Customer) subscribing to the subscription plan variation.<br>**Constraints**: *Minimum Length*: `1` |
| `startDate` | `string \| undefined` | Optional | The `YYYY-MM-DD`-formatted date to start the subscription.<br>If it is unspecified, the subscription starts immediately. |
| `canceledDate` | `string \| undefined` | Optional | The `YYYY-MM-DD`-formatted date when the newly created subscription is scheduled for cancellation.<br><br>This date overrides the cancellation date set in the plan variation configuration.<br>If the cancellation date is earlier than the end date of a subscription cycle, the subscription stops<br>at the canceled date and the subscriber is sent a prorated invoice at the beginning of the canceled cycle.<br><br>When the subscription plan of the newly created subscription has a fixed number of cycles and the `canceled_date`<br>occurs before the subscription plan expires, the specified `canceled_date` sets the date when the subscription<br>stops through the end of the last cycle. |
| `taxPercentage` | `string \| undefined` | Optional | The tax to add when billing the subscription.<br>The percentage is expressed in decimal form, using a `'.'` as the decimal<br>separator and without a `'%'` sign. For example, a value of 7.5<br>corresponds to 7.5%.<br>**Constraints**: *Maximum Length*: `10` |
| `priceOverrideMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `cardId` | `string \| undefined` | Optional | The ID of the [subscriber's](entity:Customer) [card](entity:Card) to charge.<br>If it is not specified, the subscriber receives an invoice via email with a link to pay for their subscription. |
| `timezone` | `string \| undefined` | Optional | The timezone that is used in date calculations for the subscription. If unset, defaults to<br>the location timezone. If a timezone is not configured for the location, defaults to "America/New_York".<br>Format: the IANA Timezone Database identifier for the location timezone. For<br>a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
| `source` | [`SubscriptionSource \| undefined`](../../doc/models/subscription-source.md) | Optional | The origination details of the subscription. |
| `monthlyBillingAnchorDate` | `number \| undefined` | Optional | The day-of-the-month to change the billing date to.<br>**Constraints**: `>= 1`, `<= 31` |
| `phases` | [`Phase[] \| undefined`](../../doc/models/phase.md) | Optional | array of phases for this subscription |

## Example (as JSON)

```json
{
  "card_id": "ccof:qy5x8hHGYsgLrp4Q4GB",
  "customer_id": "CHFGVKYY8RSV93M5KCYTG4PN0G",
  "idempotency_key": "8193148c-9586-11e6-99f9-28cfe92138cf",
  "location_id": "S8GWD5R9QB376",
  "phases": [
    {
      "order_template_id": "U2NaowWxzXwpsZU697x7ZHOAnCNZY",
      "ordinal": 0
    }
  ],
  "plan_variation_id": "6JHXF3B2CW3YKHDV4XEM674H",
  "source": {
    "name": "My Application"
  },
  "start_date": "2023-06-20",
  "timezone": "America/Los_Angeles",
  "canceled_date": "canceled_date6",
  "tax_percentage": "tax_percentage6"
}
```

