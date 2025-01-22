# Vendors

```ts
const vendorsApi = client.vendorsApi;
```

## Class Name

`VendorsApi`

## Methods

* [Bulk Create Vendors](../../doc/api/vendors.md#bulk-create-vendors)
* [Bulk Retrieve Vendors](../../doc/api/vendors.md#bulk-retrieve-vendors)
* [Bulk Update Vendors](../../doc/api/vendors.md#bulk-update-vendors)
* [Create Vendor](../../doc/api/vendors.md#create-vendor)
* [Search Vendors](../../doc/api/vendors.md#search-vendors)
* [Retrieve Vendor](../../doc/api/vendors.md#retrieve-vendor)
* [Update Vendor](../../doc/api/vendors.md#update-vendor)


# Bulk Create Vendors

Creates one or more [Vendor](../../doc/models/vendor.md) objects to represent suppliers to a seller.

```ts
async bulkCreateVendors(
  body: BulkCreateVendorsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkCreateVendorsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkCreateVendorsRequest`](../../doc/models/bulk-create-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkCreateVendorsResponse`](../../doc/models/bulk-create-vendors-response.md)

## Example Usage

```ts
const body: BulkCreateVendorsRequest = {
  vendors: {
    'key0': {
    },
    'key1': {
    }
  },
};

try {
  const { result, ...httpResponse } = await vendorsApi.bulkCreateVendors(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Retrieve Vendors

Retrieves one or more vendors of specified [Vendor](../../doc/models/vendor.md) IDs.

```ts
async bulkRetrieveVendors(
  body: BulkRetrieveVendorsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkRetrieveVendorsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkRetrieveVendorsRequest`](../../doc/models/bulk-retrieve-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkRetrieveVendorsResponse`](../../doc/models/bulk-retrieve-vendors-response.md)

## Example Usage

```ts
const body: BulkRetrieveVendorsRequest = {
  vendorIds: [
    'INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4'
  ],
};

try {
  const { result, ...httpResponse } = await vendorsApi.bulkRetrieveVendors(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Update Vendors

Updates one or more of existing [Vendor](../../doc/models/vendor.md) objects as suppliers to a seller.

```ts
async bulkUpdateVendors(
  body: BulkUpdateVendorsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkUpdateVendorsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkUpdateVendorsRequest`](../../doc/models/bulk-update-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkUpdateVendorsResponse`](../../doc/models/bulk-update-vendors-response.md)

## Example Usage

```ts
const body: BulkUpdateVendorsRequest = {
  vendors: {
    'key0': {
      vendor: {
      },
    },
    'key1': {
      vendor: {
      },
    }
  },
};

try {
  const { result, ...httpResponse } = await vendorsApi.bulkUpdateVendors(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Vendor

Creates a single [Vendor](../../doc/models/vendor.md) object to represent a supplier to a seller.

```ts
async createVendor(
  body: CreateVendorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateVendorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateVendorRequest`](../../doc/models/create-vendor-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateVendorResponse`](../../doc/models/create-vendor-response.md)

## Example Usage

```ts
const body: CreateVendorRequest = {
  idempotencyKey: 'idempotency_key2',
};

try {
  const { result, ...httpResponse } = await vendorsApi.createVendor(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Vendors

Searches for vendors using a filter against supported [Vendor](../../doc/models/vendor.md) properties and a supported sorter.

```ts
async searchVendors(
  body: SearchVendorsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchVendorsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchVendorsRequest`](../../doc/models/search-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchVendorsResponse`](../../doc/models/search-vendors-response.md)

## Example Usage

```ts
const body: SearchVendorsRequest = {
};

try {
  const { result, ...httpResponse } = await vendorsApi.searchVendors(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Vendor

Retrieves the vendor of a specified [Vendor](../../doc/models/vendor.md) ID.

```ts
async retrieveVendor(
  vendorId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveVendorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorId` | `string` | Template, Required | ID of the [Vendor](entity:Vendor) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveVendorResponse`](../../doc/models/retrieve-vendor-response.md)

## Example Usage

```ts
const vendorId = 'vendor_id8';

try {
  const { result, ...httpResponse } = await vendorsApi.retrieveVendor(vendorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Vendor

Updates an existing [Vendor](../../doc/models/vendor.md) object as a supplier to a seller.

```ts
async updateVendor(
  body: UpdateVendorRequest,
  vendorId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateVendorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateVendorRequest`](../../doc/models/update-vendor-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `vendorId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateVendorResponse`](../../doc/models/update-vendor-response.md)

## Example Usage

```ts
const body: UpdateVendorRequest = {
  vendor: {
    id: 'INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4',
    name: 'Jack\'s Chicken Shack',
    version: 1,
    status: 'ACTIVE',
  },
  idempotencyKey: '8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe',
};

const vendorId = 'vendor_id8';

try {
  const { result, ...httpResponse } = await vendorsApi.updateVendor(
  body,
  vendorId
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

