# Loyalty

```ts
const loyaltyApi = client.loyaltyApi;
```

## Class Name

`LoyaltyApi`

## Methods

* [Create Loyalty Account](../../doc/api/loyalty.md#create-loyalty-account)
* [Search Loyalty Accounts](../../doc/api/loyalty.md#search-loyalty-accounts)
* [Retrieve Loyalty Account](../../doc/api/loyalty.md#retrieve-loyalty-account)
* [Accumulate Loyalty Points](../../doc/api/loyalty.md#accumulate-loyalty-points)
* [Adjust Loyalty Points](../../doc/api/loyalty.md#adjust-loyalty-points)
* [Search Loyalty Events](../../doc/api/loyalty.md#search-loyalty-events)
* [List Loyalty Programs](../../doc/api/loyalty.md#list-loyalty-programs)
* [Retrieve Loyalty Program](../../doc/api/loyalty.md#retrieve-loyalty-program)
* [Calculate Loyalty Points](../../doc/api/loyalty.md#calculate-loyalty-points)
* [List Loyalty Promotions](../../doc/api/loyalty.md#list-loyalty-promotions)
* [Create Loyalty Promotion](../../doc/api/loyalty.md#create-loyalty-promotion)
* [Retrieve Loyalty Promotion](../../doc/api/loyalty.md#retrieve-loyalty-promotion)
* [Cancel Loyalty Promotion](../../doc/api/loyalty.md#cancel-loyalty-promotion)
* [Create Loyalty Reward](../../doc/api/loyalty.md#create-loyalty-reward)
* [Search Loyalty Rewards](../../doc/api/loyalty.md#search-loyalty-rewards)
* [Delete Loyalty Reward](../../doc/api/loyalty.md#delete-loyalty-reward)
* [Retrieve Loyalty Reward](../../doc/api/loyalty.md#retrieve-loyalty-reward)
* [Redeem Loyalty Reward](../../doc/api/loyalty.md#redeem-loyalty-reward)


# Create Loyalty Account

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

```ts
async createLoyaltyAccount(
  body: CreateLoyaltyAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLoyaltyAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLoyaltyAccountRequest`](../../doc/models/create-loyalty-account-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateLoyaltyAccountResponse`](../../doc/models/create-loyalty-account-response.md)

## Example Usage

```ts
const body: CreateLoyaltyAccountRequest = {
  loyaltyAccount: {
    programId: 'd619f755-2d17-41f3-990d-c04ecedd64dd',
    mapping: {
      phoneNumber: '+14155551234',
    },
  },
  idempotencyKey: 'ec78c477-b1c3-4899-a209-a4e71337c996',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.createLoyaltyAccount(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `body` | [`SearchLoyaltyAccountsRequest`](../../doc/models/search-loyalty-accounts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyAccountsResponse`](../../doc/models/search-loyalty-accounts-response.md)

## Example Usage

```ts
const body: SearchLoyaltyAccountsRequest = {
  query: {
    mappings: [
      {
        phoneNumber: '+14155551234',
      }
    ],
  },
  limit: 10,
};

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyAccounts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `accountId` | `string` | Template, Required | The ID of the [loyalty account](entity:LoyaltyAccount) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyAccountResponse`](../../doc/models/retrieve-loyalty-account-response.md)

## Example Usage

```ts
const accountId = 'account_id2';

try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyAccount(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Accumulate Loyalty Points

Adds points earned from a purchase to a [loyalty account](../../doc/models/loyalty-account.md).

- If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order
  to compute the points earned from both the base loyalty program and an associated
  [loyalty promotion](../../doc/models/loyalty-promotion.md). For purchases that qualify for multiple accrual
  rules, Square computes points based on the accrual rule that grants the most points.
  For purchases that qualify for multiple promotions, Square computes points based on the most
  recently created promotion. A purchase must first qualify for program points to be eligible for promotion points.

- If you are not using the Orders API to manage orders, provide `points` with the number of points to add.
  You must first perform a client-side computation of the points earned from the loyalty program and
  loyalty promotion. For spend-based and visit-based programs, you can call [CalculateLoyaltyPoints](../../doc/api/loyalty.md#calculate-loyalty-points)
  to compute the points earned from the base loyalty program. For information about computing points earned from a loyalty promotion, see
  [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).

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
| `accountId` | `string` | Template, Required | The ID of the target [loyalty account](entity:LoyaltyAccount). |
| `body` | [`AccumulateLoyaltyPointsRequest`](../../doc/models/accumulate-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccumulateLoyaltyPointsResponse`](../../doc/models/accumulate-loyalty-points-response.md)

## Example Usage

```ts
const accountId = 'account_id2';

const body: AccumulateLoyaltyPointsRequest = {
  accumulatePoints: {
    orderId: 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY',
  },
  idempotencyKey: '58b90739-c3e8-4b11-85f7-e636d48d72cb',
  locationId: 'P034NEENMD09F',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.accumulateLoyaltyPoints(
  accountId,
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


# Adjust Loyalty Points

Adds points to or subtracts points from a buyer's account.

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call
[AccumulateLoyaltyPoints](../../doc/api/loyalty.md#accumulate-loyalty-points)
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
| `accountId` | `string` | Template, Required | The ID of the target [loyalty account](entity:LoyaltyAccount). |
| `body` | [`AdjustLoyaltyPointsRequest`](../../doc/models/adjust-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AdjustLoyaltyPointsResponse`](../../doc/models/adjust-loyalty-points-response.md)

## Example Usage

```ts
const accountId = 'account_id2';

const body: AdjustLoyaltyPointsRequest = {
  idempotencyKey: 'bc29a517-3dc9-450e-aa76-fae39ee849d1',
  adjustPoints: {
    points: 10,
    reason: 'Complimentary points',
  },
};

try {
  const { result, ...httpResponse } = await loyaltyApi.adjustLoyaltyPoints(
  accountId,
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


# Search Loyalty Events

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a
buyer's loyalty account. Each change in the point balance
(for example, points earned, points redeemed, and points expired) is
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

```ts
async searchLoyaltyEvents(
  body: SearchLoyaltyEventsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchLoyaltyEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchLoyaltyEventsRequest`](../../doc/models/search-loyalty-events-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyEventsResponse`](../../doc/models/search-loyalty-events-response.md)

## Example Usage

```ts
const body: SearchLoyaltyEventsRequest = {
  query: {
    filter: {
      orderFilter: {
        orderId: 'PyATxhYLfsMqpVkcKJITPydgEYfZY',
      },
    },
  },
  limit: 30,
};

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyEvents(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Loyalty Programs

**This endpoint is deprecated.**

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used with the keyword `main`.

```ts
async listLoyaltyPrograms(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLoyaltyProgramsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListLoyaltyProgramsResponse`](../../doc/models/list-loyalty-programs-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await loyaltyApi.listLoyaltyPrograms();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Loyalty Program

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`.

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

```ts
async retrieveLoyaltyProgram(
  programId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLoyaltyProgramResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `string` | Template, Required | The ID of the loyalty program or the keyword `main`. Either value can be used to retrieve the single loyalty program that belongs to the seller. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyProgramResponse`](../../doc/models/retrieve-loyalty-program-response.md)

## Example Usage

```ts
const programId = 'program_id0';

try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyProgram(programId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Calculate Loyalty Points

Calculates the number of points a buyer can earn from a purchase. Applications might call this endpoint
to display the points to the buyer.

- If you are using the Orders API to manage orders, provide the `order_id` and (optional) `loyalty_account_id`.
  Square reads the order to compute the points earned from the base loyalty program and an associated
  [loyalty promotion](../../doc/models/loyalty-promotion.md).

- If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the
  purchase amount. Square uses this amount to calculate the points earned from the base loyalty program,
  but not points earned from a loyalty promotion. For spend-based and visit-based programs, the `tax_mode`
  setting of the accrual rule indicates how taxes should be treated for loyalty points accrual.
  If the purchase qualifies for program points, call
  [ListLoyaltyPromotions](../../doc/api/loyalty.md#list-loyalty-promotions) and perform a client-side computation
  to calculate whether the purchase also qualifies for promotion points. For more information, see
  [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).

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
| `programId` | `string` | Template, Required | The ID of the [loyalty program](entity:LoyaltyProgram), which defines the rules for accruing points. |
| `body` | [`CalculateLoyaltyPointsRequest`](../../doc/models/calculate-loyalty-points-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CalculateLoyaltyPointsResponse`](../../doc/models/calculate-loyalty-points-response.md)

## Example Usage

```ts
const programId = 'program_id0';

const body: CalculateLoyaltyPointsRequest = {
  orderId: 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY',
  loyaltyAccountId: '79b807d2-d786-46a9-933b-918028d7a8c5',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.calculateLoyaltyPoints(
  programId,
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


# List Loyalty Promotions

Lists the loyalty promotions associated with a [loyalty program](../../doc/models/loyalty-program.md).
Results are sorted by the `created_at` date in descending order (newest to oldest).

```ts
async listLoyaltyPromotions(
  programId: string,
  status?: string,
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLoyaltyPromotionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `string` | Template, Required | The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,<br>call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main` keyword. |
| `status` | [`string \| undefined`](../../doc/models/loyalty-promotion-status.md) | Query, Optional | The status to filter the results by. If a status is provided, only loyalty promotions<br>with the specified status are returned. Otherwise, all loyalty promotions associated with<br>the loyalty program are returned. |
| `cursor` | `string \| undefined` | Query, Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single paged response.<br>The minimum value is 1 and the maximum value is 30. The default value is 30.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListLoyaltyPromotionsResponse`](../../doc/models/list-loyalty-promotions-response.md)

## Example Usage

```ts
const programId = 'program_id0';

try {
  const { result, ...httpResponse } = await loyaltyApi.listLoyaltyPromotions(programId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Loyalty Promotion

Creates a loyalty promotion for a [loyalty program](../../doc/models/loyalty-program.md). A loyalty promotion
enables buyers to earn points in addition to those earned from the base loyalty program.

This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
`available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
`ACTIVE` or `SCHEDULED` status.

```ts
async createLoyaltyPromotion(
  programId: string,
  body: CreateLoyaltyPromotionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLoyaltyPromotionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `string` | Template, Required | The ID of the [loyalty program](entity:LoyaltyProgram) to associate with the promotion.<br>To get the program ID, call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram)<br>using the `main` keyword. |
| `body` | [`CreateLoyaltyPromotionRequest`](../../doc/models/create-loyalty-promotion-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateLoyaltyPromotionResponse`](../../doc/models/create-loyalty-promotion-response.md)

## Example Usage

```ts
const programId = 'program_id0';

const body: CreateLoyaltyPromotionRequest = {
  loyaltyPromotion: {
    name: 'Tuesday Happy Hour Promo',
    incentive: {
      type: 'POINTS_MULTIPLIER',
      pointsMultiplierData: {
        multiplier: '3.0',
      },
    },
    availableTime: {
      timePeriods: [
        'BEGIN:VEVENT\nDTSTART:20220816T160000\nDURATION:PT2H\nRRULE:FREQ=WEEKLY;BYDAY=TU\nEND:VEVENT'
      ],
    },
    triggerLimit: {
      times: 1,
      interval: 'DAY',
    },
    minimumSpendAmountMoney: {
      amount: BigInt(2000),
      currency: 'USD',
    },
    qualifyingCategoryIds: [
      'XTQPYLR3IIU9C44VRCB3XD12'
    ],
  },
  idempotencyKey: 'ec78c477-b1c3-4899-a209-a4e71337c996',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.createLoyaltyPromotion(
  programId,
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


# Retrieve Loyalty Promotion

Retrieves a loyalty promotion.

```ts
async retrieveLoyaltyPromotion(
  promotionId: string,
  programId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLoyaltyPromotionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `promotionId` | `string` | Template, Required | The ID of the [loyalty promotion](entity:LoyaltyPromotion) to retrieve. |
| `programId` | `string` | Template, Required | The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,<br>call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main` keyword. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyPromotionResponse`](../../doc/models/retrieve-loyalty-promotion-response.md)

## Example Usage

```ts
const promotionId = 'promotion_id0';

const programId = 'program_id0';

try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyPromotion(
  promotionId,
  programId
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


# Cancel Loyalty Promotion

Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED` promotion.
Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion before
you create a new one.

This endpoint sets the loyalty promotion to the `CANCELED` state

```ts
async cancelLoyaltyPromotion(
  promotionId: string,
  programId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelLoyaltyPromotionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `promotionId` | `string` | Template, Required | The ID of the [loyalty promotion](entity:LoyaltyPromotion) to cancel. You can cancel a<br>promotion that has an `ACTIVE` or `SCHEDULED` status. |
| `programId` | `string` | Template, Required | The ID of the base [loyalty program](entity:LoyaltyProgram). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelLoyaltyPromotionResponse`](../../doc/models/cancel-loyalty-promotion-response.md)

## Example Usage

```ts
const promotionId = 'promotion_id0';

const programId = 'program_id0';

try {
  const { result, ...httpResponse } = await loyaltyApi.cancelLoyaltyPromotion(
  promotionId,
  programId
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
| `body` | [`CreateLoyaltyRewardRequest`](../../doc/models/create-loyalty-reward-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateLoyaltyRewardResponse`](../../doc/models/create-loyalty-reward-response.md)

## Example Usage

```ts
const body: CreateLoyaltyRewardRequest = {
  reward: {
    loyaltyAccountId: '5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd',
    rewardTierId: 'e1b39225-9da5-43d1-a5db-782cdd8ad94f',
    orderId: 'RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY',
  },
  idempotencyKey: '18c2e5ea-a620-4b1f-ad60-7b167285e451',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.createLoyaltyReward(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Loyalty Rewards

Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns results for all loyalty accounts.
If you include a `query` object, `loyalty_account_id` is required and `status` is  optional.

If you know a reward ID, use the
[RetrieveLoyaltyReward](../../doc/api/loyalty.md#retrieve-loyalty-reward) endpoint.

Search results are sorted by `updated_at` in descending order.

```ts
async searchLoyaltyRewards(
  body: SearchLoyaltyRewardsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchLoyaltyRewardsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchLoyaltyRewardsRequest`](../../doc/models/search-loyalty-rewards-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchLoyaltyRewardsResponse`](../../doc/models/search-loyalty-rewards-response.md)

## Example Usage

```ts
const body: SearchLoyaltyRewardsRequest = {
  query: {
    loyaltyAccountId: '5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd',
  },
  limit: 10,
};

try {
  const { result, ...httpResponse } = await loyaltyApi.searchLoyaltyRewards(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
  (see [CreateLoyaltyReward](../../doc/api/loyalty.md#create-loyalty-reward)),
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
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](entity:LoyaltyReward) to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteLoyaltyRewardResponse`](../../doc/models/delete-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';

try {
  const { result, ...httpResponse } = await loyaltyApi.deleteLoyaltyReward(rewardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](entity:LoyaltyReward) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLoyaltyRewardResponse`](../../doc/models/retrieve-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';

try {
  const { result, ...httpResponse } = await loyaltyApi.retrieveLoyaltyReward(rewardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `rewardId` | `string` | Template, Required | The ID of the [loyalty reward](entity:LoyaltyReward) to redeem. |
| `body` | [`RedeemLoyaltyRewardRequest`](../../doc/models/redeem-loyalty-reward-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RedeemLoyaltyRewardResponse`](../../doc/models/redeem-loyalty-reward-response.md)

## Example Usage

```ts
const rewardId = 'reward_id4';

const body: RedeemLoyaltyRewardRequest = {
  idempotencyKey: '98adc7f7-6963-473b-b29c-f3c9cdd7d994',
  locationId: 'P034NEENMD09F',
};

try {
  const { result, ...httpResponse } = await loyaltyApi.redeemLoyaltyReward(
  rewardId,
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

