# Loyalty

```ts
const loyaltyApi = client.loyaltyApi;
```

## Class Name

`LoyaltyApi`

## Methods

* [Create Loyalty Account](/doc/api/loyalty.md#create-loyalty-account)
* [Search Loyalty Accounts](/doc/api/loyalty.md#search-loyalty-accounts)
* [Retrieve Loyalty Account](/doc/api/loyalty.md#retrieve-loyalty-account)
* [Accumulate Loyalty Points](/doc/api/loyalty.md#accumulate-loyalty-points)
* [Adjust Loyalty Points](/doc/api/loyalty.md#adjust-loyalty-points)
* [Search Loyalty Events](/doc/api/loyalty.md#search-loyalty-events)
* [List Loyalty Programs](/doc/api/loyalty.md#list-loyalty-programs)
* [Calculate Loyalty Points](/doc/api/loyalty.md#calculate-loyalty-points)
* [Create Loyalty Reward](/doc/api/loyalty.md#create-loyalty-reward)
* [Search Loyalty Rewards](/doc/api/loyalty.md#search-loyalty-rewards)
* [Delete Loyalty Reward](/doc/api/loyalty.md#delete-loyalty-reward)
* [Retrieve Loyalty Reward](/doc/api/loyalty.md#retrieve-loyalty-reward)
* [Redeem Loyalty Reward](/doc/api/loyalty.md#redeem-loyalty-reward)


# Create Loyalty Account

Creates a loyalty account.

```ts
async createLoyaltyAccount(
  body: CreateLoyaltyAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLoyaltyAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLoyaltyAccountRequest`](/doc/models/create-loyalty-account-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateLoyaltyAccountResponse`](/doc/models/create-loyalty-account-response.md)

## Example Usage

```ts
const bodyLoyaltyAccountMappings: LoyaltyAccountMapping[] = [];

const bodyLoyaltyAccountmappings0: LoyaltyAccountMapping = {
  type: 'PHONE',
  value: '+14155551234',
};
bodyLoyaltyAccountmappings0.id = 'id0';
bodyLoyaltyAccountmappings0.createdAt = 'created_at8';

bodyLoyaltyAccountMappings[0] = bodyLoyaltyAccountmappings0;

const bodyLoyaltyAccount: LoyaltyAccount = {
  mappings: bodyLoyaltyAccountMappings,
  programId: 'd619f755-2d17-41f3-990d-c04ecedd64dd',
};
bodyLoyaltyAccount.id = 'id2';
bodyLoyaltyAccount.balance = 14;
bodyLoyaltyAccount.lifetimePoints = 38;
bodyLoyaltyAccount.customerId = 'customer_id0';
bodyLoyaltyAccount.enrolledAt = 'enrolled_at2';

const body: CreateLoyaltyAccountRequest = {
  loyaltyAccount: bodyLoyaltyAccount,
  idempotencyKey: 'ec78c477-b1c3-4899-a209-a4e71337c996',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.createLoyaltyAccount(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Loyalty Accounts

Searches for loyalty accounts in a loyalty program.

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.

Search results are sorted by `created_at` in ascending order.

```ts
async searchLoyaltyAccounts(
  body: SearchLoyaltyAccountsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchLoyaltyAccountsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchLoyaltyAccountsRequest`](/doc/models/search-loyalty-accounts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyAccountsResponse`](/doc/models/search-loyalty-accounts-response.md)

## Example Usage

```ts
const bodyQueryMappings: LoyaltyAccountMapping[] = [];

const bodyQuerymappings0: LoyaltyAccountMapping = {
  type: 'PHONE',
  value: '+14155551234',
};
bodyQuerymappings0.id = 'id4';
bodyQuerymappings0.createdAt = 'created_at8';

bodyQueryMappings[0] = bodyQuerymappings0;

const bodyQueryCustomerIds: string[] = ['customer_ids5', 'customer_ids4'];
const bodyQuery: SearchLoyaltyAccountsRequestLoyaltyAccountQuery = {};
bodyQuery.mappings = bodyQueryMappings;
bodyQuery.customerIds = bodyQueryCustomerIds;

const body: SearchLoyaltyAccountsRequest = {};
body.query = bodyQuery;
body.limit = 10;
body.cursor = 'cursor0';

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyAccounts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Loyalty Account

Retrieves a loyalty account.

```ts
async retrieveLoyaltyAccount(
  accountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLoyaltyAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | The ID of the [loyalty account](#type-LoyaltyAccount) to retrieve. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyAccountResponse`](/doc/models/retrieve-loyalty-account-response.md)

## Example Usage

```ts
const accountId = 'account_id2';
try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyAccount(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Accumulate Loyalty Points

Adds points to a loyalty account.

- If you are using the Orders API to manage orders, you only provide the `order_id`.
  The endpoint reads the order to compute points to add to the buyer's account.
- If you are not using the Orders API to manage orders,
  you first perform a client-side computation to compute the points.  
  For spend-based and visit-based programs, you can call
  [CalculateLoyaltyPoints](#endpoint-Loyalty-CalculateLoyaltyPoints) to compute the points. For more information,
  see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
  You then provide the points in a request to this endpoint.

```ts
async accumulateLoyaltyPoints(
  accountId: string,
  body: AccumulateLoyaltyPointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccumulateLoyaltyPointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | The [loyalty account](#type-LoyaltyAccount) ID to which to add the points. |
| `body` | [`AccumulateLoyaltyPointsRequest`](/doc/models/accumulate-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`AccumulateLoyaltyPointsResponse`](/doc/models/accumulate-loyalty-points-response.md)

## Example Usage

```ts
const accountId = 'account_id2';
const bodyAccumulatePoints: LoyaltyEventAccumulatePoints = {};
bodyAccumulatePoints.loyaltyProgramId = 'loyalty_program_id8';
bodyAccumulatePoints.points = 90;
bodyAccumulatePoints.orderId = 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY';

const body: AccumulateLoyaltyPointsRequest = {
  accumulatePoints: bodyAccumulatePoints,
  idempotencyKey: '58b90739-c3e8-4b11-85f7-e636d48d72cb',
  locationId: 'P034NEENMD09F',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.accumulateLoyaltyPoints(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Adjust Loyalty Points

Adds points to or subtracts points from a buyer's account.

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call
[AccumulateLoyaltyPoints](#endpoint-Loyalty-AccumulateLoyaltyPoints)
to add points when a buyer pays for the purchase.

```ts
async adjustLoyaltyPoints(
  accountId: string,
  body: AdjustLoyaltyPointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdjustLoyaltyPointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | The ID of the [loyalty account](#type-LoyaltyAccount) in which to adjust the points. |
| `body` | [`AdjustLoyaltyPointsRequest`](/doc/models/adjust-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`AdjustLoyaltyPointsResponse`](/doc/models/adjust-loyalty-points-response.md)

## Example Usage

```ts
const accountId = 'account_id2';
const bodyAdjustPoints: LoyaltyEventAdjustPoints = {
  points: 112,
};
bodyAdjustPoints.loyaltyProgramId = 'loyalty_program_id4';
bodyAdjustPoints.reason = 'reason0';

const body: AdjustLoyaltyPointsRequest = {
  idempotencyKey: 'idempotency_key2',
  adjustPoints: bodyAdjustPoints,
};

try {
  const { result, ...httpResponse } = await loyaltyApi.adjustLoyaltyPoints(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Loyalty Events

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a
buyer's loyalty account. Each change in the point balance
(for example, points earned, points redeemed, and points expired) is
recorded in the ledger. Using this endpoint, you can search the ledger for events.

```ts
async searchLoyaltyEvents(
  body: SearchLoyaltyEventsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchLoyaltyEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchLoyaltyEventsRequest`](/doc/models/search-loyalty-events-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyEventsResponse`](/doc/models/search-loyalty-events-response.md)

## Example Usage

```ts
const bodyQueryFilterLoyaltyAccountFilter: LoyaltyEventLoyaltyAccountFilter = {
  loyaltyAccountId: 'loyalty_account_id6',
};

const bodyQueryFilterTypeFilterTypes: string[] = ['DELETE_REWARD', 'ADJUST_POINTS', 'EXPIRE_POINTS'];
const bodyQueryFilterTypeFilter: LoyaltyEventTypeFilter = {
  types: bodyQueryFilterTypeFilterTypes,
};

const bodyQueryFilterDateTimeFilterCreatedAt: TimeRange = {};
bodyQueryFilterDateTimeFilterCreatedAt.startAt = 'start_at8';
bodyQueryFilterDateTimeFilterCreatedAt.endAt = 'end_at4';

const bodyQueryFilterDateTimeFilter: LoyaltyEventDateTimeFilter = {
  createdAt: bodyQueryFilterDateTimeFilterCreatedAt,
};

const bodyQueryFilterLocationFilterLocationIds: string[] = ['location_ids2', 'location_ids3', 'location_ids4'];
const bodyQueryFilterLocationFilter: LoyaltyEventLocationFilter = {
  locationIds: bodyQueryFilterLocationFilterLocationIds,
};

const bodyQueryFilterOrderFilter: LoyaltyEventOrderFilter = {
  orderId: 'PyATxhYLfsMqpVkcKJITPydgEYfZY',
};

const bodyQueryFilter: LoyaltyEventFilter = {};
bodyQueryFilter.loyaltyAccountFilter = bodyQueryFilterLoyaltyAccountFilter;
bodyQueryFilter.typeFilter = bodyQueryFilterTypeFilter;
bodyQueryFilter.dateTimeFilter = bodyQueryFilterDateTimeFilter;
bodyQueryFilter.locationFilter = bodyQueryFilterLocationFilter;
bodyQueryFilter.orderFilter = bodyQueryFilterOrderFilter;

const bodyQuery: LoyaltyEventQuery = {};
bodyQuery.filter = bodyQueryFilter;

const body: SearchLoyaltyEventsRequest = {};
body.query = bodyQuery;
body.limit = 30;
body.cursor = 'cursor0';

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyEvents(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Loyalty Programs

Returns a list of loyalty programs in the seller's account.
Currently, a seller can only have one loyalty program.

```ts
async listLoyaltyPrograms(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLoyaltyProgramsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListLoyaltyProgramsResponse`](/doc/models/list-loyalty-programs-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await loyaltyApi.listLoyaltyPrograms();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Calculate Loyalty Points

Calculates the points a purchase earns.

- If you are using the Orders API to manage orders, you provide `order_id` in the request. The
  endpoint calculates the points by reading the order.
- If you are not using the Orders API to manage orders, you provide the purchase amount in
  the request for the endpoint to calculate the points.

An application might call this endpoint to show the points that a buyer can earn with the
specific purchase.

```ts
async calculateLoyaltyPoints(
  programId: string,
  body: CalculateLoyaltyPointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CalculateLoyaltyPointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `string` | Template, Required | The [loyalty program](#type-LoyaltyProgram) ID, which defines the rules for accruing points. |
| `body` | [`CalculateLoyaltyPointsRequest`](/doc/models/calculate-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CalculateLoyaltyPointsResponse`](/doc/models/calculate-loyalty-points-response.md)

## Example Usage

```ts
const programId = 'program_id0';
const bodyTransactionAmountMoney: Money = {};
bodyTransactionAmountMoney.amount = 72;
bodyTransactionAmountMoney.currency = 'UZS';

const body: CalculateLoyaltyPointsRequest = {};
body.orderId = 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY';
body.transactionAmountMoney = bodyTransactionAmountMoney;

try {
  const { result, ...httpResponse } = await loyaltyApi.calculateLoyaltyPoints(programId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Loyalty Reward

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points
  to lock for this reward.
- If the request includes `order_id`, it adds the reward and related discount to the order.

After a reward is created, the points are locked and
not available for the buyer to redeem another reward.

```ts
async createLoyaltyReward(
  body: CreateLoyaltyRewardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLoyaltyRewardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLoyaltyRewardRequest`](/doc/models/create-loyalty-reward-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateLoyaltyRewardResponse`](/doc/models/create-loyalty-reward-response.md)

## Example Usage

```ts
const bodyReward: LoyaltyReward = {
  loyaltyAccountId: '5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd',
  rewardTierId: 'e1b39225-9da5-43d1-a5db-782cdd8ad94f',
};
bodyReward.id = 'id4';
bodyReward.status = 'REDEEMED';
bodyReward.points = 230;
bodyReward.orderId = 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY';
bodyReward.createdAt = 'created_at2';

const body: CreateLoyaltyRewardRequest = {
  reward: bodyReward,
  idempotencyKey: '18c2e5ea-a620-4b1f-ad60-7b167285e451',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.createLoyaltyReward(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Loyalty Rewards

Searches for loyalty rewards in a loyalty account.

In the current implementation, the endpoint supports search by the reward `status`.

If you know a reward ID, use the
[RetrieveLoyaltyReward](#endpoint-Loyalty-RetrieveLoyaltyReward) endpoint.

```ts
async searchLoyaltyRewards(
  body: SearchLoyaltyRewardsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchLoyaltyRewardsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchLoyaltyRewardsRequest`](/doc/models/search-loyalty-rewards-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyRewardsResponse`](/doc/models/search-loyalty-rewards-response.md)

## Example Usage

```ts
const bodyQuery: SearchLoyaltyRewardsRequestLoyaltyRewardQuery = {
  loyaltyAccountId: '5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd',
};
bodyQuery.status = 'REDEEMED';

const body: SearchLoyaltyRewardsRequest = {};
body.query = bodyQuery;
body.limit = 10;
body.cursor = 'cursor0';

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyRewards(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Loyalty Reward

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created
  (see [CreateLoyaltyReward](#endpoint-Loyalty-CreateLoyaltyReward)),
  it updates the order by removing the reward and related
  discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

```ts
async deleteLoyaltyReward(
  rewardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteLoyaltyRewardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](#type-LoyaltyReward) to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`DeleteLoyaltyRewardResponse`](/doc/models/delete-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';
try {
  const { result, ...httpResponse } = await loyaltyApi.deleteLoyaltyReward(rewardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Loyalty Reward

Retrieves a loyalty reward.

```ts
async retrieveLoyaltyReward(
  rewardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLoyaltyRewardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](#type-LoyaltyReward) to retrieve. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyRewardResponse`](/doc/models/retrieve-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';
try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyReward(rewardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Redeem Loyalty Reward

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state.

If you are using your own order processing system (not using the
Orders API), you call this endpoint after the buyer paid for the
purchase.

After the reward reaches the terminal state, it cannot be deleted.
In other words, points used for the reward cannot be returned
to the account.

```ts
async redeemLoyaltyReward(
  rewardId: string,
  body: RedeemLoyaltyRewardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RedeemLoyaltyRewardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](#type-LoyaltyReward) to redeem. |
| `body` | [`RedeemLoyaltyRewardRequest`](/doc/models/redeem-loyalty-reward-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RedeemLoyaltyRewardResponse`](/doc/models/redeem-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';
const body: RedeemLoyaltyRewardRequest = {
  idempotencyKey: '98adc7f7-6963-473b-b29c-f3c9cdd7d994',
  locationId: 'P034NEENMD09F',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.redeemLoyaltyReward(rewardId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

