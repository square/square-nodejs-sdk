# Merchant Custom Attributes

```ts
const merchantCustomAttributesApi = client.merchantCustomAttributesApi;
```

## Class Name

`MerchantCustomAttributesApi`

## Methods

* [List Merchant Custom Attribute Definitions](../../doc/api/merchant-custom-attributes.md#list-merchant-custom-attribute-definitions)
* [Create Merchant Custom Attribute Definition](../../doc/api/merchant-custom-attributes.md#create-merchant-custom-attribute-definition)
* [Delete Merchant Custom Attribute Definition](../../doc/api/merchant-custom-attributes.md#delete-merchant-custom-attribute-definition)
* [Retrieve Merchant Custom Attribute Definition](../../doc/api/merchant-custom-attributes.md#retrieve-merchant-custom-attribute-definition)
* [Update Merchant Custom Attribute Definition](../../doc/api/merchant-custom-attributes.md#update-merchant-custom-attribute-definition)
* [Bulk Delete Merchant Custom Attributes](../../doc/api/merchant-custom-attributes.md#bulk-delete-merchant-custom-attributes)
* [Bulk Upsert Merchant Custom Attributes](../../doc/api/merchant-custom-attributes.md#bulk-upsert-merchant-custom-attributes)
* [List Merchant Custom Attributes](../../doc/api/merchant-custom-attributes.md#list-merchant-custom-attributes)
* [Delete Merchant Custom Attribute](../../doc/api/merchant-custom-attributes.md#delete-merchant-custom-attribute)
* [Retrieve Merchant Custom Attribute](../../doc/api/merchant-custom-attributes.md#retrieve-merchant-custom-attribute)
* [Upsert Merchant Custom Attribute](../../doc/api/merchant-custom-attributes.md#upsert-merchant-custom-attribute)


# List Merchant Custom Attribute Definitions

Lists the merchant-related [custom attribute definitions](../../doc/models/custom-attribute-definition.md) that belong to a Square seller account.
When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

```ts
async listMerchantCustomAttributeDefinitions(
  visibilityFilter?: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMerchantCustomAttributeDefinitionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `visibilityFilter` | [`string \| undefined`](../../doc/models/visibility-filter.md) | Query, Optional | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `cursor` | `string \| undefined` | Query, Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListMerchantCustomAttributeDefinitionsResponse`](../../doc/models/list-merchant-custom-attribute-definitions-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.listMerchantCustomAttributeDefinitions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Merchant Custom Attribute Definition

Creates a merchant-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with a merchant connecting to your application.
A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertMerchantCustomAttribute](../../doc/api/merchant-custom-attributes.md#upsert-merchant-custom-attribute) or
[BulkUpsertMerchantCustomAttributes](../../doc/api/merchant-custom-attributes.md#bulk-upsert-merchant-custom-attributes)
to set the custom attribute for a merchant.

```ts
async createMerchantCustomAttributeDefinition(
  body: CreateMerchantCustomAttributeDefinitionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateMerchantCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateMerchantCustomAttributeDefinitionRequest`](../../doc/models/create-merchant-custom-attribute-definition-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateMerchantCustomAttributeDefinitionResponse`](../../doc/models/create-merchant-custom-attribute-definition-response.md)

## Example Usage

```ts
const body: CreateMerchantCustomAttributeDefinitionRequest = {
  customAttributeDefinition: {
    key: 'alternative_seller_name',
    name: 'Alternative Merchant Name',
    description: 'This is the other name this merchant goes by.',
    visibility: 'VISIBILITY_READ_ONLY',
  },
};

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.createMerchantCustomAttributeDefinition(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Merchant Custom Attribute Definition

Deletes a merchant-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) from a Square seller account.
Deleting a custom attribute definition also deletes the corresponding custom attribute from
the merchant.
Only the definition owner can delete a custom attribute definition.

```ts
async deleteMerchantCustomAttributeDefinition(
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteMerchantCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteMerchantCustomAttributeDefinitionResponse`](../../doc/models/delete-merchant-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.deleteMerchantCustomAttributeDefinition(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Merchant Custom Attribute Definition

Retrieves a merchant-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) from a Square seller account.
To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

```ts
async retrieveMerchantCustomAttributeDefinition(
  key: string,
  version?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMerchantCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| `version` | `number \| undefined` | Query, Optional | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMerchantCustomAttributeDefinitionResponse`](../../doc/models/retrieve-merchant-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.retrieveMerchantCustomAttributeDefinition(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Merchant Custom Attribute Definition

Updates a merchant-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) for a Square seller account.
Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.
Only the definition owner can update a custom attribute definition.

```ts
async updateMerchantCustomAttributeDefinition(
  key: string,
  body: UpdateMerchantCustomAttributeDefinitionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateMerchantCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to update. |
| `body` | [`UpdateMerchantCustomAttributeDefinitionRequest`](../../doc/models/update-merchant-custom-attribute-definition-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateMerchantCustomAttributeDefinitionResponse`](../../doc/models/update-merchant-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

const body: UpdateMerchantCustomAttributeDefinitionRequest = {
  customAttributeDefinition: {
    description: 'Update the description as desired.',
    visibility: 'VISIBILITY_READ_ONLY',
  },
};

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.updateMerchantCustomAttributeDefinition(
  key,
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


# Bulk Delete Merchant Custom Attributes

Deletes [custom attributes](../../doc/models/custom-attribute.md) for a merchant as a bulk operation.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

```ts
async bulkDeleteMerchantCustomAttributes(
  body: BulkDeleteMerchantCustomAttributesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkDeleteMerchantCustomAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkDeleteMerchantCustomAttributesRequest`](../../doc/models/bulk-delete-merchant-custom-attributes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkDeleteMerchantCustomAttributesResponse`](../../doc/models/bulk-delete-merchant-custom-attributes-response.md)

## Example Usage

```ts
const body: BulkDeleteMerchantCustomAttributesRequest = {
  values: {
    'id1': {
    },
    'id2': {
    }
  },
};

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.bulkDeleteMerchantCustomAttributes(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Upsert Merchant Custom Attributes

Creates or updates [custom attributes](../../doc/models/custom-attribute.md) for a merchant as a bulk operation.
Use this endpoint to set the value of one or more custom attributes for a merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateMerchantCustomAttributeDefinition](../../doc/api/merchant-custom-attributes.md#create-merchant-custom-attribute-definition) endpoint.
This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a merchant ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

```ts
async bulkUpsertMerchantCustomAttributes(
  body: BulkUpsertMerchantCustomAttributesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkUpsertMerchantCustomAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkUpsertMerchantCustomAttributesRequest`](../../doc/models/bulk-upsert-merchant-custom-attributes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkUpsertMerchantCustomAttributesResponse`](../../doc/models/bulk-upsert-merchant-custom-attributes-response.md)

## Example Usage

```ts
const body: BulkUpsertMerchantCustomAttributesRequest = {
  values: {
    'key0': {
      merchantId: 'merchant_id0',
      customAttribute: {
      },
    },
    'key1': {
      merchantId: 'merchant_id0',
      customAttribute: {
      },
    }
  },
};

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.bulkUpsertMerchantCustomAttributes(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Merchant Custom Attributes

Lists the [custom attributes](../../doc/models/custom-attribute.md) associated with a merchant.
You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.
When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

```ts
async listMerchantCustomAttributes(
  merchantId: string,
  visibilityFilter?: string,
  limit?: number,
  cursor?: string,
  withDefinitions?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMerchantCustomAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The ID of the target [merchant](entity:Merchant). |
| `visibilityFilter` | [`string \| undefined`](../../doc/models/visibility-filter.md) | Query, Optional | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `cursor` | `string \| undefined` | Query, Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `withDefinitions` | `boolean \| undefined` | Query, Optional | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListMerchantCustomAttributesResponse`](../../doc/models/list-merchant-custom-attributes-response.md)

## Example Usage

```ts
const merchantId = 'merchant_id0';

const withDefinitions = false;

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.listMerchantCustomAttributes(
  merchantId,
  undefined,
  undefined,
  undefined,
  withDefinitions
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


# Delete Merchant Custom Attribute

Deletes a [custom attribute](../../doc/models/custom-attribute.md) associated with a merchant.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

```ts
async deleteMerchantCustomAttribute(
  merchantId: string,
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteMerchantCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The ID of the target [merchant](entity:Merchant). |
| `key` | `string` | Template, Required | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteMerchantCustomAttributeResponse`](../../doc/models/delete-merchant-custom-attribute-response.md)

## Example Usage

```ts
const merchantId = 'merchant_id0';

const key = 'key0';

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.deleteMerchantCustomAttribute(
  merchantId,
  key
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


# Retrieve Merchant Custom Attribute

Retrieves a [custom attribute](../../doc/models/custom-attribute.md) associated with a merchant.
You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.
To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

```ts
async retrieveMerchantCustomAttribute(
  merchantId: string,
  key: string,
  withDefinition?: boolean,
  version?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMerchantCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The ID of the target [merchant](entity:Merchant). |
| `key` | `string` | Template, Required | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| `withDefinition` | `boolean \| undefined` | Query, Optional | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: `false` |
| `version` | `number \| undefined` | Query, Optional | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMerchantCustomAttributeResponse`](../../doc/models/retrieve-merchant-custom-attribute-response.md)

## Example Usage

```ts
const merchantId = 'merchant_id0';

const key = 'key0';

const withDefinition = false;

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.retrieveMerchantCustomAttribute(
  merchantId,
  key,
  withDefinition
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


# Upsert Merchant Custom Attribute

Creates or updates a [custom attribute](../../doc/models/custom-attribute.md) for a merchant.
Use this endpoint to set the value of a custom attribute for a specified merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateMerchantCustomAttributeDefinition](../../doc/api/merchant-custom-attributes.md#create-merchant-custom-attribute-definition) endpoint.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

```ts
async upsertMerchantCustomAttribute(
  merchantId: string,
  key: string,
  body: UpsertMerchantCustomAttributeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpsertMerchantCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The ID of the target [merchant](entity:Merchant). |
| `key` | `string` | Template, Required | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| `body` | [`UpsertMerchantCustomAttributeRequest`](../../doc/models/upsert-merchant-custom-attribute-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpsertMerchantCustomAttributeResponse`](../../doc/models/upsert-merchant-custom-attribute-response.md)

## Example Usage

```ts
const merchantId = 'merchant_id0';

const key = 'key0';

const body: UpsertMerchantCustomAttributeRequest = {
  customAttribute: {
  },
};

try {
  const { result, ...httpResponse } = await merchantCustomAttributesApi.upsertMerchantCustomAttribute(
  merchantId,
  key,
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

