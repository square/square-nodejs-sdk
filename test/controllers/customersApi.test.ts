import {
  Address,
  CreateCustomerCardRequest, 
  CreateCustomerCustomAttributeDefinitionRequest,
  CreateCustomerGroupRequest,
  CreateCustomerRequest, 
  CustomerCustomAttributesApi,
  CustomerGroupsApi,
  CustomersApi, 
  UpdateCustomerCustomAttributeDefinitionRequest, 
  UpdateCustomerRequest, 
  UpsertCustomerCustomAttributeRequest
} from '../../src';
import { testClient } from '../testClient';
import { v4 as uuidV4 } from 'uuid'

describe('Customer API', () => {
  let customersController: CustomersApi;
  let customersGroupsController: CustomerGroupsApi;
  let customersCustomAttributesController: CustomerCustomAttributesApi;
  let originalRequest: CreateCustomerRequest;

  let newCustomerId : string;
  let newCustomerCardId : string;
  let newcustomerGroupId: string;
  let customAttributeDefinitionKey: string = `favorite-drink_${uuidV4()}`;
  let customAttributeDefinitionName: string = `Favorite Drink_${uuidV4()}`; // name must be unique
  let customAttributeDefinitionUpdatedName: string = `Preferred Drink_${uuidV4()}`; // name must be unique

  beforeAll(async () => {
    customersController = testClient.customersApi;
    customersGroupsController = testClient.customerGroupsApi;
    customersCustomAttributesController = testClient.customerCustomAttributesApi;

    // Some tests depend on a Customer Group resource
    let body: CreateCustomerGroupRequest = {
      idempotencyKey: uuidV4(),
      group: {
        name: `Default-${uuidV4}`
      }
    };

    let { result } = await customersGroupsController.createCustomerGroup(body);
    newcustomerGroupId = result.group?.id!;

    // Some tests depend on a Custom Attribute Definition resource
    // Delete it if it exists, then create it.
    console.log('Deleting any existing custom attribute test data');
    let deleteCadResult = await customersCustomAttributesController.deleteCustomerCustomAttributeDefinition(customAttributeDefinitionKey);
    console.log('Creating custom attribute test data');
    expect(deleteCadResult.statusCode).toBe(200);
    let cadBody: CreateCustomerCustomAttributeDefinitionRequest = {
      customAttributeDefinition: {
        key: customAttributeDefinitionKey,
        name: customAttributeDefinitionName,
        description: 'A customer\'s favorite drink',
        visibility: 'VISIBILITY_READ_WRITE_VALUES',
        schema: {
          '$ref': 'https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String'
        }
      }
    };
    let cadResult = await customersCustomAttributesController.createCustomerCustomAttributeDefinition(cadBody);
    expect(cadResult.statusCode).toBe(200);
  });

  afterAll(async () => {
    // Clean up created customer Group resource
    let deleteCgResult = await customersGroupsController.deleteCustomerGroup(newcustomerGroupId);
    expect(deleteCgResult.statusCode).toBe(200);
    console.log('Cleaning up custom attribute test data');
    let deleteCadResult = await customersCustomAttributesController.deleteCustomerCustomAttributeDefinition(customAttributeDefinitionKey);
    expect(deleteCadResult.statusCode).toBe(200);
  })

  it('should list customers', async () => {
    const { statusCode } = await customersController.listCustomers();

    expect(statusCode).toBe(200);
  });

  it('should create a customer', async () => {
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

  it('should retrieve a customer', async () => {
    const { result, statusCode } = await customersController.retrieveCustomer(newCustomerId);

    expect(statusCode).toBe(200);
    expect(result.customer).toEqual(expect.objectContaining(originalRequest))
  });

  it('should update a customer', async () => {

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

  it('should create a customer card', async () => {

    let createCustomerCardRequest : CreateCustomerCardRequest = {
      cardNonce: 'cnon:card-nonce-ok' // Sandboc card nonce
    }

    const { result, statusCode } = await customersController.createCustomerCard(newCustomerId,createCustomerCardRequest );

    expect(statusCode).toBe(200);

    newCustomerCardId = result.card?.id!
  });

  it('should delete a customer card', async () => {

    const { statusCode } = await customersController.deleteCustomerCard(newCustomerId,newCustomerCardId);

    expect(statusCode).toBe(200);
  });

  it('should add a group to a customer', async () => {

    const { statusCode } = await customersController.addGroupToCustomer(newCustomerId, newcustomerGroupId);

    expect(statusCode).toBe(200);
  });

  it('should remove a group from a customer', async () => {

    const { statusCode } = await customersController.removeGroupFromCustomer(newCustomerId, newcustomerGroupId);

    expect(statusCode).toBe(200);
  });

  it('should retrieve a customer custom attribute definition', async () => {
    let response = await customersCustomAttributesController.retrieveCustomerCustomAttributeDefinition(customAttributeDefinitionKey);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
    expect(response.result.customAttributeDefinition?.key).toBe(customAttributeDefinitionKey);
    expect(response.result.customAttributeDefinition?.description).toBe('A customer\'s favorite drink');
    expect(response.result.customAttributeDefinition?.name).toBe(customAttributeDefinitionName);
    expect(response.result.customAttributeDefinition?.schema).toEqual({
      '$ref': 'https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String'
    });
    expect(response.result.customAttributeDefinition?.version).toBe(1);
    expect(response.result.customAttributeDefinition?.visibility).toBe('VISIBILITY_READ_WRITE_VALUES');
  });

  it('should update a customer custom attribute definition', async () => {
    let body: UpdateCustomerCustomAttributeDefinitionRequest = {
      customAttributeDefinition: {
        version: 1,
        name: customAttributeDefinitionUpdatedName
      }
    };
    let response = await customersCustomAttributesController.updateCustomerCustomAttributeDefinition(customAttributeDefinitionKey, body);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
    expect(response.result.customAttributeDefinition?.key).toBe(customAttributeDefinitionKey);
    expect(response.result.customAttributeDefinition?.description).toBe('A customer\'s favorite drink');
    expect(response.result.customAttributeDefinition?.name).toBe(customAttributeDefinitionUpdatedName);
    expect(response.result.customAttributeDefinition?.schema).toEqual({
      '$ref': 'https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String'
    });
    expect(response.result.customAttributeDefinition?.version).toBe(2);
    expect(response.result.customAttributeDefinition?.visibility).toBe('VISIBILITY_READ_WRITE_VALUES');
  });

  it('should list customer custom attribute definitions', async () => {
    let response = await customersCustomAttributesController.listCustomerCustomAttributeDefinitions();
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
  });

  it('should add a custom attribute to a customer', async () => {
    let body: UpsertCustomerCustomAttributeRequest = {
      customAttribute: {
        value: 'Double-shot breve'
      }
    };
    let response = await customersCustomAttributesController.upsertCustomerCustomAttribute(newCustomerId, customAttributeDefinitionKey, body);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
    expect(response.result.customAttribute?.key).toBe(customAttributeDefinitionKey);
    expect(response.result.customAttribute?.value).toBe('Double-shot breve');
    expect(response.result.customAttribute?.version).toBe(1);
    expect(response.result.customAttribute?.visibility).toBe('VISIBILITY_READ_WRITE_VALUES');
  });

  it('should update a custom attribute for a customer', async () => {
    let body: UpsertCustomerCustomAttributeRequest = {
      customAttribute: {
        value: 'Black coffee',
        version: 1
      }
    };
    let response = await customersCustomAttributesController.upsertCustomerCustomAttribute(newCustomerId, customAttributeDefinitionKey, body);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
    expect(response.result.customAttribute?.key).toBe(customAttributeDefinitionKey);
    expect(response.result.customAttribute?.value).toBe('Black coffee');
    expect(response.result.customAttribute?.version).toBe(2);
    expect(response.result.customAttribute?.visibility).toBe('VISIBILITY_READ_WRITE_VALUES');
  })

  it('should list custom attributes for a customer', async () => {
    let response = await customersCustomAttributesController.listCustomerCustomAttributes(newCustomerId, undefined, undefined, true);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
    expect(response.result.customAttributes?.length).toBe(1);
    expect(response.result.customAttributes!![0].key).toBe(customAttributeDefinitionKey);
    expect(response.result.customAttributes!![0].value).toBe('Black coffee');
    expect(response.result.customAttributes!![0].version).toBe(2);
    expect(response.result.customAttributes!![0].visibility).toBe('VISIBILITY_READ_WRITE_VALUES');
    expect(response.result.customAttributes!![0].definition?.key).toBe(customAttributeDefinitionKey);
  })

  it('should delete a custom attribute for a customer', async () => {
    let response = await customersCustomAttributesController.deleteCustomerCustomAttribute(newCustomerId, customAttributeDefinitionKey);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
  })

  it('should delete a customer', async () => {
    const { statusCode } = await customersController.deleteCustomer(newCustomerId);

    expect(statusCode).toBe(200);
  });

  it('should delete a custom attribute definition', async () => {
    let response = await customersCustomAttributesController.deleteCustomerCustomAttributeDefinition(customAttributeDefinitionKey);
    expect(response.result.errors).toBeUndefined();
    expect(response.statusCode).toBe(200);
  })
});
