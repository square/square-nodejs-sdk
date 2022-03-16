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
const contentType = null;
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
const contentType = null;
const bodyObjectIds: string[] = ['W62UWFY35CWMYGVWK6TWJDNI', 'AA27W3M2GGTF3H6AVPNB77CK'];
const body: BatchRetrieveCatalogObjectsRequest = {
  objectIds: bodyObjectIds,
};
body.includeRelatedObjects = true;
body.catalogVersion = 118;

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
| `body` | [`BatchUpsertCatalogObjectsRequest`](../../doc/models/batch-upsert-catalog-objects-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BatchUpsertCatalogObjectsResponse`](../../doc/models/batch-upsert-catalog-objects-response.md)

## Example Usage

```ts
const contentType = null;
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

const bodybatches0objects2CategoryDataImageIds: string[] = ['image_ids1', 'image_ids2'];
const bodybatches0objects2CategoryData: CatalogCategory = {};
bodybatches0objects2CategoryData.name = 'Beverages';
bodybatches0objects2CategoryData.imageIds = bodybatches0objects2CategoryDataImageIds;

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
| `request` | [`CreateCatalogImageRequest \| undefined`](../../doc/models/create-catalog-image-request.md) | Form, Optional | - |
| `imageFile` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCatalogImageResponse`](../../doc/models/create-catalog-image-response.md)

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
requestImageImageData.photoStudioOrderId = 'photo_studio_order_id2';

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
  image: requestImage,
};
request.objectId = 'ND6EA5AAJEO5WL3JNNIAQA32';
request.isPrimary = false;

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
| `request` | [`UpdateCatalogImageRequest \| undefined`](../../doc/models/update-catalog-image-request.md) | Form, Optional | - |
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

const imageFile = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await catalogApi.updateCatalogImage(imageId, request, imageFile);
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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CatalogInfoResponse`](../../doc/models/catalog-info-response.md)

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
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>The page size is currently set to be 100.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `types` | `string \| undefined` | Query, Optional | An optional case-insensitive, comma-separated list of object types to retrieve.<br><br>The valid values are defined in the [CatalogObjectType](../../doc/models/catalog-object-type.md) enum, for example,<br>`ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,<br>`MODIFIER`, `MODIFIER_LIST`, `IMAGE`, etc.<br><br>If this is unspecified, the operation returns objects of all the top level types at the version<br>of the Square API used to make the request. Object types that are nested onto other object types<br>are not included in the defaults.<br><br>At the current API version the default object types are:<br>ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST, DINING_OPTION, TAX_EXEMPTION,<br>SERVICE_CHARGE, PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT,<br>SUBSCRIPTION_PLAN, ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS. |
| `catalogVersion` | `bigint \| undefined` | Query, Optional | The specific version of the catalog objects to be included in the response.<br>This allows you to retrieve historical<br>versions of objects. The specified version value is matched against<br>the [CatalogObject](../../doc/models/catalog-object.md)s' `version` attribute.  If not included, results will<br>be from the current version of the catalog. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCatalogResponse`](../../doc/models/list-catalog-response.md)

## Example Usage

