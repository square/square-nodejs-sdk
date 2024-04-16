# V1 Transactions

```ts
const v1TransactionsApi = client.v1TransactionsApi;
```

## Class Name

`V1TransactionsApi`

## Methods

* [V1 List Orders](../../doc/api/v1-transactions.md#v1-list-orders)
* [V1 Retrieve Order](../../doc/api/v1-transactions.md#v1-retrieve-order)
* [V1 Update Order](../../doc/api/v1-transactions.md#v1-update-order)


# V1 List Orders

**This endpoint is deprecated.**

Provides summary information for a merchant's online store orders.

```ts
async v1ListOrders(
  locationId: string,
  order?: string,
  limit?: number,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Order[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list online store orders for. |
| `order` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | The order in which payments are listed in the response. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of payments to return in a single response. This value cannot exceed 200. |
| `batchToken` | `string \| undefined` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1Order[]`](../../doc/models/v1-order.md)

## Example Usage

```ts
const locationId = 'location_id4';

try {
  const { result, ...httpResponse } = await v1TransactionsApi.v1ListOrders(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# V1 Retrieve Order

**This endpoint is deprecated.**

Provides comprehensive information for a single online store order, including the order's history.

```ts
async v1RetrieveOrder(
  locationId: string,
  orderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the order's associated location. |
| `orderId` | `string` | Template, Required | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1Order`](../../doc/models/v1-order.md)

## Example Usage

```ts
const locationId = 'location_id4';

const orderId = 'order_id6';

try {
  const { result, ...httpResponse } = await v1TransactionsApi.v1RetrieveOrder(
  locationId,
  orderId
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


# V1 Update Order

**This endpoint is deprecated.**

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

```ts
async v1UpdateOrder(
  locationId: string,
  orderId: string,
  body: V1UpdateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the order's associated location. |
| `orderId` | `string` | Template, Required | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint |
| `body` | [`V1UpdateOrderRequest`](../../doc/models/v1-update-order-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V1Order`](../../doc/models/v1-order.md)

## Example Usage

```ts
const locationId = 'location_id4';

const orderId = 'order_id6';

const body: V1UpdateOrderRequest = {
  action: 'REFUND',
};

try {
  const { result, ...httpResponse } = await v1TransactionsApi.v1UpdateOrder(
  locationId,
  orderId,
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

