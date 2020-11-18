import {
  CheckoutApi,
  CreateCheckoutRequest,
  CreateOrderRequest,
  LocationsApi,
  Order,
  OrderLineItem,
} from '../../src';
import { testClient } from '../testClient';
import {v4 as uuidV4} from 'uuid'

describe('Checkout API', () => {
  let checkoutApi: CheckoutApi;
  let locationsApi: LocationsApi;

  beforeAll(() => {
    checkoutApi = testClient.checkoutApi;
    locationsApi = testClient.locationsApi;
  });

  it('should testCreateCheckout response', async () => {
    const locationsResult = await locationsApi.listLocations();

    expect(locationsResult.statusCode).toBe(200);

    const locationId = locationsResult.result.locations?.[0]?.id;

    const orderBodyIdempotencyKey = uuidV4();

    const amount = 100;

    const bodyOrderLineItems: OrderLineItem[] = [];
    bodyOrderLineItems[0] = { quantity: '2' };
    bodyOrderLineItems[0].name = 'Example Line Item';
    bodyOrderLineItems[0].basePriceMoney = {
      amount: amount,
      currency: 'USD',
    };

    const order: Order = {
      locationId: locationId!,
      lineItems: bodyOrderLineItems,
    };

    const orderBody: CreateOrderRequest = {
      idempotencyKey: orderBodyIdempotencyKey,
      order: order,
    };

    const body: CreateCheckoutRequest = {
      idempotencyKey: uuidV4(),
      order: orderBody,
    };

    const response = await checkoutApi.createCheckout(locationId || '', body);

    expect(response.statusCode).toBe(200);
  });
});