```ts
const cursor = 'cursor6';
const types = 'types6';
const catalogVersion = 126;
try {
  const { result, ...httpResponse } = await catalogApi.listCatalog(cursor, types, catalogVersion);
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

Creates or updates the target [CatalogObject](../../doc/models/catalog-object.md).

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
const contentType = null;
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

const bodyObjectItemDataVariations: CatalogObject[] = [];

const bodyObjectItemDatavariations0CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodyObjectItemDatavariations0CatalogV1Ids: CatalogV1Id[] = [];

const bodyObjectItemDatavariations0catalogV1Ids0: CatalogV1Id = {};
bodyObjectItemDatavariations0catalogV1Ids0.catalogV1Id = 'catalog_v1_id9';
bodyObjectItemDatavariations0catalogV1Ids0.locationId = 'location_id9';

bodyObjectItemDatavariations0CatalogV1Ids[0] = bodyObjectItemDatavariations0catalogV1Ids0;

const bodyObjectItemDatavariations0ItemVariationData: CatalogItemVariation = {};
bodyObjectItemDatavariations0ItemVariationData.itemId = '#Cocoa';
bodyObjectItemDatavariations0ItemVariationData.name = 'Small';
bodyObjectItemDatavariations0ItemVariationData.sku = 'sku3';
bodyObjectItemDatavariations0ItemVariationData.upc = 'upc1';
bodyObjectItemDatavariations0ItemVariationData.ordinal = 119;
bodyObjectItemDatavariations0ItemVariationData.pricingType = 'VARIABLE_PRICING';

const bodyObjectItemDatavariations0: CatalogObject = {
  type: 'ITEM_VARIATION',
  id: '#Small',
};
bodyObjectItemDatavariations0.updatedAt = 'updated_at9';
bodyObjectItemDatavariations0.version = 69;
bodyObjectItemDatavariations0.isDeleted = true;
bodyObjectItemDatavariations0.customAttributeValues = bodyObjectItemDatavariations0CustomAttributeValues;
bodyObjectItemDatavariations0.catalogV1Ids = bodyObjectItemDatavariations0CatalogV1Ids;
bodyObjectItemDatavariations0.itemVariationData = bodyObjectItemDatavariations0ItemVariationData;

bodyObjectItemDataVariations[0] = bodyObjectItemDatavariations0;

const bodyObjectItemDatavariations1CustomAttributeValues: Record<string, CatalogCustomAttributeValue> = {};
const bodyObjectItemDatavariations1CatalogV1Ids: CatalogV1Id[] = [];

const bodyObjectItemDatavariations1catalogV1Ids0: CatalogV1Id = {};
bodyObjectItemDatavariations1catalogV1Ids0.catalogV1Id = 'catalog_v1_id8';
bodyObjectItemDatavariations1catalogV1Ids0.locationId = 'location_id8';

bodyObjectItemDatavariations1CatalogV1Ids[0] = bodyObjectItemDatavariations1catalogV1Ids0;

const bodyObjectItemDatavariations1catalogV1Ids1: CatalogV1Id = {};
bodyObjectItemDatavariations1catalogV1Ids1.catalogV1Id = 'catalog_v1_id9';
bodyObjectItemDatavariations1catalogV1Ids1.locationId = 'location_id9';

bodyObjectItemDatavariations1CatalogV1Ids[1] = bodyObjectItemDatavariations1catalogV1Ids1;

const bodyObjectItemDatavariations1catalogV1Ids2: CatalogV1Id = {};
bodyObjectItemDatavariations1catalogV1Ids2.catalogV1Id = 'catalog_v1_id0';
bodyObjectItemDatavariations1catalogV1Ids2.locationId = 'location_id0';

bodyObjectItemDatavariations1CatalogV1Ids[2] = bodyObjectItemDatavariations1catalogV1Ids2;

const bodyObjectItemDatavariations1ItemVariationDataPriceMoney: Money = {};
bodyObjectItemDatavariations1ItemVariationDataPriceMoney.amount = 400;
bodyObjectItemDatavariations1ItemVariationDataPriceMoney.currency = 'USD';

const bodyObjectItemDatavariations1ItemVariationData: CatalogItemVariation = {};
bodyObjectItemDatavariations1ItemVariationData.itemId = '#Cocoa';
bodyObjectItemDatavariations1ItemVariationData.name = 'Large';
bodyObjectItemDatavariations1ItemVariationData.sku = 'sku4';
bodyObjectItemDatavariations1ItemVariationData.upc = 'upc2';
bodyObjectItemDatavariations1ItemVariationData.ordinal = 118;
bodyObjectItemDatavariations1ItemVariationData.pricingType = 'FIXED_PRICING';
bodyObjectItemDatavariations1ItemVariationData.priceMoney = bodyObjectItemDatavariations1ItemVariationDataPriceMoney;

const bodyObjectItemDatavariations1: CatalogObject = {
  type: 'ITEM_VARIATION',
  id: '#Large',
};
bodyObjectItemDatavariations1.updatedAt = 'updated_at0';
bodyObjectItemDatavariations1.version = 68;
bodyObjectItemDatavariations1.isDeleted = false;
bodyObjectItemDatavariations1.customAttributeValues = bodyObjectItemDatavariations1CustomAttributeValues;
bodyObjectItemDatavariations1.catalogV1Ids = bodyObjectItemDatavariations1CatalogV1Ids;
bodyObjectItemDatavariations1.itemVariationData = bodyObjectItemDatavariations1ItemVariationData;

bodyObjectItemDataVariations[1] = bodyObjectItemDatavariations1;

const bodyObjectItemData: CatalogItem = {};
bodyObjectItemData.name = 'Cocoa';
bodyObjectItemData.description = 'Hot Chocolate';
bodyObjectItemData.abbreviation = 'Ch';
bodyObjectItemData.labelColor = 'label_color4';
bodyObjectItemData.availableOnline = false;
bodyObjectItemData.variations = bodyObjectItemDataVariations;

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

Deletes a single [CatalogObject](../../doc/models/catalog-object.md) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](../../doc/models/catalog-item.md)
will also delete all of its
[CatalogItemVariation](../../doc/models/catalog-item-variation.md) children.

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
} catch(error) {
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
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCatalogObjectResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objectId` | `string` | Template, Required | The object ID of any type of catalog objects to be retrieved. |
| `includeRelatedObjects` | `boolean \| undefined` | Query, Optional | If `true`, the response will include additional objects that are related to the<br>requested objects. Related objects are defined as any objects referenced by ID by the results in the `objects` field<br>of the response. These objects are put in the `related_objects` field. Setting this to `true` is<br>helpful when the objects are needed for immediate display to a user.<br>This process only goes one level deep. Objects referenced by the related objects will not be included. For example,<br><br>if the `objects` field of the response contains a CatalogItem, its associated<br>CatalogCategory objects, CatalogTax objects, CatalogImage objects and<br>CatalogModifierLists will be returned in the `related_objects` field of the<br>response. If the `objects` field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response.<br><br>Default value: `false`<br>**Default**: `false` |
| `catalogVersion` | `bigint \| undefined` | Query, Optional | Requests objects as of a specific version of the catalog. This allows you to retrieve historical<br>versions of objects. The value to retrieve a specific version of an object can be found<br>in the version field of [CatalogObject](../../doc/models/catalog-object.md)s. If not included, results will<br>be from the current version of the catalog. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCatalogObjectResponse`](../../doc/models/retrieve-catalog-object-response.md)

## Example Usage

```ts
const objectId = 'object_id8';
const includeRelatedObjects = false;
const catalogVersion = 126;
try {
  const { result, ...httpResponse } = await catalogApi.retrieveCatalogObject(objectId, includeRelatedObjects, catalogVersion);
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
const contentType = null;
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

const bodyQuerySetQueryAttributeValues: string[] = ['attribute_values0'];
const bodyQuerySetQuery: CatalogQuerySet = {
  attributeName: 'attribute_name8',
  attributeValues: bodyQuerySetQueryAttributeValues,
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

const bodyQuery: CatalogQuery = {};
bodyQuery.sortedAttributeQuery = bodyQuerySortedAttributeQuery;
bodyQuery.exactQuery = bodyQueryExactQuery;
bodyQuery.setQuery = bodyQuerySetQuery;
bodyQuery.prefixQuery = bodyQueryPrefixQuery;
bodyQuery.rangeQuery = bodyQueryRangeQuery;

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
const contentType = null;
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
const contentType = null;
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
const contentType = null;
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

