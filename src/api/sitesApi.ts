import { ApiResponse, RequestOptions } from '../core';
import {
  ListSitesResponse,
  listSitesResponseSchema,
} from '../models/listSitesResponse';
import { BaseApi } from './baseApi';

export class SitesApi extends BaseApi {
  /**
   * Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the
   * `created_at` date.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
   * information, see [Early access program for Square Online APIs](https://developer.squareup.
   * com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @return Response from the API call
   */
  async listSites(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSitesResponse>> {
    const req = this.createRequest('GET', '/v2/sites');
    req.authenticate([{ global: true }]);
    return req.callAsJson(listSitesResponseSchema, requestOptions);
  }
}
