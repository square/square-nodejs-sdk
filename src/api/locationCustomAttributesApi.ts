import { ApiResponse, RequestOptions } from '../core';
import {
  BulkDeleteLocationCustomAttributesRequest,
  bulkDeleteLocationCustomAttributesRequestSchema,
} from '../models/bulkDeleteLocationCustomAttributesRequest';
import {
  BulkDeleteLocationCustomAttributesResponse,
  bulkDeleteLocationCustomAttributesResponseSchema,
} from '../models/bulkDeleteLocationCustomAttributesResponse';
import {
  BulkUpsertLocationCustomAttributesRequest,
  bulkUpsertLocationCustomAttributesRequestSchema,
} from '../models/bulkUpsertLocationCustomAttributesRequest';
import {
  BulkUpsertLocationCustomAttributesResponse,
  bulkUpsertLocationCustomAttributesResponseSchema,
} from '../models/bulkUpsertLocationCustomAttributesResponse';
import {
  CreateLocationCustomAttributeDefinitionRequest,
  createLocationCustomAttributeDefinitionRequestSchema,
} from '../models/createLocationCustomAttributeDefinitionRequest';
import {
  CreateLocationCustomAttributeDefinitionResponse,
  createLocationCustomAttributeDefinitionResponseSchema,
} from '../models/createLocationCustomAttributeDefinitionResponse';
import {
  DeleteLocationCustomAttributeDefinitionResponse,
  deleteLocationCustomAttributeDefinitionResponseSchema,
} from '../models/deleteLocationCustomAttributeDefinitionResponse';
import {
  DeleteLocationCustomAttributeResponse,
  deleteLocationCustomAttributeResponseSchema,
} from '../models/deleteLocationCustomAttributeResponse';
import {
  ListLocationCustomAttributeDefinitionsResponse,
  listLocationCustomAttributeDefinitionsResponseSchema,
} from '../models/listLocationCustomAttributeDefinitionsResponse';
import {
  ListLocationCustomAttributesResponse,
  listLocationCustomAttributesResponseSchema,
} from '../models/listLocationCustomAttributesResponse';
import {
  RetrieveLocationCustomAttributeDefinitionResponse,
  retrieveLocationCustomAttributeDefinitionResponseSchema,
} from '../models/retrieveLocationCustomAttributeDefinitionResponse';
import {
  RetrieveLocationCustomAttributeResponse,
  retrieveLocationCustomAttributeResponseSchema,
} from '../models/retrieveLocationCustomAttributeResponse';
import {
  UpdateLocationCustomAttributeDefinitionRequest,
  updateLocationCustomAttributeDefinitionRequestSchema,
} from '../models/updateLocationCustomAttributeDefinitionRequest';
import {
  UpdateLocationCustomAttributeDefinitionResponse,
  updateLocationCustomAttributeDefinitionResponseSchema,
} from '../models/updateLocationCustomAttributeDefinitionResponse';
import {
  UpsertLocationCustomAttributeRequest,
  upsertLocationCustomAttributeRequestSchema,
} from '../models/upsertLocationCustomAttributeRequest';
import {
  UpsertLocationCustomAttributeResponse,
  upsertLocationCustomAttributeResponseSchema,
} from '../models/upsertLocationCustomAttributeResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class LocationCustomAttributesApi extends BaseApi {
  /**
   * Lists the location-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong
   * to a Square seller account.
   * When all response pages are retrieved, the results include all custom attribute definitions
   * that are visible to the requesting application, including those that are created by other
   * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
   * @param limit             The maximum number of results to return in a single paged response. This limit
   *                                    is advisory. The response might contain more or fewer results. The minimum
   *                                    value is 1 and the maximum value is 100. The default value is 20. For more
   *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
   *                                    basics/common-api-patterns/pagination).
   * @param cursor            The cursor returned in the paged response from the previous call to this
   *                                    endpoint. Provide this cursor to retrieve the next page of results for your
   *                                    original request. For more information, see [Pagination](https://developer.
   *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
   * @return Response from the API call
   */
  async listLocationCustomAttributeDefinitions(
    visibilityFilter?: string,
    limit?: number,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListLocationCustomAttributeDefinitionsResponse>> {
    const req = this.createRequest(
      'GET',
      '/v2/locations/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      visibilityFilter: [visibilityFilter, optional(string())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
    });
    req.query('visibility_filter', mapped.visibilityFilter);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      listLocationCustomAttributeDefinitionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates a location-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
   * seller account.
   * Use this endpoint to define a custom attribute that can be associated with locations.
   * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
   * for a custom attribute. After the definition is created, you can call
   * [UpsertLocationCustomAttribute]($e/LocationCustomAttributes/UpsertLocationCustomAttribute) or
   * [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes)
   * to set the custom attribute for locations.
   *
   * @param body         An object containing the fields to
   *                                                                              POST for the request.  See the
   *                                                                              corresponding object definition for
   *                                                                              field details.
   * @return Response from the API call
   */
  async createLocationCustomAttributeDefinition(
    body: CreateLocationCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateLocationCustomAttributeDefinitionResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/locations/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      body: [body, createLocationCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      createLocationCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a location-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
   * seller account.
   * Deleting a custom attribute definition also deletes the corresponding custom attribute from
   * all locations.
   * Only the definition owner can delete a custom attribute definition.
   *
   * @param key The key of the custom attribute definition to delete.
   * @return Response from the API call
   */
  async deleteLocationCustomAttributeDefinition(
    key: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteLocationCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ key: [key, string()] });
    req.appendTemplatePath`/v2/locations/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      deleteLocationCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a location-related [custom attribute definition]($m/CustomAttributeDefinition) from a
   * Square seller account.
   * To retrieve a custom attribute definition created by another application, the `visibility`
   * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param key     The key of the custom attribute definition to retrieve. If the requesting application is
   *                          not the definition owner, you must use the qualified key.
   * @param version The current version of the custom attribute definition, which is used for strongly
   *                          consistent reads to guarantee that you receive the most up-to-date data. When included in
   *                          the request, Square returns the specified version or a higher version if one exists. If
   *                          the specified version is higher than the current version, Square returns a `BAD_REQUEST`
   *                          error.
   * @return Response from the API call
   */
  async retrieveLocationCustomAttributeDefinition(
    key: string,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLocationCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      key: [key, string()],
      version: [version, optional(number())],
    });
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/locations/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveLocationCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates a location-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
   * seller account.
   * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
   * `schema` for a `Selection` data type.
   * Only the definition owner can update a custom attribute definition.
   *
   * @param key          The key of the custom attribute
   *                                                                              definition to update.
   * @param body         An object containing the fields to
   *                                                                              POST for the request.  See the
   *                                                                              corresponding object definition for
   *                                                                              field details.
   * @return Response from the API call
   */
  async updateLocationCustomAttributeDefinition(
    key: string,
    body: UpdateLocationCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateLocationCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      key: [key, string()],
      body: [body, updateLocationCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      updateLocationCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes [custom attributes]($m/CustomAttribute) for locations as a bulk operation.
   * To delete a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param body         An object containing the fields to POST
   *                                                                         for the request.  See the corresponding
   *                                                                         object definition for field details.
   * @return Response from the API call
   */
  async bulkDeleteLocationCustomAttributes(
    body: BulkDeleteLocationCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkDeleteLocationCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/locations/custom-attributes/bulk-delete'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkDeleteLocationCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      bulkDeleteLocationCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates or updates [custom attributes]($m/CustomAttribute) for locations as a bulk operation.
   * Use this endpoint to set the value of one or more custom attributes for one or more locations.
   * A custom attribute is based on a custom attribute definition in a Square seller account, which is
   * created using the
   * [CreateLocationCustomAttributeDefinition]($e/LocationCustomAttributes/CreateLocationCustomAttributeD
   * efinition) endpoint.
   * This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
   * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
   * and provides a location ID and custom attribute. Each upsert response is returned with the ID
   * of the corresponding request.
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param body         An object containing the fields to POST
   *                                                                         for the request.  See the corresponding
   *                                                                         object definition for field details.
   * @return Response from the API call
   */
  async bulkUpsertLocationCustomAttributes(
    body: BulkUpsertLocationCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpsertLocationCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/locations/custom-attributes/bulk-upsert'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkUpsertLocationCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      bulkUpsertLocationCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Lists the [custom attributes]($m/CustomAttribute) associated with a location.
   * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
   * in the same call.
   * When all response pages are retrieved, the results include all custom attributes that are
   * visible to the requesting application, including those that are owned by other applications
   * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param locationId        The ID of the target [location](entity:Location).
   * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
   * @param limit             The maximum number of results to return in a single paged response. This
   *                                     limit is advisory. The response might contain more or fewer results. The
   *                                     minimum value is 1 and the maximum value is 100. The default value is 20. For
   *                                     more information, see [Pagination](https://developer.squareup.com/docs/build-
   *                                     basics/common-api-patterns/pagination).
   * @param cursor            The cursor returned in the paged response from the previous call to this
   *                                     endpoint. Provide this cursor to retrieve the next page of results for your
   *                                     original request. For more information, see [Pagination](https://developer.
   *                                     squareup.com/docs/build-basics/common-api-patterns/pagination).
   * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
   *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
   *                                     Set this parameter to `true` to get the name and description of each custom
   *                                     attribute, information about the data type, or other definition details. The
   *                                     default value is `false`.
   * @return Response from the API call
   */
  async listLocationCustomAttributes(
    locationId: string,
    visibilityFilter?: string,
    limit?: number,
    cursor?: string,
    withDefinitions?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListLocationCustomAttributesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      visibilityFilter: [visibilityFilter, optional(string())],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      withDefinitions: [withDefinitions, optional(boolean())],
    });
    req.query('visibility_filter', mapped.visibilityFilter);
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('with_definitions', mapped.withDefinitions);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/custom-attributes`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      listLocationCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a [custom attribute]($m/CustomAttribute) associated with a location.
   * To delete a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param locationId  The ID of the target [location](entity:Location).
   * @param key         The key of the custom attribute to delete. This key must match the `key` of a custom
   *                              attribute definition in the Square seller account. If the requesting application is
   *                              not the definition owner, you must use the qualified key.
   * @return Response from the API call
   */
  async deleteLocationCustomAttribute(
    locationId: string,
    key: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteLocationCustomAttributeResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      key: [key, string()],
    });
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      deleteLocationCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a [custom attribute]($m/CustomAttribute) associated with a location.
   * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
   * in the same call.
   * To retrieve a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param locationId      The ID of the target [location](entity:Location).
   * @param key             The key of the custom attribute to retrieve. This key must match the `key` of a
   *                                   custom attribute definition in the Square seller account. If the requesting
   *                                   application is not the definition owner, you must use the qualified key.
   * @param withDefinition  Indicates whether to return the [custom attribute definition](entity:
   *                                   CustomAttributeDefinition) in the `definition` field of the custom attribute.
   *                                   Set this parameter to `true` to get the name and description of the custom
   *                                   attribute, information about the data type, or other definition details. The
   *                                   default value is `false`.
   * @param version         The current version of the custom attribute, which is used for strongly
   *                                   consistent reads to guarantee that you receive the most up-to-date data. When
   *                                   included in the request, Square returns the specified version or a higher
   *                                   version if one exists. If the specified version is higher than the current
   *                                   version, Square returns a `BAD_REQUEST` error.
   * @return Response from the API call
   */
  async retrieveLocationCustomAttribute(
    locationId: string,
    key: string,
    withDefinition?: boolean,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLocationCustomAttributeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      key: [key, string()],
      withDefinition: [withDefinition, optional(boolean())],
      version: [version, optional(number())],
    });
    req.query('with_definition', mapped.withDefinition);
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveLocationCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates or updates a [custom attribute]($m/CustomAttribute) for a location.
   * Use this endpoint to set the value of a custom attribute for a specified location.
   * A custom attribute is based on a custom attribute definition in a Square seller account, which
   * is created using the
   * [CreateLocationCustomAttributeDefinition]($e/LocationCustomAttributes/CreateLocationCustomAttributeD
   * efinition) endpoint.
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @param locationId   The ID of the target [location](entity:
   *                                                                    Location).
   * @param key          The key of the custom attribute to create or
   *                                                                    update. This key must match the `key` of a
   *                                                                    custom attribute definition in the Square
   *                                                                    seller account. If the requesting application
   *                                                                    is not the definition owner, you must use the
   *                                                                    qualified key.
   * @param body         An object containing the fields to POST for
   *                                                                    the request.  See the corresponding object
   *                                                                    definition for field details.
   * @return Response from the API call
   */
  async upsertLocationCustomAttribute(
    locationId: string,
    key: string,
    body: UpsertLocationCustomAttributeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpsertLocationCustomAttributeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      key: [key, string()],
      body: [body, upsertLocationCustomAttributeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      upsertLocationCustomAttributeResponseSchema,
      requestOptions
    );
  }
}
