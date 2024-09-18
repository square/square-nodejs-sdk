import { CatalogApi, UpsertCatalogObjectRequest, CatalogObject, CatalogItem, InventoryApi, ApiResponse, RetrieveInventoryCountResponse, CatalogItemVariation, BatchChangeInventoryRequest, BatchChangeInventoryResponse, InventoryChange, LocationsApi, ListLocationsResponse, InventoryAdjustment, BatchRetrieveInventoryChangesRequest, BatchRetrieveInventoryChangesResponse, RetrieveInventoryAdjustmentResponse, BatchRetrieveInventoryCountsRequest, BatchRetrieveInventoryCountsResponse, RetrieveInventoryChangesResponse, InventoryPhysicalCount } from '../../src'
import { testClient } from '../testClient'
import { v4 as uuidv4} from 'uuid'

describe('Inventory API', () => {
  let inventoryApi : InventoryApi;
  let catalogApi   : CatalogApi;
  let locationsApi : LocationsApi

  let locationId        : string;
  let itemVariationId   : string;
  let inventoryAdjustId : string;

  beforeAll(async () => {
    inventoryApi = testClient.inventoryApi;
    catalogApi = testClient.catalogApi;
    locationsApi = testClient.locationsApi

    let list: ApiResponse<ListLocationsResponse> = await locationsApi.listLocations()

    locationId = (list.result?.locations!)[0].id!;

    let colombianCoffeeData : CatalogItemVariation =  {
      name: 'Colombian Fair Trade',
      trackInventory: true,
      pricingType:'FIXED_PRICING',
      priceMoney: {
        amount: BigInt(100),
        currency:'USD'
      }
    }

    let colombianCoffee: CatalogObject = {
      id: '#colombian-coffee',
      type: 'ITEM_VARIATION',
      presentAtAllLocations: true,
      itemVariationData: colombianCoffeeData

    }

    let coffeeData : CatalogItem = {
      name: 'Coffee',
      description: 'Strong coffee',
      abbreviation: 'C',
      availableOnline: true,
      availableForPickup: true,
      availableElectronically: false,
      variations: [colombianCoffee]
    }

    let coffee : CatalogObject = {
      id: '#single-item',
      type: 'ITEM',
      presentAtAllLocations: true,
      itemData: coffeeData,
    }

    let body: UpsertCatalogObjectRequest = {
      object: coffee,
      idempotencyKey: uuidv4(),
    }
    let { result } = await catalogApi.upsertCatalogObject(body)

    itemVariationId = (result.catalogObject?.itemData?.variations!)[0].id!
  }, 30000); // Set a hook timeout of 30 seconds.

  xit('should testBatchChangeInventory', async () => {

    const eightHours = 1000 * 60 * 60 * 8

    let stockCoffee: InventoryAdjustment = {
      quantity: '100',
      catalogObjectId: itemVariationId,
      locationId: locationId,
      fromState: 'NONE',
      toState: 'IN_STOCK',
      occurredAt: new Date(Date.now() - eightHours).toISOString()
    }

    let coffeeAdjustment : InventoryChange = {
      type: 'ADJUSTMENT',
      adjustment: stockCoffee
    }

    let body : BatchChangeInventoryRequest = {
      idempotencyKey: uuidv4(),
      changes:[
        coffeeAdjustment,
      ]
    }

    let { toState, fromState, occurredAt, ...expectedResponse } =  stockCoffee

    let { result, statusCode }: ApiResponse<BatchChangeInventoryResponse> = await inventoryApi.batchChangeInventory(body)
    expect(statusCode).toBe(200);
    expect(result.counts).toEqual(expect.arrayContaining([
      expect.objectContaining(expectedResponse)
    ]))
  })

  xit('should testBatchRetrieveInventoryChanges', async () => {

    let body: BatchRetrieveInventoryChangesRequest = {
      types: ['ADJUSTMENT'],
      catalogObjectIds: [itemVariationId],
      locationIds: [locationId]
    }

    let { result, statusCode }: ApiResponse<BatchRetrieveInventoryChangesResponse> = await inventoryApi.batchRetrieveInventoryChanges(body)
    expect(statusCode).toBe(200);

    inventoryAdjustId = (result.changes!)[0].adjustment?.id!;
  })

  it('should testRetreiveInventoryChanges', async () => {

    let { statusCode }: ApiResponse<RetrieveInventoryChangesResponse> = await inventoryApi.retrieveInventoryChanges(itemVariationId)
    expect(statusCode).toBe(200);
  })

  xit('should testRetrieveInventoryAdjustment', async () => {

    let { statusCode }: ApiResponse<RetrieveInventoryAdjustmentResponse> = await inventoryApi.retrieveInventoryAdjustment(inventoryAdjustId)
    expect(statusCode).toBe(200);
  })

  it('should testRetrieveInventoryCount', async () => {

    let { statusCode }: ApiResponse<RetrieveInventoryCountResponse> = await inventoryApi.retrieveInventoryCount(itemVariationId)
    expect(statusCode).toBe(200);
  })

  xit('should testBatchRetrieveInventoryCounts', async () => {

    let body: BatchRetrieveInventoryCountsRequest = {
      catalogObjectIds: [itemVariationId],
      locationIds: [locationId],
    }
    let { statusCode }: ApiResponse<BatchRetrieveInventoryCountsResponse> = await inventoryApi.batchRetrieveInventoryCounts(body);
    expect(statusCode).toBe(200);
  })

  xit('should testRetrieveInventoryPhysicalCount', async () => {
    let sellCoffee: InventoryPhysicalCount = {
      quantity: '1',
      catalogObjectId: itemVariationId,
      locationId: locationId,
      state: 'IN_STOCK',
      occurredAt: new Date().toISOString()
    }

    let coffeeCount: InventoryChange = {
      type: 'PHYSICAL_COUNT',
      physicalCount: sellCoffee
    }

    let body: BatchChangeInventoryRequest = {
      idempotencyKey: uuidv4(),
      changes: [
        coffeeCount,
      ]
    }

    let { statusCode }: ApiResponse<BatchChangeInventoryResponse> = await inventoryApi.batchChangeInventory(body)
    expect(statusCode).toBe(200);

    let request: BatchRetrieveInventoryChangesRequest = {
      types: ['PHYSICAL_COUNT'],
      catalogObjectIds: [itemVariationId],
      locationIds: [locationId]
    }

    let { result:{ changes } , statusCode: retrieveStatusCode }: ApiResponse<BatchRetrieveInventoryChangesResponse> = await inventoryApi.batchRetrieveInventoryChanges(request)
    expect(retrieveStatusCode).toBe(200);

    let physicalCountId : string = (changes!)[0].physicalCount?.id!;
    let { statusCode: physicalCountStatus }: ApiResponse<BatchRetrieveInventoryChangesResponse> = await inventoryApi.retrieveInventoryPhysicalCount(physicalCountId);
    expect(physicalCountStatus).toBe(200)
  })

})
