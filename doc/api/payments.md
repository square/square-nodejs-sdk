# Payments

```ts
const paymentsApi = client.paymentsApi;
```

## Class Name

`PaymentsApi`

## Methods

* [List Payments](/doc/api/payments.md#list-payments)
* [Create Payment](/doc/api/payments.md#create-payment)
* [Cancel Payment by Idempotency Key](/doc/api/payments.md#cancel-payment-by-idempotency-key)
* [Get Payment](/doc/api/payments.md#get-payment)
* [Cancel Payment](/doc/api/payments.md#cancel-payment)
* [Complete Payment](/doc/api/payments.md#complete-payment)


# List Payments

Retrieves a list of payments taken by the account making the request.

Max results per page: 100

```ts
async listPayments(
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  locationId?: string,
  total?: number,
  last4?: string,
  cardBrand?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPaymentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string` | Query, Optional | Timestamp for the beginning of the reporting period, in RFC 3339 format.<br>Inclusive. Default: The current time minus one year. |
| `endTime` | `string` | Query, Optional | Timestamp for the end of the requested reporting period, in RFC 3339 format.<br><br>Default: The current time. |
| `sortOrder` | `string` | Query, Optional | The order in which results are listed.<br><br>- `ASC` - oldest to newest<br>- `DESC` - newest to oldest (default). |
| `cursor` | `string` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `locationId` | `string` | Query, Optional | Limit results to the location supplied. By default, results are returned<br>for all locations associated with the merchant. |
| `total` | `number` | Query, Optional | The exact amount in the total_money for a `Payment`. |
| `last4` | `string` | Query, Optional | The last 4 digits of `Payment` card. |
| `cardBrand` | `string` | Query, Optional | The brand of `Payment` card. For example, `VISA` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListPaymentsResponse`](/doc/models/list-payments-response.md)

## Example Usage

```ts
const beginTime = 'begin_time2';
const endTime = 'end_time2';
const sortOrder = 'sort_order0';
const cursor = 'cursor6';
const locationId = 'location_id4';
const total = 10;
const last4 = 'last_42';
const cardBrand = 'card_brand6';
try {
  const { result, ...httpResponse } = await paymentsApi.listPayments(beginTime, endTime, sortOrder, cursor, locationId, total, last4, cardBrand);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Payment

Charges a payment source, for example, a card
represented by customer's card on file or a card nonce. In addition
to the payment source, the request must also include the
amount to accept for the payment.

There are several optional parameters that you can include in the request.
For example, tip money, whether to autocomplete the payment, or a reference ID
to correlate this payment with another system.
For more information about these
payment options, see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).

The `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required
to enable application fees.

```ts
async createPayment(
  body: CreatePaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymentRequest`](/doc/models/create-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreatePaymentResponse`](/doc/models/create-payment-response.md)

## Example Usage

```ts
const bodyAmountMoney: Money = {};
bodyAmountMoney.amount = 200;
bodyAmountMoney.currency = 'USD';

const bodyTipMoney: Money = {};
bodyTipMoney.amount = 198;
bodyTipMoney.currency = 'CHF';

const bodyAppFeeMoney: Money = {};
bodyAppFeeMoney.amount = 10;
bodyAppFeeMoney.currency = 'USD';

const body: CreatePaymentRequest = {
  sourceId: 'ccof:uIbfJXhXETSP197M3GB',
  idempotencyKey: '4935a656-a929-4792-b97c-8848be85c27c',
  amountMoney: bodyAmountMoney,
};
body.tipMoney = bodyTipMoney;
body.appFeeMoney = bodyAppFeeMoney;
body.delayDuration = 'delay_duration6';
body.autocomplete = true;
body.orderId = 'order_id0';
body.customerId = 'VDKXEEKPJN48QDG3BGGFAK05P8';
body.locationId = 'XK3DBG77NJBFX';
body.referenceId = '123456';
body.note = 'Brief description';

try {
  const { result, ...httpResponse } = await paymentsApi.createPayment(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Payment by Idempotency Key

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when status of a CreatePayment request is unknown. For example, after you send a
CreatePayment request a network error occurs and you don't get a response. In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your CreatePayment request you want  to cancel. After
cancelling the payment, you can submit your CreatePayment request again.

Note that if no payment with the specified idempotency key is found, no action is taken, the end
point returns successfully.

```ts
async cancelPaymentByIdempotencyKey(
  body: CancelPaymentByIdempotencyKeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelPaymentByIdempotencyKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CancelPaymentByIdempotencyKeyRequest`](/doc/models/cancel-payment-by-idempotency-key-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CancelPaymentByIdempotencyKeyResponse`](/doc/models/cancel-payment-by-idempotency-key-response.md)

## Example Usage

```ts
const body: CancelPaymentByIdempotencyKeyRequest = {
  idempotencyKey: 'a7e36d40-d24b-11e8-b568-0800200c9a66',
};

try {
  const { result, ...httpResponse } = await paymentsApi.cancelPaymentByIdempotencyKey(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payment

Retrieves details for a specific Payment.

```ts
async getPayment(
  paymentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | Unique ID for the desired `Payment`. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`GetPaymentResponse`](/doc/models/get-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';
try {
  const { result, ...httpResponse } = await paymentsApi.getPayment(paymentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Payment

Cancels (voids) a payment. If you set `autocomplete` to false when creating a payment,
you can cancel the payment using this endpoint. For more information, see
[Delayed Payments](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).

```ts
async cancelPayment(
  paymentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | `payment_id` identifying the payment to be canceled. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CancelPaymentResponse`](/doc/models/cancel-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';
try {
  const { result, ...httpResponse } = await paymentsApi.cancelPayment(paymentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Complete Payment

Completes (captures) a payment.

By default, payments are set to complete immediately after they are created.
If you set autocomplete to false when creating a payment, you can complete (capture)
the payment using this endpoint. For more information, see
[Delayed Payments](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).

```ts
async completePayment(
  paymentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CompletePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentId` | `string` | Template, Required | Unique ID identifying the payment to be completed. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CompletePaymentResponse`](/doc/models/complete-payment-response.md)

## Example Usage

```ts
const paymentId = 'payment_id0';
try {
  const { result, ...httpResponse } = await paymentsApi.completePayment(paymentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

