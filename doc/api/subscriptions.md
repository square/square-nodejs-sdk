# Subscriptions

```ts
const subscriptionsApi = client.subscriptionsApi;
```

## Class Name

`SubscriptionsApi`

## Methods

* [Create Subscription](../../doc/api/subscriptions.md#create-subscription)
* [Bulk Swap Plan](../../doc/api/subscriptions.md#bulk-swap-plan)
* [Search Subscriptions](../../doc/api/subscriptions.md#search-subscriptions)
* [Retrieve Subscription](../../doc/api/subscriptions.md#retrieve-subscription)
* [Update Subscription](../../doc/api/subscriptions.md#update-subscription)
* [Delete Subscription Action](../../doc/api/subscriptions.md#delete-subscription-action)
* [Change Billing Anchor Date](../../doc/api/subscriptions.md#change-billing-anchor-date)
* [Cancel Subscription](../../doc/api/subscriptions.md#cancel-subscription)
* [List Subscription Events](../../doc/api/subscriptions.md#list-subscription-events)
* [Pause Subscription](../../doc/api/subscriptions.md#pause-subscription)
* [Resume Subscription](../../doc/api/subscriptions.md#resume-subscription)
* [Swap Plan](../../doc/api/subscriptions.md#swap-plan)


# Create Subscription

Enrolls a customer in a subscription.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square sends an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

For more information, see [Create a subscription](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions#create-a-subscription).

```ts
async createSubscription(
  body: CreateSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionRequest`](../../doc/models/create-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateSubscriptionResponse`](../../doc/models/create-subscription-response.md)

## Example Usage

```ts
const body: CreateSubscriptionRequest = {
  locationId: 'S8GWD5R9QB376',
  customerId: 'CHFGVKYY8RSV93M5KCYTG4PN0G',
  idempotencyKey: '8193148c-9586-11e6-99f9-28cfe92138cf',
  planVariationId: '6JHXF3B2CW3YKHDV4XEM674H',
  startDate: '2023-06-20',
  cardId: 'ccof:qy5x8hHGYsgLrp4Q4GB',
  timezone: 'America/Los_Angeles',
  source: {
    name: 'My Application',
  },
  phases: [
    {
      ordinal: BigInt(0),
      orderTemplateId: 'U2NaowWxzXwpsZU697x7ZHOAnCNZY',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.createSubscription(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Swap Plan

Schedules a plan variation change for all active subscriptions under a given plan
variation. For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

```ts
async bulkSwapPlan(
  body: BulkSwapPlanRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkSwapPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkSwapPlanRequest`](../../doc/models/bulk-swap-plan-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkSwapPlanResponse`](../../doc/models/bulk-swap-plan-response.md)

## Example Usage

```ts
const body: BulkSwapPlanRequest = {
  newPlanVariationId: 'FQ7CDXXWSLUJRPM3GFJSJGZ7',
  oldPlanVariationId: '6JHXF3B2CW3YKHDV4XEM674H',
  locationId: 'S8GWD5R9QB376',
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.bulkSwapPlan(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

```ts
async searchSubscriptions(
  body: SearchSubscriptionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchSubscriptionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchSubscriptionsRequest`](../../doc/models/search-subscriptions-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchSubscriptionsResponse`](../../doc/models/search-subscriptions-response.md)

## Example Usage

```ts
const body: SearchSubscriptionsRequest = {
  query: {
    filter: {
      customerIds: [
        'CHFGVKYY8RSV93M5KCYTG4PN0G'
      ],
      locationIds: [
        'S8GWD5R9QB376'
      ],
      sourceNames: [
        'My App'
      ],
    },
  },
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.searchSubscriptions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Subscription

Retrieves a specific subscription.

```ts
async retrieveSubscription(
  subscriptionId: string,
  include?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to retrieve. |
| `include` | `string \| undefined` | Query, Optional | A query parameter to specify related information to be included in the response.<br><br>The supported query parameter values are:<br><br>- `actions`: to include scheduled actions on the targeted subscription. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveSubscriptionResponse`](../../doc/models/retrieve-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsApi.retrieveSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Subscription

Updates a subscription by modifying or clearing `subscription` field values.
To clear a field, set its value to `null`.

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
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to update. |
| `body` | [`UpdateSubscriptionRequest`](../../doc/models/update-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateSubscriptionResponse`](../../doc/models/update-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: UpdateSubscriptionRequest = {
  subscription: {
    canceledDate: 'canceled_date6',
    cardId: '{NEW CARD ID}',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.updateSubscription(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Subscription Action

Deletes a scheduled action for a subscription.

```ts
async deleteSubscriptionAction(
  subscriptionId: string,
  actionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteSubscriptionActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription the targeted action is to act upon. |
| `actionId` | `string` | Template, Required | The ID of the targeted action to be deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteSubscriptionActionResponse`](../../doc/models/delete-subscription-action-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const actionId = 'action_id6';

try {
  const { result, ...httpResponse } = await subscriptionsApi.deleteSubscriptionAction(
  subscriptionId,
  actionId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Change Billing Anchor Date

Changes the [billing anchor date](https://developer.squareup.com/docs/subscriptions-api/subscription-billing#billing-dates)
for a subscription.

```ts
async changeBillingAnchorDate(
  subscriptionId: string,
  body: ChangeBillingAnchorDateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangeBillingAnchorDateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to update the billing anchor date. |
| `body` | [`ChangeBillingAnchorDateRequest`](../../doc/models/change-billing-anchor-date-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangeBillingAnchorDateResponse`](../../doc/models/change-billing-anchor-date-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: ChangeBillingAnchorDateRequest = {
  monthlyBillingAnchorDate: 1,
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.changeBillingAnchorDate(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Subscription

Schedules a `CANCEL` action to cancel an active subscription. This
sets the `canceled_date` field to the end of the active billing period. After this date,
the subscription status changes from ACTIVE to CANCELED.

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

[`CancelSubscriptionResponse`](../../doc/models/cancel-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsApi.cancelSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Subscription Events

Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a specific subscription.

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
| `cursor` | `string \| undefined` | Query, Optional | When the total number of resulting subscription events exceeds the limit of a paged response,<br>specify the cursor returned from a preceding response here to fetch the next set of results.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The upper limit on the number of subscription events to return<br>in a paged response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListSubscriptionEventsResponse`](../../doc/models/list-subscription-events-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsApi.listSubscriptionEvents(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Pause Subscription

Schedules a `PAUSE` action to pause an active subscription.

```ts
async pauseSubscription(
  subscriptionId: string,
  body: PauseSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PauseSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to pause. |
| `body` | [`PauseSubscriptionRequest`](../../doc/models/pause-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PauseSubscriptionResponse`](../../doc/models/pause-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: PauseSubscriptionRequest = {
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.pauseSubscription(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Resume Subscription

Schedules a `RESUME` action to resume a paused or a deactivated subscription.

```ts
async resumeSubscription(
  subscriptionId: string,
  body: ResumeSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResumeSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to resume. |
| `body` | [`ResumeSubscriptionRequest`](../../doc/models/resume-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResumeSubscriptionResponse`](../../doc/models/resume-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: ResumeSubscriptionRequest = {
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.resumeSubscription(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Swap Plan

Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription.
For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

```ts
async swapPlan(
  subscriptionId: string,
  body: SwapPlanRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SwapPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The ID of the subscription to swap the subscription plan for. |
| `body` | [`SwapPlanRequest`](../../doc/models/swap-plan-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SwapPlanResponse`](../../doc/models/swap-plan-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: SwapPlanRequest = {
  newPlanVariationId: 'FQ7CDXXWSLUJRPM3GFJSJGZ7',
  phases: [
    {
      ordinal: BigInt(0),
      orderTemplateId: 'uhhnjH9osVv3shUADwaC0b3hNxQZY',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsApi.swapPlan(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

