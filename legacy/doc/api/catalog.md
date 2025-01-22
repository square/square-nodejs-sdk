# Catalog

```ts
const catalogApi = client.catalogApi;
```

## Class Name

`CatalogApi`

## Methods

* [Batch Delete Catalog Objects](../../doc/api/catalog.md#batch-delete-catalog-objects)
* [Batch Retrieve Catalog Objects](../../doc/api/catalog.md#batch-retrieve-catalog-objects)
* [Batch Upsert Catalog Objects](../../doc/api/catalog.md#batch-upsert-catalog-objects)
* [Create Catalog Image](../../doc/api/catalog.md#create-catalog-image)
* [Update Catalog Image](../../doc/api/catalog.md#update-catalog-image)
* [Catalog Info](../../doc/api/catalog.md#catalog-info)
* [List Catalog](../../doc/api/catalog.md#list-catalog)
* [Upsert Catalog Object](../../doc/api/catalog.md#upsert-catalog-object)
* [Delete Catalog Object](../../doc/api/catalog.md#delete-catalog-object)
* [Retrieve Catalog Object](../../doc/api/catalog.md#retrieve-catalog-object)
* [Search Catalog Objects](../../doc/api/catalog.md#search-catalog-objects)
* [Search Catalog Items](../../doc/api/catalog.md#search-catalog-items)
* [Update Item Modifier Lists](../../doc/api/catalog.md#update-item-modifier-lists)
* [Update Item Taxes](../../doc/api/catalog.md#update-item-taxes)


# Batch Delete Catalog Objects

Deletes a set of [CatalogItem](../../doc/models/catalog-item.md)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](../../doc/models/catalog-item-variation.md)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

```ts
async batchDeleteCatalogObjects(
  body: BatchDeleteCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchDeleteCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchDeleteCatalogObjectsRequest`](../../doc/models/batch-delete-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchDeleteCatalogObjectsResponse`](../../doc/models/batch-delete-catalog-objects-response.md)

## Example Usage

```ts
const body: BatchDeleteCatalogObjectsRequest = {
  objectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI',
    'AA27W3M2GGTF3H6AVPNB77CK'
  ],
};

try {
  const { result, ...httpResponse } = await catalogApi.batchDeleteCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Retrieve Catalog Objects

Returns a set of objects based on the provided ID.
Each [CatalogItem](../../doc/models/catalog-item.md) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](../../doc/models/catalog-item-variation.md) objects, references to
its [CatalogModifierList](../../doc/models/catalog-modifier-list.md) objects, and the ids of
any [CatalogTax](../../doc/models/catalog-tax.md) objects that apply to it.

```ts
async batchRetrieveCatalogObjects(
  body: BatchRetrieveCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveCatalogObjectsRequest`](../../doc/models/batch-retrieve-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveCatalogObjectsResponse`](../../doc/models/batch-retrieve-catalog-objects-response.md)

## Example Usage

```ts
const body: BatchRetrieveCatalogObjectsRequest = {
  objectIds: [
    'W62UWFY35CWMYGVWK6TWJDNI',
    'AA27W3M2GGTF3H6AVPNB77CK'
  ],
  includeRelatedObjects: true,
};

try {
  const { result, ...httpResponse } = await catalogApi.batchRetrieveCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Upsert Catalog Objects

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code.

```ts
async batchUpsertCatalogObjects(
  body: BatchUpsertCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchUpsertCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchUpsertCatalogObjectsRequest`](../../doc/models/batch-upsert-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchUpsertCatalogObjectsResponse`](../../doc/models/batch-upsert-catalog-objects-response.md)

## Example Usage

```ts
const body: BatchUpsertCatalogObjectsRequest = {
  idempotencyKey: '789ff020-f723-43a9-b4b5-43b5dc1fa3dc',
  batches: [
    {
      objects: [
        {
          type: 'ITEM',
          id: '#Tea',
          presentAtAllLocations: true,
          itemData: {
            name: 'Tea',
            taxIds: [
              '#SalesTax'
            ],
            variations: [
              {
                type: 'ITEM_VARIATION',
                id: '#Tea_Mug',
                presentAtAllLocations: true,
                itemVariationData: {
                  itemId: '#Tea',
                  name: 'Mug',
                  pricingType: 'FIXED_PRICING',
                  priceMoney: {
                    amount: BigInt(150),
                    currency: 'USD',
                  },
                },
              }
            ],
            categories: [
              {
                id: '#Beverages',
              }
            ],
            descriptionHtml: '<p><strong>Hot</strong> Leaf Juice</p>',
          },
        },
        {
          type: 'ITEM',
          id: '#Coffee',
          presentAtAllLocations: true,
          itemData: {
            name: 'Coffee',
            taxIds: [
              '#SalesTax'
            ],
            variations: [
              {
                type: 'ITEM_VARIATION',
                id: '#Coffee_Regular',
                presentAtAllLocations: true,
                itemVariationData: {
                  itemId: '#Coffee',
                  name: 'Regular',
                  pricingType: 'FIXED_PRICING',
                  priceMoney: {
                    amount: BigInt(250),
                    currency: 'USD',
                  },
                },
              },
              {
                type: 'ITEM_VARIATION',
                id: '#Coffee_Large',
                presentAtAllLocations: true,
                itemVariationData: {
                  itemId: '#Coffee',
                  name: 'Large',
                  pricingType: 'FIXED_PRICING',
                  priceMoney: {
                    amount: BigInt(350),
                    currency: 'USD',
                  },
                },
              }
            ],
            categories: [
              {
                id: '#Beverages',
              }
            ],
            descriptionHtml: '<p>Hot <em>Bean Juice</em></p>',
          },
        },
        {
          type: 'CATEGORY',
          id: '#Beverages',
          presentAtAllLocations: true,
          categoryData: {
            name: 'Beverages',
          },
        },
        {
          type: 'TAX',
          id: '#SalesTax',
          presentAtAllLocations: true,
          taxData: {
            name: 'Sales Tax',
            calculationPhase: 'TAX_SUBTOTAL_PHASE',
            inclusionType: 'ADDITIVE',
            percentage: '5.0',
            appliesToCustomAmounts: true,
            enabled: true,
          },
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await catalogApi.batchUpsertCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Catalog Image

Uploads an image file to be represented by a [CatalogImage](../../doc/models/catalog-image.md) object that can be linked to an existing
[CatalogObject](../../doc/models/catalog-object.md) instance. The resulting `CatalogImage` is unattached to any `CatalogObject` if the `object_id`
is not specified.

This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

```ts
async createCatalogImage(
  request?: CreateCatalogImageRequest,
  imageFile?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCatalogImageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateCatalogImageRequest \| undefined`](../../doc/models/create-catalog-image-request.md) | Form (JSON-Encoded), Optional | - |
| `imageFile` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCatalogImageResponse`](../../doc/models/create-catalog-image-response.md)

## Example Usage

```ts
const request: CreateCatalogImageRequest = {
  idempotencyKey: '528dea59-7bfb-43c1-bd48-4a6bba7dd61f86',
  image: {
    type: 'IMAGE',
    id: '#TEMP_ID',
    imageData: {
      caption: 'A picture of a cup of coffee',
    },
  },
  objectId: 'ND6EA5AAJEO5WL3JNNIAQA32',
};

try {
  const { result, ...httpResponse } = await catalogApi.createCatalogImage(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Catalog Image

Uploads a new image file to replace the existing one in the specified [CatalogImage](../../doc/models/catalog-image.md) object.

This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

```ts
async updateCatalogImage(
  imageId: string,
  request?: UpdateCatalogImageRequest,
  imageFile?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateCatalogImageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imageId` | `string` | Template, Required | The ID of the `CatalogImage` object to update the encapsulated image file. |
| `request` | [`UpdateCatalogImageRequest \| undefined`](../../doc/models/update-catalog-image-request.md) | Form (JSON-Encoded), Optional | - |
| `imageFile` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateCatalogImageResponse`](../../doc/models/update-catalog-image-response.md)

## Example Usage

```ts
const imageId = 'image_id4';

const request: UpdateCatalogImageRequest = {
  idempotencyKey: '528dea59-7bfb-43c1-bd48-4a6bba7dd61f86',
};

try {
  const { result, ...httpResponse } = await catalogApi.updateCatalogImage(
  imageId,
  request
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


# Catalog Info

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

```ts
async catalogInfo(
  requestOptions?: RequestOptions
): Promise<ApiResponse<CatalogInfoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CatalogInfoResponse`](../../doc/models/catalog-info-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await catalogApi.catalogInfo();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Catalog

Returns a list of all [CatalogObject](../../doc/models/catalog-object.md)s of the specified types in the catalog.

The `types` parameter is specified as a comma-separated list of the [CatalogObjectType](../../doc/models/catalog-object-type.md) values,
for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`".

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](../../doc/api/catalog.md#search-catalog-objects)
and set the `include_deleted_objects` attribute value to `true`.

```ts
async listCatalog(
  cursor?: string,
  types?: string,
  catalogVersion?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCatalogResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>The page size is currently set to be 100.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| `types` | `string \| undefined` | Query, Optional | An optional case-insensitive, comma-separated list of object types to retrieve.<br><br>The valid values are defined in the [CatalogObjectType](entity:CatalogObjectType) enum, for example,<br>`ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,<br>`MODIFIER`, `MODIFIER_LIST`, `IMAGE`, etc.<br><br>If this is unspecified, the operation returns objects of all the top level types at the version<br>of the Square API used to make the request. Object types that are nested onto other object types<br>are not included in the defaults.<br><br>At the current API version the default object types are:<br>ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST,<br>PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT,<br>SUBSCRIPTION_PLAN, ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS. |
| `catalogVersion` | `bigint \| undefined` | Query, Optional | The specific version of the catalog objects to be included in the response.<br>This allows you to retrieve historical versions of objects. The specified version value is matched against<br>the [CatalogObject](../../doc/models/catalog-object.md)s' `version` attribute.  If not included, results will be from the<br>current version of the catalog. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCatalogResponse`](../../doc/models/list-catalog-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await catalogApi.listCatalog();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Upsert Catalog Object

Creates a new or updates the specified [CatalogObject](../../doc/models/catalog-object.md).

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code.

```ts
async upsertCatalogObject(
  body: UpsertCatalogObjectRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpsertCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpsertCatalogObjectRequest`](../../doc/models/upsert-catalog-object-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpsertCatalogObjectResponse`](../../doc/models/upsert-catalog-object-response.md)

## Example Usage

```ts
const body: UpsertCatalogObjectRequest = {
  idempotencyKey: 'af3d1afc-7212-4300-b463-0bfc5314a5ae',
  object: {
    type: 'ITEM',
    id: '#Cocoa',
    itemData: {
      name: 'Cocoa',
      abbreviation: 'Ch',
      variations: [
        {
          type: 'ITEM_VARIATION',
          id: '#Small',
          itemVariationData: {
            itemId: '#Cocoa',
            name: 'Small',
            pricingType: 'VARIABLE_PRICING',
          },
        },
        {
          type: 'ITEM_VARIATION',
          id: '#Large',
          itemVariationData: {
            itemId: '#Cocoa',
            name: 'Large',
            pricingType: 'FIXED_PRICING',
            priceMoney: {
              amount: BigInt(400),
              currency: 'USD',
            },
          },
        }
      ],
      descriptionHtml: '<p><strong>Hot</strong> Chocolate</p>',
    },
  },
};

try {
  const { result, ...httpResponse } = await catalogApi.upsertCatalogObject(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Catalog Object

Deletes a single [CatalogObject](../../doc/models/catalog-object.md) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](../../doc/models/catalog-item.md)
will also delete all of its
[CatalogItemVariation](../../doc/models/catalog-item-variation.md) children.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

```ts
async deleteCatalogObject(
  objectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectId` | `string` | Template, Required | The ID of the catalog object to be deleted. When an object is deleted, other<br>objects in the graph that depend on that object will be deleted as well (for example, deleting a<br>catalog item will delete its catalog item variations). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteCatalogObjectResponse`](../../doc/models/delete-catalog-object-response.md)

## Example Usage

```ts
const objectId = 'object_id8';

try {
  const { result, ...httpResponse } = await catalogApi.deleteCatalogObject(objectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Catalog Object

Returns a single [CatalogItem](../../doc/models/catalog-item.md) as a
[CatalogObject](../../doc/models/catalog-object.md) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](../../doc/models/catalog-item.md)
information including: [CatalogItemVariation](../../doc/models/catalog-item-variation.md)
children, references to its
[CatalogModifierList](../../doc/models/catalog-modifier-list.md) objects, and the ids of
any [CatalogTax](../../doc/models/catalog-tax.md) objects that apply to it.

```ts
async retrieveCatalogObject(
  objectId: string,
  includeRelatedObjects?: boolean,
  catalogVersion?: bigint,
  includeCategoryPathToRoot?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectId` | `string` | Template, Required | The object ID of any type of catalog objects to be retrieved. |
| `includeRelatedObjects` | `boolean \| undefined` | Query, Optional | If `true`, the response will include additional objects that are related to the<br>requested objects. Related objects are defined as any objects referenced by ID by the results in the `objects` field<br>of the response. These objects are put in the `related_objects` field. Setting this to `true` is<br>helpful when the objects are needed for immediate display to a user.<br>This process only goes one level deep. Objects referenced by the related objects will not be included. For example,<br><br>if the `objects` field of the response contains a CatalogItem, its associated<br>CatalogCategory objects, CatalogTax objects, CatalogImage objects and<br>CatalogModifierLists will be returned in the `related_objects` field of the<br>response. If the `objects` field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response.<br><br>Default value: `false`<br>**Default**: `false` |
| `catalogVersion` | `bigint \| undefined` | Query, Optional | Requests objects as of a specific version of the catalog. This allows you to retrieve historical<br>versions of objects. The value to retrieve a specific version of an object can be found<br>in the version field of [CatalogObject](../../doc/models/catalog-object.md)s. If not included, results will<br>be from the current version of the catalog. |
| `includeCategoryPathToRoot` | `boolean \| undefined` | Query, Optional | Specifies whether or not to include the `path_to_root` list for each returned category instance. The `path_to_root` list consists<br>of `CategoryPathToRootNode` objects and specifies the path that starts with the immediate parent category of the returned category<br>and ends with its root category. If the returned category is a top-level category, the `path_to_root` list is empty and is not returned<br>in the response payload.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCatalogObjectResponse`](../../doc/models/retrieve-catalog-object-response.md)

## Example Usage

```ts
const objectId = 'object_id8';

const includeRelatedObjects = false;

const includeCategoryPathToRoot = false;

try {
  const { result, ...httpResponse } = await catalogApi.retrieveCatalogObject(
  objectId,
  includeRelatedObjects,
  undefined,
  includeCategoryPathToRoot
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


# Search Catalog Objects

Searches for [CatalogObject](../../doc/models/catalog-object.md) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query filters.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](../../doc/api/catalog.md#search-catalog-items)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.

```ts
async searchCatalogObjects(
  body: SearchCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchCatalogObjectsRequest`](../../doc/models/search-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchCatalogObjectsResponse`](../../doc/models/search-catalog-objects-response.md)

## Example Usage

```ts
const body: SearchCatalogObjectsRequest = {
  objectTypes: [
    'ITEM'
  ],
  query: {
    prefixQuery: {
      attributeName: 'name',
      attributePrefix: 'tea',
    },
  },
  limit: 100,
};

try {
  const { result, ...httpResponse } = await catalogApi.searchCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Catalog Items

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query filters.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](../../doc/api/catalog.md#search-catalog-objects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.

```ts
async searchCatalogItems(
  body: SearchCatalogItemsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchCatalogItemsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchCatalogItemsRequest`](../../doc/models/search-catalog-items-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchCatalogItemsResponse`](../../doc/models/search-catalog-items-response.md)

## Example Usage

```ts
const body: SearchCatalogItemsRequest = {
  textFilter: 'red',
  categoryIds: [
    'WINE_CATEGORY_ID'
  ],
  stockLevels: [
    'OUT',
    'LOW'
  ],
  enabledLocationIds: [
    'ATL_LOCATION_ID'
  ],
  limit: 100,
  sortOrder: 'ASC',
  productTypes: [
    'REGULAR'
  ],
  customAttributeFilters: [
    {
      customAttributeDefinitionId: 'VEGAN_DEFINITION_ID',
      boolFilter: true,
    },
    {
      customAttributeDefinitionId: 'BRAND_DEFINITION_ID',
      stringFilter: 'Dark Horse',
    },
    {
      key: 'VINTAGE',
      numberFilter: {
        min: '2017',
        max: '2018',
      },
    },
    {
      customAttributeDefinitionId: 'VARIETAL_DEFINITION_ID',
    }
  ],
};

try {
  const { result, ...httpResponse } = await catalogApi.searchCatalogItems(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Item Modifier Lists

Updates the [CatalogModifierList](../../doc/models/catalog-modifier-list.md) objects
that apply to the targeted [CatalogItem](../../doc/models/catalog-item.md) without having
to perform an upsert on the entire item.

```ts
async updateItemModifierLists(
  body: UpdateItemModifierListsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateItemModifierListsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateItemModifierListsRequest`](../../doc/models/update-item-modifier-lists-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateItemModifierListsResponse`](../../doc/models/update-item-modifier-lists-response.md)

## Example Usage

```ts
const body: UpdateItemModifierListsRequest = {
  itemIds: [
    'H42BRLUJ5KTZTTMPVSLFAACQ',
    '2JXOBJIHCWBQ4NZ3RIXQGJA6'
  ],
  modifierListsToEnable: [
    'H42BRLUJ5KTZTTMPVSLFAACQ',
    '2JXOBJIHCWBQ4NZ3RIXQGJA6'
  ],
  modifierListsToDisable: [
    '7WRC16CJZDVLSNDQ35PP6YAD'
  ],
};

try {
  const { result, ...httpResponse } = await catalogApi.updateItemModifierLists(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Item Taxes

Updates the [CatalogTax](../../doc/models/catalog-tax.md) objects that apply to the
targeted [CatalogItem](../../doc/models/catalog-item.md) without having to perform an
upsert on the entire item.

```ts
async updateItemTaxes(
  body: UpdateItemTaxesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateItemTaxesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateItemTaxesRequest`](../../doc/models/update-item-taxes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateItemTaxesResponse`](../../doc/models/update-item-taxes-response.md)

## Example Usage

```ts
const body: UpdateItemTaxesRequest = {
  itemIds: [
    'H42BRLUJ5KTZTTMPVSLFAACQ',
    '2JXOBJIHCWBQ4NZ3RIXQGJA6'
  ],
  taxesToEnable: [
    '4WRCNHCJZDVLSNDQ35PP6YAD'
  ],
  taxesToDisable: [
    'AQCEGCEBBQONINDOHRGZISEX'
  ],
};

try {
  const { result, ...httpResponse } = await catalogApi.updateItemTaxes(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

