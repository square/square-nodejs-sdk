import { CustomerGroupsApi, CreateCustomerGroupRequest, UpdateCustomerGroupRequest } from '../../src';
import { testClient } from '../testClient';
import { v4 as uuidV4 } from 'uuid'

describe('CustomerGroups API', () => {
  let customersGroupsController: CustomerGroupsApi;
  let newcustomerGroupId: string;

  beforeAll(async () => {
    customersGroupsController = testClient.customerGroupsApi;
  });

  it('should testListCustomer response', async () => {
    const { statusCode } = await customersGroupsController.listCustomerGroups();

    expect(statusCode).toBe(200);
  });

  it('should testCreateCustomerGroup response', async () => {
    // Some tests depend on a Customer Group resource
    let body: CreateCustomerGroupRequest = {
      idempotencyKey: uuidV4(),
      group: {
        name: `Default-${uuidV4()}`
      }
    };

    let { result, statusCode } = await customersGroupsController.createCustomerGroup(body);

    expect(statusCode).toBe(200);
    expect(result.group).toEqual(expect.objectContaining(body.group))

    newcustomerGroupId = result.group?.id!;
  });

  it('should testRetrieveCustomerGroup response', async () => {

    let {statusCode} = await customersGroupsController.retrieveCustomerGroup(newcustomerGroupId)
    expect(statusCode).toBe(200);
  })

  it('should testUpdateCustomerGroup response', async () => {

    let body :UpdateCustomerGroupRequest ={
      group: {
        name: `Updated-${uuidV4()}`
      }
    }

    let { result, statusCode } = await customersGroupsController.updateCustomerGroup(newcustomerGroupId, body)
    expect(statusCode).toBe(200);
    expect(result.group).toEqual(expect.objectContaining(body.group))
  })

  it('should testDeleteCustomerGroup response', async () => {

    let { statusCode } = await customersGroupsController.deleteCustomerGroup(newcustomerGroupId)
    expect(statusCode).toBe(200);
  })


});
