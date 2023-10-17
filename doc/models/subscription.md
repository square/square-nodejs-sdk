
# Subscription

Represents a subscription purchased by a customer.

For more information, see
[Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).

## Structure

`Subscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the subscription.<br>**Constraints**: *Maximum Length*: `255` |
| `locationId` | `string \| undefined` | Optional | The ID of the location associated with the subscription. |
| `planVariationId` | `string \| undefined` | Optional | The ID of the subscribed-to [subscription plan variation](entity:CatalogSubscriptionPlanVariation). |
| `customerId` | `string \| undefined` | Optional | The ID of the subscribing [customer](entity:Customer) profile. |
| `startDate` | `string \| undefined` | Optional | The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to start the subscription. |
| `canceledDate` | `string \| null \| undefined` | Optional | The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to cancel the subscription,<br>when the subscription status changes to `CANCELED` and the subscription billing stops.<br><br>If this field is not set, the subscription ends according its subscription plan.<br><br>This field cannot be updated, other than being cleared. |
| `chargedThroughDate` | `string \| undefined` | Optional | The `YYYY-MM-DD`-formatted date up to when the subscriber is invoiced for the<br>subscription.<br><br>After the invoice is sent for a given billing period,<br>this date will be the last day of the billing period.<br>For example,<br>suppose for the month of May a subscriber gets an invoice<br>(or charged the card) on May 1. For the monthly billing scenario,<br>this date is then set to May 31. |
| `status` | [`string \| undefined`](../../doc/models/subscription-status.md) | Optional | Supported subscription statuses. |
| `taxPercentage` | `string \| null \| undefined` | Optional | The tax amount applied when billing the subscription. The<br>percentage is expressed in decimal form, using a `'.'` as the decimal<br>separator and without a `'%'` sign. For example, a value of `7.5`<br>corresponds to 7.5%. |
| `invoiceIds` | `string[] \| undefined` | Optional | The IDs of the [invoices](entity:Invoice) created for the<br>subscription, listed in order when the invoices were created<br>(newest invoices appear first). |
| `priceOverrideMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `version` | `bigint \| undefined` | Optional | The version of the object. When updating an object, the version<br>supplied must match the version in the database, otherwise the write will<br>be rejected as conflicting. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the subscription was created, in RFC 3339 format. |
| `cardId` | `string \| null \| undefined` | Optional | The ID of the [subscriber's](entity:Customer) [card](entity:Card)<br>used to charge for the subscription. |
| `timezone` | `string \| undefined` | Optional | Timezone that will be used in date calculations for the subscription.<br>Defaults to the timezone of the location based on `location_id`.<br>Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`). |
| `source` | [`SubscriptionSource \| undefined`](../../doc/models/subscription-source.md) | Optional | The origination details of the subscription. |
| `actions` | [`SubscriptionAction[] \| null \| undefined`](../../doc/models/subscription-action.md) | Optional | The list of scheduled actions on this subscription. It is set only in the response from  <br>[RetrieveSubscription](../../doc/api/subscriptions.md#retrieve-subscription) with the query parameter<br>of `include=actions` or from<br>[SearchSubscriptions](../../doc/api/subscriptions.md#search-subscriptions) with the input parameter<br>of `include:["actions"]`. |
| `monthlyBillingAnchorDate` | `number \| undefined` | Optional | The day of the month on which the subscription will issue invoices and publish orders. |
| `phases` | [`Phase[] \| undefined`](../../doc/models/phase.md) | Optional | array of phases for this subscription |

## Example (as JSON)

```json
{
  "id": "id4",
  "location_id": "location_id8",
  "plan_variation_id": "plan_variation_id8",
  "customer_id": "customer_id2",
  "start_date": "start_date8"
}
```

