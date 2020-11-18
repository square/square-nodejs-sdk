import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  ListCustomerSegmentsResponse,
  listCustomerSegmentsResponseSchema,
} from '../models/listCustomerSegmentsResponse';
import {
  RetrieveCustomerSegmentResponse,
  retrieveCustomerSegmentResponseSchema,
} from '../models/retrieveCustomerSegmentResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class CustomerSegmentsApi extends BaseApi {
  /**
   * Retrieves the list of customer segments of a business.
   *
   * @param cursor A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to
   *                         retrieve the next set of query results.  See the [Pagination guide](https://developer.
   *                         squareup.com/docs/working-with-apis/pagination) for more information.
   * @return Response from the API call
   */
  async listCustomerSegments(
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCustomerSegmentsResponse>> {
    const req = this.createRequest('GET', '/v2/customers/segments');
    const mapped = req.prepareArgs({ cursor: [cursor, optional(string())] });
    req.query('cursor', mapped.cursor);
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
    return req.callAsJson(
      retrieveCustomerSegmentResponseSchema,
      requestOptions
    );
  }
}
