
import { CatalogApi, CatalogItemVariation, CatalogObject, CatalogItem, UpsertCatalogObjectRequest, ApiResponse, RetrieveCatalogObjectResponse, SearchCatalogItemsResponse, SearchCatalogObjectsRequest, SearchCatalogObjectsResponse, DeleteCatalogObjectResponse, UpdateItemTaxesRequest, BatchUpsertCatalogObjectsRequest, BatchUpsertCatalogObjectsResponse, CatalogObjectBatch, BatchRetrieveCatalogObjectsRequest, BatchRetrieveCatalogObjectsResponse, CatalogIdMapping, BatchDeleteCatalogObjectsRequest, BatchDeleteCatalogObjectsResponse, UpdateItemModifierListsRequest, UpdateItemTaxesResponse, UpdateItemModifierListsResponse, SearchCatalogItemsRequest, CreateCatalogImageRequest, CreateCatalogImageResponse, FileWrapper, CatalogImage } from '../../src'
import { testClient } from '../testClient'
import { v4 as uuidv4 } from 'uuid'
import { createReadStream }  from 'fs'


describe('Catalog API', () => {
  let catalogApi : CatalogApi;

  let catalogObjectId       : string
  let catalogModifierListId : string
  let catalogModifierId     : string
  let catalogTaxId          : string

  beforeAll(() => {
    catalogApi = testClient.catalogApi
  })

  it('should test UpsertCatalogObject', async () => {
    let colombianCoffeeData: CatalogItemVariation = {
      name: 'Colombian Fair Trade',
      trackInventory: true,
      pricingType: 'FIXED_PRICING',
      priceMoney: {
        amount: BigInt(100),
        currency: 'USD'
      }
    }

    let colombianCoffee: CatalogObject = {
      id: '#colombian-coffee',
      type: 'ITEM_VARIATION',
      presentAtAllLocations: true,
      itemVariationData: colombianCoffeeData

    }

    let coffeeData: CatalogItem = {
      name: 'Coffee',
      description: 'Strong coffee',
      abbreviation: 'C',
      availableOnline: true,
      availableForPickup: true,
      availableElectronically: false,
      variations: [colombianCoffee]
    }

    let coffee: CatalogObject = {
      id: '#single-item',
      type: 'ITEM',
      presentAtAllLocations: true,
      itemData: coffeeData,
    }

    let body: UpsertCatalogObjectRequest = {
      object: coffee,
      idempotencyKey: uuidv4(),
    }

    // Expected contents of response
    let { result, statusCode } = await catalogApi.upsertCatalogObject(body)
    expect(statusCode).toBe(200)
    // expect(result.catalogObject).toEqual(expect.objectContaining({
    //   ...expectedObject,
    //   itemData: expect.objectContaining({
    //     ...coffeeData,
    //     variations: expect.arrayContaining([
    //       expect.objectContaining({
    //         ...expectedVariation,
    //         itemVariationData: expect.objectContaining(colombianCoffeeData)
    //       })
    //     ])
    //   })
    // }))

   catalogObjectId = result.catalogObject?.id!;
  });

  it('should testCatalogInfo', async () => {
    let { statusCode }: ApiResponse<RetrieveCatalogObjectResponse> = await catalogApi.catalogInfo()
    expect(statusCode).toBe(200)
    // expect(result).toHaveProperty("limits")
  })

  it('should testListCatalog', async () => {
    let { statusCode }: ApiResponse<RetrieveCatalogObjectResponse> = await catalogApi.listCatalog()
    expect(statusCode).toBe(200)
  })

  it('should testRetrieveCatalogObject', async () => {
    let {statusCode} : ApiResponse<RetrieveCatalogObjectResponse> = await catalogApi.retrieveCatalogObject(catalogObjectId)
    expect(statusCode).toBe(200)
  })

  it('should testSearchCatalogObjects', async () => {
    let body: SearchCatalogObjectsRequest = {
      limit: 1
    }

    let { statusCode }: ApiResponse<SearchCatalogObjectsResponse> = await catalogApi.searchCatalogObjects(body)
    expect(statusCode).toBe(200)
  })

  it('should testSearchCatalogItems', async () => {
    let body: SearchCatalogItemsRequest = {
      limit: 1
    }

    let { statusCode }: ApiResponse<SearchCatalogItemsResponse> = await catalogApi.searchCatalogItems(body)
    expect(statusCode).toBe(200)
  })

  it('should testBatchUpsertCatalogObjects', async () => {

    let modifier : CatalogObject = {
      id: "#temp-modifier-id",
      type : "MODIFIER",
      modifierData: {
        name: "Limited Time Only Price",
        priceMoney: {
          amount: BigInt(200),
          currency: "USD"
        }
      }
    }

    let modifierList: CatalogObject = {
      id: "#temp-modifier-list-id",
      type: "MODIFIER_LIST",
      modifierListData: {
        name: 'Special weekend deals',
        modifiers: [ modifier ]
      }
    }

    let tax : CatalogObject  = {
      id: "#temp-tax-id",
      type: "TAX",
      taxData: {
        name: "Online only Tax",
        calculationPhase: 'TAX_SUBTOTAL_PHASE',
        inclusionType: 'ADDITIVE',
        percentage: '5.0',
        appliesToCustomAmounts: true,
        enabled: true,
      }
    }

    let batch: CatalogObjectBatch = {
      objects:[tax, modifierList]
    }
    let body: BatchUpsertCatalogObjectsRequest = {
      idempotencyKey: uuidv4(),
      batches: [batch]
    }

    try {

      let { id: taxTempId, ...expectedTax } = tax
      let { id: modTempId,  ...expectedModifier } = modifier
      let { id: listTempId, ...expectedModifierList } = modifierList

      let { result, statusCode }: ApiResponse<BatchUpsertCatalogObjectsResponse> = await catalogApi.batchUpsertCatalogObjects(body)
      expect(statusCode).toBe(200)
      expect(result).toEqual(
        expect.objectContaining({
          idMappings: expect.arrayContaining([taxTempId, modTempId, listTempId].map(id => expect.objectContaining({ clientObjectId: id}))),
          objects: expect.arrayContaining([
            expect.objectContaining(expectedTax),
            expect.objectContaining({
              ...expectedModifierList,
              modifierListData: expect.objectContaining({
                ...expectedModifierList.modifierListData,
                modifiers: expect.arrayContaining([
                  expect.objectContaining({
                    ...expectedModifier,
                    modifierData: expect.objectContaining(expectedModifier.modifierData)
                  })
                ])
              })
            }),
          ])
        })
      )

      // Capture Ids of created Catalog Objects
      ;(result.idMappings!).forEach(({ clientObjectId, objectId }: CatalogIdMapping) => {
        if (clientObjectId! === taxTempId) catalogTaxId = objectId!
        if (clientObjectId! === modifier.id) catalogModifierId = objectId!
        if (clientObjectId! === listTempId) catalogModifierListId = objectId!
      })

    } catch (error) {
        console.log(error)
    }
  })

  it('should test BatchRetrieveCatalogObjects', async () => {

    let ids: string[] = [catalogModifierId, catalogModifierListId, catalogTaxId]
    let body: BatchRetrieveCatalogObjectsRequest = {
      objectIds: ids
    }
    try {

      let {result, statusCode}: ApiResponse<BatchRetrieveCatalogObjectsResponse> = await catalogApi.batchRetrieveCatalogObjects(body)
      expect(statusCode).toBe(200)
      expect(result).toEqual(expect.objectContaining({
        objects: expect.arrayContaining(ids.map(id => expect.objectContaining({id})))
      }))
    } catch (error) {
      console.log(error)
    }

  })


  it('should testUpdateItemTaxes', async () => {
    let body: UpdateItemTaxesRequest = {
      itemIds: [ catalogObjectId ],
      taxesToEnable: [catalogTaxId]
    }

    let { statusCode }: ApiResponse<UpdateItemTaxesResponse> = await catalogApi.updateItemTaxes(body)
    expect(statusCode).toBe(200)
  })

  it('should testUpdateItemModifierLists', async () => {
    let body: UpdateItemModifierListsRequest = {
      itemIds: [catalogObjectId],
      modifierListsToEnable: [catalogModifierListId]
    }

    let { statusCode }: ApiResponse<UpdateItemModifierListsResponse> = await catalogApi.updateItemModifierLists(body)
    expect(statusCode).toBe(200)
  })

  it('should test BatchDeleteCatalogObjects', async () => {

    let ids: string[] = [catalogModifierId, catalogModifierListId, catalogTaxId]
    let body: BatchDeleteCatalogObjectsRequest = {
      objectIds: ids
    }
    try {

      let { result, statusCode }: ApiResponse<BatchDeleteCatalogObjectsResponse> = await catalogApi.batchDeleteCatalogObjects(body)
      expect(statusCode).toBe(200)
      expect(result).toEqual(expect.objectContaining({
        deletedObjectIds: expect.arrayContaining(ids)
      }))
    } catch (error) {
      console.log(error)
    }

  })
  it('should testDeleteCatalogObject', async () => {

    let { statusCode }: ApiResponse<DeleteCatalogObjectResponse> = await catalogApi.deleteCatalogObject(catalogObjectId)
    expect(statusCode).toBe(200)
  })

  it('should testCreateCatalogImage', async () => {

    let imageData : CatalogImage = {
      name: 'Square logo',
      caption: 'Square within a square'
    }

    let image: CatalogObject = {
      id: '#temp-logo-id',
      type: 'IMAGE',
      imageData: imageData
    }

    let request: CreateCatalogImageRequest = {
      image,
      idempotencyKey: uuidv4(),

    }
    let readStream = createReadStream('./test/resources/square.png')
    let imageFile = new FileWrapper(readStream)

    let  {result, statusCode} : ApiResponse<CreateCatalogImageResponse> =  await catalogApi.createCatalogImage(request, imageFile)
    expect(statusCode).toBe(200)
    expect(result).toEqual(expect.objectContaining({
      image: expect.objectContaining({
        type: 'IMAGE',
        imageData: expect.objectContaining(imageData)
      })
    }))
  })
})
