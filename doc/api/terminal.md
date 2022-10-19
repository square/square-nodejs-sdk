# Terminal

```ts
const terminalApi = client.terminalApi;
```

## Class Name

`TerminalApi`

## Methods

* [Create Terminal Action](../../doc/api/terminal.md#create-terminal-action)
* [Search Terminal Actions](../../doc/api/terminal.md#search-terminal-actions)
* [Get Terminal Action](../../doc/api/terminal.md#get-terminal-action)
* [Cancel Terminal Action](../../doc/api/terminal.md#cancel-terminal-action)
* [Create Terminal Checkout](../../doc/api/terminal.md#create-terminal-checkout)
* [Search Terminal Checkouts](../../doc/api/terminal.md#search-terminal-checkouts)
* [Get Terminal Checkout](../../doc/api/terminal.md#get-terminal-checkout)
* [Cancel Terminal Checkout](../../doc/api/terminal.md#cancel-terminal-checkout)
* [Create Terminal Refund](../../doc/api/terminal.md#create-terminal-refund)
* [Search Terminal Refunds](../../doc/api/terminal.md#search-terminal-refunds)
* [Get Terminal Refund](../../doc/api/terminal.md#get-terminal-refund)
* [Cancel Terminal Refund](../../doc/api/terminal.md#cancel-terminal-refund)


# Create Terminal Action

Creates a Terminal action request and sends it to the specified device.

```ts
async createTerminalAction(
  body: CreateTerminalActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTerminalActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTerminalActionRequest`](../../doc/models/create-terminal-action-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalActionResponse`](../../doc/models/create-terminal-action-response.md)

## Example Usage

```ts
const contentType = null;
const bodyActionSaveCardOptions: SaveCardOptions = {
  customerId: '{{CUSTOMER_ID}}',
};
bodyActionSaveCardOptions.referenceId = 'user-id-1';

const bodyAction: TerminalAction = {};
bodyAction.deviceId = '{{DEVICE_ID}}';
bodyAction.deadlineDuration = 'PT5M';
bodyAction.type = 'SAVE_CARD';
bodyAction.saveCardOptions = bodyActionSaveCardOptions;

const body: CreateTerminalActionRequest = {
  idempotencyKey: 'thahn-70e75c10-47f7-4ab6-88cc-aaa4076d065e',
  action: bodyAction,
};

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalAction(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Terminal Actions

Retrieves a filtered list of Terminal action requests created by the account making the request. Terminal action requests are available for 30 days.

```ts
async searchTerminalActions(
  body: SearchTerminalActionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTerminalActionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTerminalActionsRequest`](../../doc/models/search-terminal-actions-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTerminalActionsResponse`](../../doc/models/search-terminal-actions-response.md)

## Example Usage

```ts
const contentType = null;
const bodyQueryFilterCreatedAt: TimeRange = {};
bodyQueryFilterCreatedAt.startAt = '2022-04-01T00:00:00Z';

const bodyQueryFilter: TerminalActionQueryFilter = {};
bodyQueryFilter.createdAt = bodyQueryFilterCreatedAt;

const bodyQuerySort: TerminalActionQuerySort = {};
bodyQuerySort.sortOrder = 'DESC';

const bodyQuery: TerminalActionQuery = {};
bodyQuery.filter = bodyQueryFilter;
bodyQuery.sort = bodyQuerySort;

const body: SearchTerminalActionsRequest = {};
body.query = bodyQuery;
body.limit = 2;

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalActions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Terminal Action

Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30 days.

```ts
async getTerminalAction(
  actionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | Unique ID for the desired `TerminalAction` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTerminalActionResponse`](../../doc/models/get-terminal-action-response.md)

## Example Usage

```ts
const actionId = 'action_id6';
try {
  const { result, ...httpResponse } = await terminalApi.getTerminalAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Terminal Action

Cancels a Terminal action request if the status of the request permits it.

```ts
async cancelTerminalAction(
  actionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelTerminalActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | Unique ID for the desired `TerminalAction` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelTerminalActionResponse`](../../doc/models/cancel-terminal-action-response.md)

## Example Usage

```ts
const actionId = 'action_id6';
try {
  const { result, ...httpResponse } = await terminalApi.cancelTerminalAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Terminal Checkout

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

```ts
async createTerminalCheckout(
  body: CreateTerminalCheckoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTerminalCheckoutRequest`](../../doc/models/create-terminal-checkout-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalCheckoutResponse`](../../doc/models/create-terminal-checkout-response.md)

## Example Usage

```ts
const contentType = null;
const bodyCheckoutAmountMoney: Money = {};
bodyCheckoutAmountMoney.amount = BigInt(2610);
bodyCheckoutAmountMoney.currency = 'USD';

const bodyCheckoutDeviceOptions: DeviceCheckoutOptions = {
  deviceId: 'dbb5d83a-7838-11ea-bc55-0242ac130003',
};

const bodyCheckout: TerminalCheckout = {
  amountMoney: bodyCheckoutAmountMoney,
  deviceOptions: bodyCheckoutDeviceOptions,
};
bodyCheckout.referenceId = 'id11572';
bodyCheckout.note = 'A brief note';

const body: CreateTerminalCheckoutRequest = {
  idempotencyKey: '28a0c3bc-7839-11ea-bc55-0242ac130003',
  checkout: bodyCheckout,
};

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalCheckout(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Terminal Checkouts

Returns a filtered list of Terminal checkout requests created by the application making the request. Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned. Terminal checkout requests are available for 30 days.

```ts
async searchTerminalCheckouts(
  body: SearchTerminalCheckoutsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTerminalCheckoutsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTerminalCheckoutsRequest`](../../doc/models/search-terminal-checkouts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTerminalCheckoutsResponse`](../../doc/models/search-terminal-checkouts-response.md)

## Example Usage

```ts
const contentType = null;
const bodyQueryFilter: TerminalCheckoutQueryFilter = {};
bodyQueryFilter.status = 'COMPLETED';

const bodyQuery: TerminalCheckoutQuery = {};
bodyQuery.filter = bodyQueryFilter;

const body: SearchTerminalCheckoutsRequest = {};
body.query = bodyQuery;
body.limit = 2;

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalCheckouts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Terminal Checkout

Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for 30 days.

```ts
async getTerminalCheckout(
  checkoutId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutId` | `string` | Template, Required | The unique ID for the desired `TerminalCheckout`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTerminalCheckoutResponse`](../../doc/models/get-terminal-checkout-response.md)

## Example Usage

```ts
const checkoutId = 'checkout_id8';
try {
  const { result, ...httpResponse } = await terminalApi.getTerminalCheckout(checkoutId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Terminal Checkout

Cancels a Terminal checkout request if the status of the request permits it.

```ts
async cancelTerminalCheckout(
  checkoutId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutId` | `string` | Template, Required | The unique ID for the desired `TerminalCheckout`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelTerminalCheckoutResponse`](../../doc/models/cancel-terminal-checkout-response.md)

## Example Usage

```ts
const checkoutId = 'checkout_id8';
try {
  const { result, ...httpResponse } = await terminalApi.cancelTerminalCheckout(checkoutId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Terminal Refund

Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds for Terminal payments should use the Refunds API. For more information, see [Refunds API](../../doc/api/refunds.md).

```ts
async createTerminalRefund(
  body: CreateTerminalRefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTerminalRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTerminalRefundRequest`](../../doc/models/create-terminal-refund-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalRefundResponse`](../../doc/models/create-terminal-refund-response.md)

## Example Usage

```ts
const contentType = null;
const bodyRefundAmountMoney: Money = {};
bodyRefundAmountMoney.amount = BigInt(111);
bodyRefundAmountMoney.currency = 'CAD';

const bodyRefund: TerminalRefund = {
  paymentId: '5O5OvgkcNUhl7JBuINflcjKqUzXZY',
  amountMoney: bodyRefundAmountMoney,
  reason: 'Returning items',
  deviceId: 'f72dfb8e-4d65-4e56-aade-ec3fb8d33291',
};

const body: CreateTerminalRefundRequest = {
  idempotencyKey: '402a640b-b26f-401f-b406-46f839590c04',
};
body.refund = bodyRefund;

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalRefund(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Terminal Refunds

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request. Terminal refund requests are available for 30 days.

```ts
async searchTerminalRefunds(
  body: SearchTerminalRefundsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTerminalRefundsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTerminalRefundsRequest`](../../doc/models/search-terminal-refunds-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTerminalRefundsResponse`](../../doc/models/search-terminal-refunds-response.md)

## Example Usage

```ts
const contentType = null;
const bodyQueryFilter: TerminalRefundQueryFilter = {};
bodyQueryFilter.status = 'COMPLETED';

const bodyQuery: TerminalRefundQuery = {};
bodyQuery.filter = bodyQueryFilter;

const body: SearchTerminalRefundsRequest = {};
body.query = bodyQuery;
body.limit = 1;

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalRefunds(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Terminal Refund

Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.

```ts
async getTerminalRefund(
  terminalRefundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminalRefundId` | `string` | Template, Required | The unique ID for the desired `TerminalRefund`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTerminalRefundResponse`](../../doc/models/get-terminal-refund-response.md)

## Example Usage

```ts
const terminalRefundId = 'terminal_refund_id0';
try {
  const { result, ...httpResponse } = await terminalApi.getTerminalRefund(terminalRefundId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Terminal Refund

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

```ts
async cancelTerminalRefund(
  terminalRefundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelTerminalRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminalRefundId` | `string` | Template, Required | The unique ID for the desired `TerminalRefund`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelTerminalRefundResponse`](../../doc/models/cancel-terminal-refund-response.md)

## Example Usage

```ts
const terminalRefundId = 'terminal_refund_id0';
try {
  const { result, ...httpResponse } = await terminalApi.cancelTerminalRefund(terminalRefundId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

