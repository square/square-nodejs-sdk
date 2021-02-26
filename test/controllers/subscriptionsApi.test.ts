import { SubscriptionsApi, CatalogApi, CreateSubscriptionRequest, CustomersApi, LocationsApi, UpdateSubscriptionRequest } from "../../src"
import { testClient } from "../testClient"
import { v4 as uuidv4 } from 'uuid'

jest.setTimeout(1000 * 10); // Doubles timeout for tests
describe('Subscriptions API', () =>{
  let subscriptionsApi : SubscriptionsApi
  let catalogApi       : CatalogApi
  let customerApi      : CustomersApi
  let locationsApi     : LocationsApi

  let planId         : string
  let customerId     : string
  let locationId     : string
  let subscriptionId : string
  let subVersion     : bigint

  beforeAll( async () => {
    subscriptionsApi = testClient.subscriptionsApi
    catalogApi = testClient.catalogApi
    customerApi =  testClient.customersApi
    locationsApi =  testClient.locationsApi

    let { result: { catalogObject } } = await catalogApi.upsertCatalogObject({
      idempotencyKey: uuidv4(),
      object: {
        id: '#basic-plan',
        type: "SUBSCRIPTION_PLAN",
        subscriptionPlanData: {
          name: 'Basic Plan',
          phases: [{
            cadence: 'THIRTY_DAYS',
            recurringPriceMoney: {
              amount: BigInt(100),
              currency: 'USD'
            }
          }]

        }
      }
    })
    planId =  catalogObject?.id!

    let  { result: { customer } } =  await customerApi.createCustomer({
      givenName: 'Issac',
      familyName: 'Newton',
      emailAddress: 'apple@onhead.com'
    })
    customerId = customer?.id!

    let { result } =  await locationsApi.listLocations()
    locationId = (result.locations!)[0].id!
  })

  afterAll(async () => {
    await catalogApi.deleteCatalogObject(planId)
    await customerApi.deleteCustomer(customerId)
  })

  it('should testCreateSubscription', async () => {

    let body : CreateSubscriptionRequest = {
      idempotencyKey: uuidv4(),
      planId: planId,
      locationId: locationId,
      customerId: customerId
    }
    let { result : {subscription}, statusCode } = await subscriptionsApi.createSubscription(body)
    expect(statusCode).toBe(200)

    subscriptionId =  subscription?.id!
    subVersion = subscription?.version!
  })

  it('should testRetrieveSubscription', async () => {

    let { result: { subscription }, statusCode } = await subscriptionsApi.retrieveSubscription(subscriptionId)
    expect(statusCode).toBe(200)
    expect(subscription?.id!).toBe(subscriptionId)
  })

  it('should testListSubscriptionEvents', async () => {

    let { statusCode } = await subscriptionsApi.listSubscriptionEvents(subscriptionId)
    expect(statusCode).toBe(200)
  })

  it('should testSearchSubscriptions', async () => {
    let { statusCode } = await subscriptionsApi.searchSubscriptions({
      limit: 5
    })
    expect(statusCode).toBe(200)
  })

  it('should testCancelSubscription', async () => {
    let body: UpdateSubscriptionRequest = {
      subscription: {
        version: subVersion,
        priceOverrideMoney : {
          amount: BigInt(200),
          currency: 'USD'
        }
      }
    }

    let { statusCode } = await subscriptionsApi.updateSubscription(subscriptionId,body)
    expect(statusCode).toBe(200)
  })

  it('should testCancelSubscription', async () => {
    let { statusCode } = await subscriptionsApi.cancelSubscription(subscriptionId)
    expect(statusCode).toBe(200)
  })
})
