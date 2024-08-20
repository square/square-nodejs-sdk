import { LocationsApi } from '../src';
import { testClient } from './testClient';
import { makeApiCall } from './testHelper';

describe('LocationsApi', () => {
  let controller : LocationsApi;

  beforeAll(() => {
    controller = new LocationsApi(testClient);
  });

  it('should ListLocations', async () => {
    const response = await makeApiCall(
      () => controller.listLocations()
    );

    expect(response.statusCode).toBe(200);
  });
});
