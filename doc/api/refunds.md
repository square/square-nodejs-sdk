# Refunds

```ts
const refundsApi = client.refundsApi;
```

## Class Name

`RefundsApi`

## Methods

* [List Payment Refunds](../../doc/api/refunds.md#list-payment-refunds)
* [Refund Payment](../../doc/api/refunds.md#refund-payment)
* [Get Payment Refund](../../doc/api/refunds.md#get-payment-refund)


# List Payment Refunds

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

```ts
async listPaymentRefunds(
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  locationId?: string,
  status?: string,
  sourceType?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPaymentRefundsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string \| undefined` | Query, Optional | Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339<br>format.  The range is determined using the `created_at` field for each `PaymentRefund`.<br><br>Default: The current time minus one year. |
| `endTime` | `string \| undefined` | Query, Optional | Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339<br>format.  The range is determined using the `created_at` field for each `PaymentRefund`.<br><br>Default: The current time. |
| `sortOrder` | `string \| undefined` | Query, Optional | The order in which results are listed by `PaymentRefund.created_at`:<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `locationId` | `string \| undefined` | Query, Optional | Limit results to the location supplied. By default, results are returned<br>for all locations associated with the seller. |
| `status` | `string \| undefined` | Query, Optional | If provided, only refunds with the given status are returned.<br>For a list of refund status values, see [PaymentRefund](entity:PaymentRefund).<br><br>Default: If omitted, refunds are returned regardless of their status. |
| `sourceType` | `string \| undefined` | Query, Optional | If provided, only returns refunds whose payments have the indicated source type.<br>Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`.<br>For information about these payment source types, see<br>[Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).<br><br>Default: If omitted, refunds are returned regardless of the source type. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to be returned in a single page.<br><br>It is possible to receive fewer results than the specified limit on a given page.<br><br>If the supplied value is greater than 100, no more than 100 results are returned.<br><br>Default: 100 |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListPaymentRefundsResponse`](../../doc/models/list-payment-refunds-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await refundsApi.listPaymentRefunds();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refund Payment

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

```ts
async refundPayment(
  body: RefundPaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefundPaymentRequest`](../../doc/models/refund-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RefundPaymentResponse`](../../doc/models/refund-payment-response.md)

## Example Usage

```ts
const body: RefundPaymentRequest = {
  idempotencyKey: '9b7f2dcf-49da-4411-b23e-a2d6af21333a',
  amountMoney: {
    amount: BigInt(1000),
    currency: 'USD',
  },
  appFeeMoney: {
    amount: BigInt(10),
    currency: 'USD',
  },
  paymentId: 'R2B3Z8WMVt3EAmzYWLZvz7Y69EbZY',
  reason: 'Example',
};

try {
  const { result, ...httpResponse } = await refundsApi.refundPayment(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payment Refund

Retrieves a specific refund using the `refund_id`.

```ts
async getPaymentRefund(
  refundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPaymentRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundId` | `string` | Template, Required | The unique ID for the desired `PaymentRefund`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPaymentRefundResponse`](../../doc/models/get-payment-refund-response.md)

## Example Usage

```ts
const refundId = 'refund_id4';

try {
  const { result, ...httpResponse } = await refundsApi.getPaymentRefund(refundId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

