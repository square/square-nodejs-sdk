# Payments

```ts
const paymentsApi = client.paymentsApi;
```

## Class Name

`PaymentsApi`

## Methods

* [List Payments](../../doc/api/payments.md#list-payments)
* [Create Payment](../../doc/api/payments.md#create-payment)
* [Cancel Payment by Idempotency Key](../../doc/api/payments.md#cancel-payment-by-idempotency-key)
* [Get Payment](../../doc/api/payments.md#get-payment)
* [Update Payment](../../doc/api/payments.md#update-payment)
* [Cancel Payment](../../doc/api/payments.md#cancel-payment)
* [Complete Payment](../../doc/api/payments.md#complete-payment)


# List Payments

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

```ts
async listPayments(
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  locationId?: string,
  total?: bigint,
  last4?: string,
  cardBrand?: string,
  limit?: number,
  isOfflinePayment?: boolean,
  offlineBeginTime?: string,
  offlineEndTime?: string,
  updatedAtBeginTime?: string,
  updatedAtEndTime?: string,
  sortField?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPaymentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string \| undefined` | Query, Optional | Indicates the start of the time range to retrieve payments for, in RFC 3339 format.  <br>The range is determined using the `created_at` field for each Payment.<br>Inclusive. Default: The current time minus one year. |
| `endTime` | `string \| undefined` | Query, Optional | Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `created_at` field for each Payment.<br><br>Default: The current time. |
| `sortOrder` | `string \| undefined` | Query, Optional | The order in which results are listed by `ListPaymentsRequest.sort_field`:<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `locationId` | `string \| undefined` | Query, Optional | Limit results to the location supplied. By default, results are returned<br>for the default (main) location associated with the seller. |
| `total` | `bigint \| undefined` | Query, Optional | The exact amount in the `total_money` for a payment. |
| `last4` | `string \| undefined` | Query, Optional | The last four digits of a payment card. |
| `cardBrand` | `string \| undefined` | Query, Optional | The brand of the payment card (for example, VISA). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br><br>The default value of 100 is also the maximum allowed value. If the provided value is<br>greater than 100, it is ignored and the default value is used instead.<br><br>Default: `100` |
| `isOfflinePayment` | `boolean \| undefined` | Query, Optional | Whether the payment was taken offline or not.<br>**Default**: `false` |
| `offlineBeginTime` | `string \| undefined` | Query, Optional | Indicates the start of the time range for which to retrieve offline payments, in RFC 3339<br>format for timestamps. The range is determined using the<br>`offline_payment_details.client_created_at` field for each Payment. If set, payments without a<br>value set in `offline_payment_details.client_created_at` will not be returned.<br><br>Default: The current time. |
| `offlineEndTime` | `string \| undefined` | Query, Optional | Indicates the end of the time range for which to retrieve offline payments, in RFC 3339<br>format for timestamps. The range is determined using the<br>`offline_payment_details.client_created_at` field for each Payment. If set, payments without a<br>value set in `offline_payment_details.client_created_at` will not be returned.<br><br>Default: The current time. |
| `updatedAtBeginTime` | `string \| undefined` | Query, Optional | Indicates the start of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `updated_at` field for each Payment. |
| `updatedAtEndTime` | `string \| undefined` | Query, Optional | Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `updated_at` field for each Payment. |
| `sortField` | [`string \| undefined`](../../doc/models/payment-sort-field.md) | Query, Optional | The field used to sort results by. The default is `CREATED_AT`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListPaymentsResponse`](../../doc/models/list-payments-response.md)

## Example Usage

```ts
const isOfflinePayment = false;

try {
  const { result, ...httpResponse } = await paymentsApi.listPayments(
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  isOfflinePayment
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


# Create Payment

Creates a payment using the provided source. You can use this endpoint
to charge a card (credit/debit card or  
Square gift card) or record a payment that the seller received outside of Square
(cash payment from a buyer or a payment that an external entity
processed on behalf of the seller).

The endpoint creates a
`Payment` object and returns it in the response.

```ts
async createPayment(
  body: CreatePaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatePaymentResponse`](../../doc/models/create-payment-response.md)

## Example Usage

```ts
const body: CreatePaymentRequest = {
  sourceId: 'ccof:GaJGNaZa8x4OgDJn4GB',
  idempotencyKey: '7b0f3ec5-086a-4871-8f13-3c81b3875218',
  amountMoney: {
    amount: BigInt(1000),
    currency: 'USD',
  },
  appFeeMoney: {
    amount: BigInt(10),
    currency: 'USD',
  },
  autocomplete: true,
  customerId: 'W92WH6P11H4Z77CTET0RNTGFW8',
  locationId: 'L88917AVBK2S5',
  referenceId: '123456',
  note: 'Brief description',
};

try {
  const { result, ...httpResponse } = await paymentsApi.createPayment(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Payment by Idempotency Key

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

```ts
async cancelPaymentByIdempotencyKey(
  body: CancelPaymentByIdempotencyKeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelPaymentByIdempotencyKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CancelPaymentByIdempotencyKeyRequest`](../../doc/models/cancel-payment-by-idempotency-key-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelPaymentByIdempotencyKeyResponse`](../../doc/models/cancel-payment-by-idempotency-key-response.md)

## Example Usage

```ts
const body: CancelPaymentByIdempotencyKeyRequest = {
  idempotencyKey: 'a7e36d40-d24b-11e8-b568-0800200c9a66',
};

try {
  const { result, ...httpResponse } = await paymentsApi.cancelPaymentByIdempotencyKey(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payment

Retrieves details for a specific payment.

```ts
async getPayment(
  paymentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | A unique ID for the desired payment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPaymentResponse`](../../doc/models/get-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';

try {
  const { result, ...httpResponse } = await paymentsApi.getPayment(paymentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Payment

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

```ts
async updatePayment(
  paymentId: string,
  body: UpdatePaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdatePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | The ID of the payment to update. |
| `body` | [`UpdatePaymentRequest`](../../doc/models/update-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdatePaymentResponse`](../../doc/models/update-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';

const body: UpdatePaymentRequest = {
  idempotencyKey: '956f8b13-e4ec-45d6-85e8-d1d95ef0c5de',
  payment: {
    amountMoney: {
      amount: BigInt(1000),
      currency: 'USD',
    },
    tipMoney: {
      amount: BigInt(100),
      currency: 'USD',
    },
    versionToken: 'ODhwVQ35xwlzRuoZEwKXucfu7583sPTzK48c5zoGd0g6o',
  },
};

try {
  const { result, ...httpResponse } = await paymentsApi.updatePayment(
  paymentId,
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


# Cancel Payment

Cancels (voids) a payment. You can use this endpoint to cancel a payment with
the APPROVED `status`.

```ts
async cancelPayment(
  paymentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | The ID of the payment to cancel. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelPaymentResponse`](../../doc/models/cancel-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';

try {
  const { result, ...httpResponse } = await paymentsApi.cancelPayment(paymentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Complete Payment

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

```ts
async completePayment(
  paymentId: string,
  body: CompletePaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CompletePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | The unique ID identifying the payment to be completed. |
| `body` | [`CompletePaymentRequest`](../../doc/models/complete-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CompletePaymentResponse`](../../doc/models/complete-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';

const body: CompletePaymentRequest = {
};

try {
  const { result, ...httpResponse } = await paymentsApi.completePayment(
  paymentId,
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

