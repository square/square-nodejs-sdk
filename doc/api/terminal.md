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
* [Dismiss Terminal Action](../../doc/api/terminal.md#dismiss-terminal-action)
* [Create Terminal Checkout](../../doc/api/terminal.md#create-terminal-checkout)
* [Search Terminal Checkouts](../../doc/api/terminal.md#search-terminal-checkouts)
* [Get Terminal Checkout](../../doc/api/terminal.md#get-terminal-checkout)
* [Cancel Terminal Checkout](../../doc/api/terminal.md#cancel-terminal-checkout)
* [Dismiss Terminal Checkout](../../doc/api/terminal.md#dismiss-terminal-checkout)
* [Create Terminal Refund](../../doc/api/terminal.md#create-terminal-refund)
* [Search Terminal Refunds](../../doc/api/terminal.md#search-terminal-refunds)
* [Get Terminal Refund](../../doc/api/terminal.md#get-terminal-refund)
* [Cancel Terminal Refund](../../doc/api/terminal.md#cancel-terminal-refund)
* [Dismiss Terminal Refund](../../doc/api/terminal.md#dismiss-terminal-refund)


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
const body: CreateTerminalActionRequest = {
  idempotencyKey: 'thahn-70e75c10-47f7-4ab6-88cc-aaa4076d065e',
  action: {
    deviceId: '{{DEVICE_ID}}',
    deadlineDuration: 'PT5M',
    type: 'SAVE_CARD',
    saveCardOptions: {
      customerId: '{{CUSTOMER_ID}}',
      referenceId: 'user-id-1',
    },
  },
};

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalAction(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: SearchTerminalActionsRequest = {
  query: {
    filter: {
      createdAt: {
        startAt: '2022-04-01T00:00:00.000Z',
      },
    },
    sort: {
      sortOrder: 'DESC',
    },
  },
  limit: 2,
};

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalActions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `actionId` | `string` | Template, Required | Unique ID for the desired `TerminalAction`. |
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
} catch (error) {
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
| `actionId` | `string` | Template, Required | Unique ID for the desired `TerminalAction`. |
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
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Dismiss Terminal Action

Dismisses a Terminal action request if the status and type of the request permits it.

See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-features/custom-workflows/link-and-dismiss-actions) for more details.

```ts
async dismissTerminalAction(
  actionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DismissTerminalActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | Unique ID for the `TerminalAction` associated with the action to be dismissed. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DismissTerminalActionResponse`](../../doc/models/dismiss-terminal-action-response.md)

## Example Usage

```ts
const actionId = 'action_id6';

try {
  const { result, ...httpResponse } = await terminalApi.dismissTerminalAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: CreateTerminalCheckoutRequest = {
  idempotencyKey: '28a0c3bc-7839-11ea-bc55-0242ac130003',
  checkout: {
    amountMoney: {
      amount: BigInt(2610),
      currency: 'USD',
    },
    deviceOptions: {
      deviceId: 'dbb5d83a-7838-11ea-bc55-0242ac130003',
    },
    referenceId: 'id11572',
    note: 'A brief note',
  },
};

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalCheckout(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: SearchTerminalCheckoutsRequest = {
  query: {
    filter: {
      status: 'COMPLETED',
    },
  },
  limit: 2,
};

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalCheckouts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
} catch (error) {
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
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Dismiss Terminal Checkout

Dismisses a Terminal checkout request if the status and type of the request permits it.

```ts
async dismissTerminalCheckout(
  checkoutId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DismissTerminalCheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutId` | `string` | Template, Required | Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DismissTerminalCheckoutResponse`](../../doc/models/dismiss-terminal-checkout-response.md)

## Example Usage

```ts
const checkoutId = 'checkout_id8';

try {
  const { result, ...httpResponse } = await terminalApi.dismissTerminalCheckout(checkoutId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: CreateTerminalRefundRequest = {
  idempotencyKey: '402a640b-b26f-401f-b406-46f839590c04',
  refund: {
    paymentId: '5O5OvgkcNUhl7JBuINflcjKqUzXZY',
    amountMoney: {
      amount: BigInt(111),
      currency: 'CAD',
    },
    reason: 'Returning items',
    deviceId: 'f72dfb8e-4d65-4e56-aade-ec3fb8d33291',
  },
};

try {
  const { result, ...httpResponse } = await terminalApi.createTerminalRefund(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: SearchTerminalRefundsRequest = {
  query: {
    filter: {
      status: 'COMPLETED',
    },
  },
  limit: 1,
};

try {
  const { result, ...httpResponse } = await terminalApi.searchTerminalRefunds(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
} catch (error) {
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
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Dismiss Terminal Refund

Dismisses a Terminal refund request if the status and type of the request permits it.

```ts
async dismissTerminalRefund(
  terminalRefundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DismissTerminalRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminalRefundId` | `string` | Template, Required | Unique ID for the `TerminalRefund` associated with the refund to be dismissed. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DismissTerminalRefundResponse`](../../doc/models/dismiss-terminal-refund-response.md)

## Example Usage

```ts
const terminalRefundId = 'terminal_refund_id0';

try {
  const { result, ...httpResponse } = await terminalApi.dismissTerminalRefund(terminalRefundId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

