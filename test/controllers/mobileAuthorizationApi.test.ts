import {
  CreateMobileAuthorizationCodeRequest,
  LocationsApi,
  MobileAuthorizationApi,
} from '../../src';
import { testClient } from '../testClient';

describe('MobileAuthorization API', () => {
  let mobileAuthorizationApi: MobileAuthorizationApi;
  let locationsApi: LocationsApi;

  beforeAll(() => {
    mobileAuthorizationApi = testClient.mobileAuthorizationApi;
    locationsApi = testClient.locationsApi;
  });

  it('should  testCreateMobileAuthorizationCode response', async () => {
    const locationResult = await locationsApi.listLocations();
    expect(locationResult.statusCode).toBe(200);

    const locationId = locationResult.result.locations?.[0]?.id;
    expect(locationId).toBeTruthy();

    const body: CreateMobileAuthorizationCodeRequest = {
      locationId: locationId,
    };

    const response = await mobileAuthorizationApi.createMobileAuthorizationCode(
      body
    );
    expect(response.statusCode).toBe(200);
  });
});
