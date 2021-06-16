# Transactions

```ts
const transactionsApi = client.transactionsApi;
```

## Class Name

`TransactionsApi`

## Methods

* [List Refunds](/doc/api/transactions.md#list-refunds)
* [List Transactions](/doc/api/transactions.md#list-transactions)
* [Charge](/doc/api/transactions.md#charge)
* [Retrieve Transaction](/doc/api/transactions.md#retrieve-transaction)
* [Capture Transaction](/doc/api/transactions.md#capture-transaction)
* [Create Refund](/doc/api/transactions.md#create-refund)
* [Void Transaction](/doc/api/transactions.md#void-transaction)


# List Refunds

**This endpoint is deprecated.**

Lists refunds for one of a business's locations.

In addition to full or partial tender refunds processed through Square APIs,
refunds may result from itemized returns or exchanges through Square's
Point of Sale applications.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

```ts
async listRefunds(
  locationId: string,
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListRefundsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list refunds for. |
| `beginTime` | `string \| undefined` | Query, Optional | The beginning of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time minus one year. |
| `endTime` | `string \| undefined` | Query, Optional | The end of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time. |
| `sortOrder` | [`string \| undefined`](/doc/models/sort-order.md) | Query, Optional | The order in which results are listed in the response (`ASC` for<br>oldest first, `DESC` for newest first).<br><br>Default value: `DESC` |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListRefundsResponse`](/doc/models/list-refunds-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const beginTime = 'begin_time2';
const endTime = 'end_time2';
const sortOrder = 'DESC';
const cursor = 'cursor6';
try {
  const { result, ...httpResponse } = await transactionsApi.listRefunds(locationId, beginTime, endTime, sortOrder, cursor);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Transactions

**This endpoint is deprecated.**

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

```ts
async listTransactions(
  locationId: string,
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list transactions for. |
| `beginTime` | `string \| undefined` | Query, Optional | The beginning of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time minus one year. |
| `endTime` | `string \| undefined` | Query, Optional | The end of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time. |
| `sortOrder` | [`string \| undefined`](/doc/models/sort-order.md) | Query, Optional | The order in which results are listed in the response (`ASC` for<br>oldest first, `DESC` for newest first).<br><br>Default value: `DESC` |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListTransactionsResponse`](/doc/models/list-transactions-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const beginTime = 'begin_time2';
const endTime = 'end_time2';
const sortOrder = 'DESC';
const cursor = 'cursor6';
try {
  const { result, ...httpResponse } = await transactionsApi.listTransactions(locationId, beginTime, endTime, sortOrder, cursor);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Charge

**This endpoint is deprecated.**

Charges a card represented by a card nonce or a customer's card on file.

Your request to this endpoint must include _either_:

- A value for the `card_nonce` parameter (to charge a card payment token generated
  with the Web Payments SDK)
- Values for the `customer_card_id` and `customer_id` parameters (to charge
  a customer's card on file)

In order for an eCommerce payment to potentially qualify for
[Square chargeback protection](https://squareup.com/help/article/5394), you
_must_ provide values for the following parameters in your request:

- `buyer_email_address`
- At least one of `billing_address` or `shipping_address`

When this response is returned, the amount of Square's processing fee might not yet be
calculated. To obtain the processing fee, wait about ten seconds and call
[RetrieveTransaction](/doc/api/transactions.md#retrieve-transaction). See the `processing_fee_money`
field of each [Tender included](/doc/models/tender.md) in the transaction.

```ts
async charge(
  locationId: string,
  body: ChargeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to associate the created transaction with. |
| `body` | [`ChargeRequest`](/doc/models/charge-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChargeResponse`](/doc/models/charge-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyAmountMoney: Money = {};
bodyAmountMoney.amount = 200;
bodyAmountMoney.currency = 'USD';

const bodyBillingAddress: Address = {};
bodyBillingAddress.addressLine1 = '500 Electric Ave';
bodyBillingAddress.addressLine2 = 'Suite 600';
bodyBillingAddress.addressLine3 = 'address_line_38';
bodyBillingAddress.locality = 'New York';
bodyBillingAddress.sublocality = 'sublocality2';
bodyBillingAddress.administrativeDistrictLevel1 = 'NY';
bodyBillingAddress.postalCode = '10003';
bodyBillingAddress.country = 'US';

const bodyShippingAddress: Address = {};
bodyShippingAddress.addressLine1 = '123 Main St';
bodyShippingAddress.addressLine2 = 'address_line_24';
bodyShippingAddress.addressLine3 = 'address_line_30';
bodyShippingAddress.locality = 'San Francisco';
bodyShippingAddress.sublocality = 'sublocality4';
bodyShippingAddress.administrativeDistrictLevel1 = 'CA';
bodyShippingAddress.postalCode = '94114';
bodyShippingAddress.country = 'US';

const bodyAdditionalRecipients: ChargeRequestAdditionalRecipient[] = [];

const bodyadditionalRecipients0AmountMoney: Money = {};
bodyadditionalRecipients0AmountMoney.amount = 20;
bodyadditionalRecipients0AmountMoney.currency = 'USD';

const bodyadditionalRecipients0: ChargeRequestAdditionalRecipient = {
  locationId: '057P5VYJ4A5X1',
  description: 'Application fees',
  amountMoney: bodyadditionalRecipients0AmountMoney,
};

bodyAdditionalRecipients[0] = bodyadditionalRecipients0;

const body: ChargeRequest = {
  idempotencyKey: '74ae1696-b1e3-4328-af6d-f1e04d947a13',
  amountMoney: bodyAmountMoney,
};
body.cardNonce = 'card_nonce_from_square_123';
body.customerCardId = 'customer_card_id6';
body.delayCapture = false;
body.referenceId = 'some optional reference id';
body.note = 'some optional note';
body.billingAddress = bodyBillingAddress;
body.shippingAddress = bodyShippingAddress;
body.additionalRecipients = bodyAdditionalRecipients;

try {
  const { result, ...httpResponse } = await transactionsApi.charge(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Transaction

**This endpoint is deprecated.**

Retrieves details for a single transaction.

```ts
async retrieveTransaction(
  locationId: string,
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveTransactionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the transaction's associated location. |
| `transactionId` | `string` | Template, Required | The ID of the transaction to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveTransactionResponse`](/doc/models/retrieve-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const transactionId = 'transaction_id8';
try {
  const { result, ...httpResponse } = await transactionsApi.retrieveTransaction(locationId, transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Capture Transaction

**This endpoint is deprecated.**

Captures a transaction that was created with the [Charge](/doc/api/transactions.md#charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

```ts
async captureTransaction(
  locationId: string,
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CaptureTransactionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | - |
| `transactionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CaptureTransactionResponse`](/doc/models/capture-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const transactionId = 'transaction_id8';
try {
  const { result, ...httpResponse } = await transactionsApi.captureTransaction(locationId, transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Refund

**This endpoint is deprecated.**

Initiates a refund for a previously charged tender.

You must issue a refund within 120 days of the associated payment. See
[this article](https://squareup.com/help/us/en/article/5060) for more information
on refund behavior.

NOTE: Card-present transactions with Interac credit cards **cannot be
refunded using the Connect API**. Interac transactions must refunded
in-person (e.g., dipping the card using POS app).

```ts
async createRefund(
  locationId: string,
  transactionId: string,
  body: CreateRefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the original transaction's associated location. |
| `transactionId` | `string` | Template, Required | The ID of the original transaction that includes the tender to refund. |
| `body` | [`CreateRefundRequest`](/doc/models/create-refund-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateRefundResponse`](/doc/models/create-refund-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const transactionId = 'transaction_id8';
const bodyAmountMoney: Money = {};
bodyAmountMoney.amount = 100;
bodyAmountMoney.currency = 'USD';

const body: CreateRefundRequest = {
  idempotencyKey: '86ae1696-b1e3-4328-af6d-f1e04d947ad2',
  tenderId: 'MtZRYYdDrYNQbOvV7nbuBvMF',
  amountMoney: bodyAmountMoney,
};
body.reason = 'a reason';

try {
  const { result, ...httpResponse } = await transactionsApi.createRefund(locationId, transactionId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Void Transaction

**This endpoint is deprecated.**

Cancels a transaction that was created with the [Charge](/doc/api/transactions.md#charge)
endpoint with a `delay_capture` value of `true`.

See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

```ts
async voidTransaction(
  locationId: string,
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VoidTransactionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | - |
| `transactionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VoidTransactionResponse`](/doc/models/void-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const transactionId = 'transaction_id8';
try {
  const { result, ...httpResponse } = await transactionsApi.voidTransaction(locationId, transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

