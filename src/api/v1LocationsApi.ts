import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { V1Merchant, v1MerchantSchema } from '../models/v1Merchant';
import { array } from '../schema';
import { BaseApi } from './baseApi';

export class V1LocationsApi extends BaseApi {
  /**
   * Get the general information for a business.
   *
   * @return Response from the API call
   * @deprecated
   */
  async retrieveBusiness(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Merchant>> {
    const req = this.createRequest('GET', '/v1/me');
    req.deprecated('V1LocationsApi.retrieveBusiness');
    return req.callAsJson(v1MerchantSchema, requestOptions);
  }

  /**
   * Provides details for all business locations associated with a Square
   * account, including the Square-assigned object ID for the location.
   *
   * @return Response from the API call
   * @deprecated
   */
  async listLocations(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V1Merchant[]>> {
    const req = this.createRequest('GET', '/v1/me/locations');
    req.deprecated('V1LocationsApi.listLocations');
    return req.callAsJson(array(v1MerchantSchema), requestOptions);
  }
}
