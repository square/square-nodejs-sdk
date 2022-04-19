import { ApiResponse, RequestOptions } from '../core';
import {
  CreateLocationRequest,
  createLocationRequestSchema,
} from '../models/createLocationRequest';
import {
  CreateLocationResponse,
  createLocationResponseSchema,
} from '../models/createLocationResponse';
import {
  ListLocationsResponse,
  listLocationsResponseSchema,
} from '../models/listLocationsResponse';
import {
  RetrieveLocationResponse,
  retrieveLocationResponseSchema,
} from '../models/retrieveLocationResponse';
import {
  UpdateLocationRequest,
  updateLocationRequestSchema,
} from '../models/updateLocationRequest';
import {
  UpdateLocationResponse,
  updateLocationResponseSchema,
} from '../models/updateLocationResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class LocationsApi extends BaseApi {
  /**
   * Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-
   * api),
   * including those with an inactive status.
   *
   * @return Response from the API call
   */
  async listLocations(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListLocationsResponse>> {
    const req = this.createRequest('GET', '/v2/locations');
    return req.callAsJson(listLocationsResponseSchema, requestOptions);
  }

  /**
   * Creates a [location](https://developer.squareup.com/docs/locations-api).
   * Creating new locations allows for separate configuration of receipt layouts, item prices,
   * and sales reports. Developers can use locations to separate sales activity through applications
   * that integrate with Square from sales activity elsewhere in a seller's account.
   * Locations created programmatically with the Locations API last forever and
   * are visible to the seller for their own management. Therefore, ensure that
   * each location has a sensible and unique name.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createLocation(
    body: CreateLocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateLocationResponse>> {
    const req = this.createRequest('POST', '/v2/locations');
    const mapped = req.prepareArgs({
      body: [body, createLocationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createLocationResponseSchema, requestOptions);
  }

  /**
   * Retrieves details of a single location. Specify "main"
   * as the location ID to retrieve details of the [main location](https://developer.squareup.
   * com/docs/locations-api#about-the-main-location).
   *
   * @param locationId  The ID of the location to retrieve. Specify the string "main" to return the main
   *                              location.
   * @return Response from the API call
   */
  async retrieveLocation(
    locationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLocationResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ locationId: [locationId, string()] });
    req.appendTemplatePath`/v2/locations/${mapped.locationId}`;
    return req.callAsJson(retrieveLocationResponseSchema, requestOptions);
  }

  /**
   * Updates a [location](https://developer.squareup.com/docs/locations-api).
   *
   * @param locationId   The ID of the location to update.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateLocation(
    locationId: string,
    body: UpdateLocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateLocationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, updateLocationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}`;
    return req.callAsJson(updateLocationResponseSchema, requestOptions);
  }
}
