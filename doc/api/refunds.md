# Refunds

```ts
const refundsApi = client.refundsApi;
```

## Class Name

`RefundsApi`

## Methods

* [List Payment Refunds](/doc/api/refunds.md#list-payment-refunds)
* [Refund Payment](/doc/api/refunds.md#refund-payment)
* [Get Payment Refund](/doc/api/refunds.md#get-payment-refund)


# List Payment Refunds

Retrieves a list of refunds for the account making the request.

Max results per page: 100

```ts
async listPaymentRefunds(
  beginTime?: string,
  endTime?: string,
  sortOrder?: string,
  cursor?: string,
  locationId?: string,
  status?: string,
  sourceType?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPaymentRefundsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string` | Query, Optional | Timestamp for the beginning of the requested reporting period, in RFC 3339 format.<br><br>Default: The current time minus one year. |
| `endTime` | `string` | Query, Optional | Timestamp for the end of the requested reporting period, in RFC 3339 format.<br><br>Default: The current time. |
| `sortOrder` | `string` | Query, Optional | The order in which results are listed.<br><br>- `ASC` - oldest to newest<br>- `DESC` - newest to oldest (default). |
| `cursor` | `string` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `locationId` | `string` | Query, Optional | Limit results to the location supplied. By default, results are returned<br>for all locations associated with the merchant. |
| `status` | `string` | Query, Optional | If provided, only refunds with the given status are returned.<br>For a list of refund status values, see [PaymentRefund](#type-paymentrefund).<br><br>Default: If omitted refunds are returned regardless of status. |
| `sourceType` | `string` | Query, Optional | If provided, only refunds with the given source type are returned.<br><br>- `CARD` - List refunds only for payments where card was specified as payment<br>  source.<br><br>Default: If omitted refunds are returned regardless of source type. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListPaymentRefundsResponse`](/doc/models/list-payment-refunds-response.md)

## Example Usage

```ts
const beginTime = 'begin_time2';
const endTime = 'end_time2';
const sortOrder = 'sort_order0';
const cursor = 'cursor6';
const locationId = 'location_id4';
const status = 'status8';
const sourceType = 'source_type0';
try {
  const { result, ...httpResponse } = await refundsApi.listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Refund Payment

Refunds a payment. You can refund the entire payment amount or a
portion of it. For more information, see
[Payments and Refunds Overview](https://developer.squareup.com/docs/payments-api/overview).

```ts
async refundPayment(
  body: RefundPaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefundPaymentRequest`](/doc/models/refund-payment-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RefundPaymentResponse`](/doc/models/refund-payment-response.md)

## Example Usage

```ts
const bodyAmountMoney: Money = {};
bodyAmountMoney.amount = 100;
bodyAmountMoney.currency = 'USD';

const bodyAppFeeMoney: Money = {};
bodyAppFeeMoney.amount = 114;
bodyAppFeeMoney.currency = 'GEL';

const body: RefundPaymentRequest = {
  idempotencyKey: 'a7e36d40-d24b-11e8-b568-0800200c9a66',
  amountMoney: bodyAmountMoney,
  paymentId: 'UNOE3kv2BZwqHlJ830RCt5YCuaB',
};
body.appFeeMoney = bodyAppFeeMoney;
body.reason = 'reason8';

try {
  const { result, ...httpResponse } = await refundsApi.refundPayment(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payment Refund

Retrieves a specific `Refund` using the `refund_id`.

```ts
async getPaymentRefund(
  refundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPaymentRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundId` | `string` | Template, Required | Unique ID for the desired `PaymentRefund`. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`GetPaymentRefundResponse`](/doc/models/get-payment-refund-response.md)

## Example Usage

```ts
const refundId = 'refund_id4';
try {
  const { result, ...httpResponse } = await refundsApi.getPaymentRefund(refundId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

