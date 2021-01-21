# V1 Items

```ts
const v1ItemsApi = client.v1ItemsApi;
```

## Class Name

`V1ItemsApi`

## Methods

* [List Categories](/doc/api/v1-items.md#list-categories)
* [Create Category](/doc/api/v1-items.md#create-category)
* [Delete Category](/doc/api/v1-items.md#delete-category)
* [Update Category](/doc/api/v1-items.md#update-category)
* [List Discounts](/doc/api/v1-items.md#list-discounts)
* [Create Discount](/doc/api/v1-items.md#create-discount)
* [Delete Discount](/doc/api/v1-items.md#delete-discount)
* [Update Discount](/doc/api/v1-items.md#update-discount)
* [List Fees](/doc/api/v1-items.md#list-fees)
* [Create Fee](/doc/api/v1-items.md#create-fee)
* [Delete Fee](/doc/api/v1-items.md#delete-fee)
* [Update Fee](/doc/api/v1-items.md#update-fee)
* [List Inventory](/doc/api/v1-items.md#list-inventory)
* [Adjust Inventory](/doc/api/v1-items.md#adjust-inventory)
* [List Items](/doc/api/v1-items.md#list-items)
* [Create Item](/doc/api/v1-items.md#create-item)
* [Delete Item](/doc/api/v1-items.md#delete-item)
* [Retrieve Item](/doc/api/v1-items.md#retrieve-item)
* [Update Item](/doc/api/v1-items.md#update-item)
* [Remove Fee](/doc/api/v1-items.md#remove-fee)
* [Apply Fee](/doc/api/v1-items.md#apply-fee)
* [Remove Modifier List](/doc/api/v1-items.md#remove-modifier-list)
* [Apply Modifier List](/doc/api/v1-items.md#apply-modifier-list)
* [Create Variation](/doc/api/v1-items.md#create-variation)
* [Delete Variation](/doc/api/v1-items.md#delete-variation)
* [Update Variation](/doc/api/v1-items.md#update-variation)
* [List Modifier Lists](/doc/api/v1-items.md#list-modifier-lists)
* [Create Modifier List](/doc/api/v1-items.md#create-modifier-list)
* [Delete Modifier List](/doc/api/v1-items.md#delete-modifier-list)
* [Retrieve Modifier List](/doc/api/v1-items.md#retrieve-modifier-list)
* [Update Modifier List](/doc/api/v1-items.md#update-modifier-list)
* [Create Modifier Option](/doc/api/v1-items.md#create-modifier-option)
* [Delete Modifier Option](/doc/api/v1-items.md#delete-modifier-option)
* [Update Modifier Option](/doc/api/v1-items.md#update-modifier-option)
* [List Pages](/doc/api/v1-items.md#list-pages)
* [Create Page](/doc/api/v1-items.md#create-page)
* [Delete Page](/doc/api/v1-items.md#delete-page)
* [Update Page](/doc/api/v1-items.md#update-page)
* [Delete Page Cell](/doc/api/v1-items.md#delete-page-cell)
* [Update Page Cell](/doc/api/v1-items.md#update-page-cell)


# List Categories

**This endpoint is deprecated. **

Lists all the item categories for a given location.

```ts
async listCategories(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Category[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list categories for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Category[]`](/doc/models/v1-category.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listCategories(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Category

**This endpoint is deprecated. **

Creates an item category.

```ts
async createCategory(
  locationId: string,
  body: V1Category,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Category>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create an item for. |
| `body` | [`V1Category`](/doc/models/v1-category.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Category`](/doc/models/v1-category.md)

## Example Usage

```ts
const locationId = 'location_id4';
const body: V1Category = {};
body.id = 'id6';
body.name = 'name6';
body.v2Id = 'v2_id6';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createCategory(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Category

**This endpoint is deprecated. **

Deletes an existing item category.

__DeleteCategory__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteCategoryRequest` object
as documented below.

```ts
async deleteCategory(
  locationId: string,
  categoryId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Category>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `categoryId` | `string` | Template, Required | The ID of the category to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Category`](/doc/models/v1-category.md)

## Example Usage

```ts
const locationId = 'location_id4';
const categoryId = 'category_id8';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteCategory(locationId, categoryId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Category

**This endpoint is deprecated. **

Modifies the details of an existing item category.

```ts
async updateCategory(
  locationId: string,
  categoryId: string,
  body: V1Category,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Category>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the category's associated location. |
| `categoryId` | `string` | Template, Required | The ID of the category to edit. |
| `body` | [`V1Category`](/doc/models/v1-category.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Category`](/doc/models/v1-category.md)

## Example Usage

```ts
const locationId = 'location_id4';
const categoryId = 'category_id8';
const body: V1Category = {};
body.id = 'id6';
body.name = 'name6';
body.v2Id = 'v2_id6';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateCategory(locationId, categoryId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Discounts

**This endpoint is deprecated. **

Lists all the discounts for a given location.

```ts
async listDiscounts(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Discount[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list categories for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Discount[]`](/doc/models/v1-discount.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listDiscounts(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Discount

**This endpoint is deprecated. **

Creates a discount.

```ts
async createDiscount(
  locationId: string,
  body: V1Discount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Discount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create an item for. |
| `body` | [`V1Discount`](/doc/models/v1-discount.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Discount`](/doc/models/v1-discount.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyAmountMoney: V1Money = {};
bodyAmountMoney.amount = 194;
bodyAmountMoney.currencyCode = 'KWD';

const body: V1Discount = {};
body.id = 'id6';
body.name = 'name6';
body.rate = 'rate4';
body.amountMoney = bodyAmountMoney;
body.discountType = 'VARIABLE_AMOUNT';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createDiscount(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Discount

**This endpoint is deprecated. **

Deletes an existing discount.

__DeleteDiscount__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteDiscountRequest` object
as documented below.

```ts
async deleteDiscount(
  locationId: string,
  discountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Discount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `discountId` | `string` | Template, Required | The ID of the discount to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Discount`](/doc/models/v1-discount.md)

## Example Usage

```ts
const locationId = 'location_id4';
const discountId = 'discount_id8';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteDiscount(locationId, discountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Discount

**This endpoint is deprecated. **

Modifies the details of an existing discount.

```ts
async updateDiscount(
  locationId: string,
  discountId: string,
  body: V1Discount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Discount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the category's associated location. |
| `discountId` | `string` | Template, Required | The ID of the discount to edit. |
| `body` | [`V1Discount`](/doc/models/v1-discount.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Discount`](/doc/models/v1-discount.md)

## Example Usage

```ts
const locationId = 'location_id4';
const discountId = 'discount_id8';
const bodyAmountMoney: V1Money = {};
bodyAmountMoney.amount = 194;
bodyAmountMoney.currencyCode = 'KWD';

const body: V1Discount = {};
body.id = 'id6';
body.name = 'name6';
body.rate = 'rate4';
body.amountMoney = bodyAmountMoney;
body.discountType = 'VARIABLE_AMOUNT';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateDiscount(locationId, discountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Fees

**This endpoint is deprecated. **

Lists all the fees (taxes) for a given location.

```ts
async listFees(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Fee[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list fees for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Fee[]`](/doc/models/v1-fee.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listFees(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Fee

**This endpoint is deprecated. **

Creates a fee (tax).

```ts
async createFee(
  locationId: string,
  body: V1Fee,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Fee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create a fee for. |
| `body` | [`V1Fee`](/doc/models/v1-fee.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Fee`](/doc/models/v1-fee.md)

## Example Usage

```ts
const locationId = 'location_id4';
const body: V1Fee = {};
body.id = 'id6';
body.name = 'name6';
body.rate = 'rate4';
body.calculationPhase = 'FEE_SUBTOTAL_PHASE';
body.adjustmentType = 'TAX';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createFee(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Fee

**This endpoint is deprecated. **

Deletes an existing fee (tax).

__DeleteFee__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteFeeRequest` object
as documented below.

```ts
async deleteFee(
  locationId: string,
  feeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Fee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the fee's associated location. |
| `feeId` | `string` | Template, Required | The ID of the fee to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Fee`](/doc/models/v1-fee.md)

## Example Usage

```ts
const locationId = 'location_id4';
const feeId = 'fee_id8';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteFee(locationId, feeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Fee

**This endpoint is deprecated. **

Modifies the details of an existing fee (tax).

```ts
async updateFee(
  locationId: string,
  feeId: string,
  body: V1Fee,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Fee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the fee's associated location. |
| `feeId` | `string` | Template, Required | The ID of the fee to edit. |
| `body` | [`V1Fee`](/doc/models/v1-fee.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Fee`](/doc/models/v1-fee.md)

## Example Usage

```ts
const locationId = 'location_id4';
const feeId = 'fee_id8';
const body: V1Fee = {};
body.id = 'id6';
body.name = 'name6';
body.rate = 'rate4';
body.calculationPhase = 'FEE_SUBTOTAL_PHASE';
body.adjustmentType = 'TAX';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateFee(locationId, feeId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Inventory

**This endpoint is deprecated. **

Provides inventory information for all inventory-enabled item
variations.

```ts
async listInventory(
  locationId: string,
  limit?: number,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1InventoryEntry[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `limit` | `number` | Query, Optional | The maximum number of inventory entries to return in a single response. This value cannot exceed 1000. |
| `batchToken` | `string` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1InventoryEntry[]`](/doc/models/v1-inventory-entry.md)

## Example Usage

```ts
const locationId = 'location_id4';
const limit = 172;
const batchToken = 'batch_token2';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listInventory(locationId, limit, batchToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Adjust Inventory

**This endpoint is deprecated. **

Adjusts the current available inventory of an item variation.

```ts
async adjustInventory(
  locationId: string,
  variationId: string,
  body: V1AdjustInventoryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1InventoryEntry>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `variationId` | `string` | Template, Required | The ID of the variation to adjust inventory information for. |
| `body` | [`V1AdjustInventoryRequest`](/doc/models/v1-adjust-inventory-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1InventoryEntry`](/doc/models/v1-inventory-entry.md)

## Example Usage

```ts
const locationId = 'location_id4';
const variationId = 'variation_id2';
const body: V1AdjustInventoryRequest = {};
body.quantityDelta = 87.82;
body.adjustmentType = 'SALE';
body.memo = 'memo0';

try {
  const { result, ...httpResponse } = await v1ItemsApi.adjustInventory(locationId, variationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Items

**This endpoint is deprecated. **

Provides summary information of all items for a given location.

```ts
async listItems(
  locationId: string,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list items for. |
| `batchToken` | `string` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item[]`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const batchToken = 'batch_token2';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listItems(locationId, batchToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Item

**This endpoint is deprecated. **

Creates an item and at least one variation for it.

Item-related entities include fields you can use to associate them with
entities in a non-Square system.

When you create an item-related entity, you can optionally specify `id`.
This value must be unique among all IDs ever specified for the account,
including those specified by other applications. You can never reuse an
entity ID. If you do not specify an ID, Square generates one for the entity.

Item variations have a `user_data` string that lets you associate arbitrary
metadata with the variation. The string cannot exceed 255 characters.

```ts
async createItem(
  locationId: string,
  body: V1Item,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create an item for. |
| `body` | [`V1Item`](/doc/models/v1-item.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const body: V1Item = {};
body.id = 'id6';
body.name = 'name6';
body.description = 'description4';
body.type = 'GIFT_CARD';
body.color = '593c00';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createItem(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Item

**This endpoint is deprecated. **

Deletes an existing item and all item variations associated with it.

__DeleteItem__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteItemRequest` object
as documented below.

```ts
async deleteItem(
  locationId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to modify. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteItem(locationId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Item

**This endpoint is deprecated. **

Provides the details for a single item, including associated modifier
lists and fees.

```ts
async retrieveItem(
  locationId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The item's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await v1ItemsApi.retrieveItem(locationId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Item

**This endpoint is deprecated. **

Modifies the core details of an existing item.

```ts
async updateItem(
  locationId: string,
  itemId: string,
  body: V1Item,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to modify. |
| `body` | [`V1Item`](/doc/models/v1-item.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const body: V1Item = {};
body.id = 'id6';
body.name = 'name6';
body.description = 'description4';
body.type = 'GIFT_CARD';
body.color = '593c00';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateItem(locationId, itemId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Remove Fee

**This endpoint is deprecated. **

Removes a fee assocation from an item so the fee is no longer
automatically applied to the item in Square Point of Sale.

```ts
async removeFee(
  locationId: string,
  itemId: string,
  feeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the fee's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to add the fee to. |
| `feeId` | `string` | Template, Required | The ID of the fee to apply. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const feeId = 'fee_id8';
try {
  const { result, ...httpResponse } = await v1ItemsApi.removeFee(locationId, itemId, feeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Apply Fee

**This endpoint is deprecated. **

Associates a fee with an item so the fee is automatically applied to
the item in Square Point of Sale.

```ts
async applyFee(
  locationId: string,
  itemId: string,
  feeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the fee's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to add the fee to. |
| `feeId` | `string` | Template, Required | The ID of the fee to apply. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const feeId = 'fee_id8';
try {
  const { result, ...httpResponse } = await v1ItemsApi.applyFee(locationId, itemId, feeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Remove Modifier List

**This endpoint is deprecated. **

Removes a modifier list association from an item so the modifier
options from the list can no longer be applied to the item.

```ts
async removeModifierList(
  locationId: string,
  modifierListId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to remove. |
| `itemId` | `string` | Template, Required | The ID of the item to remove the modifier list from. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await v1ItemsApi.removeModifierList(locationId, modifierListId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Apply Modifier List

**This endpoint is deprecated. **

Associates a modifier list with an item so the associated modifier
options can be applied to the item.

```ts
async applyModifierList(
  locationId: string,
  modifierListId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to apply. |
| `itemId` | `string` | Template, Required | The ID of the item to add the modifier list to. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Item`](/doc/models/v1-item.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await v1ItemsApi.applyModifierList(locationId, modifierListId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Variation

**This endpoint is deprecated. **

Creates an item variation for an existing item.

```ts
async createVariation(
  locationId: string,
  itemId: string,
  body: V1Variation,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Variation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The item's ID. |
| `body` | [`V1Variation`](/doc/models/v1-variation.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Variation`](/doc/models/v1-variation.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const body: V1Variation = {};
body.id = 'id6';
body.name = 'name6';
body.itemId = 'item_id4';
body.ordinal = 88;
body.pricingType = 'FIXED_PRICING';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createVariation(locationId, itemId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Variation

**This endpoint is deprecated. **

Deletes an existing item variation from an item.

__DeleteVariation__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteVariationRequest` object
as documented below.

```ts
async deleteVariation(
  locationId: string,
  itemId: string,
  variationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Variation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to delete. |
| `variationId` | `string` | Template, Required | The ID of the variation to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Variation`](/doc/models/v1-variation.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const variationId = 'variation_id2';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteVariation(locationId, itemId, variationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Variation

**This endpoint is deprecated. **

Modifies the details of an existing item variation.

```ts
async updateVariation(
  locationId: string,
  itemId: string,
  variationId: string,
  body: V1Variation,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Variation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `itemId` | `string` | Template, Required | The ID of the item to modify. |
| `variationId` | `string` | Template, Required | The ID of the variation to modify. |
| `body` | [`V1Variation`](/doc/models/v1-variation.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Variation`](/doc/models/v1-variation.md)

## Example Usage

```ts
const locationId = 'location_id4';
const itemId = 'item_id0';
const variationId = 'variation_id2';
const body: V1Variation = {};
body.id = 'id6';
body.name = 'name6';
body.itemId = 'item_id4';
body.ordinal = 88;
body.pricingType = 'FIXED_PRICING';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateVariation(locationId, itemId, variationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Modifier Lists

**This endpoint is deprecated. **

Lists all the modifier lists for a given location.

```ts
async listModifierLists(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierList[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list modifier lists for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierList[]`](/doc/models/v1-modifier-list.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listModifierLists(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Modifier List

**This endpoint is deprecated. **

Creates an item modifier list and at least 1 modifier option for it.

```ts
async createModifierList(
  locationId: string,
  body: V1ModifierList,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create a modifier list for. |
| `body` | [`V1ModifierList`](/doc/models/v1-modifier-list.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierList`](/doc/models/v1-modifier-list.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyModifierOptions: V1ModifierOption[] = [];

const bodymodifierOptions0PriceMoney: V1Money = {};
bodymodifierOptions0PriceMoney.amount = 104;
bodymodifierOptions0PriceMoney.currencyCode = 'UAH';

const bodymodifierOptions0: V1ModifierOption = {};
bodymodifierOptions0.id = 'id0';
bodymodifierOptions0.name = 'name0';
bodymodifierOptions0.priceMoney = bodymodifierOptions0PriceMoney;
bodymodifierOptions0.onByDefault = false;
bodymodifierOptions0.ordinal = 178;

bodyModifierOptions[0] = bodymodifierOptions0;

const bodymodifierOptions1PriceMoney: V1Money = {};
bodymodifierOptions1PriceMoney.amount = 103;
bodymodifierOptions1PriceMoney.currencyCode = 'TZS';

const bodymodifierOptions1: V1ModifierOption = {};
bodymodifierOptions1.id = 'id1';
bodymodifierOptions1.name = 'name1';
bodymodifierOptions1.priceMoney = bodymodifierOptions1PriceMoney;
bodymodifierOptions1.onByDefault = true;
bodymodifierOptions1.ordinal = 179;

bodyModifierOptions[1] = bodymodifierOptions1;

const body: V1ModifierList = {};
body.id = 'id6';
body.name = 'name6';
body.selectionType = 'SINGLE';
body.modifierOptions = bodyModifierOptions;
body.v2Id = 'v2_id6';

try {
  const { result, ...httpResponse } = await v1ItemsApi.createModifierList(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Modifier List

**This endpoint is deprecated. **

Deletes an existing item modifier list and all modifier options
associated with it.

__DeleteModifierList__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeleteModifierListRequest` object
as documented below.

```ts
async deleteModifierList(
  locationId: string,
  modifierListId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierList`](/doc/models/v1-modifier-list.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteModifierList(locationId, modifierListId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Modifier List

**This endpoint is deprecated. **

Provides the details for a single modifier list.

```ts
async retrieveModifierList(
  locationId: string,
  modifierListId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The modifier list's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierList`](/doc/models/v1-modifier-list.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
try {
  const { result, ...httpResponse } = await v1ItemsApi.retrieveModifierList(locationId, modifierListId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Modifier List

**This endpoint is deprecated. **

Modifies the details of an existing item modifier list.

```ts
async updateModifierList(
  locationId: string,
  modifierListId: string,
  body: V1UpdateModifierListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to edit. |
| `body` | [`V1UpdateModifierListRequest`](/doc/models/v1-update-modifier-list-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierList`](/doc/models/v1-modifier-list.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const body: V1UpdateModifierListRequest = {};
body.name = 'name6';
body.selectionType = 'SINGLE';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateModifierList(locationId, modifierListId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Modifier Option

**This endpoint is deprecated. **

Creates an item modifier option and adds it to a modifier list.

```ts
async createModifierOption(
  locationId: string,
  modifierListId: string,
  body: V1ModifierOption,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierOption>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to edit. |
| `body` | [`V1ModifierOption`](/doc/models/v1-modifier-option.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierOption`](/doc/models/v1-modifier-option.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const bodyPriceMoney: V1Money = {};
bodyPriceMoney.amount = 194;
bodyPriceMoney.currencyCode = 'XBA';

const body: V1ModifierOption = {};
body.id = 'id6';
body.name = 'name6';
body.priceMoney = bodyPriceMoney;
body.onByDefault = false;
body.ordinal = 88;

try {
  const { result, ...httpResponse } = await v1ItemsApi.createModifierOption(locationId, modifierListId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Modifier Option

**This endpoint is deprecated. **

Deletes an existing item modifier option from a modifier list.

__DeleteModifierOption__ returns nothing on success but Connect
SDKs map the empty response to an empty `V1DeleteModifierOptionRequest`
object.

```ts
async deleteModifierOption(
  locationId: string,
  modifierListId: string,
  modifierOptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierOption>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to delete. |
| `modifierOptionId` | `string` | Template, Required | The ID of the modifier list to edit. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierOption`](/doc/models/v1-modifier-option.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const modifierOptionId = 'modifier_option_id6';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deleteModifierOption(locationId, modifierListId, modifierOptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Modifier Option

**This endpoint is deprecated. **

Modifies the details of an existing item modifier option.

```ts
async updateModifierOption(
  locationId: string,
  modifierListId: string,
  modifierOptionId: string,
  body: V1ModifierOption,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1ModifierOption>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the item's associated location. |
| `modifierListId` | `string` | Template, Required | The ID of the modifier list to edit. |
| `modifierOptionId` | `string` | Template, Required | The ID of the modifier list to edit. |
| `body` | [`V1ModifierOption`](/doc/models/v1-modifier-option.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1ModifierOption`](/doc/models/v1-modifier-option.md)

## Example Usage

```ts
const locationId = 'location_id4';
const modifierListId = 'modifier_list_id6';
const modifierOptionId = 'modifier_option_id6';
const bodyPriceMoney: V1Money = {};
bodyPriceMoney.amount = 194;
bodyPriceMoney.currencyCode = 'XBA';

const body: V1ModifierOption = {};
body.id = 'id6';
body.name = 'name6';
body.priceMoney = bodyPriceMoney;
body.onByDefault = false;
body.ordinal = 88;

try {
  const { result, ...httpResponse } = await v1ItemsApi.updateModifierOption(locationId, modifierListId, modifierOptionId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Pages

**This endpoint is deprecated. **

Lists all Favorites pages (in Square Point of Sale) for a given
location.

```ts
async listPages(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list Favorites pages for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page[]`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.listPages(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Page

**This endpoint is deprecated. **

Creates a Favorites page in Square Point of Sale.

```ts
async createPage(
  locationId: string,
  body: V1Page,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to create an item for. |
| `body` | [`V1Page`](/doc/models/v1-page.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyCells: V1PageCell[] = [];

const bodycells0: V1PageCell = {};
bodycells0.pageId = 'page_id8';
bodycells0.row = 2;
bodycells0.column = 80;
bodycells0.objectType = 'ITEM';
bodycells0.objectId = 'object_id6';

bodyCells[0] = bodycells0;

const body: V1Page = {};
body.id = 'id6';
body.name = 'name6';
body.pageIndex = 224;
body.cells = bodyCells;

try {
  const { result, ...httpResponse } = await v1ItemsApi.createPage(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Page

**This endpoint is deprecated. **

Deletes an existing Favorites page and all of its cells.

__DeletePage__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeletePageRequest` object.

```ts
async deletePage(
  locationId: string,
  pageId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the Favorites page's associated location. |
| `pageId` | `string` | Template, Required | The ID of the page to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
const pageId = 'page_id0';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deletePage(locationId, pageId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Page

**This endpoint is deprecated. **

Modifies the details of a Favorites page in Square Point of Sale.

```ts
async updatePage(
  locationId: string,
  pageId: string,
  body: V1Page,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the Favorites page's associated location |
| `pageId` | `string` | Template, Required | The ID of the page to modify. |
| `body` | [`V1Page`](/doc/models/v1-page.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
const pageId = 'page_id0';
const bodyCells: V1PageCell[] = [];

const bodycells0: V1PageCell = {};
bodycells0.pageId = 'page_id8';
bodycells0.row = 2;
bodycells0.column = 80;
bodycells0.objectType = 'ITEM';
bodycells0.objectId = 'object_id6';

bodyCells[0] = bodycells0;

const body: V1Page = {};
body.id = 'id6';
body.name = 'name6';
body.pageIndex = 224;
body.cells = bodyCells;

try {
  const { result, ...httpResponse } = await v1ItemsApi.updatePage(locationId, pageId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Page Cell

**This endpoint is deprecated. **

Deletes a cell from a Favorites page in Square Point of Sale.

__DeletePageCell__ returns nothing on success but Connect SDKs
map the empty response to an empty `V1DeletePageCellRequest` object
as documented below.

```ts
async deletePageCell(
  locationId: string,
  pageId: string,
  row?: string,
  column?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the Favorites page's associated location. |
| `pageId` | `string` | Template, Required | The ID of the page to delete. |
| `row` | `string` | Query, Optional | The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row. |
| `column` | `string` | Query, Optional | The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
const pageId = 'page_id0';
const row = 'row0';
const column = 'column4';
try {
  const { result, ...httpResponse } = await v1ItemsApi.deletePageCell(locationId, pageId, row, column);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Page Cell

**This endpoint is deprecated. **

Modifies a cell of a Favorites page in Square Point of Sale.

```ts
async updatePageCell(
  locationId: string,
  pageId: string,
  body: V1PageCell,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Page>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the Favorites page's associated location. |
| `pageId` | `string` | Template, Required | The ID of the page the cell belongs to. |
| `body` | [`V1PageCell`](/doc/models/v1-page-cell.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Page`](/doc/models/v1-page.md)

## Example Usage

```ts
const locationId = 'location_id4';
const pageId = 'page_id0';
const body: V1PageCell = {};
body.pageId = 'page_id6';
body.row = 22;
body.column = 60;
body.objectType = 'ITEM';
body.objectId = 'object_id4';

try {
  const { result, ...httpResponse } = await v1ItemsApi.updatePageCell(locationId, pageId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

