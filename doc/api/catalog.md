# Catalog

```ts
const catalogApi = client.catalogApi;
```

## Class Name

`CatalogApi`

## Methods

* [Batch Delete Catalog Objects](/doc/api/catalog.md#batch-delete-catalog-objects)
* [Batch Retrieve Catalog Objects](/doc/api/catalog.md#batch-retrieve-catalog-objects)
* [Batch Upsert Catalog Objects](/doc/api/catalog.md#batch-upsert-catalog-objects)
* [Create Catalog Image](/doc/api/catalog.md#create-catalog-image)
* [Catalog Info](/doc/api/catalog.md#catalog-info)
* [List Catalog](/doc/api/catalog.md#list-catalog)
* [Upsert Catalog Object](/doc/api/catalog.md#upsert-catalog-object)
* [Delete Catalog Object](/doc/api/catalog.md#delete-catalog-object)
* [Retrieve Catalog Object](/doc/api/catalog.md#retrieve-catalog-object)
* [Search Catalog Objects](/doc/api/catalog.md#search-catalog-objects)
* [Search Catalog Items](/doc/api/catalog.md#search-catalog-items)
* [Update Item Modifier Lists](/doc/api/catalog.md#update-item-modifier-lists)
* [Update Item Taxes](/doc/api/catalog.md#update-item-taxes)


# Batch Delete Catalog Objects

Deletes a set of [CatalogItem](#type-catalogitem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](#type-catalogitemvariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

```ts
async batchDeleteCatalogObjects(
  body: BatchDeleteCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchDeleteCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchDeleteCatalogObjectsRequest`](/doc/models/batch-delete-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`BatchDeleteCatalogObjectsResponse`](/doc/models/batch-delete-catalog-objects-response.md)

## Example Usage

```ts
const bodyObjectIds: string[] = ['W62UWFY35CWMYGVWK6TWJDNI', 'AA27W3M2GGTF3H6AVPNB77CK'];
const body: BatchDeleteCatalogObjectsRequest = {};
body.objectIds = bodyObjectIds;

try {
  const { result, ...httpResponse } = await catalogApi.batchDeleteCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Batch Retrieve Catalog Objects

Returns a set of objects based on the provided ID.
Each [CatalogItem](#type-catalogitem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](#type-catalogitemvariation) objects, references to
its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
any [CatalogTax](#type-catalogtax) objects that apply to it.

```ts
async batchRetrieveCatalogObjects(
  body: BatchRetrieveCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchRetrieveCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchRetrieveCatalogObjectsRequest`](/doc/models/batch-retrieve-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`BatchRetrieveCatalogObjectsResponse`](/doc/models/batch-retrieve-catalog-objects-response.md)

## Example Usage

```ts
const bodyObjectIds: string[] = ['W62UWFY35CWMYGVWK6TWJDNI', 'AA27W3M2GGTF3H6AVPNB77CK'];
const body: BatchRetrieveCatalogObjectsRequest = {
  objectIds: bodyObjectIds,
};
body.includeRelatedObjects = true;

try {
  const { result, ...httpResponse } = await catalogApi.batchRetrieveCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

```ts
async batchUpsertCatalogObjects(
  body: BatchUpsertCatalogObjectsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BatchUpsertCatalogObjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BatchUpsertCatalogObjectsRequest`](/doc/models/batch-upsert-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`BatchUpsertCatalogObjectsResponse`](/doc/models/batch-upsert-catalog-objects-response.md)

## Example Usage

```ts
const bodyBatches: CatalogObjectBatch[] = [];

const bodybatches0Objects: CatalogObject[] = [];

const bodybatches0objects0CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects0CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects0catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects0catalogV1Ids0.catalogV1Id = 'catalog_v1_id4';
bodybatches0objects0catalogV1Ids0.locationId = 'location_id4';

bodybatches0objects0CatalogV1Ids[0] = bodybatches0objects0catalogV1Ids0;

const bodybatches0objects0ItemDataTaxIds: string[] = ['#SalesTax'];
const bodybatches0objects0ItemDataVariations: CatalogObject[] = [];

const bodybatches0objects0ItemDatavariations0CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects0ItemDatavariations0CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects0ItemDatavariations0catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects0ItemDatavariations0catalogV1Ids0.catalogV1Id = 'catalog_v1_id3';
bodybatches0objects0ItemDatavariations0catalogV1Ids0.locationId = 'location_id3';

bodybatches0objects0ItemDatavariations0CatalogV1Ids[0] = bodybatches0objects0ItemDatavariations0catalogV1Ids0;

const bodybatches0objects0ItemDatavariations0ItemVariationData: CatalogItemVariation = {};
bodybatches0objects0ItemDatavariations0ItemVariationData.itemId = '#Tea';
bodybatches0objects0ItemDatavariations0ItemVariationData.name = 'Mug';
bodybatches0objects0ItemDatavariations0ItemVariationData.sku = 'sku9';
bodybatches0objects0ItemDatavariations0ItemVariationData.upc = 'upc7';
bodybatches0objects0ItemDatavariations0ItemVariationData.ordinal = 149;
bodybatches0objects0ItemDatavariations0ItemVariationData.pricingType = 'FIXED_PRICING';

const bodybatches0objects0ItemDatavariations0: CatalogObject = {
  type: 'ITEM_VARIATION',
  id: '#Tea_Mug',
};
bodybatches0objects0ItemDatavariations0.updatedAt = 'updated_at5';
bodybatches0objects0ItemDatavariations0.version = 99;
bodybatches0objects0ItemDatavariations0.isDeleted = true;
bodybatches0objects0ItemDatavariations0.customAttributeValues = bodybatches0objects0ItemDatavariations0CustomAttributeValues;
bodybatches0objects0ItemDatavariations0.catalogV1Ids = bodybatches0objects0ItemDatavariations0CatalogV1Ids;
bodybatches0objects0ItemDatavariations0.presentAtAllLocations = true;
bodybatches0objects0ItemDatavariations0.itemVariationData = bodybatches0objects0ItemDatavariations0ItemVariationData;

bodybatches0objects0ItemDataVariations[0] = bodybatches0objects0ItemDatavariations0;

const bodybatches0objects0ItemData: CatalogItem = {};
bodybatches0objects0ItemData.name = 'Tea';
bodybatches0objects0ItemData.description = 'Hot Leaf Juice';
bodybatches0objects0ItemData.abbreviation = 'abbreviation0';
bodybatches0objects0ItemData.labelColor = 'label_color0';
bodybatches0objects0ItemData.availableOnline = false;
bodybatches0objects0ItemData.categoryId = '#Beverages';
bodybatches0objects0ItemData.taxIds = bodybatches0objects0ItemDataTaxIds;
bodybatches0objects0ItemData.variations = bodybatches0objects0ItemDataVariations;

const bodybatches0objects0: CatalogObject = {
  type: 'ITEM',
  id: '#Tea',
};
bodybatches0objects0.updatedAt = 'updated_at6';
bodybatches0objects0.version = 252;
bodybatches0objects0.isDeleted = false;
bodybatches0objects0.customAttributeValues = bodybatches0objects0CustomAttributeValues;
bodybatches0objects0.catalogV1Ids = bodybatches0objects0CatalogV1Ids;
bodybatches0objects0.presentAtAllLocations = true;
bodybatches0objects0.itemData = bodybatches0objects0ItemData;

bodybatches0Objects[0] = bodybatches0objects0;

const bodybatches0objects1CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects1CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects1catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects1catalogV1Ids0.catalogV1Id = 'catalog_v1_id5';
bodybatches0objects1catalogV1Ids0.locationId = 'location_id5';

bodybatches0objects1CatalogV1Ids[0] = bodybatches0objects1catalogV1Ids0;

const bodybatches0objects1catalogV1Ids1: CatalogV1Id = {};
bodybatches0objects1catalogV1Ids1.catalogV1Id = 'catalog_v1_id6';
bodybatches0objects1catalogV1Ids1.locationId = 'location_id6';

bodybatches0objects1CatalogV1Ids[1] = bodybatches0objects1catalogV1Ids1;

const bodybatches0objects1ItemDataTaxIds: string[] = ['#SalesTax'];
const bodybatches0objects1ItemDataVariations: CatalogObject[] = [];

const bodybatches0objects1ItemDatavariations0CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects1ItemDatavariations0CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects1ItemDatavariations0catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects1ItemDatavariations0catalogV1Ids0.catalogV1Id = 'catalog_v1_id4';
bodybatches0objects1ItemDatavariations0catalogV1Ids0.locationId = 'location_id4';

bodybatches0objects1ItemDatavariations0CatalogV1Ids[0] = bodybatches0objects1ItemDatavariations0catalogV1Ids0;

const bodybatches0objects1ItemDatavariations0catalogV1Ids1: CatalogV1Id = {};
bodybatches0objects1ItemDatavariations0catalogV1Ids1.catalogV1Id = 'catalog_v1_id5';
bodybatches0objects1ItemDatavariations0catalogV1Ids1.locationId = 'location_id5';

bodybatches0objects1ItemDatavariations0CatalogV1Ids[1] = bodybatches0objects1ItemDatavariations0catalogV1Ids1;

const bodybatches0objects1ItemDatavariations0ItemVariationData: CatalogItemVariation = {};
bodybatches0objects1ItemDatavariations0ItemVariationData.itemId = '#Coffee';
bodybatches0objects1ItemDatavariations0ItemVariationData.name = 'Regular';
bodybatches0objects1ItemDatavariations0ItemVariationData.sku = 'sku8';
bodybatches0objects1ItemDatavariations0ItemVariationData.upc = 'upc6';
bodybatches0objects1ItemDatavariations0ItemVariationData.ordinal = 150;
bodybatches0objects1ItemDatavariations0ItemVariationData.pricingType = 'FIXED_PRICING';

const bodybatches0objects1ItemDatavariations0: CatalogObject = {
  type: 'ITEM_VARIATION',
  id: '#Coffee_Regular',
};
bodybatches0objects1ItemDatavariations0.updatedAt = 'updated_at4';
bodybatches0objects1ItemDatavariations0.version = 100;
bodybatches0objects1ItemDatavariations0.isDeleted = false;
bodybatches0objects1ItemDatavariations0.customAttributeValues = bodybatches0objects1ItemDatavariations0CustomAttributeValues;
bodybatches0objects1ItemDatavariations0.catalogV1Ids = bodybatches0objects1ItemDatavariations0CatalogV1Ids;
bodybatches0objects1ItemDatavariations0.presentAtAllLocations = true;
bodybatches0objects1ItemDatavariations0.itemVariationData = bodybatches0objects1ItemDatavariations0ItemVariationData;

bodybatches0objects1ItemDataVariations[0] = bodybatches0objects1ItemDatavariations0;

const bodybatches0objects1ItemDatavariations1CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects1ItemDatavariations1CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects1ItemDatavariations1catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects1ItemDatavariations1catalogV1Ids0.catalogV1Id = 'catalog_v1_id5';
bodybatches0objects1ItemDatavariations1catalogV1Ids0.locationId = 'location_id5';

bodybatches0objects1ItemDatavariations1CatalogV1Ids[0] = bodybatches0objects1ItemDatavariations1catalogV1Ids0;

const bodybatches0objects1ItemDatavariations1catalogV1Ids1: CatalogV1Id = {};
bodybatches0objects1ItemDatavariations1catalogV1Ids1.catalogV1Id = 'catalog_v1_id6';
bodybatches0objects1ItemDatavariations1catalogV1Ids1.locationId = 'location_id6';

bodybatches0objects1ItemDatavariations1CatalogV1Ids[1] = bodybatches0objects1ItemDatavariations1catalogV1Ids1;

const bodybatches0objects1ItemDatavariations1catalogV1Ids2: CatalogV1Id = {};
bodybatches0objects1ItemDatavariations1catalogV1Ids2.catalogV1Id = 'catalog_v1_id7';
bodybatches0objects1ItemDatavariations1catalogV1Ids2.locationId = 'location_id7';

bodybatches0objects1ItemDatavariations1CatalogV1Ids[2] = bodybatches0objects1ItemDatavariations1catalogV1Ids2;

const bodybatches0objects1ItemDatavariations1ItemVariationData: CatalogItemVariation = {};
bodybatches0objects1ItemDatavariations1ItemVariationData.itemId = '#Coffee';
bodybatches0objects1ItemDatavariations1ItemVariationData.name = 'Large';
bodybatches0objects1ItemDatavariations1ItemVariationData.sku = 'sku7';
bodybatches0objects1ItemDatavariations1ItemVariationData.upc = 'upc5';
bodybatches0objects1ItemDatavariations1ItemVariationData.ordinal = 151;
bodybatches0objects1ItemDatavariations1ItemVariationData.pricingType = 'FIXED_PRICING';

const bodybatches0objects1ItemDatavariations1: CatalogObject = {
  type: 'ITEM_VARIATION',
  id: '#Coffee_Large',
};
bodybatches0objects1ItemDatavariations1.updatedAt = 'updated_at3';
bodybatches0objects1ItemDatavariations1.version = 101;
bodybatches0objects1ItemDatavariations1.isDeleted = true;
bodybatches0objects1ItemDatavariations1.customAttributeValues = bodybatches0objects1ItemDatavariations1CustomAttributeValues;
bodybatches0objects1ItemDatavariations1.catalogV1Ids = bodybatches0objects1ItemDatavariations1CatalogV1Ids;
bodybatches0objects1ItemDatavariations1.presentAtAllLocations = true;
bodybatches0objects1ItemDatavariations1.itemVariationData = bodybatches0objects1ItemDatavariations1ItemVariationData;

bodybatches0objects1ItemDataVariations[1] = bodybatches0objects1ItemDatavariations1;

const bodybatches0objects1ItemData: CatalogItem = {};
bodybatches0objects1ItemData.name = 'Coffee';
bodybatches0objects1ItemData.description = 'Hot Bean Juice';
bodybatches0objects1ItemData.abbreviation = 'abbreviation9';
bodybatches0objects1ItemData.labelColor = 'label_color9';
bodybatches0objects1ItemData.availableOnline = true;
bodybatches0objects1ItemData.categoryId = '#Beverages';
bodybatches0objects1ItemData.taxIds = bodybatches0objects1ItemDataTaxIds;
bodybatches0objects1ItemData.variations = bodybatches0objects1ItemDataVariations;

const bodybatches0objects1: CatalogObject = {
  type: 'ITEM',
  id: '#Coffee',
};
bodybatches0objects1.updatedAt = 'updated_at7';
bodybatches0objects1.version = 253;
bodybatches0objects1.isDeleted = true;
bodybatches0objects1.customAttributeValues = bodybatches0objects1CustomAttributeValues;
bodybatches0objects1.catalogV1Ids = bodybatches0objects1CatalogV1Ids;
bodybatches0objects1.presentAtAllLocations = true;
bodybatches0objects1.itemData = bodybatches0objects1ItemData;

bodybatches0Objects[1] = bodybatches0objects1;

const bodybatches0objects2CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects2CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects2catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects2catalogV1Ids0.catalogV1Id = 'catalog_v1_id6';
bodybatches0objects2catalogV1Ids0.locationId = 'location_id6';

bodybatches0objects2CatalogV1Ids[0] = bodybatches0objects2catalogV1Ids0;

const bodybatches0objects2catalogV1Ids1: CatalogV1Id = {};
bodybatches0objects2catalogV1Ids1.catalogV1Id = 'catalog_v1_id7';
bodybatches0objects2catalogV1Ids1.locationId = 'location_id7';

bodybatches0objects2CatalogV1Ids[1] = bodybatches0objects2catalogV1Ids1;

const bodybatches0objects2catalogV1Ids2: CatalogV1Id = {};
bodybatches0objects2catalogV1Ids2.catalogV1Id = 'catalog_v1_id8';
bodybatches0objects2catalogV1Ids2.locationId = 'location_id8';

bodybatches0objects2CatalogV1Ids[2] = bodybatches0objects2catalogV1Ids2;

const bodybatches0objects2CategoryData: CatalogCategory = {};
bodybatches0objects2CategoryData.name = 'Beverages';

const bodybatches0objects2: CatalogObject = {
  type: 'CATEGORY',
  id: '#Beverages',
};
bodybatches0objects2.updatedAt = 'updated_at8';
bodybatches0objects2.version = 254;
bodybatches0objects2.isDeleted = false;
bodybatches0objects2.customAttributeValues = bodybatches0objects2CustomAttributeValues;
bodybatches0objects2.catalogV1Ids = bodybatches0objects2CatalogV1Ids;
bodybatches0objects2.presentAtAllLocations = true;
bodybatches0objects2.categoryData = bodybatches0objects2CategoryData;

bodybatches0Objects[2] = bodybatches0objects2;

const bodybatches0objects3CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodybatches0objects3CatalogV1Ids: CatalogV1Id[] = [];

const bodybatches0objects3catalogV1Ids0: CatalogV1Id = {};
bodybatches0objects3catalogV1Ids0.catalogV1Id = 'catalog_v1_id7';
bodybatches0objects3catalogV1Ids0.locationId = 'location_id7';

bodybatches0objects3CatalogV1Ids[0] = bodybatches0objects3catalogV1Ids0;

const bodybatches0objects3TaxData: CatalogTax = {};
bodybatches0objects3TaxData.name = 'Sales Tax';
bodybatches0objects3TaxData.calculationPhase = 'TAX_SUBTOTAL_PHASE';
bodybatches0objects3TaxData.inclusionType = 'ADDITIVE';
bodybatches0objects3TaxData.percentage = '5.0';
bodybatches0objects3TaxData.appliesToCustomAmounts = true;
bodybatches0objects3TaxData.enabled = true;

const bodybatches0objects3: CatalogObject = {
  type: 'TAX',
  id: '#SalesTax',
};
bodybatches0objects3.updatedAt = 'updated_at9';
bodybatches0objects3.version = 255;
bodybatches0objects3.isDeleted = true;
bodybatches0objects3.customAttributeValues = bodybatches0objects3CustomAttributeValues;
bodybatches0objects3.catalogV1Ids = bodybatches0objects3CatalogV1Ids;
bodybatches0objects3.presentAtAllLocations = true;
bodybatches0objects3.taxData = bodybatches0objects3TaxData;

bodybatches0Objects[3] = bodybatches0objects3;

const bodybatches0: CatalogObjectBatch = {
  objects: bodybatches0Objects,
};

bodyBatches[0] = bodybatches0;

const body: BatchUpsertCatalogObjectsRequest = {
  idempotencyKey: '789ff020-f723-43a9-b4b5-43b5dc1fa3dc',
  batches: bodyBatches,
};

try {
  const { result, ...httpResponse } = await catalogApi.batchUpsertCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Catalog Image

Uploads an image file to be represented by an [CatalogImage](#type-catalogimage) object linked to an existing
[CatalogObject](#type-catalogobject) instance. A call to this endpoint can upload an image, link an image to
a catalog object, or do both.

This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

Additional information and an example cURL request can be found in the [Create a Catalog Image recipe](https://developer.squareup.com/docs/more-apis/catalog/cookbook/create-catalog-images).

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
| `request` | [`CreateCatalogImageRequest`](/doc/models/create-catalog-image-request.md) | Form, Optional | - |
| `imageFile` | `FileWrapper` | Form, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateCatalogImageResponse`](/doc/models/create-catalog-image-response.md)

## Example Usage

```ts
const requestImageCustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const requestImageCatalogV1Ids: CatalogV1Id[] = [];

const requestImagecatalogV1Ids0: CatalogV1Id = {};
requestImagecatalogV1Ids0.catalogV1Id = 'catalog_v1_id4';
requestImagecatalogV1Ids0.locationId = 'location_id4';

requestImageCatalogV1Ids[0] = requestImagecatalogV1Ids0;

const requestImageImageData: CatalogImage = {};
requestImageImageData.name = 'name0';
requestImageImageData.url = 'url4';
requestImageImageData.caption = 'A picture of a cup of coffee';

const requestImage: CatalogObject = {
  type: 'IMAGE',
  id: '#TEMP_ID',
};
requestImage.updatedAt = 'updated_at4';
requestImage.version = 68;
requestImage.isDeleted = false;
requestImage.customAttributeValues = requestImageCustomAttributeValues;
requestImage.catalogV1Ids = requestImageCatalogV1Ids;
requestImage.imageData = requestImageImageData;

const request: CreateCatalogImageRequest = {
  idempotencyKey: '528dea59-7bfb-43c1-bd48-4a6bba7dd61f86',
};
request.objectId = 'ND6EA5AAJEO5WL3JNNIAQA32';
request.image = requestImage;

const imageFile = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await catalogApi.createCatalogImage(request, imageFile);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CatalogInfoResponse`](/doc/models/catalog-info-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await catalogApi.catalogInfo();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Catalog

Returns a list of [CatalogObject](#type-catalogobject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)
and [CatalogTax](#type-catalogtax) objects) in the catalog. The `types` parameter
is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use SearchCatalogObjects and set `include_deleted_objects`
to `true`.

```ts
async listCatalog(
  cursor?: string,
  types?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCatalogResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Query, Optional | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `types` | `string` | Query, Optional | An optional case-insensitive, comma-separated list of object types to retrieve, for example<br>`ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.<br><br>The legal values are taken from the CatalogObjectType enum:<br>`ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,<br>`MODIFIER`, `MODIFIER_LIST`, or `IMAGE`. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListCatalogResponse`](/doc/models/list-catalog-response.md)

## Example Usage

```ts
const cursor = 'cursor6';
const types = 'types6';
try {
  const { result, ...httpResponse } = await catalogApi.listCatalog(cursor, types);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Upsert Catalog Object

Creates or updates the target [CatalogObject](#type-catalogobject).

```ts
async upsertCatalogObject(
  body: UpsertCatalogObjectRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpsertCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpsertCatalogObjectRequest`](/doc/models/upsert-catalog-object-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpsertCatalogObjectResponse`](/doc/models/upsert-catalog-object-response.md)

## Example Usage

```ts
const bodyObjectCustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodyObjectCatalogV1Ids: CatalogV1Id[] = [];

const bodyObjectcatalogV1Ids0: CatalogV1Id = {};
bodyObjectcatalogV1Ids0.catalogV1Id = 'catalog_v1_id0';
bodyObjectcatalogV1Ids0.locationId = 'location_id0';

bodyObjectCatalogV1Ids[0] = bodyObjectcatalogV1Ids0;

const bodyObjectcatalogV1Ids1: CatalogV1Id = {};
bodyObjectcatalogV1Ids1.catalogV1Id = 'catalog_v1_id1';
bodyObjectcatalogV1Ids1.locationId = 'location_id1';

bodyObjectCatalogV1Ids[1] = bodyObjectcatalogV1Ids1;

const bodyObjectcatalogV1Ids2: CatalogV1Id = {};
bodyObjectcatalogV1Ids2.catalogV1Id = 'catalog_v1_id2';
bodyObjectcatalogV1Ids2.locationId = 'location_id2';

bodyObjectCatalogV1Ids[2] = bodyObjectcatalogV1Ids2;

const bodyObjectItemData: CatalogItem = {};
bodyObjectItemData.name = 'Cocoa';
bodyObjectItemData.description = 'Hot chocolate';
bodyObjectItemData.abbreviation = 'Ch';
bodyObjectItemData.labelColor = 'label_color4';
bodyObjectItemData.availableOnline = false;

const bodyObject: CatalogObject = {
  type: 'ITEM',
  id: '#Cocoa',
};
bodyObject.updatedAt = 'updated_at8';
bodyObject.version = 252;
bodyObject.isDeleted = false;
bodyObject.customAttributeValues = bodyObjectCustomAttributeValues;
bodyObject.catalogV1Ids = bodyObjectCatalogV1Ids;
bodyObject.itemData = bodyObjectItemData;

const body: UpsertCatalogObjectRequest = {
  idempotencyKey: 'af3d1afc-7212-4300-b463-0bfc5314a5ae',
  object: bodyObject,
};

try {
  const { result, ...httpResponse } = await catalogApi.upsertCatalogObject(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Catalog Object

Deletes a single [CatalogObject](#type-catalogobject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](#type-catalogitem)
will also delete all of its
[CatalogItemVariation](#type-catalogitemvariation) children.

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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`DeleteCatalogObjectResponse`](/doc/models/delete-catalog-object-response.md)

## Example Usage

```ts
const objectId = 'object_id8';
try {
  const { result, ...httpResponse } = await catalogApi.deleteCatalogObject(objectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Catalog Object

Returns a single [CatalogItem](#type-catalogitem) as a
[CatalogObject](#type-catalogobject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](#type-catalogitem)
information including: [CatalogItemVariation](#type-catalogitemvariation)
children, references to its
[CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
any [CatalogTax](#type-catalogtax) objects that apply to it.

```ts
async retrieveCatalogObject(
  objectId: string,
  includeRelatedObjects?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectId` | `string` | Template, Required | The object ID of any type of catalog objects to be retrieved. |
| `includeRelatedObjects` | `boolean` | Query, Optional | If `true`, the response will include additional objects that are related to the<br>requested object, as follows:<br><br>If the `object` field of the response contains a CatalogItem,<br>its associated CatalogCategory, CatalogTax objects,<br>CatalogImages and CatalogModifierLists<br>will be returned in the `related_objects` field of the response. If the `object`<br>field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response.<br><br>Default value: `false` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCatalogObjectResponse`](/doc/models/retrieve-catalog-object-response.md)

## Example Usage

```ts
const objectId = 'object_id8';
const includeRelatedObjects = false;
try {
  const { result, ...httpResponse } = await catalogApi.retrieveCatalogObject(objectId, includeRelatedObjects);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Catalog Objects

Searches for [CatalogObject](#type-CatalogObject) of any types against supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query expressions,

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems)
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
| `body` | [`SearchCatalogObjectsRequest`](/doc/models/search-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchCatalogObjectsResponse`](/doc/models/search-catalog-objects-response.md)

## Example Usage

```ts
const bodyObjectTypes: string[] = ['ITEM'];
const bodyQuerySortedAttributeQuery: CatalogQuerySortedAttribute = {
  attributeName: 'attribute_name6',
};
bodyQuerySortedAttributeQuery.initialAttributeValue = 'initial_attribute_value4';
bodyQuerySortedAttributeQuery.sortOrder = 'DESC';

const bodyQueryExactQuery: CatalogQueryExact = {
  attributeName: 'attribute_name2',
  attributeValue: 'attribute_value2',
};

const bodyQueryPrefixQuery: CatalogQueryPrefix = {
  attributeName: 'name',
  attributePrefix: 'tea',
};

const bodyQueryRangeQuery: CatalogQueryRange = {
  attributeName: 'attribute_name6',
};
bodyQueryRangeQuery.attributeMinValue = 14;
bodyQueryRangeQuery.attributeMaxValue = 180;

const bodyQueryTextQueryKeywords: string[] = ['keywords7'];
const bodyQueryTextQuery: CatalogQueryText = {
  keywords: bodyQueryTextQueryKeywords,
};

const bodyQuery: CatalogQuery = {};
bodyQuery.sortedAttributeQuery = bodyQuerySortedAttributeQuery;
bodyQuery.exactQuery = bodyQueryExactQuery;
bodyQuery.prefixQuery = bodyQueryPrefixQuery;
bodyQuery.rangeQuery = bodyQueryRangeQuery;
bodyQuery.textQuery = bodyQueryTextQuery;

const body: SearchCatalogObjectsRequest = {};
body.cursor = 'cursor0';
body.objectTypes = bodyObjectTypes;
body.includeDeletedObjects = false;
body.includeRelatedObjects = false;
body.beginTime = 'begin_time4';
body.query = bodyQuery;
body.limit = 100;

try {
  const { result, ...httpResponse } = await catalogApi.searchCatalogObjects(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Catalog Items

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query expressions,

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects)
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
| `body` | [`SearchCatalogItemsRequest`](/doc/models/search-catalog-items-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchCatalogItemsResponse`](/doc/models/search-catalog-items-response.md)

## Example Usage

```ts
const bodyCategoryIds: string[] = ['WINE_CATEGORY_ID'];
const bodyStockLevels: string[] = ['OUT', 'LOW'];
const bodyEnabledLocationIds: string[] = ['ATL_LOCATION_ID'];
const bodyProductTypes: string[] = ['REGULAR'];
const bodyCustomAttributeFilters: CustomAttributeFilter[] = [];

const bodycustomAttributeFilters0NumberFilter: Range = {};
bodycustomAttributeFilters0NumberFilter.min = 'min0';
bodycustomAttributeFilters0NumberFilter.max = 'max2';

const bodycustomAttributeFilters0SelectionUidsFilter: string[] = ['selection_uids_filter2', 'selection_uids_filter3'];
const bodycustomAttributeFilters0: CustomAttributeFilter = {};
bodycustomAttributeFilters0.customAttributeDefinitionId = 'VEGAN_DEFINITION_ID';
bodycustomAttributeFilters0.key = 'key2';
bodycustomAttributeFilters0.stringFilter = 'string_filter4';
bodycustomAttributeFilters0.numberFilter = bodycustomAttributeFilters0NumberFilter;
bodycustomAttributeFilters0.selectionUidsFilter = bodycustomAttributeFilters0SelectionUidsFilter;
bodycustomAttributeFilters0.boolFilter = true;

bodyCustomAttributeFilters[0] = bodycustomAttributeFilters0;

const bodycustomAttributeFilters1NumberFilter: Range = {};
bodycustomAttributeFilters1NumberFilter.min = 'min1';
bodycustomAttributeFilters1NumberFilter.max = 'max1';

const bodycustomAttributeFilters1SelectionUidsFilter: string[] = ['selection_uids_filter1'];
const bodycustomAttributeFilters1: CustomAttributeFilter = {};
bodycustomAttributeFilters1.customAttributeDefinitionId = 'BRAND_DEFINITION_ID';
bodycustomAttributeFilters1.key = 'key3';
bodycustomAttributeFilters1.stringFilter = 'Dark Horse';
bodycustomAttributeFilters1.numberFilter = bodycustomAttributeFilters1NumberFilter;
bodycustomAttributeFilters1.selectionUidsFilter = bodycustomAttributeFilters1SelectionUidsFilter;

bodyCustomAttributeFilters[1] = bodycustomAttributeFilters1;

const bodycustomAttributeFilters2NumberFilter: Range = {};
bodycustomAttributeFilters2NumberFilter.min = '2017';
bodycustomAttributeFilters2NumberFilter.max = '2018';

const bodycustomAttributeFilters2SelectionUidsFilter: string[] = ['selection_uids_filter0', 'selection_uids_filter1', 'selection_uids_filter2'];
const bodycustomAttributeFilters2: CustomAttributeFilter = {};
bodycustomAttributeFilters2.customAttributeDefinitionId = 'custom_attribute_definition_id8';
bodycustomAttributeFilters2.key = 'VINTAGE';
bodycustomAttributeFilters2.stringFilter = 'string_filter6';
bodycustomAttributeFilters2.numberFilter = bodycustomAttributeFilters2NumberFilter;
bodycustomAttributeFilters2.selectionUidsFilter = bodycustomAttributeFilters2SelectionUidsFilter;

bodyCustomAttributeFilters[2] = bodycustomAttributeFilters2;

const bodycustomAttributeFilters3NumberFilter: Range = {};
bodycustomAttributeFilters3NumberFilter.min = 'min3';
bodycustomAttributeFilters3NumberFilter.max = 'max9';

const bodycustomAttributeFilters3SelectionUidsFilter: string[] = ['selection_uids_filter9', 'selection_uids_filter0'];
const bodycustomAttributeFilters3: CustomAttributeFilter = {};
bodycustomAttributeFilters3.customAttributeDefinitionId = 'VARIETAL_DEFINITION_ID';
bodycustomAttributeFilters3.key = 'key5';
bodycustomAttributeFilters3.stringFilter = 'string_filter7';
bodycustomAttributeFilters3.numberFilter = bodycustomAttributeFilters3NumberFilter;
bodycustomAttributeFilters3.selectionUidsFilter = bodycustomAttributeFilters3SelectionUidsFilter;

bodyCustomAttributeFilters[3] = bodycustomAttributeFilters3;

const body: SearchCatalogItemsRequest = {};
body.textFilter = 'red';
body.categoryIds = bodyCategoryIds;
body.stockLevels = bodyStockLevels;
body.enabledLocationIds = bodyEnabledLocationIds;
body.cursor = 'cursor0';
body.limit = 100;
body.sortOrder = 'ASC';
body.productTypes = bodyProductTypes;
body.customAttributeFilters = bodyCustomAttributeFilters;

try {
  const { result, ...httpResponse } = await catalogApi.searchCatalogItems(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Item Modifier Lists

Updates the [CatalogModifierList](#type-catalogmodifierlist) objects
that apply to the targeted [CatalogItem](#type-catalogitem) without having
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
| `body` | [`UpdateItemModifierListsRequest`](/doc/models/update-item-modifier-lists-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpdateItemModifierListsResponse`](/doc/models/update-item-modifier-lists-response.md)

## Example Usage

```ts
const bodyItemIds: string[] = ['H42BRLUJ5KTZTTMPVSLFAACQ', '2JXOBJIHCWBQ4NZ3RIXQGJA6'];
const bodyModifierListsToEnable: string[] = ['H42BRLUJ5KTZTTMPVSLFAACQ', '2JXOBJIHCWBQ4NZ3RIXQGJA6'];
const bodyModifierListsToDisable: string[] = ['7WRC16CJZDVLSNDQ35PP6YAD'];
const body: UpdateItemModifierListsRequest = {
  itemIds: bodyItemIds,
};
body.modifierListsToEnable = bodyModifierListsToEnable;
body.modifierListsToDisable = bodyModifierListsToDisable;

try {
  const { result, ...httpResponse } = await catalogApi.updateItemModifierLists(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Item Taxes

Updates the [CatalogTax](#type-catalogtax) objects that apply to the
targeted [CatalogItem](#type-catalogitem) without having to perform an
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
| `body` | [`UpdateItemTaxesRequest`](/doc/models/update-item-taxes-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpdateItemTaxesResponse`](/doc/models/update-item-taxes-response.md)

## Example Usage

```ts
const bodyItemIds: string[] = ['H42BRLUJ5KTZTTMPVSLFAACQ', '2JXOBJIHCWBQ4NZ3RIXQGJA6'];
const bodyTaxesToEnable: string[] = ['4WRCNHCJZDVLSNDQ35PP6YAD'];
const bodyTaxesToDisable: string[] = ['AQCEGCEBBQONINDOHRGZISEX'];
const body: UpdateItemTaxesRequest = {
  itemIds: bodyItemIds,
};
body.taxesToEnable = bodyTaxesToEnable;
body.taxesToDisable = bodyTaxesToDisable;

try {
  const { result, ...httpResponse } = await catalogApi.updateItemTaxes(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

