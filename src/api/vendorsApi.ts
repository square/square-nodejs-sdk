import { ApiResponse, RequestOptions } from '../core';
import {
  BulkCreateVendorsRequest,
  bulkCreateVendorsRequestSchema,
} from '../models/bulkCreateVendorsRequest';
import {
  BulkCreateVendorsResponse,
  bulkCreateVendorsResponseSchema,
} from '../models/bulkCreateVendorsResponse';
import {
  BulkRetrieveVendorsRequest,
  bulkRetrieveVendorsRequestSchema,
} from '../models/bulkRetrieveVendorsRequest';
import {
  BulkRetrieveVendorsResponse,
  bulkRetrieveVendorsResponseSchema,
} from '../models/bulkRetrieveVendorsResponse';
import {
  BulkUpdateVendorsRequest,
  bulkUpdateVendorsRequestSchema,
} from '../models/bulkUpdateVendorsRequest';
import {
  BulkUpdateVendorsResponse,
  bulkUpdateVendorsResponseSchema,
} from '../models/bulkUpdateVendorsResponse';
import {
  CreateVendorRequest,
  createVendorRequestSchema,
} from '../models/createVendorRequest';
import {
  CreateVendorResponse,
  createVendorResponseSchema,
} from '../models/createVendorResponse';
import {
  RetrieveVendorResponse,
  retrieveVendorResponseSchema,
} from '../models/retrieveVendorResponse';
import {
  SearchVendorsRequest,
  searchVendorsRequestSchema,
} from '../models/searchVendorsRequest';
import {
  SearchVendorsResponse,
  searchVendorsResponseSchema,
} from '../models/searchVendorsResponse';
import {
  UpdateVendorRequest,
  updateVendorRequestSchema,
} from '../models/updateVendorRequest';
import {
  UpdateVendorResponse,
  updateVendorResponseSchema,
} from '../models/updateVendorResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class VendorsApi extends BaseApi {
  /**
   * Creates one or more [Vendor]($m/Vendor) objects to represent suppliers to a seller.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async bulkCreateVendors(
    body: BulkCreateVendorsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkCreateVendorsResponse>> {
    const req = this.createRequest('POST', '/v2/vendors/bulk-create');
    const mapped = req.prepareArgs({
      body: [body, bulkCreateVendorsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(bulkCreateVendorsResponseSchema, requestOptions);
  }

  /**
   * Retrieves one or more vendors of specified [Vendor]($m/Vendor) IDs.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async bulkRetrieveVendors(
    body: BulkRetrieveVendorsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkRetrieveVendorsResponse>> {
    const req = this.createRequest('POST', '/v2/vendors/bulk-retrieve');
    const mapped = req.prepareArgs({
      body: [body, bulkRetrieveVendorsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(bulkRetrieveVendorsResponseSchema, requestOptions);
  }

  /**
   * Updates one or more of existing [Vendor]($m/Vendor) objects as suppliers to a seller.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async bulkUpdateVendors(
    body: BulkUpdateVendorsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpdateVendorsResponse>> {
    const req = this.createRequest('PUT', '/v2/vendors/bulk-update');
    const mapped = req.prepareArgs({
      body: [body, bulkUpdateVendorsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(bulkUpdateVendorsResponseSchema, requestOptions);
  }

  /**
   * Creates a single [Vendor]($m/Vendor) object to represent a supplier to a seller.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createVendor(
    body: CreateVendorRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateVendorResponse>> {
    const req = this.createRequest('POST', '/v2/vendors/create');
    const mapped = req.prepareArgs({ body: [body, createVendorRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createVendorResponseSchema, requestOptions);
  }

  /**
   * Searches for vendors using a filter against supported [Vendor]($m/Vendor) properties and a supported
   * sorter.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchVendors(
    body: SearchVendorsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchVendorsResponse>> {
    const req = this.createRequest('POST', '/v2/vendors/search');
    const mapped = req.prepareArgs({
      body: [body, searchVendorsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchVendorsResponseSchema, requestOptions);
  }

  /**
   * Retrieves the vendor of a specified [Vendor]($m/Vendor) ID.
   *
   * @param vendorId  ID of the [Vendor](entity:Vendor) to retrieve.
   * @return Response from the API call
   */
  async retrieveVendor(
    vendorId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveVendorResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ vendorId: [vendorId, string()] });
    req.appendTemplatePath`/v2/vendors/${mapped.vendorId}`;
    return req.callAsJson(retrieveVendorResponseSchema, requestOptions);
  }

  /**
   * Updates an existing [Vendor]($m/Vendor) object as a supplier to a seller.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @param vendorId
   * @return Response from the API call
   */
  async updateVendor(
    body: UpdateVendorRequest,
    vendorId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateVendorResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      body: [body, updateVendorRequestSchema],
      vendorId: [vendorId, string()],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/vendors/${mapped.vendorId}`;
    return req.callAsJson(updateVendorResponseSchema, requestOptions);
  }
}
