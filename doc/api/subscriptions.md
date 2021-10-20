# Subscriptions

```ts
const subscriptionsApi = client.subscriptionsApi;
```

## Class Name

`SubscriptionsApi`

## Methods

* [Create Subscription](/doc/api/subscriptions.md#create-subscription)
* [Search Subscriptions](/doc/api/subscriptions.md#search-subscriptions)
* [Retrieve Subscription](/doc/api/subscriptions.md#retrieve-subscription)
* [Update Subscription](/doc/api/subscriptions.md#update-subscription)
* [Cancel Subscription](/doc/api/subscriptions.md#cancel-subscription)
* [List Subscription Events](/doc/api/subscriptions.md#list-subscription-events)
* [Resume Subscription](/doc/api/subscriptions.md#resume-subscription)


# Create Subscription

Creates a subscription for a customer to a subscription plan.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square bills an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

```ts
async createSubscription(
  body: CreateSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionRequest`](/doc/models/create-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateSubscriptionResponse`](/doc/models/create-subscription-response.md)

## Example Usage

```ts
const bodyPriceOverrideMoney: Money = {};
bodyPriceOverrideMoney.amount = 100;
bodyPriceOverrideMoney.currency = 'USD';

const bodySource: SubscriptionSource = {};
bodySource.name = 'My App';

const body: CreateSubscriptionRequest = {
  locationId: 'S8GWD5R9QB376',
  planId: '6JHXF3B2CW3YKHDV4XEM674H',
  customerId: 'CHFGVKYY8RSV93M5KCYTG4PN0G',
};
body.idempotencyKey = '8193148c-9586-11e6-99f9-28cfe92138cf';
body.startDate = '2021-10-20';
body.canceledDate = 'canceled_date0';
body.taxPercentage = '5';
body.priceOverrideMoney = bodyPriceOverrideMoney;
body.cardId = 'ccof:qy5x8hHGYsgLrp4Q4GB';
body.timezone = 'America/Los_Angeles';
body.source = bodySource;

try {
  const { result, ...httpResponse } = await subscriptionsApi.createSubscription(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Subscriptions

Searches for subscriptions.
Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

For more information, see
[Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-subscriptions).

```ts
async searchSubscriptions(
  body: SearchSubscriptionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchSubscriptionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchSubscriptionsRequest`](/doc/models/search-subscriptions-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchSubscriptionsResponse`](/doc/models/search-subscriptions-response.md)

## Example Usage

```ts
const bodyQueryFilterCustomerIds: string[] = ['CHFGVKYY8RSV93M5KCYTG4PN0G'];
const bodyQueryFilterLocationIds: string[] = ['S8GWD5R9QB376'];
const bodyQueryFilterSourceNames: string[] = ['My App'];
const bodyQueryFilter: SearchSubscriptionsFilter = {};
bodyQueryFilter.customerIds = bodyQueryFilterCustomerIds;
bodyQueryFilter.locationIds = bodyQueryFilterLocationIds;
bodyQueryFilter.sourceNames = bodyQueryFilterSourceNames;

const bodyQuery: SearchSubscriptionsQuery = {};
bodyQuery.filter = bodyQueryFilter;

const body: SearchSubscriptionsRequest = {};
body.cursor = 'cursor0';
body.limit = 164;
body.query = bodyQuery;

try {
  const { result, ...httpResponse } = await subscriptionsApi.searchSubscriptions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Subscription

Retrieves a subscription.

```ts
async retrieveSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveSubscriptionResponse`](/doc/models/retrieve-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsApi.retrieveSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Subscription

Updates a subscription. You can set, modify, and clear the
`subscription` field values.

```ts
async updateSubscription(
  subscriptionId: string,
  body: UpdateSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID for the subscription to update. |
| `body` | [`UpdateSubscriptionRequest`](/doc/models/update-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateSubscriptionResponse`](/doc/models/update-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const bodySubscriptionPriceOverrideMoney: Money = {};
bodySubscriptionPriceOverrideMoney.amount = 2000;
bodySubscriptionPriceOverrideMoney.currency = 'USD';

const bodySubscription: Subscription = {};
bodySubscription.id = 'id8';
bodySubscription.locationId = 'location_id2';
bodySubscription.planId = 'plan_id0';
bodySubscription.customerId = 'customer_id6';
bodySubscription.startDate = 'start_date2';
bodySubscription.taxPercentage = 'null';
bodySubscription.priceOverrideMoney = bodySubscriptionPriceOverrideMoney;
bodySubscription.version = 1594155459464;

const body: UpdateSubscriptionRequest = {};
body.subscription = bodySubscription;

try {
  const { result, ...httpResponse } = await subscriptionsApi.updateSubscription(subscriptionId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Subscription

Sets the `canceled_date` field to the end of the active billing period.
After this date, the status changes from ACTIVE to CANCELED.

```ts
async cancelSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to cancel. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelSubscriptionResponse`](/doc/models/cancel-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsApi.cancelSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Subscription Events

Lists all events for a specific subscription.
In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.

```ts
async listSubscriptionEvents(
  subscriptionId: string,
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSubscriptionEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to retrieve the events for. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The upper limit on the number of subscription events to return<br>in the response.<br><br>Default: `200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListSubscriptionEventsResponse`](/doc/models/list-subscription-events-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const cursor = 'cursor6';
const limit = 172;
try {
  const { result, ...httpResponse } = await subscriptionsApi.listSubscriptionEvents(subscriptionId, cursor, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Resume Subscription

Resumes a deactivated subscription.

```ts
async resumeSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResumeSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to resume. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResumeSubscriptionResponse`](/doc/models/resume-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsApi.resumeSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

