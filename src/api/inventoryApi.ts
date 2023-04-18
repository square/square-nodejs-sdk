import { ApiResponse, RequestOptions } from '../core';
import {
  BatchChangeInventoryRequest,
  batchChangeInventoryRequestSchema,
} from '../models/batchChangeInventoryRequest';
import {
  BatchChangeInventoryResponse,
  batchChangeInventoryResponseSchema,
} from '../models/batchChangeInventoryResponse';
import {
  BatchRetrieveInventoryChangesRequest,
  batchRetrieveInventoryChangesRequestSchema,
} from '../models/batchRetrieveInventoryChangesRequest';
import {
  BatchRetrieveInventoryChangesResponse,
  batchRetrieveInventoryChangesResponseSchema,
} from '../models/batchRetrieveInventoryChangesResponse';
import {
  BatchRetrieveInventoryCountsRequest,
  batchRetrieveInventoryCountsRequestSchema,
} from '../models/batchRetrieveInventoryCountsRequest';
import {
  BatchRetrieveInventoryCountsResponse,
  batchRetrieveInventoryCountsResponseSchema,
} from '../models/batchRetrieveInventoryCountsResponse';
import {
  RetrieveInventoryAdjustmentResponse,
  retrieveInventoryAdjustmentResponseSchema,
} from '../models/retrieveInventoryAdjustmentResponse';
import {
  RetrieveInventoryChangesResponse,
  retrieveInventoryChangesResponseSchema,
} from '../models/retrieveInventoryChangesResponse';
import {
  RetrieveInventoryCountResponse,
  retrieveInventoryCountResponseSchema,
} from '../models/retrieveInventoryCountResponse';
import {
  RetrieveInventoryPhysicalCountResponse,
  retrieveInventoryPhysicalCountResponseSchema,
} from '../models/retrieveInventoryPhysicalCountResponse';
import {
  RetrieveInventoryTransferResponse,
  retrieveInventoryTransferResponseSchema,
} from '../models/retrieveInventoryTransferResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class InventoryApi extends BaseApi {
  /**
   * Deprecated version of [RetrieveInventoryAdjustment](api-endpoint:Inventory-
   * RetrieveInventoryAdjustment) after the endpoint URL
   * is updated to conform to the standard convention.
   *
   * @param adjustmentId  ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve.
   * @return Response from the API call
   * @deprecated
   */
  async deprecatedRetrieveInventoryAdjustment(
    adjustmentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryAdjustmentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ adjustmentId: [adjustmentId, string()] });
    req.appendTemplatePath`/v2/inventory/adjustment/${mapped.adjustmentId}`;
    req.deprecated('InventoryApi.deprecatedRetrieveInventoryAdjustment');
    return req.callAsJson(
      retrieveInventoryAdjustmentResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns the [InventoryAdjustment]($m/InventoryAdjustment) object
   * with the provided `adjustment_id`.
   *
   * @param adjustmentId  ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve.
   * @return Response from the API call
   */
  async retrieveInventoryAdjustment(
    adjustmentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryAdjustmentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ adjustmentId: [adjustmentId, string()] });
    req.appendTemplatePath`/v2/inventory/adjustments/${mapped.adjustmentId}`;
    return req.callAsJson(
      retrieveInventoryAdjustmentResponseSchema,
      requestOptions
    );
  }

  /**
   * Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after the
   * endpoint URL
   * is updated to conform to the standard convention.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   * @deprecated
   */
  async deprecatedBatchChangeInventory(
    body: BatchChangeInventoryRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchChangeInventoryResponse>> {
    const req = this.createRequest('POST', '/v2/inventory/batch-change');
    const mapped = req.prepareArgs({
      body: [body, batchChangeInventoryRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.deprecated('InventoryApi.deprecatedBatchChangeInventory');
    return req.callAsJson(batchChangeInventoryResponseSchema, requestOptions);
  }

  /**
   * Deprecated version of [BatchRetrieveInventoryChanges](api-endpoint:Inventory-
   * BatchRetrieveInventoryChanges) after the endpoint URL
   * is updated to conform to the standard convention.
   *
   * @param body         An object containing the fields to POST for
   *                                                                    the request.  See the corresponding object
   *                                                                    definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async deprecatedBatchRetrieveInventoryChanges(
    body: BatchRetrieveInventoryChangesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchRetrieveInventoryChangesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/inventory/batch-retrieve-changes'
    );
    const mapped = req.prepareArgs({
      body: [body, batchRetrieveInventoryChangesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.deprecated('InventoryApi.deprecatedBatchRetrieveInventoryChanges');
    return req.callAsJson(
      batchRetrieveInventoryChangesResponseSchema,
      requestOptions
    );
  }

  /**
   * Deprecated version of [BatchRetrieveInventoryCounts](api-endpoint:Inventory-
   * BatchRetrieveInventoryCounts) after the endpoint URL
   * is updated to conform to the standard convention.
   *
   * @param body         An object containing the fields to POST for the
   *                                                                   request.  See the corresponding object
   *                                                                   definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  async deprecatedBatchRetrieveInventoryCounts(
    body: BatchRetrieveInventoryCountsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchRetrieveInventoryCountsResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/inventory/batch-retrieve-counts'
    );
    const mapped = req.prepareArgs({
      body: [body, batchRetrieveInventoryCountsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.deprecated('InventoryApi.deprecatedBatchRetrieveInventoryCounts');
    return req.callAsJson(
      batchRetrieveInventoryCountsResponseSchema,
      requestOptions
    );
  }

  /**
   * Applies adjustments and counts to the provided item quantities.
   *
   * On success: returns the current calculated counts for all objects
   * referenced in the request.
   * On failure: returns a list of related errors.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  async batchChangeInventory(
    body: BatchChangeInventoryRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchChangeInventoryResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/inventory/changes/batch-create'
    );
    const mapped = req.prepareArgs({
      body: [body, batchChangeInventoryRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(batchChangeInventoryResponseSchema, requestOptions);
  }

  /**
   * Returns historical physical counts and adjustments based on the
   * provided filter criteria.
   *
   * Results are paginated and sorted in ascending order according their
   * `occurred_at` timestamp (oldest first).
   *
   * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
   * that cannot be handled by other, simpler endpoints.
   *
   * @param body         An object containing the fields to POST for
   *                                                                    the request.  See the corresponding object
   *                                                                    definition for field details.
   * @return Response from the API call
   */
  async batchRetrieveInventoryChanges(
    body: BatchRetrieveInventoryChangesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchRetrieveInventoryChangesResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/inventory/changes/batch-retrieve'
    );
    const mapped = req.prepareArgs({
      body: [body, batchRetrieveInventoryChangesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      batchRetrieveInventoryChangesResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns current counts for the provided
   * [CatalogObject]($m/CatalogObject)s at the requested
   * [Location]($m/Location)s.
   *
   * Results are paginated and sorted in descending order according to their
   * `calculated_at` timestamp (newest first).
   *
   * When `updated_after` is specified, only counts that have changed since that
   * time (based on the server timestamp for the most recent change) are
   * returned. This allows clients to perform a "sync" operation, for example
   * in response to receiving a Webhook notification.
   *
   * @param body         An object containing the fields to POST for the
   *                                                                   request.  See the corresponding object
   *                                                                   definition for field details.
   * @return Response from the API call
   */
  async batchRetrieveInventoryCounts(
    body: BatchRetrieveInventoryCountsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchRetrieveInventoryCountsResponse>> {
    const req = this.createRequest(
      'POST',
      '/v2/inventory/counts/batch-retrieve'
    );
    const mapped = req.prepareArgs({
      body: [body, batchRetrieveInventoryCountsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      batchRetrieveInventoryCountsResponseSchema,
      requestOptions
    );
  }

  /**
   * Deprecated version of [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-
   * RetrieveInventoryPhysicalCount) after the endpoint URL
   * is updated to conform to the standard convention.
   *
   * @param physicalCountId   ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve.
   * @return Response from the API call
   * @deprecated
   */
  async deprecatedRetrieveInventoryPhysicalCount(
    physicalCountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryPhysicalCountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      physicalCountId: [physicalCountId, string()],
    });
    req.appendTemplatePath`/v2/inventory/physical-count/${mapped.physicalCountId}`;
    req.deprecated('InventoryApi.deprecatedRetrieveInventoryPhysicalCount');
    return req.callAsJson(
      retrieveInventoryPhysicalCountResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns the [InventoryPhysicalCount]($m/InventoryPhysicalCount)
   * object with the provided `physical_count_id`.
   *
   * @param physicalCountId   ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve.
   * @return Response from the API call
   */
  async retrieveInventoryPhysicalCount(
    physicalCountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryPhysicalCountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      physicalCountId: [physicalCountId, string()],
    });
    req.appendTemplatePath`/v2/inventory/physical-counts/${mapped.physicalCountId}`;
    return req.callAsJson(
      retrieveInventoryPhysicalCountResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns the [InventoryTransfer]($m/InventoryTransfer) object
   * with the provided `transfer_id`.
   *
   * @param transferId  ID of the [InventoryTransfer](entity:InventoryTransfer) to retrieve.
   * @return Response from the API call
   */
  async retrieveInventoryTransfer(
    transferId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryTransferResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ transferId: [transferId, string()] });
    req.appendTemplatePath`/v2/inventory/transfers/${mapped.transferId}`;
    return req.callAsJson(
      retrieveInventoryTransferResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves the current calculated stock count for a given
   * [CatalogObject]($m/CatalogObject) at a given set of
   * [Location]($m/Location)s. Responses are paginated and unsorted.
   * For more sophisticated queries, use a batch endpoint.
   *
   * @param catalogObjectId   ID of the [CatalogObject](entity:CatalogObject) to retrieve.
   * @param locationIds       The [Location](entity:Location) IDs to look up as a comma-separated list. An
   *                                    empty list queries all locations.
   * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for the original query.  See the
   *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
   *                                    guide for more information.
   * @return Response from the API call
   */
  async retrieveInventoryCount(
    catalogObjectId: string,
    locationIds?: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryCountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      catalogObjectId: [catalogObjectId, string()],
      locationIds: [locationIds, optional(string())],
      cursor: [cursor, optional(string())],
    });
    req.query('location_ids', mapped.locationIds);
    req.query('cursor', mapped.cursor);
    req.appendTemplatePath`/v2/inventory/${mapped.catalogObjectId}`;
    return req.callAsJson(retrieveInventoryCountResponseSchema, requestOptions);
  }

  /**
   * Returns a set of physical counts and inventory adjustments for the
   * provided [CatalogObject](entity:CatalogObject) at the requested
   * [Location](entity:Location)s.
   *
   * You can achieve the same result by calling [BatchRetrieveInventoryChanges](api-endpoint:Inventory-
   * BatchRetrieveInventoryChanges)
   * and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.
   *
   * Results are paginated and sorted in descending order according to their
   * `occurred_at` timestamp (newest first).
   *
   * There are no limits on how far back the caller can page. This endpoint can be
   * used to display recent changes for a specific item. For more
   * sophisticated queries, use a batch endpoint.
   *
   * @param catalogObjectId   ID of the [CatalogObject](entity:CatalogObject) to retrieve.
   * @param locationIds       The [Location](entity:Location) IDs to look up as a comma-separated list. An
   *                                    empty list queries all locations.
   * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for the original query.  See the
   *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
   *                                    guide for more information.
   * @return Response from the API call
   * @deprecated
   */
  async retrieveInventoryChanges(
    catalogObjectId: string,
    locationIds?: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveInventoryChangesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      catalogObjectId: [catalogObjectId, string()],
      locationIds: [locationIds, optional(string())],
      cursor: [cursor, optional(string())],
    });
    req.query('location_ids', mapped.locationIds);
    req.query('cursor', mapped.cursor);
    req.appendTemplatePath`/v2/inventory/${mapped.catalogObjectId}/changes`;
    req.deprecated('InventoryApi.retrieveInventoryChanges');
    return req.callAsJson(
      retrieveInventoryChangesResponseSchema,
      requestOptions
    );
  }
}
