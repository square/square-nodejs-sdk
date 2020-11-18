import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
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
   * Provides information of all locations of a business.
   *
   * Many Square API endpoints require a `location_id` parameter.
   * The `id` field of the [`Location`](#type-location) objects returned by this
   * endpoint correspond to that `location_id` parameter.
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
   * Creates a location.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
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
    req.json(mapped.body);
    return req.callAsJson(createLocationResponseSchema, requestOptions);
  }

  /**
   * Retrieves details of a location. You can specify "main"
   * as the location ID to retrieve details of the
   * main location.
   *
   * @param locationId  The ID of the location to retrieve. If you specify the string "main", then the
   *                              endpoint returns the main location.
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
   * Updates a location.
   *
   * @param locationId  The ID of the location to update.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
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
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}`;
    return req.callAsJson(updateLocationResponseSchema, requestOptions);
  }
}
