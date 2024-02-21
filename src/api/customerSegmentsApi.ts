import { ApiResponse, RequestOptions } from '../core';
import {
  ListCustomerSegmentsResponse,
  listCustomerSegmentsResponseSchema,
} from '../models/listCustomerSegmentsResponse';
import {
  RetrieveCustomerSegmentResponse,
  retrieveCustomerSegmentResponseSchema,
} from '../models/retrieveCustomerSegmentResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CustomerSegmentsApi extends BaseApi {
  /**
   * Retrieves the list of customer segments of a business.
   *
   * @param cursor A pagination cursor returned by previous calls to `ListCustomerSegments`. This cursor is
   *                         used to retrieve the next set of query results.  For more information, see
   *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                         patterns/pagination).
   * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
   *                         response might contain more or fewer results. If the specified limit is less than 1 or
   *                         greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The
   *                         default value is 50.  For more information, see [Pagination](https://developer.squareup.
   *                         com/docs/build-basics/common-api-patterns/pagination).
   * @return Response from the API call
   */
  async listCustomerSegments(
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCustomerSegmentsResponse>> {
    const req = this.createRequest('GET', '/v2/customers/segments');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listCustomerSegmentsResponseSchema, requestOptions);
  }

  /**
   * Retrieves a specific customer segment as identified by the `segment_id` value.
   *
   * @param segmentId  The Square-issued ID of the customer segment.
   * @return Response from the API call
   */
  async retrieveCustomerSegment(
    segmentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveCustomerSegmentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ segmentId: [segmentId, string()] });
    req.appendTemplatePath`/v2/customers/segments/${mapped.segmentId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(
      retrieveCustomerSegmentResponseSchema,
      requestOptions
    );
  }
}
