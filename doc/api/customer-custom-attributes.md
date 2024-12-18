# Customer Custom Attributes

```ts
const customerCustomAttributesApi = client.customerCustomAttributesApi;
```

## Class Name

`CustomerCustomAttributesApi`

## Methods

* [List Customer Custom Attribute Definitions](../../doc/api/customer-custom-attributes.md#list-customer-custom-attribute-definitions)
* [Create Customer Custom Attribute Definition](../../doc/api/customer-custom-attributes.md#create-customer-custom-attribute-definition)
* [Delete Customer Custom Attribute Definition](../../doc/api/customer-custom-attributes.md#delete-customer-custom-attribute-definition)
* [Retrieve Customer Custom Attribute Definition](../../doc/api/customer-custom-attributes.md#retrieve-customer-custom-attribute-definition)
* [Update Customer Custom Attribute Definition](../../doc/api/customer-custom-attributes.md#update-customer-custom-attribute-definition)
* [Bulk Upsert Customer Custom Attributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes)
* [List Customer Custom Attributes](../../doc/api/customer-custom-attributes.md#list-customer-custom-attributes)
* [Delete Customer Custom Attribute](../../doc/api/customer-custom-attributes.md#delete-customer-custom-attribute)
* [Retrieve Customer Custom Attribute](../../doc/api/customer-custom-attributes.md#retrieve-customer-custom-attribute)
* [Upsert Customer Custom Attribute](../../doc/api/customer-custom-attributes.md#upsert-customer-custom-attribute)


# List Customer Custom Attribute Definitions

Lists the customer-related [custom attribute definitions](../../doc/models/custom-attribute-definition.md) that belong to a Square seller account.

When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async listCustomerCustomAttributeDefinitions(
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCustomerCustomAttributeDefinitionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `cursor` | `string \| undefined` | Query, Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCustomerCustomAttributeDefinitionsResponse`](../../doc/models/list-customer-custom-attribute-definitions-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.listCustomerCustomAttributeDefinitions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Customer Custom Attribute Definition

Creates a customer-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with customer profiles.

A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertCustomerCustomAttribute](../../doc/api/customer-custom-attributes.md#upsert-customer-custom-attribute) or
[BulkUpsertCustomerCustomAttributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes)
to set the custom attribute for customer profiles in the seller's Customer Directory.

Sellers can view all custom attributes in exported customer data, including those set to
`VISIBILITY_HIDDEN`.

```ts
async createCustomerCustomAttributeDefinition(
  body: CreateCustomerCustomAttributeDefinitionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCustomerCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateCustomerCustomAttributeDefinitionRequest`](../../doc/models/create-customer-custom-attribute-definition-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCustomerCustomAttributeDefinitionResponse`](../../doc/models/create-customer-custom-attribute-definition-response.md)

## Example Usage

```ts
const body: CreateCustomerCustomAttributeDefinitionRequest = {
  customAttributeDefinition: {
    key: 'favoritemovie',
    name: 'Favorite Movie',
    description: 'The favorite movie of the customer.',
    visibility: 'VISIBILITY_HIDDEN',
  },
};

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.createCustomerCustomAttributeDefinition(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Customer Custom Attribute Definition

Deletes a customer-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) from a Square seller account.

Deleting a custom attribute definition also deletes the corresponding custom attribute from
all customer profiles in the seller's Customer Directory.

Only the definition owner can delete a custom attribute definition.

```ts
async deleteCustomerCustomAttributeDefinition(
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteCustomerCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteCustomerCustomAttributeDefinitionResponse`](../../doc/models/delete-customer-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.deleteCustomerCustomAttributeDefinition(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Customer Custom Attribute Definition

Retrieves a customer-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) from a Square seller account.

To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async retrieveCustomerCustomAttributeDefinition(
  key: string,
  version?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCustomerCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| `version` | `number \| undefined` | Query, Optional | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCustomerCustomAttributeDefinitionResponse`](../../doc/models/retrieve-customer-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.retrieveCustomerCustomAttributeDefinition(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Customer Custom Attribute Definition

Updates a customer-related [custom attribute definition](../../doc/models/custom-attribute-definition.md) for a Square seller account.

Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.

Only the definition owner can update a custom attribute definition. Note that sellers can view
all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.

```ts
async updateCustomerCustomAttributeDefinition(
  key: string,
  body: UpdateCustomerCustomAttributeDefinitionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateCustomerCustomAttributeDefinitionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | The key of the custom attribute definition to update. |
| `body` | [`UpdateCustomerCustomAttributeDefinitionRequest`](../../doc/models/update-customer-custom-attribute-definition-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateCustomerCustomAttributeDefinitionResponse`](../../doc/models/update-customer-custom-attribute-definition-response.md)

## Example Usage

```ts
const key = 'key0';

const body: UpdateCustomerCustomAttributeDefinitionRequest = {
  customAttributeDefinition: {
    description: 'Update the description as desired.',
    visibility: 'VISIBILITY_READ_ONLY',
  },
};

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.updateCustomerCustomAttributeDefinition(
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


# Bulk Upsert Customer Custom Attributes

Creates or updates [custom attributes](../../doc/models/custom-attribute.md) for customer profiles as a bulk operation.

Use this endpoint to set the value of one or more custom attributes for one or more customer profiles.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateCustomerCustomAttributeDefinition](../../doc/api/customer-custom-attributes.md#create-customer-custom-attribute-definition) endpoint.

This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a customer ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async bulkUpsertCustomerCustomAttributes(
  body: BulkUpsertCustomerCustomAttributesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkUpsertCustomerCustomAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkUpsertCustomerCustomAttributesRequest`](../../doc/models/bulk-upsert-customer-custom-attributes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkUpsertCustomerCustomAttributesResponse`](../../doc/models/bulk-upsert-customer-custom-attributes-response.md)

## Example Usage

```ts
const body: BulkUpsertCustomerCustomAttributesRequest = {
  values: {
    'key0': {
      customerId: 'customer_id8',
      customAttribute: {
      },
    },
    'key1': {
      customerId: 'customer_id8',
      customAttribute: {
      },
    }
  },
};

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.bulkUpsertCustomerCustomAttributes(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Customer Custom Attributes

Lists the [custom attributes](../../doc/models/custom-attribute.md) associated with a customer profile.

You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.

When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

```ts
async listCustomerCustomAttributes(
  customerId: string,
  limit?: number,
  cursor?: string,
  withDefinitions?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCustomerCustomAttributesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | The ID of the target [customer profile](entity:Customer). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `cursor` | `string \| undefined` | Query, Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `withDefinitions` | `boolean \| undefined` | Query, Optional | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCustomerCustomAttributesResponse`](../../doc/models/list-customer-custom-attributes-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';

const withDefinitions = false;

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.listCustomerCustomAttributes(
  customerId,
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


# Delete Customer Custom Attribute

Deletes a [custom attribute](../../doc/models/custom-attribute.md) associated with a customer profile.

To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async deleteCustomerCustomAttribute(
  customerId: string,
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteCustomerCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | The ID of the target [customer profile](entity:Customer). |
| `key` | `string` | Template, Required | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteCustomerCustomAttributeResponse`](../../doc/models/delete-customer-custom-attribute-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';

const key = 'key0';

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.deleteCustomerCustomAttribute(
  customerId,
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


# Retrieve Customer Custom Attribute

Retrieves a [custom attribute](../../doc/models/custom-attribute.md) associated with a customer profile.

You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.

To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async retrieveCustomerCustomAttribute(
  customerId: string,
  key: string,
  withDefinition?: boolean,
  version?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCustomerCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | The ID of the target [customer profile](entity:Customer). |
| `key` | `string` | Template, Required | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| `withDefinition` | `boolean \| undefined` | Query, Optional | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: `false` |
| `version` | `number \| undefined` | Query, Optional | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCustomerCustomAttributeResponse`](../../doc/models/retrieve-customer-custom-attribute-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';

const key = 'key0';

const withDefinition = false;

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.retrieveCustomerCustomAttribute(
  customerId,
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


# Upsert Customer Custom Attribute

Creates or updates a [custom attribute](../../doc/models/custom-attribute.md) for a customer profile.

Use this endpoint to set the value of a custom attribute for a specified customer profile.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateCustomerCustomAttributeDefinition](../../doc/api/customer-custom-attributes.md#create-customer-custom-attribute-definition) endpoint.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

```ts
async upsertCustomerCustomAttribute(
  customerId: string,
  key: string,
  body: UpsertCustomerCustomAttributeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpsertCustomerCustomAttributeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | The ID of the target [customer profile](entity:Customer). |
| `key` | `string` | Template, Required | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| `body` | [`UpsertCustomerCustomAttributeRequest`](../../doc/models/upsert-customer-custom-attribute-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpsertCustomerCustomAttributeResponse`](../../doc/models/upsert-customer-custom-attribute-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';

const key = 'key0';

const body: UpsertCustomerCustomAttributeRequest = {
  customAttribute: {
  },
};

try {
  const { result, ...httpResponse } = await customerCustomAttributesApi.upsertCustomerCustomAttribute(
  customerId,
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

