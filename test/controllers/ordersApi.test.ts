import {
  OrdersApi,
  LocationsApi,
  CreateOrderRequest,
  SearchOrdersRequest,
  UpdateOrderRequest,
  OrderLineItem,
  PayOrderRequest,
  CalculateOrderRequest,
} from '../../src';
import { testClient } from '../testClient';
import {v4 as uuidv4} from 'uuid'

describe('Orders API', () => {
  let ordersApi    : OrdersApi;
  let locationsApi : LocationsApi;
  let locationId   : string;
  let newOrderId   : string;
  let lineItemUid  : string;

  beforeAll(async () => {
    ordersApi = testClient.ordersApi;
    locationsApi = testClient.locationsApi;

    let listLocationsResponse = await locationsApi.listLocations();
    let locations = listLocationsResponse.result?.locations!
    locationId = locations[0].id!
  });

  it('should  testCreateOrder response', async () => {
    let lineItem: OrderLineItem = {
      name: 'New Item',
      quantity: '1',
      basePriceMoney: {
        amount: BigInt(100),
        currency: 'USD'
      }
    }

    let body: CreateOrderRequest = {
      idempotencyKey: uuidv4(),
      order: {
        locationId: locationId,
        lineItems: [lineItem],
      }
    };

    let { result, statusCode } = await ordersApi.createOrder(body)
    expect(statusCode).toBe(200);
    expect(result.order).toEqual(expect.objectContaining({
      locationId: locationId,
      lineItems: expect.arrayContaining([
        expect.objectContaining(lineItem)
      ])
    }))

    newOrderId = result.order?.id!
    lineItemUid = (result.order?.lineItems!)[0].uid!
  });

  it('should testBatchRetrieveOrders response', async () => {

    let { result, statusCode } = await ordersApi.batchRetrieveOrders({
      orderIds: [newOrderId],
    })

    expect(statusCode).toBe(200);
    expect(result.orders).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: newOrderId
      })
    ]))

  });

  it('should testSearchOrders response', async () => {

    let body: SearchOrdersRequest = {
      limit: 1,
      locationIds: [locationId]
    }
    let { statusCode } = await ordersApi.searchOrders(body)
    expect(statusCode).toBe(200);
  })

  it('should testUpdateOrder response', async () => {

    let lineItem: OrderLineItem = {
      name: 'Updated Item',
      quantity: '1',
      basePriceMoney: {
        amount: BigInt(0),
        currency: 'USD'
      }
    }

    let body : UpdateOrderRequest = {
      idempotencyKey: uuidv4(),
      order: {
        version: 1,
        locationId: locationId,
        lineItems: [lineItem],
      },
      fieldsToClear: [`line_items[${lineItemUid}]`],
    }

    let { result, statusCode } = await ordersApi.updateOrder(newOrderId, body);
    expect(statusCode).toBe(200);
    expect(result.order).toEqual(expect.objectContaining({
      id: newOrderId,
      lineItems: expect.arrayContaining([expect.objectContaining(lineItem)])
    }))
  })

  it('should testPayOrder response', async () => {

    let body: PayOrderRequest = {
      idempotencyKey: uuidv4(),
      orderVersion: 2,
      paymentIds:[]
    }

    let { statusCode} = await ordersApi.payOrder(newOrderId, body);

    expect(statusCode).toBe(200);
  });


  it('should testCalculateOrder response', async () => {
    let lineItem: OrderLineItem = {
      name: 'New Item',
      quantity: '1',
      basePriceMoney: {
        amount: BigInt(100),
        currency: 'USD'
      }
    }

    let body: CalculateOrderRequest = {
      order: {
        locationId: locationId,
        lineItems: [lineItem],
      }
    };
    let { result, statusCode } = await ordersApi.calculateOrder(body);
    expect(statusCode).toBe(200);
    expect(result).toHaveProperty('order')
  });
});
