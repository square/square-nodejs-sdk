# Devices

```ts
const devicesApi = client.devicesApi;
```

## Class Name

`DevicesApi`

## Methods

* [List Devices](../../doc/api/devices.md#list-devices)
* [List Device Codes](../../doc/api/devices.md#list-device-codes)
* [Create Device Code](../../doc/api/devices.md#create-device-code)
* [Get Device Code](../../doc/api/devices.md#get-device-code)
* [Get Device](../../doc/api/devices.md#get-device)


# List Devices

List devices associated with the merchant. Currently, only Terminal API
devices are supported.

```ts
async listDevices(
  cursor?: string,
  sortOrder?: string,
  limit?: number,
  locationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDevicesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | The order in which results are listed.<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return in a single page. |
| `locationId` | `string \| undefined` | Query, Optional | If present, only returns devices at the target location. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListDevicesResponse`](../../doc/models/list-devices-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await devicesApi.listDevices();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Device Codes

Lists all DeviceCodes associated with the merchant.

```ts
async listDeviceCodes(
  cursor?: string,
  locationId?: string,
  productType?: string,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDeviceCodesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `locationId` | `string \| undefined` | Query, Optional | If specified, only returns DeviceCodes of the specified location.<br>Returns DeviceCodes of all locations if empty. |
| `productType` | [`string \| undefined`](../../doc/models/product-type.md) | Query, Optional | If specified, only returns DeviceCodes targeting the specified product type.<br>Returns DeviceCodes of all product types if empty. |
| `status` | [`string \| undefined`](../../doc/models/device-code-status.md) | Query, Optional | If specified, returns DeviceCodes with the specified statuses.<br>Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListDeviceCodesResponse`](../../doc/models/list-device-codes-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await devicesApi.listDeviceCodes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Device Code

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

```ts
async createDeviceCode(
  body: CreateDeviceCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateDeviceCodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateDeviceCodeRequest`](../../doc/models/create-device-code-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateDeviceCodeResponse`](../../doc/models/create-device-code-response.md)

## Example Usage

```ts
const body: CreateDeviceCodeRequest = {
  idempotencyKey: '01bb00a6-0c86-4770-94ed-f5fca973cd56',
  deviceCode: {
    productType: 'TERMINAL_API',
    name: 'Counter 1',
    locationId: 'B5E4484SHHNYH',
  },
};

try {
  const { result, ...httpResponse } = await devicesApi.createDeviceCode(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Device Code

Retrieves DeviceCode with the associated ID.

```ts
async getDeviceCode(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDeviceCodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier for the device code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetDeviceCodeResponse`](../../doc/models/get-device-code-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await devicesApi.getDeviceCode(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Device

Retrieves Device with the associated `device_id`.

```ts
async getDevice(
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDeviceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Template, Required | The unique ID for the desired `Device`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetDeviceResponse`](../../doc/models/get-device-response.md)

## Example Usage

```ts
const deviceId = 'device_id6';

try {
  const { result, ...httpResponse } = await devicesApi.getDevice(deviceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

