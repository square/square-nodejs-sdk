import { ApiResponse, RequestOptions } from '../core';
import {
  BulkDeleteBookingCustomAttributesRequest,
  bulkDeleteBookingCustomAttributesRequestSchema,
} from '../models/bulkDeleteBookingCustomAttributesRequest';
import {
  BulkDeleteBookingCustomAttributesResponse,
  bulkDeleteBookingCustomAttributesResponseSchema,
} from '../models/bulkDeleteBookingCustomAttributesResponse';
import {
  BulkUpsertBookingCustomAttributesRequest,
  bulkUpsertBookingCustomAttributesRequestSchema,
} from '../models/bulkUpsertBookingCustomAttributesRequest';
import {
  BulkUpsertBookingCustomAttributesResponse,
  bulkUpsertBookingCustomAttributesResponseSchema,
} from '../models/bulkUpsertBookingCustomAttributesResponse';
import {
  CreateBookingCustomAttributeDefinitionRequest,
  createBookingCustomAttributeDefinitionRequestSchema,
} from '../models/createBookingCustomAttributeDefinitionRequest';
import {
  CreateBookingCustomAttributeDefinitionResponse,
  createBookingCustomAttributeDefinitionResponseSchema,
} from '../models/createBookingCustomAttributeDefinitionResponse';
import {
  DeleteBookingCustomAttributeDefinitionResponse,
  deleteBookingCustomAttributeDefinitionResponseSchema,
} from '../models/deleteBookingCustomAttributeDefinitionResponse';
import {
  DeleteBookingCustomAttributeResponse,
  deleteBookingCustomAttributeResponseSchema,
} from '../models/deleteBookingCustomAttributeResponse';
import {
  ListBookingCustomAttributeDefinitionsResponse,
  listBookingCustomAttributeDefinitionsResponseSchema,
} from '../models/listBookingCustomAttributeDefinitionsResponse';
import {
  ListBookingCustomAttributesResponse,
  listBookingCustomAttributesResponseSchema,
} from '../models/listBookingCustomAttributesResponse';
import {
  RetrieveBookingCustomAttributeDefinitionResponse,
  retrieveBookingCustomAttributeDefinitionResponseSchema,
} from '../models/retrieveBookingCustomAttributeDefinitionResponse';
import {
  RetrieveBookingCustomAttributeResponse,
  retrieveBookingCustomAttributeResponseSchema,
} from '../models/retrieveBookingCustomAttributeResponse';
import {
  UpdateBookingCustomAttributeDefinitionRequest,
  updateBookingCustomAttributeDefinitionRequestSchema,
} from '../models/updateBookingCustomAttributeDefinitionRequest';
import {
  UpdateBookingCustomAttributeDefinitionResponse,
  updateBookingCustomAttributeDefinitionResponseSchema,
} from '../models/updateBookingCustomAttributeDefinitionResponse';
import {
  UpsertBookingCustomAttributeRequest,
  upsertBookingCustomAttributeRequestSchema,
} from '../models/upsertBookingCustomAttributeRequest';
import {
  UpsertBookingCustomAttributeResponse,
  upsertBookingCustomAttributeResponseSchema,
} from '../models/upsertBookingCustomAttributeResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class BookingCustomAttributesApi extends BaseApi {
  /**
   * Get all bookings custom attribute definitions.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param limit  The maximum number of results to return in a single paged response. This limit is
   *                         advisory. The response might contain more or fewer results. The minimum value is 1 and the
   *                         maximum value is 100. The default value is 20. For more information, see
   *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                         patterns/pagination).
   * @param cursor The cursor returned in the paged response from the previous call to this endpoint.
   *                         Provide this cursor to retrieve the next page of results for your original request. For
   *                         more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
   *                         api-patterns/pagination).
   * @return Response from the API call
   */
  async listBookingCustomAttributeDefinitions(
    limit?: number,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListBookingCustomAttributeDefinitionsResponse>> {
    const req = this.createRequest(
      'GET',
      '/v2/bookings/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
    });
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      listBookingCustomAttributeDefinitionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param body         An object containing the fields to
   *                                                                             POST for the request.  See the
   *                                                                             corresponding object definition for
   *                                                                             field details.
   * @return Response from the API call
   */
  async createBookingCustomAttributeDefinition(
    body: CreateBookingCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateBookingCustomAttributeDefinitionResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/bookings/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      body: [body, createBookingCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      createBookingCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param key The key of the custom attribute definition to delete.
   * @return Response from the API call
   */
  async deleteBookingCustomAttributeDefinition(
    key: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteBookingCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ key: [key, string()] });
    req.appendTemplatePath`/v2/bookings/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      deleteBookingCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
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
  async retrieveBookingCustomAttributeDefinition(
    key: string,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveBookingCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      key: [key, string()],
      version: [version, optional(number())],
    });
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/bookings/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveBookingCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param key          The key of the custom attribute
   *                                                                             definition to update.
   * @param body         An object containing the fields to
   *                                                                             POST for the request.  See the
   *                                                                             corresponding object definition for
   *                                                                             field details.
   * @return Response from the API call
   */
  async updateBookingCustomAttributeDefinition(
    key: string,
    body: UpdateBookingCustomAttributeDefinitionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateBookingCustomAttributeDefinitionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      key: [key, string()],
      body: [body, updateBookingCustomAttributeDefinitionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/bookings/custom-attribute-definitions/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      updateBookingCustomAttributeDefinitionResponseSchema,
      requestOptions
    );
  }

  /**
   * Bulk deletes bookings custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param body         An object containing the fields to POST
   *                                                                        for the request.  See the corresponding
   *                                                                        object definition for field details.
   * @return Response from the API call
   */
  async bulkDeleteBookingCustomAttributes(
    body: BulkDeleteBookingCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkDeleteBookingCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/bookings/custom-attributes/bulk-delete'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkDeleteBookingCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      bulkDeleteBookingCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Bulk upserts bookings custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param body         An object containing the fields to POST
   *                                                                        for the request.  See the corresponding
   *                                                                        object definition for field details.
   * @return Response from the API call
   */
  async bulkUpsertBookingCustomAttributes(
    body: BulkUpsertBookingCustomAttributesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpsertBookingCustomAttributesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/bookings/custom-attributes/bulk-upsert'
    );
    const mapped = req.prepareArgs({
      body: [body, bulkUpsertBookingCustomAttributesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      bulkUpsertBookingCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Lists a booking's custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param bookingId        The ID of the target [booking](entity:Booking).
   * @param limit            The maximum number of results to return in a single paged response. This limit
   *                                    is advisory. The response might contain more or fewer results. The minimum
   *                                    value is 1 and the maximum value is 100. The default value is 20. For more
   *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
   *                                    basics/common-api-patterns/pagination).
   * @param cursor           The cursor returned in the paged response from the previous call to this
   *                                    endpoint. Provide this cursor to retrieve the next page of results for your
   *                                    original request. For more information, see [Pagination](https://developer.
   *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
   * @param withDefinitions  Indicates whether to return the [custom attribute definition](entity:
   *                                    CustomAttributeDefinition) in the `definition` field of each custom attribute.
   *                                    Set this parameter to `true` to get the name and description of each custom
   *                                    attribute, information about the data type, or other definition details. The
   *                                    default value is `false`.
   * @return Response from the API call
   */
  async listBookingCustomAttributes(
    bookingId: string,
    limit?: number,
    cursor?: string,
    withDefinitions?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListBookingCustomAttributesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      limit: [limit, optional(number())],
      cursor: [cursor, optional(string())],
      withDefinitions: [withDefinitions, optional(boolean())],
    });
    req.query('limit', mapped.limit);
    req.query('cursor', mapped.cursor);
    req.query('with_definitions', mapped.withDefinitions);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}/custom-attributes`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      listBookingCustomAttributesResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param bookingId  The ID of the target [booking](entity:Booking).
   * @param key        The key of the custom attribute to delete. This key must match the `key` of a custom
   *                             attribute definition in the Square seller account. If the requesting application is
   *                             not the definition owner, you must use the qualified key.
   * @return Response from the API call
   */
  async deleteBookingCustomAttribute(
    bookingId: string,
    key: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteBookingCustomAttributeResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      key: [key, string()],
    });
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      deleteBookingCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @param bookingId       The ID of the target [booking](entity:Booking).
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
  async retrieveBookingCustomAttribute(
    bookingId: string,
    key: string,
    withDefinition?: boolean,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveBookingCustomAttributeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      key: [key, string()],
      withDefinition: [withDefinition, optional(boolean())],
      version: [version, optional(number())],
    });
    req.query('with_definition', mapped.withDefinition);
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveBookingCustomAttributeResponseSchema,
      requestOptions
    );
  }

  /**
   * Upserts a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
   * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
   * to *Appointments Plus*
   * or *Appointments Premium*.
   *
   * @param bookingId    The ID of the target [booking](entity:Booking).
   * @param key          The key of the custom attribute to create or
   *                                                                   update. This key must match the `key` of a
   *                                                                   custom attribute definition in the Square seller
   *                                                                   account. If the requesting application is not
   *                                                                   the definition owner, you must use the qualified
   *                                                                   key.
   * @param body         An object containing the fields to POST for the
   *                                                                   request.  See the corresponding object
   *                                                                   definition for field details.
   * @return Response from the API call
   */
  async upsertBookingCustomAttribute(
    bookingId: string,
    key: string,
    body: UpsertBookingCustomAttributeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpsertBookingCustomAttributeResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      bookingId: [bookingId, string()],
      key: [key, string()],
      body: [body, upsertBookingCustomAttributeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/bookings/${mapped.bookingId}/custom-attributes/${mapped.key}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      upsertBookingCustomAttributeResponseSchema,
      requestOptions
    );
  }
}
