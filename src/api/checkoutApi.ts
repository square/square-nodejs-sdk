import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import {
  CreateCheckoutRequest,
  createCheckoutRequestSchema,
} from '../models/createCheckoutRequest';
import {
  CreateCheckoutResponse,
  createCheckoutResponseSchema,
} from '../models/createCheckoutResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class CheckoutApi extends BaseApi {
  /**
   * Links a `checkoutId` to a `checkout_page_url` that customers will
   * be directed to in order to provide their payment information using a
   * payment processing workflow hosted on connect.squareup.com.
   *
   * @param locationId  The ID of the business location to associate the checkout with.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createCheckout(
    locationId: string,
    body: CreateCheckoutRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCheckoutResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      body: [body, createCheckoutRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/v2/locations/${mapped.locationId}/checkouts`;
    return req.callAsJson(createCheckoutResponseSchema, requestOptions);
  }
}
