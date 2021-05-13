# Terminal

```ts
const terminalApi = client.terminalApi;
```

## Class Name

`TerminalApi`

## Methods

* [Create Terminal Checkout](/doc/api/terminal.md#create-terminal-checkout)
* [Search Terminal Checkouts](/doc/api/terminal.md#search-terminal-checkouts)
* [Get Terminal Checkout](/doc/api/terminal.md#get-terminal-checkout)
* [Cancel Terminal Checkout](/doc/api/terminal.md#cancel-terminal-checkout)
* [Create Terminal Refund](/doc/api/terminal.md#create-terminal-refund)
* [Search Terminal Refunds](/doc/api/terminal.md#search-terminal-refunds)
* [Get Terminal Refund](/doc/api/terminal.md#get-terminal-refund)
* [Cancel Terminal Refund](/doc/api/terminal.md#cancel-terminal-refund)


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
| `body` | [`CreateTerminalCheckoutRequest`](/doc/models/create-terminal-checkout-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalCheckoutResponse`](/doc/models/create-terminal-checkout-response.md)

## Example Usage

```ts
const bodyCheckoutAmountMoney: Money = {};
bodyCheckoutAmountMoney.amount = 2610;
bodyCheckoutAmountMoney.currency = 'USD';

const bodyCheckoutDeviceOptionsTipSettingsTipPercentages: number[] = [148, 149, 150];
const bodyCheckoutDeviceOptionsTipSettings: TipSettings = {};
bodyCheckoutDeviceOptionsTipSettings.allowTipping = false;
bodyCheckoutDeviceOptionsTipSettings.separateTipScreen = false;
bodyCheckoutDeviceOptionsTipSettings.customTipField = false;
bodyCheckoutDeviceOptionsTipSettings.tipPercentages = bodyCheckoutDeviceOptionsTipSettingsTipPercentages;
bodyCheckoutDeviceOptionsTipSettings.smartTipping = false;

const bodyCheckoutDeviceOptions: DeviceCheckoutOptions = {
  deviceId: 'dbb5d83a-7838-11ea-bc55-0242ac130003',
};
bodyCheckoutDeviceOptions.skipReceiptScreen = false;
bodyCheckoutDeviceOptions.tipSettings = bodyCheckoutDeviceOptionsTipSettings;

const bodyCheckout: TerminalCheckout = {
  amountMoney: bodyCheckoutAmountMoney,
  deviceOptions: bodyCheckoutDeviceOptions,
};
bodyCheckout.id = 'id8';
bodyCheckout.referenceId = 'id11572';
bodyCheckout.note = 'A brief note';
bodyCheckout.deadlineDuration = 'deadline_duration0';
bodyCheckout.status = 'status0';

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

Retrieves a filtered list of Terminal checkout requests created by the account making the request.

```ts
async searchTerminalCheckouts(
  body: SearchTerminalCheckoutsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTerminalCheckoutsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTerminalCheckoutsRequest`](/doc/models/search-terminal-checkouts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTerminalCheckoutsResponse`](/doc/models/search-terminal-checkouts-response.md)

## Example Usage

```ts
const bodyQueryFilterCreatedAt: TimeRange = {};
bodyQueryFilterCreatedAt.startAt = 'start_at2';
bodyQueryFilterCreatedAt.endAt = 'end_at0';

const bodyQueryFilter: TerminalCheckoutQueryFilter = {};
bodyQueryFilter.deviceId = 'device_id8';
bodyQueryFilter.createdAt = bodyQueryFilterCreatedAt;
bodyQueryFilter.status = 'COMPLETED';

const bodyQuerySort: TerminalCheckoutQuerySort = {};
bodyQuerySort.sortOrder = 'sort_order8';

const bodyQuery: TerminalCheckoutQuery = {};
bodyQuery.filter = bodyQueryFilter;
bodyQuery.sort = bodyQuerySort;

const body: SearchTerminalCheckoutsRequest = {};
body.query = bodyQuery;
body.cursor = 'cursor0';
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

Retrieves a Terminal checkout request by `checkout_id`.

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

[`GetTerminalCheckoutResponse`](/doc/models/get-terminal-checkout-response.md)

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

[`CancelTerminalCheckoutResponse`](/doc/models/cancel-terminal-checkout-response.md)

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

Creates a request to refund an Interac payment completed on a Square Terminal.

```ts
async createTerminalRefund(
  body: CreateTerminalRefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTerminalRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTerminalRefundRequest`](/doc/models/create-terminal-refund-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalRefundResponse`](/doc/models/create-terminal-refund-response.md)

## Example Usage

```ts
const bodyRefundAmountMoney: Money = {};
bodyRefundAmountMoney.amount = 111;
bodyRefundAmountMoney.currency = 'CAD';

const bodyRefund: TerminalRefund = {
  paymentId: '5O5OvgkcNUhl7JBuINflcjKqUzXZY',
  amountMoney: bodyRefundAmountMoney,
};
bodyRefund.id = 'id4';
bodyRefund.refundId = 'refund_id8';
bodyRefund.orderId = 'order_id8';
bodyRefund.reason = 'Returning items';
bodyRefund.deviceId = 'f72dfb8e-4d65-4e56-aade-ec3fb8d33291';

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

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.

```ts
async searchTerminalRefunds(
  body: SearchTerminalRefundsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTerminalRefundsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTerminalRefundsRequest`](/doc/models/search-terminal-refunds-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTerminalRefundsResponse`](/doc/models/search-terminal-refunds-response.md)

## Example Usage

```ts
const bodyQueryFilterCreatedAt: TimeRange = {};
bodyQueryFilterCreatedAt.startAt = 'start_at2';
bodyQueryFilterCreatedAt.endAt = 'end_at0';

const bodyQueryFilter: TerminalRefundQueryFilter = {};
bodyQueryFilter.deviceId = 'device_id8';
bodyQueryFilter.createdAt = bodyQueryFilterCreatedAt;
bodyQueryFilter.status = 'COMPLETED';

const bodyQuerySort: TerminalRefundQuerySort = {};
bodyQuerySort.sortOrder = 'sort_order8';

const bodyQuery: TerminalRefundQuery = {};
bodyQuery.filter = bodyQueryFilter;
bodyQuery.sort = bodyQuerySort;

const body: SearchTerminalRefundsRequest = {};
body.query = bodyQuery;
body.cursor = 'cursor0';
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

Retrieves an Interac Terminal refund object by ID.

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

[`GetTerminalRefundResponse`](/doc/models/get-terminal-refund-response.md)

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

[`CancelTerminalRefundResponse`](/doc/models/cancel-terminal-refund-response.md)

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

