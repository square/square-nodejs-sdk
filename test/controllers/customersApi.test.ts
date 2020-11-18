import { Address, CreateCustomerRequest, CustomersApi, UpdateCustomerRequest, CreateCustomerCardRequest, CustomerGroupsApi, CreateCustomerGroupRequest } from '../../src';
import { testClient } from '../testClient';
import { v4 as uuidV4 } from 'uuid'

describe('Customer API', () => {
  let customersController: CustomersApi;
  let customersGroupsController: CustomerGroupsApi;
  let originalRequest: CreateCustomerRequest;

  let newCustomerId : string;
  let newCustomerCardId : string;
  let newcustomerGroupId: string;

  beforeAll( async () => {
    customersController = testClient.customersApi;
    customersGroupsController = testClient.customerGroupsApi;

    // Some tests depend on a Customer Group resource
    let body: CreateCustomerGroupRequest = {
      idempotencyKey: uuidV4(),
      group: {
        name: `Default-${uuidV4}`
      }
    };

    let { result } = await customersGroupsController.createCustomerGroup(body);
    newcustomerGroupId = result.group?.id!;
  });

  afterAll(async () => {
    // Clean up created customer Group resource
    await customersGroupsController.deleteCustomerGroup(newcustomerGroupId);
  })

  it('should testListCustomer response', async () => {
    const { statusCode } = await customersController.listCustomers();

    expect(statusCode).toBe(200);
  });

  it('should testCreateCustomer response', async () => {
    const phoneNumber = '1-212-555-4240';
    const postalCode = '10003';

    const address: Address = {
      addressLine1: '500 Electric Ave',
      addressLine2: 'Suite 600',
      locality: 'New York',
      administrativeDistrictLevel1: 'NY',
      postalCode: postalCode,
      country: 'US',
    };

    const requst: CreateCustomerRequest = {
      givenName: 'Amelia',
      familyName: 'Earhart',
      phoneNumber: phoneNumber,
      note: 'a customer',
      address: address,
    };

    const { result, statusCode } = await customersController.createCustomer(requst);

    expect(statusCode).toBe(200);

    newCustomerId = result.customer?.id!
    originalRequest = requst
  });

  it('should testRetrieveCustomer response', async () => {
    const { result, statusCode } = await customersController.retrieveCustomer(newCustomerId);

    expect(statusCode).toBe(200);
    expect(result.customer).toEqual(expect.objectContaining(originalRequest))
  });

  it('should testRetrieveCustomer response', async () => {
    const { result, statusCode } = await customersController.retrieveCustomer(newCustomerId);

    expect(statusCode).toBe(200);
    expect(result.customer).toEqual(expect.objectContaining(originalRequest))
  });

  it('should testUpdateCustomer response', async () => {

    let updateCustomerRequest: UpdateCustomerRequest = {
      ...originalRequest,
      phoneNumber: '1-917-500-1000',
      note: 'An Updated Customer'
    }

    const { result, statusCode } = await customersController.updateCustomer(newCustomerId, updateCustomerRequest);

    expect(statusCode).toBe(200);
    expect(result.customer?.id!).toBe(newCustomerId);
    expect(result.customer).toEqual(expect.objectContaining(updateCustomerRequest))
  });


  it('should testCreateCustomerCard response', async () => {

    let createCustomerCardRequest : CreateCustomerCardRequest = {
      cardNonce: 'cnon:card-nonce-ok' // Sandboc card nonce
    }

    const { result, statusCode } = await customersController.createCustomerCard(newCustomerId,createCustomerCardRequest );

    expect(statusCode).toBe(200);

    newCustomerCardId = result.card?.id!
  });

  it('should testdeleteCustomerCard response', async () => {

    const { statusCode } = await customersController.deleteCustomerCard(newCustomerId,newCustomerCardId);

    expect(statusCode).toBe(200);
  });

  it('should testAddGroupToCustomer response', async () => {

    const { statusCode } = await customersController.addGroupToCustomer(newCustomerId, newcustomerGroupId);

    expect(statusCode).toBe(200);
  });

  it('should testRemoveGroupFromCustomer response', async () => {

    const { statusCode } = await customersController.removeGroupFromCustomer(newCustomerId, newcustomerGroupId);

    expect(statusCode).toBe(200);
  });


  it('should testDeleteCustomer response', async () => {

    const { statusCode } = await customersController.deleteCustomer(newCustomerId);

    expect(statusCode).toBe(200);
  });
});
