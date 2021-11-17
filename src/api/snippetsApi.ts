import { ApiResponse, RequestOptions } from '../core';
import {
  DeleteSnippetResponse,
  deleteSnippetResponseSchema,
} from '../models/deleteSnippetResponse';
import {
  RetrieveSnippetResponse,
  retrieveSnippetResponseSchema,
} from '../models/retrieveSnippetResponse';
import {
  UpsertSnippetRequest,
  upsertSnippetRequestSchema,
} from '../models/upsertSnippetRequest';
import {
  UpsertSnippetResponse,
  upsertSnippetResponseSchema,
} from '../models/upsertSnippetResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class SnippetsApi extends BaseApi {
  /**
   * Removes your snippet from a Square Online site.
   *
   * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
   * information, see [Early access program for Square Online APIs](https://developer.squareup.
   * com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @param siteId  The ID of the site that contains the snippet.
   * @return Response from the API call
   */
  async deleteSnippet(
    siteId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteSnippetResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ siteId: [siteId, string()] });
    req.appendTemplatePath`/v2/sites/${mapped.siteId}/snippet`;
    return req.callAsJson(deleteSnippetResponseSchema, requestOptions);
  }

  /**
   * Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet
   * applications, but you can retrieve only the snippet that was added by your application.
   *
   * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
   * information, see [Early access program for Square Online APIs](https://developer.squareup.
   * com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @param siteId  The ID of the site that contains the snippet.
   * @return Response from the API call
   */
  async retrieveSnippet(
    siteId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveSnippetResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ siteId: [siteId, string()] });
    req.appendTemplatePath`/v2/sites/${mapped.siteId}/snippet`;
    return req.callAsJson(retrieveSnippetResponseSchema, requestOptions);
  }

  /**
   * Adds a snippet to a Square Online site or updates the existing snippet on the site.
   * The snippet code is appended to the end of the `head` element on every page of the site, except
   * checkout pages. A snippet application can add one snippet to a given site.
   *
   * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
   * information, see [Early access program for Square Online APIs](https://developer.squareup.
   * com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @param siteId       The ID of the site where you want to add or update the snippet.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async upsertSnippet(
    siteId: string,
    body: UpsertSnippetRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpsertSnippetResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      siteId: [siteId, string()],
      body: [body, upsertSnippetRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/sites/${mapped.siteId}/snippet`;
    return req.callAsJson(upsertSnippetResponseSchema, requestOptions);
  }
}
