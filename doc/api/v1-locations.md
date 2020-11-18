# V1 Locations

```ts
const v1LocationsApi = client.v1LocationsApi;
```

## Class Name

`V1LocationsApi`

## Methods

* [Retrieve Business](/doc/api/v1-locations.md#retrieve-business)
* [List Locations](/doc/api/v1-locations.md#list-locations)


# Retrieve Business

Get the general information for a business.

```ts
async retrieveBusiness(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Merchant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Merchant`](/doc/models/v1-merchant.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await v1LocationsApi.retrieveBusiness();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Locations

Provides details for all business locations associated with a Square
account, including the Square-assigned object ID for the location.

```ts
async listLocations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Merchant[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Merchant[]`](/doc/models/v1-merchant.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await v1LocationsApi.listLocations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

