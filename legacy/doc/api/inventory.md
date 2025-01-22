# Inventory

```ts
const inventoryApi = client.inventoryApi;
```

## Class Name

`InventoryApi`

## Methods

* [Deprecated Retrieve Inventory Adjustment](../../doc/api/inventory.md#deprecated-retrieve-inventory-adjustment)
* [Retrieve Inventory Adjustment](../../doc/api/inventory.md#retrieve-inventory-adjustment)
* [Deprecated Batch Change Inventory](../../doc/api/inventory.md#deprecated-batch-change-inventory)
* [Deprecated Batch Retrieve Inventory Changes](../../doc/api/inventory.md#deprecated-batch-retrieve-inventory-changes)
* [Deprecated Batch Retrieve Inventory Counts](../../doc/api/inventory.md#deprecated-batch-retrieve-inventory-counts)
* [Batch Change Inventory](../../doc/api/inventory.md#batch-change-inventory)
* [Batch Retrieve Inventory Changes](../../doc/api/inventory.md#batch-retrieve-inventory-changes)
* [Batch Retrieve Inventory Counts](../../doc/api/inventory.md#batch-retrieve-inventory-counts)
* [Deprecated Retrieve Inventory Physical Count](../../doc/api/inventory.md#deprecated-retrieve-inventory-physical-count)
* [Retrieve Inventory Physical Count](../../doc/api/inventory.md#retrieve-inventory-physical-count)
* [Retrieve Inventory Transfer](../../doc/api/inventory.md#retrieve-inventory-transfer)
* [Retrieve Inventory Count](../../doc/api/inventory.md#retrieve-inventory-count)
* [Retrieve Inventory Changes](../../doc/api/inventory.md#retrieve-inventory-changes)


# Deprecated Retrieve Inventory Adjustment

**This endpoint is deprecated.**

Deprecated version of [RetrieveInventoryAdjustment](api-endpoint:Inventory-RetrieveInventoryAdjustment) after the endpoint URL
is updated to conform to the standard convention.

```ts
async deprecatedRetrieveInventoryAdjustment(
  adjustmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryAdjustmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustmentId` | `string` | Template, Required | ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryAdjustmentResponse`](../../doc/models/retrieve-inventory-adjustment-response.md)

## Example Usage

```ts
const adjustmentId = 'adjustment_id0';

try {
  const { result, ...httpResponse } = await inventoryApi.deprecatedRetrieveInventoryAdjustment(adjustmentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Inventory Adjustment

Returns the [InventoryAdjustment](../../doc/models/inventory-adjustment.md) object
with the provided `adjustment_id`.

```ts
async retrieveInventoryAdjustment(
  adjustmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryAdjustmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustmentId` | `string` | Template, Required | ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryAdjustmentResponse`](../../doc/models/retrieve-inventory-adjustment-response.md)

## Example Usage

```ts
const adjustmentId = 'adjustment_id0';

try {
  const { result, ...httpResponse } = await inventoryApi.retrieveInventoryAdjustment(adjustmentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deprecated Batch Change Inventory

**This endpoint is deprecated.**

Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after the endpoint URL
is updated to conform to the standard convention.

```ts
async deprecatedBatchChangeInventory(
  body: BatchChangeInventoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchChangeInventoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchChangeInventoryRequest`](../../doc/models/batch-change-inventory-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchChangeInventoryResponse`](../../doc/models/batch-change-inventory-response.md)

## Example Usage

```ts
const body: BatchChangeInventoryRequest = {
  idempotencyKey: '8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe',
  changes: [
    {
      type: 'PHYSICAL_COUNT',
      physicalCount: {
        referenceId: '1536bfbf-efed-48bf-b17d-a197141b2a92',
        catalogObjectId: 'W62UWFY35CWMYGVWK6TWJDNI',
        state: 'IN_STOCK',
        locationId: 'C6W5YS5QM06F5',
        quantity: '53',
        teamMemberId: 'LRK57NSQ5X7PUD05',
        occurredAt: '2016-11-16T22:25:24.878Z',
      },
    }
  ],
  ignoreUnchangedCounts: true,
};

try {
  const { result, ...httpResponse } = await inventoryApi.deprecatedBatchChangeInventory(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deprecated Batch Retrieve Inventory Changes

**This endpoint is deprecated.**

Deprecated version of [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges) after the endpoint URL
is updated to conform to the standard convention.

```ts
async deprecatedBatchRetrieveInventoryChanges(
  body: BatchRetrieveInventoryChangesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveInventoryChangesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveInventoryChangesRequest`](../../doc/models/batch-retrieve-inventory-changes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveInventoryChangesResponse`](../../doc/models/batch-retrieve-inventory-changes-response.md)

## Example Usage

```ts
const body: BatchRetrieveInventoryChangesRequest = {
  catalogObjectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI'
  ],
  locationIds: [
    'C6W5YS5QM06F5'
  ],
  types: [
    'PHYSICAL_COUNT'
  ],
  states: [
    'IN_STOCK'
  ],
  updatedAfter: '2016-11-01T00:00:00.000Z',
  updatedBefore: '2016-12-01T00:00:00.000Z',
};

try {
  const { result, ...httpResponse } = await inventoryApi.deprecatedBatchRetrieveInventoryChanges(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deprecated Batch Retrieve Inventory Counts

**This endpoint is deprecated.**

Deprecated version of [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts) after the endpoint URL
is updated to conform to the standard convention.

```ts
async deprecatedBatchRetrieveInventoryCounts(
  body: BatchRetrieveInventoryCountsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveInventoryCountsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveInventoryCountsRequest`](../../doc/models/batch-retrieve-inventory-counts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveInventoryCountsResponse`](../../doc/models/batch-retrieve-inventory-counts-response.md)

## Example Usage

```ts
const body: BatchRetrieveInventoryCountsRequest = {
  catalogObjectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI'
  ],
  locationIds: [
    '59TNP9SA8VGDA'
  ],
  updatedAfter: '2016-11-16T00:00:00.000Z',
};

try {
  const { result, ...httpResponse } = await inventoryApi.deprecatedBatchRetrieveInventoryCounts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Change Inventory

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

```ts
async batchChangeInventory(
  body: BatchChangeInventoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchChangeInventoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchChangeInventoryRequest`](../../doc/models/batch-change-inventory-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchChangeInventoryResponse`](../../doc/models/batch-change-inventory-response.md)

## Example Usage

```ts
const body: BatchChangeInventoryRequest = {
  idempotencyKey: '8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe',
  changes: [
    {
      type: 'PHYSICAL_COUNT',
      physicalCount: {
        referenceId: '1536bfbf-efed-48bf-b17d-a197141b2a92',
        catalogObjectId: 'W62UWFY35CWMYGVWK6TWJDNI',
        state: 'IN_STOCK',
        locationId: 'C6W5YS5QM06F5',
        quantity: '53',
        teamMemberId: 'LRK57NSQ5X7PUD05',
        occurredAt: '2016-11-16T22:25:24.878Z',
      },
    }
  ],
  ignoreUnchangedCounts: true,
};

try {
  const { result, ...httpResponse } = await inventoryApi.batchChangeInventory(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Retrieve Inventory Changes

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

```ts
async batchRetrieveInventoryChanges(
  body: BatchRetrieveInventoryChangesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveInventoryChangesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveInventoryChangesRequest`](../../doc/models/batch-retrieve-inventory-changes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveInventoryChangesResponse`](../../doc/models/batch-retrieve-inventory-changes-response.md)

## Example Usage

```ts
const body: BatchRetrieveInventoryChangesRequest = {
  catalogObjectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI'
  ],
  locationIds: [
    'C6W5YS5QM06F5'
  ],
  types: [
    'PHYSICAL_COUNT'
  ],
  states: [
    'IN_STOCK'
  ],
  updatedAfter: '2016-11-01T00:00:00.000Z',
  updatedBefore: '2016-12-01T00:00:00.000Z',
};

try {
  const { result, ...httpResponse } = await inventoryApi.batchRetrieveInventoryChanges(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Retrieve Inventory Counts

Returns current counts for the provided
[CatalogObject](../../doc/models/catalog-object.md)s at the requested
[Location](../../doc/models/location.md)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

```ts
async batchRetrieveInventoryCounts(
  body: BatchRetrieveInventoryCountsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveInventoryCountsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveInventoryCountsRequest`](../../doc/models/batch-retrieve-inventory-counts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveInventoryCountsResponse`](../../doc/models/batch-retrieve-inventory-counts-response.md)

## Example Usage

```ts
const body: BatchRetrieveInventoryCountsRequest = {
  catalogObjectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI'
  ],
  locationIds: [
    '59TNP9SA8VGDA'
  ],
  updatedAfter: '2016-11-16T00:00:00.000Z',
};

try {
  const { result, ...httpResponse } = await inventoryApi.batchRetrieveInventoryCounts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deprecated Retrieve Inventory Physical Count

**This endpoint is deprecated.**

Deprecated version of [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-RetrieveInventoryPhysicalCount) after the endpoint URL
is updated to conform to the standard convention.

```ts
async deprecatedRetrieveInventoryPhysicalCount(
  physicalCountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryPhysicalCountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `physicalCountId` | `string` | Template, Required | ID of the<br>[InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryPhysicalCountResponse`](../../doc/models/retrieve-inventory-physical-count-response.md)

## Example Usage

```ts
const physicalCountId = 'physical_count_id2';

try {
  const { result, ...httpResponse } = await inventoryApi.deprecatedRetrieveInventoryPhysicalCount(physicalCountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Inventory Physical Count

Returns the [InventoryPhysicalCount](../../doc/models/inventory-physical-count.md)
object with the provided `physical_count_id`.

```ts
async retrieveInventoryPhysicalCount(
  physicalCountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryPhysicalCountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `physicalCountId` | `string` | Template, Required | ID of the<br>[InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryPhysicalCountResponse`](../../doc/models/retrieve-inventory-physical-count-response.md)

## Example Usage

```ts
const physicalCountId = 'physical_count_id2';

try {
  const { result, ...httpResponse } = await inventoryApi.retrieveInventoryPhysicalCount(physicalCountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Inventory Transfer

Returns the [InventoryTransfer](../../doc/models/inventory-transfer.md) object
with the provided `transfer_id`.

```ts
async retrieveInventoryTransfer(
  transferId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryTransferResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferId` | `string` | Template, Required | ID of the [InventoryTransfer](entity:InventoryTransfer) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryTransferResponse`](../../doc/models/retrieve-inventory-transfer-response.md)

## Example Usage

```ts
const transferId = 'transfer_id6';

try {
  const { result, ...httpResponse } = await inventoryApi.retrieveInventoryTransfer(transferId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Inventory Count

Retrieves the current calculated stock count for a given
[CatalogObject](../../doc/models/catalog-object.md) at a given set of
[Location](../../doc/models/location.md)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

```ts
async retrieveInventoryCount(
  catalogObjectId: string,
  locationIds?: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryCountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalogObjectId` | `string` | Template, Required | ID of the [CatalogObject](entity:CatalogObject) to retrieve. |
| `locationIds` | `string \| undefined` | Query, Optional | The [Location](entity:Location) IDs to look up as a comma-separated<br>list. An empty list queries all locations. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryCountResponse`](../../doc/models/retrieve-inventory-count-response.md)

## Example Usage

```ts
const catalogObjectId = 'catalog_object_id6';

try {
  const { result, ...httpResponse } = await inventoryApi.retrieveInventoryCount(catalogObjectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Inventory Changes

**This endpoint is deprecated.**

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](entity:CatalogObject) at the requested
[Location](entity:Location)s.

You can achieve the same result by calling [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges)
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

```ts
async retrieveInventoryChanges(
  catalogObjectId: string,
  locationIds?: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveInventoryChangesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalogObjectId` | `string` | Template, Required | ID of the [CatalogObject](entity:CatalogObject) to retrieve. |
| `locationIds` | `string \| undefined` | Query, Optional | The [Location](entity:Location) IDs to look up as a comma-separated<br>list. An empty list queries all locations. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveInventoryChangesResponse`](../../doc/models/retrieve-inventory-changes-response.md)

## Example Usage

```ts
const catalogObjectId = 'catalog_object_id6';

try {
  const { result, ...httpResponse } = await inventoryApi.retrieveInventoryChanges(catalogObjectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

