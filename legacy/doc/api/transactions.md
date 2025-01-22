# Transactions

```ts
const transactionsApi = client.transactionsApi;
```

## Class Name

`TransactionsApi`

## Methods

* [List Transactions](../../doc/api/transactions.md#list-transactions)
* [Retrieve Transaction](../../doc/api/transactions.md#retrieve-transaction)
* [Capture Transaction](../../doc/api/transactions.md#capture-transaction)
* [Void Transaction](../../doc/api/transactions.md#void-transaction)


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
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | The order in which results are listed in the response (`ASC` for<br>oldest first, `DESC` for newest first).<br><br>Default value: `DESC` |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListTransactionsResponse`](../../doc/models/list-transactions-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

try {
  const { result, ...httpResponse } = await transactionsApi.listTransactions(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

[`RetrieveTransactionResponse`](../../doc/models/retrieve-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const transactionId = 'transaction_id8';

try {
  const { result, ...httpResponse } = await transactionsApi.retrieveTransaction(
  locationId,
  transactionId
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


# Capture Transaction

**This endpoint is deprecated.**

Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
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

[`CaptureTransactionResponse`](../../doc/models/capture-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const transactionId = 'transaction_id8';

try {
  const { result, ...httpResponse } = await transactionsApi.captureTransaction(
  locationId,
  transactionId
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


# Void Transaction

**This endpoint is deprecated.**

Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
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

[`VoidTransactionResponse`](../../doc/models/void-transaction-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const transactionId = 'transaction_id8';

try {
  const { result, ...httpResponse } = await transactionsApi.voidTransaction(
  locationId,
  transactionId
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

