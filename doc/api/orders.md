# Orders

```ts
const ordersApi = client.ordersApi;
```

## Class Name

`OrdersApi`

## Methods

* [Create Order](/doc/api/orders.md#create-order)
* [Batch Retrieve Orders](/doc/api/orders.md#batch-retrieve-orders)
* [Calculate Order](/doc/api/orders.md#calculate-order)
* [Search Orders](/doc/api/orders.md#search-orders)
* [Retrieve Order](/doc/api/orders.md#retrieve-order)
* [Update Order](/doc/api/orders.md#update-order)
* [Pay Order](/doc/api/orders.md#pay-order)


# Create Order

Creates a new [Order](/doc/models/order.md) which can include information on products for
purchase and settings to apply to the purchase.

To pay for a created order, please refer to the
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders)
guide.

You can modify open orders using the [UpdateOrder](/doc/api/orders.md#update-order) endpoint.

```ts
async createOrder(
  body: CreateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrderRequest`](/doc/models/create-order-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateOrderResponse`](/doc/models/create-order-response.md)

## Example Usage

```ts
const bodyOrderSource: OrderSource = {};
bodyOrderSource.name = 'name6';

const bodyOrderLineItems: OrderLineItem[] = [];

const bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name9',
  abbreviation: 'abbreviation1',
};

const bodyOrderlineItems0QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems0QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems0QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_SQUARE_INCH';
bodyOrderlineItems0QuantityUnitMeasurementUnit.lengthUnit = 'METRIC_KILOMETER';
bodyOrderlineItems0QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_QUART';
bodyOrderlineItems0QuantityUnitMeasurementUnit.weightUnit = 'METRIC_MILLIGRAM';

const bodyOrderlineItems0QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems0QuantityUnit.measurementUnit = bodyOrderlineItems0QuantityUnitMeasurementUnit;
bodyOrderlineItems0QuantityUnit.precision = 189;

const bodyOrderlineItems0BasePriceMoney: Money = {};
bodyOrderlineItems0BasePriceMoney.amount = 1599;
bodyOrderlineItems0BasePriceMoney.currency = 'USD';

const bodyOrderlineItems0: OrderLineItem = {
  quantity: '1',
};
bodyOrderlineItems0.uid = 'uid1';
bodyOrderlineItems0.name = 'New York Strip Steak';
bodyOrderlineItems0.quantityUnit = bodyOrderlineItems0QuantityUnit;
bodyOrderlineItems0.note = 'note3';
bodyOrderlineItems0.catalogObjectId = 'catalog_object_id5';
bodyOrderlineItems0.basePriceMoney = bodyOrderlineItems0BasePriceMoney;

bodyOrderLineItems[0] = bodyOrderlineItems0;

const bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name8',
  abbreviation: 'abbreviation0',
};

const bodyOrderlineItems1QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems1QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems1QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_ACRE';
bodyOrderlineItems1QuantityUnitMeasurementUnit.lengthUnit = 'IMPERIAL_INCH';
bodyOrderlineItems1QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_PINT';
bodyOrderlineItems1QuantityUnitMeasurementUnit.weightUnit = 'METRIC_GRAM';

const bodyOrderlineItems1QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems1QuantityUnit.measurementUnit = bodyOrderlineItems1QuantityUnitMeasurementUnit;
bodyOrderlineItems1QuantityUnit.precision = 188;

const bodyOrderlineItems1Modifiers: OrderLineItemModifier[] = [];

const bodyOrderlineItems1modifiers0BasePriceMoney: Money = {};
bodyOrderlineItems1modifiers0BasePriceMoney.amount = 53;
bodyOrderlineItems1modifiers0BasePriceMoney.currency = 'TTD';

const bodyOrderlineItems1modifiers0TotalPriceMoney: Money = {};
bodyOrderlineItems1modifiers0TotalPriceMoney.amount = 51;
bodyOrderlineItems1modifiers0TotalPriceMoney.currency = 'EUR';

const bodyOrderlineItems1modifiers0: OrderLineItemModifier = {};
bodyOrderlineItems1modifiers0.uid = 'uid1';
bodyOrderlineItems1modifiers0.catalogObjectId = 'CHQX7Y4KY6N5KINJKZCFURPZ';
bodyOrderlineItems1modifiers0.name = 'name1';
bodyOrderlineItems1modifiers0.basePriceMoney = bodyOrderlineItems1modifiers0BasePriceMoney;
bodyOrderlineItems1modifiers0.totalPriceMoney = bodyOrderlineItems1modifiers0TotalPriceMoney;

bodyOrderlineItems1Modifiers[0] = bodyOrderlineItems1modifiers0;

const bodyOrderlineItems1AppliedDiscounts: OrderLineItemAppliedDiscount[] = [];

const bodyOrderlineItems1appliedDiscounts0AppliedMoney: Money = {};
bodyOrderlineItems1appliedDiscounts0AppliedMoney.amount = 164;
bodyOrderlineItems1appliedDiscounts0AppliedMoney.currency = 'CUC';

const bodyOrderlineItems1appliedDiscounts0: OrderLineItemAppliedDiscount = {
  discountUid: 'one-dollar-off',
};
bodyOrderlineItems1appliedDiscounts0.uid = 'uid4';
bodyOrderlineItems1appliedDiscounts0.appliedMoney = bodyOrderlineItems1appliedDiscounts0AppliedMoney;

bodyOrderlineItems1AppliedDiscounts[0] = bodyOrderlineItems1appliedDiscounts0;

const bodyOrderlineItems1: OrderLineItem = {
  quantity: '2',
};
bodyOrderlineItems1.uid = 'uid0';
bodyOrderlineItems1.name = 'name0';
bodyOrderlineItems1.quantityUnit = bodyOrderlineItems1QuantityUnit;
bodyOrderlineItems1.note = 'note4';
bodyOrderlineItems1.catalogObjectId = 'BEMYCSMIJL46OCDV4KYIKXIB';
bodyOrderlineItems1.modifiers = bodyOrderlineItems1Modifiers;
bodyOrderlineItems1.appliedDiscounts = bodyOrderlineItems1AppliedDiscounts;

bodyOrderLineItems[1] = bodyOrderlineItems1;

const bodyOrderTaxes: OrderLineItemTax[] = [];

const bodyOrdertaxes0: OrderLineItemTax = {};
bodyOrdertaxes0.uid = 'state-sales-tax';
bodyOrdertaxes0.catalogObjectId = 'catalog_object_id1';
bodyOrdertaxes0.name = 'State Sales Tax';
bodyOrdertaxes0.type = 'UNKNOWN_TAX';
bodyOrdertaxes0.percentage = '9';
bodyOrdertaxes0.scope = 'ORDER';

bodyOrderTaxes[0] = bodyOrdertaxes0;

const bodyOrderDiscounts: OrderLineItemDiscount[] = [];

const bodyOrderdiscounts0: OrderLineItemDiscount = {};
bodyOrderdiscounts0.uid = 'labor-day-sale';
bodyOrderdiscounts0.catalogObjectId = 'catalog_object_id5';
bodyOrderdiscounts0.name = 'Labor Day Sale';
bodyOrderdiscounts0.type = 'FIXED_PERCENTAGE';
bodyOrderdiscounts0.percentage = '5';
bodyOrderdiscounts0.scope = 'ORDER';

bodyOrderDiscounts[0] = bodyOrderdiscounts0;

const bodyOrderdiscounts1: OrderLineItemDiscount = {};
bodyOrderdiscounts1.uid = 'membership-discount';
bodyOrderdiscounts1.catalogObjectId = 'DB7L55ZH2BGWI4H23ULIWOQ7';
bodyOrderdiscounts1.name = 'name2';
bodyOrderdiscounts1.type = 'FIXED_AMOUNT';
bodyOrderdiscounts1.percentage = 'percentage0';
bodyOrderdiscounts1.scope = 'ORDER';

bodyOrderDiscounts[1] = bodyOrderdiscounts1;

const bodyOrderdiscounts2AmountMoney: Money = {};
bodyOrderdiscounts2AmountMoney.amount = 100;
bodyOrderdiscounts2AmountMoney.currency = 'USD';

const bodyOrderdiscounts2: OrderLineItemDiscount = {};
bodyOrderdiscounts2.uid = 'one-dollar-off';
bodyOrderdiscounts2.catalogObjectId = 'catalog_object_id7';
bodyOrderdiscounts2.name = 'Sale - $1.00 off';
bodyOrderdiscounts2.type = 'VARIABLE_PERCENTAGE';
bodyOrderdiscounts2.percentage = 'percentage1';
bodyOrderdiscounts2.amountMoney = bodyOrderdiscounts2AmountMoney;
bodyOrderdiscounts2.scope = 'LINE_ITEM';

bodyOrderDiscounts[2] = bodyOrderdiscounts2;

const bodyOrder: Order = {
  locationId: '057P5VYJ4A5X1',
};
bodyOrder.id = 'id0';
bodyOrder.referenceId = 'my-order-001';
bodyOrder.source = bodyOrderSource;
bodyOrder.customerId = 'customer_id8';
bodyOrder.lineItems = bodyOrderLineItems;
bodyOrder.taxes = bodyOrderTaxes;
bodyOrder.discounts = bodyOrderDiscounts;

const body: CreateOrderRequest = {};
body.order = bodyOrder;
body.idempotencyKey = '8193148c-9586-11e6-99f9-28cfe92138cf';

try {
  const { result, ...httpResponse } = await ordersApi.createOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Retrieve Orders

Retrieves a set of [Order](/doc/models/order.md)s by their IDs.

If a given Order ID does not exist, the ID is ignored instead of generating an error.

```ts
async batchRetrieveOrders(
  body: BatchRetrieveOrdersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveOrdersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveOrdersRequest`](/doc/models/batch-retrieve-orders-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveOrdersResponse`](/doc/models/batch-retrieve-orders-response.md)

## Example Usage

```ts
const bodyOrderIds: string[] = ['CAISEM82RcpmcFBM0TfOyiHV3es', 'CAISENgvlJ6jLWAzERDzjyHVybY'];
const body: BatchRetrieveOrdersRequest = {
  orderIds: bodyOrderIds,
};
body.locationId = '057P5VYJ4A5X1';

try {
  const { result, ...httpResponse } = await ordersApi.batchRetrieveOrders(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Calculate Order

Enables applications to preview order pricing without creating an order.

```ts
async calculateOrder(
  body: CalculateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CalculateOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CalculateOrderRequest`](/doc/models/calculate-order-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CalculateOrderResponse`](/doc/models/calculate-order-response.md)

## Example Usage

```ts
const bodyOrderSource: OrderSource = {};
bodyOrderSource.name = 'name6';

const bodyOrderLineItems: OrderLineItem[] = [];

const bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name9',
  abbreviation: 'abbreviation1',
};

const bodyOrderlineItems0QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems0QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems0QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_SQUARE_INCH';
bodyOrderlineItems0QuantityUnitMeasurementUnit.lengthUnit = 'METRIC_KILOMETER';
bodyOrderlineItems0QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_QUART';
bodyOrderlineItems0QuantityUnitMeasurementUnit.weightUnit = 'METRIC_MILLIGRAM';

const bodyOrderlineItems0QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems0QuantityUnit.measurementUnit = bodyOrderlineItems0QuantityUnitMeasurementUnit;
bodyOrderlineItems0QuantityUnit.precision = 189;

const bodyOrderlineItems0BasePriceMoney: Money = {};
bodyOrderlineItems0BasePriceMoney.amount = 500;
bodyOrderlineItems0BasePriceMoney.currency = 'USD';

const bodyOrderlineItems0: OrderLineItem = {
  quantity: '1',
};
bodyOrderlineItems0.uid = 'uid1';
bodyOrderlineItems0.name = 'Item 1';
bodyOrderlineItems0.quantityUnit = bodyOrderlineItems0QuantityUnit;
bodyOrderlineItems0.note = 'note3';
bodyOrderlineItems0.catalogObjectId = 'catalog_object_id5';
bodyOrderlineItems0.basePriceMoney = bodyOrderlineItems0BasePriceMoney;

bodyOrderLineItems[0] = bodyOrderlineItems0;

const bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name8',
  abbreviation: 'abbreviation0',
};

const bodyOrderlineItems1QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems1QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems1QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_ACRE';
bodyOrderlineItems1QuantityUnitMeasurementUnit.lengthUnit = 'IMPERIAL_INCH';
bodyOrderlineItems1QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_PINT';
bodyOrderlineItems1QuantityUnitMeasurementUnit.weightUnit = 'METRIC_GRAM';

const bodyOrderlineItems1QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems1QuantityUnit.measurementUnit = bodyOrderlineItems1QuantityUnitMeasurementUnit;
bodyOrderlineItems1QuantityUnit.precision = 188;

const bodyOrderlineItems1BasePriceMoney: Money = {};
bodyOrderlineItems1BasePriceMoney.amount = 300;
bodyOrderlineItems1BasePriceMoney.currency = 'USD';

const bodyOrderlineItems1: OrderLineItem = {
  quantity: '2',
};
bodyOrderlineItems1.uid = 'uid0';
bodyOrderlineItems1.name = 'Item 2';
bodyOrderlineItems1.quantityUnit = bodyOrderlineItems1QuantityUnit;
bodyOrderlineItems1.note = 'note4';
bodyOrderlineItems1.catalogObjectId = 'catalog_object_id6';
bodyOrderlineItems1.basePriceMoney = bodyOrderlineItems1BasePriceMoney;

bodyOrderLineItems[1] = bodyOrderlineItems1;

const bodyOrderDiscounts: OrderLineItemDiscount[] = [];

const bodyOrderdiscounts0: OrderLineItemDiscount = {};
bodyOrderdiscounts0.uid = 'uid1';
bodyOrderdiscounts0.catalogObjectId = 'catalog_object_id5';
bodyOrderdiscounts0.name = '50% Off';
bodyOrderdiscounts0.type = 'FIXED_PERCENTAGE';
bodyOrderdiscounts0.percentage = '50';
bodyOrderdiscounts0.scope = 'ORDER';

bodyOrderDiscounts[0] = bodyOrderdiscounts0;

const bodyOrder: Order = {
  locationId: 'D7AVYMEAPJ3A3',
};
bodyOrder.id = 'id0';
bodyOrder.referenceId = 'reference_id8';
bodyOrder.source = bodyOrderSource;
bodyOrder.customerId = 'customer_id8';
bodyOrder.lineItems = bodyOrderLineItems;
bodyOrder.discounts = bodyOrderDiscounts;

const bodyProposedRewards: OrderReward[] = [];

const bodyproposedRewards0: OrderReward = {
  id: 'id6',
  rewardTierId: 'reward_tier_id2',
};

bodyProposedRewards[0] = bodyproposedRewards0;

const bodyproposedRewards1: OrderReward = {
  id: 'id7',
  rewardTierId: 'reward_tier_id3',
};

bodyProposedRewards[1] = bodyproposedRewards1;

const bodyproposedRewards2: OrderReward = {
  id: 'id8',
  rewardTierId: 'reward_tier_id4',
};

bodyProposedRewards[2] = bodyproposedRewards2;

const body: CalculateOrderRequest = {
  order: bodyOrder,
};
body.proposedRewards = bodyProposedRewards;

try {
  const { result, ...httpResponse } = await ordersApi.calculateOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Orders

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).

SearchOrders requests need to specify which locations to search and define a
[`SearchOrdersQuery`](/doc/models/search-orders-query.md) object which controls
how to sort or filter the results. Your SearchOrdersQuery can:

Set filter criteria.
Set sort order.
Determine whether to return results as complete Order objects, or as
[OrderEntry](/doc/models/order-entry.md) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode may not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

```ts
async searchOrders(
  body: SearchOrdersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchOrdersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchOrdersRequest`](/doc/models/search-orders-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchOrdersResponse`](/doc/models/search-orders-response.md)

## Example Usage

```ts
const bodyLocationIds: string[] = ['057P5VYJ4A5X1', '18YC4JDH91E1H'];
const bodyQueryFilterStateFilterStates: string[] = ['COMPLETED'];
const bodyQueryFilterStateFilter: SearchOrdersStateFilter = {
  states: bodyQueryFilterStateFilterStates,
};

const bodyQueryFilterDateTimeFilterCreatedAt: TimeRange = {};
bodyQueryFilterDateTimeFilterCreatedAt.startAt = 'start_at8';
bodyQueryFilterDateTimeFilterCreatedAt.endAt = 'end_at4';

const bodyQueryFilterDateTimeFilterUpdatedAt: TimeRange = {};
bodyQueryFilterDateTimeFilterUpdatedAt.startAt = 'start_at6';
bodyQueryFilterDateTimeFilterUpdatedAt.endAt = 'end_at6';

const bodyQueryFilterDateTimeFilterClosedAt: TimeRange = {};
bodyQueryFilterDateTimeFilterClosedAt.startAt = '2018-03-03T20:00:00+00:00';
bodyQueryFilterDateTimeFilterClosedAt.endAt = '2019-03-04T21:54:45+00:00';

const bodyQueryFilterDateTimeFilter: SearchOrdersDateTimeFilter = {};
bodyQueryFilterDateTimeFilter.createdAt = bodyQueryFilterDateTimeFilterCreatedAt;
bodyQueryFilterDateTimeFilter.updatedAt = bodyQueryFilterDateTimeFilterUpdatedAt;
bodyQueryFilterDateTimeFilter.closedAt = bodyQueryFilterDateTimeFilterClosedAt;

const bodyQueryFilterFulfillmentFilterFulfillmentTypes: string[] = ['SHIPMENT'];
const bodyQueryFilterFulfillmentFilterFulfillmentStates: string[] = ['CANCELED', 'FAILED'];
const bodyQueryFilterFulfillmentFilter: SearchOrdersFulfillmentFilter = {};
bodyQueryFilterFulfillmentFilter.fulfillmentTypes = bodyQueryFilterFulfillmentFilterFulfillmentTypes;
bodyQueryFilterFulfillmentFilter.fulfillmentStates = bodyQueryFilterFulfillmentFilterFulfillmentStates;

const bodyQueryFilterSourceFilterSourceNames: string[] = ['source_names8'];
const bodyQueryFilterSourceFilter: SearchOrdersSourceFilter = {};
bodyQueryFilterSourceFilter.sourceNames = bodyQueryFilterSourceFilterSourceNames;

const bodyQueryFilterCustomerFilterCustomerIds: string[] = ['customer_ids5', 'customer_ids6'];
const bodyQueryFilterCustomerFilter: SearchOrdersCustomerFilter = {};
bodyQueryFilterCustomerFilter.customerIds = bodyQueryFilterCustomerFilterCustomerIds;

const bodyQueryFilter: SearchOrdersFilter = {};
bodyQueryFilter.stateFilter = bodyQueryFilterStateFilter;
bodyQueryFilter.dateTimeFilter = bodyQueryFilterDateTimeFilter;
bodyQueryFilter.fulfillmentFilter = bodyQueryFilterFulfillmentFilter;
bodyQueryFilter.sourceFilter = bodyQueryFilterSourceFilter;
bodyQueryFilter.customerFilter = bodyQueryFilterCustomerFilter;

const bodyQuerySort: SearchOrdersSort = {
  sortField: 'CLOSED_AT',
};
bodyQuerySort.sortOrder = 'DESC';

const bodyQuery: SearchOrdersQuery = {};
bodyQuery.filter = bodyQueryFilter;
bodyQuery.sort = bodyQuerySort;

const body: SearchOrdersRequest = {};
body.locationIds = bodyLocationIds;
body.cursor = 'cursor0';
body.query = bodyQuery;
body.limit = 3;
body.returnEntries = true;

try {
  const { result, ...httpResponse } = await ordersApi.searchOrders(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Order

Retrieves an [Order](/doc/models/order.md) by ID.

```ts
async retrieveOrder(
  orderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | The ID of the order to retrieve. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveOrderResponse`](/doc/models/retrieve-order-response.md)

## Example Usage

```ts
const orderId = 'order_id6';
try {
  const { result, ...httpResponse } = await ordersApi.retrieveOrder(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Order

Updates an open [Order](/doc/models/order.md) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An UpdateOrder request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects)
  containing only the fields to update and the version the update is
  being applied to.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
  identifying fields to clear.

To pay for an order, please refer to the
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders) guide.

```ts
async updateOrder(
  orderId: string,
  body: UpdateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | The ID of the order to update. |
| `body` | [`UpdateOrderRequest`](/doc/models/update-order-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpdateOrderResponse`](/doc/models/update-order-response.md)

## Example Usage

```ts
const orderId = 'order_id6';
const bodyOrderSource: OrderSource = {};
bodyOrderSource.name = 'name6';

const bodyOrderLineItems: OrderLineItem[] = [];

const bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name9',
  abbreviation: 'abbreviation1',
};

const bodyOrderlineItems0QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems0QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems0QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems0QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_SQUARE_INCH';
bodyOrderlineItems0QuantityUnitMeasurementUnit.lengthUnit = 'METRIC_KILOMETER';
bodyOrderlineItems0QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_QUART';
bodyOrderlineItems0QuantityUnitMeasurementUnit.weightUnit = 'METRIC_MILLIGRAM';

const bodyOrderlineItems0QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems0QuantityUnit.measurementUnit = bodyOrderlineItems0QuantityUnitMeasurementUnit;
bodyOrderlineItems0QuantityUnit.precision = 189;

const bodyOrderlineItems0: OrderLineItem = {
  quantity: 'quantity7',
};
bodyOrderlineItems0.uid = 'uid1';
bodyOrderlineItems0.name = 'name1';
bodyOrderlineItems0.quantityUnit = bodyOrderlineItems0QuantityUnit;
bodyOrderlineItems0.note = 'note3';
bodyOrderlineItems0.catalogObjectId = 'catalog_object_id5';

bodyOrderLineItems[0] = bodyOrderlineItems0;

const bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit: MeasurementUnitCustom = {
  name: 'name8',
  abbreviation: 'abbreviation0',
};

const bodyOrderlineItems1QuantityUnitMeasurementUnit: MeasurementUnit = {};
bodyOrderlineItems1QuantityUnitMeasurementUnit.customUnit = bodyOrderlineItems1QuantityUnitMeasurementUnitCustomUnit;
bodyOrderlineItems1QuantityUnitMeasurementUnit.areaUnit = 'IMPERIAL_ACRE';
bodyOrderlineItems1QuantityUnitMeasurementUnit.lengthUnit = 'IMPERIAL_INCH';
bodyOrderlineItems1QuantityUnitMeasurementUnit.volumeUnit = 'GENERIC_PINT';
bodyOrderlineItems1QuantityUnitMeasurementUnit.weightUnit = 'METRIC_GRAM';

const bodyOrderlineItems1QuantityUnit: OrderQuantityUnit = {};
bodyOrderlineItems1QuantityUnit.measurementUnit = bodyOrderlineItems1QuantityUnitMeasurementUnit;
bodyOrderlineItems1QuantityUnit.precision = 188;

const bodyOrderlineItems1: OrderLineItem = {
  quantity: 'quantity6',
};
bodyOrderlineItems1.uid = 'uid0';
bodyOrderlineItems1.name = 'name0';
bodyOrderlineItems1.quantityUnit = bodyOrderlineItems1QuantityUnit;
bodyOrderlineItems1.note = 'note4';
bodyOrderlineItems1.catalogObjectId = 'catalog_object_id6';

bodyOrderLineItems[1] = bodyOrderlineItems1;

const bodyOrder: Order = {
  locationId: 'location_id4',
};
bodyOrder.id = 'id0';
bodyOrder.referenceId = 'reference_id8';
bodyOrder.source = bodyOrderSource;
bodyOrder.customerId = 'customer_id8';
bodyOrder.lineItems = bodyOrderLineItems;

const bodyFieldsToClear: string[] = ['fields_to_clear7', 'fields_to_clear8'];
const body: UpdateOrderRequest = {};
body.order = bodyOrder;
body.fieldsToClear = bodyFieldsToClear;
body.idempotencyKey = 'idempotency_key2';

try {
  const { result, ...httpResponse } = await ordersApi.updateOrder(orderId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Pay Order

Pay for an [order](/doc/models/order.md) using one or more approved [payments](/doc/models/payment.md),
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with PayOrder, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](/doc/api/payments.md#create-payment).
  Any approved payments that reference the same `order_id` not specified in the
  `payment_ids` will be canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-capture).
  Using a delayed capture payment with PayOrder will complete the approved payment.

```ts
async payOrder(
  orderId: string,
  body: PayOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | The ID of the order being paid. |
| `body` | [`PayOrderRequest`](/doc/models/pay-order-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`PayOrderResponse`](/doc/models/pay-order-response.md)

## Example Usage

```ts
const orderId = 'order_id6';
const bodyPaymentIds: string[] = ['EnZdNAlWCmfh6Mt5FMNST1o7taB', '0LRiVlbXVwe8ozu4KbZxd12mvaB'];
const body: PayOrderRequest = {
  idempotencyKey: 'c043a359-7ad9-4136-82a9-c3f1d66dcbff',
};
body.orderVersion = 82;
body.paymentIds = bodyPaymentIds;

try {
  const { result, ...httpResponse } = await ordersApi.payOrder(orderId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

