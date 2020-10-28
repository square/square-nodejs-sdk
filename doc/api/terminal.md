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


# Create Terminal Checkout

Creates a new Terminal checkout request and sends it to the specified device to take a payment for the requested amount.

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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateTerminalCheckoutResponse`](/doc/models/create-terminal-checkout-response.md)

## Example Usage

```ts
const bodyCheckoutAmountMoney: Money = {};
bodyCheckoutAmountMoney.amount = 2610;
bodyCheckoutAmountMoney.currency = 'USD';

const bodyCheckoutDeviceOptionsTipSettings: TipSettings = {};
bodyCheckoutDeviceOptionsTipSettings.allowTipping = false;
bodyCheckoutDeviceOptionsTipSettings.separateTipScreen = false;
bodyCheckoutDeviceOptionsTipSettings.customTipField = false;

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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

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

Retrieves a Terminal checkout request by checkout_id.

```ts
async getTerminalCheckout(
  checkoutId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutId` | `string` | Template, Required | Unique ID for the desired `TerminalCheckout` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

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

Cancels a Terminal checkout request, if the status of the request permits it.

```ts
async cancelTerminalCheckout(
  checkoutId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutId` | `string` | Template, Required | Unique ID for the desired `TerminalCheckout` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

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

