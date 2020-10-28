import { LocationsApi } from '../../src';
import { testClient } from '../testClient';

describe('LocationApi Tests', () => {
  let locationsController: LocationsApi;

  beforeAll(() => {
    locationsController = testClient.locationsApi;
  });

  it('should testlistlocations response', async () => {
    const response = await locationsController.listLocations();
    expect(response.statusCode).toBe(200);
  });
});
