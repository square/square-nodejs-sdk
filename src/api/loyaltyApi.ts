import { ApiResponse, RequestOptions } from '../core';
import {
  AccumulateLoyaltyPointsRequest,
  accumulateLoyaltyPointsRequestSchema,
} from '../models/accumulateLoyaltyPointsRequest';
import {
  AccumulateLoyaltyPointsResponse,
  accumulateLoyaltyPointsResponseSchema,
} from '../models/accumulateLoyaltyPointsResponse';
import {
  AdjustLoyaltyPointsRequest,
  adjustLoyaltyPointsRequestSchema,
} from '../models/adjustLoyaltyPointsRequest';
import {
  AdjustLoyaltyPointsResponse,
  adjustLoyaltyPointsResponseSchema,
} from '../models/adjustLoyaltyPointsResponse';
import {
  CalculateLoyaltyPointsRequest,
  calculateLoyaltyPointsRequestSchema,
} from '../models/calculateLoyaltyPointsRequest';
import {
  CalculateLoyaltyPointsResponse,
  calculateLoyaltyPointsResponseSchema,
} from '../models/calculateLoyaltyPointsResponse';
import {
  CreateLoyaltyAccountRequest,
  createLoyaltyAccountRequestSchema,
} from '../models/createLoyaltyAccountRequest';
import {
  CreateLoyaltyAccountResponse,
  createLoyaltyAccountResponseSchema,
} from '../models/createLoyaltyAccountResponse';
import {
  CreateLoyaltyRewardRequest,
  createLoyaltyRewardRequestSchema,
} from '../models/createLoyaltyRewardRequest';
import {
  CreateLoyaltyRewardResponse,
  createLoyaltyRewardResponseSchema,
} from '../models/createLoyaltyRewardResponse';
import {
  DeleteLoyaltyRewardResponse,
  deleteLoyaltyRewardResponseSchema,
} from '../models/deleteLoyaltyRewardResponse';
import {
  ListLoyaltyProgramsResponse,
  listLoyaltyProgramsResponseSchema,
} from '../models/listLoyaltyProgramsResponse';
import {
  RedeemLoyaltyRewardRequest,
  redeemLoyaltyRewardRequestSchema,
} from '../models/redeemLoyaltyRewardRequest';
import {
  RedeemLoyaltyRewardResponse,
  redeemLoyaltyRewardResponseSchema,
} from '../models/redeemLoyaltyRewardResponse';
import {
  RetrieveLoyaltyAccountResponse,
  retrieveLoyaltyAccountResponseSchema,
} from '../models/retrieveLoyaltyAccountResponse';
import {
  RetrieveLoyaltyProgramResponse,
  retrieveLoyaltyProgramResponseSchema,
} from '../models/retrieveLoyaltyProgramResponse';
import {
  RetrieveLoyaltyRewardResponse,
  retrieveLoyaltyRewardResponseSchema,
} from '../models/retrieveLoyaltyRewardResponse';
import {
  SearchLoyaltyAccountsRequest,
  searchLoyaltyAccountsRequestSchema,
} from '../models/searchLoyaltyAccountsRequest';
import {
  SearchLoyaltyAccountsResponse,
  searchLoyaltyAccountsResponseSchema,
} from '../models/searchLoyaltyAccountsResponse';
import {
  SearchLoyaltyEventsRequest,
  searchLoyaltyEventsRequestSchema,
} from '../models/searchLoyaltyEventsRequest';
import {
  SearchLoyaltyEventsResponse,
  searchLoyaltyEventsResponseSchema,
} from '../models/searchLoyaltyEventsResponse';
import {
  SearchLoyaltyRewardsRequest,
  searchLoyaltyRewardsRequestSchema,
} from '../models/searchLoyaltyRewardsRequest';
import {
  SearchLoyaltyRewardsResponse,
  searchLoyaltyRewardsResponseSchema,
} from '../models/searchLoyaltyRewardsResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class LoyaltyApi extends BaseApi {
  /**
   * Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a
   * `mapping` with the `phone_number` of the buyer.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  async createLoyaltyAccount(
    body: CreateLoyaltyAccountRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateLoyaltyAccountResponse>> {
    const req = this.createRequest('POST', '/v2/loyalty/accounts');
    const mapped = req.prepareArgs({
      body: [body, createLoyaltyAccountRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createLoyaltyAccountResponseSchema, requestOptions);
  }

  /**
   * Searches for loyalty accounts in a loyalty program.
   *
   * You can search for a loyalty account using the phone number or customer ID associated with the
   * account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
   *
   * Search results are sorted by `created_at` in ascending order.
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async searchLoyaltyAccounts(
    body: SearchLoyaltyAccountsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchLoyaltyAccountsResponse>> {
    const req = this.createRequest('POST', '/v2/loyalty/accounts/search');
    const mapped = req.prepareArgs({
      body: [body, searchLoyaltyAccountsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchLoyaltyAccountsResponseSchema, requestOptions);
  }

  /**
   * Retrieves a loyalty account.
   *
   * @param accountId  The ID of the [loyalty account]($m/LoyaltyAccount) to retrieve.
   * @return Response from the API call
   */
  async retrieveLoyaltyAccount(
    accountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLoyaltyAccountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ accountId: [accountId, string()] });
    req.appendTemplatePath`/v2/loyalty/accounts/${mapped.accountId}`;
    return req.callAsJson(retrieveLoyaltyAccountResponseSchema, requestOptions);
  }

  /**
   * Adds points to a loyalty account.
   *
   * - If you are using the Orders API to manage orders, you only provide the `order_id`.
   * The endpoint reads the order to compute points to add to the buyer's account.
   * - If you are not using the Orders API to manage orders,
   * you first perform a client-side computation to compute the points.
   * For spend-based and visit-based programs, you can first call
   * [CalculateLoyaltyPoints]($e/Loyalty/CalculateLoyaltyPoints) to compute the points
   * that you provide to this endpoint.
   *
   * @param accountId    The [loyalty account]($m/LoyaltyAccount) ID to which
   *                                                              to add the points.
   * @param body         An object containing the fields to POST for the
   *                                                              request.  See the corresponding object definition for
   *                                                              field details.
   * @return Response from the API call
   */
  async accumulateLoyaltyPoints(
    accountId: string,
    body: AccumulateLoyaltyPointsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccumulateLoyaltyPointsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, accumulateLoyaltyPointsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/loyalty/accounts/${mapped.accountId}/accumulate`;
    return req.callAsJson(
      accumulateLoyaltyPointsResponseSchema,
      requestOptions
    );
  }

  /**
   * Adds points to or subtracts points from a buyer's account.
   *
   * Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow,
   * you call
   * [AccumulateLoyaltyPoints]($e/Loyalty/AccumulateLoyaltyPoints)
   * to add points when a buyer pays for the purchase.
   *
   * @param accountId    The ID of the [loyalty account]($m/LoyaltyAccount) in
   *                                                          which to adjust the points.
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async adjustLoyaltyPoints(
    accountId: string,
    body: AdjustLoyaltyPointsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdjustLoyaltyPointsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, adjustLoyaltyPointsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/loyalty/accounts/${mapped.accountId}/adjust`;
    return req.callAsJson(adjustLoyaltyPointsResponseSchema, requestOptions);
  }

  /**
   * Searches for loyalty events.
   *
   * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
   * buyer's loyalty account. Each change in the point balance
   * (for example, points earned, points redeemed, and points expired) is
   * recorded in the ledger. Using this endpoint, you can search the ledger for events.
   *
   * Search results are sorted by `created_at` in descending order.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async searchLoyaltyEvents(
    body: SearchLoyaltyEventsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchLoyaltyEventsResponse>> {
    const req = this.createRequest('POST', '/v2/loyalty/events/search');
    const mapped = req.prepareArgs({
      body: [body, searchLoyaltyEventsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchLoyaltyEventsResponseSchema, requestOptions);
  }

  /**
   * Returns a list of loyalty programs in the seller's account.
   * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can
   * have only one loyalty program, which is created and managed from the Seller Dashboard. For more
   * information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
   *
   *
   * Replaced with [RetrieveLoyaltyProgram]($e/Loyalty/RetrieveLoyaltyProgram) when used with the keyword
   * `main`.
   *
   * @return Response from the API call
   * @deprecated
   */
  async listLoyaltyPrograms(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListLoyaltyProgramsResponse>> {
    const req = this.createRequest('GET', '/v2/loyalty/programs');
    req.deprecated('LoyaltyApi.listLoyaltyPrograms');
    return req.callAsJson(listLoyaltyProgramsResponseSchema, requestOptions);
  }

  /**
   * Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword
   * `main`.
   *
   * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can
   * have only one loyalty program, which is created and managed from the Seller Dashboard. For more
   * information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
   *
   * @param programId  The ID of the loyalty program or the keyword `main`. Either value can be used to
   *                             retrieve the single loyalty program that belongs to the seller.
   * @return Response from the API call
   */
  async retrieveLoyaltyProgram(
    programId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLoyaltyProgramResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ programId: [programId, string()] });
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}`;
    return req.callAsJson(retrieveLoyaltyProgramResponseSchema, requestOptions);
  }

  /**
   * Calculates the points a purchase earns.
   *
   * - If you are using the Orders API to manage orders, you provide the `order_id` in the request. The
   * endpoint calculates the points by reading the order.
   * - If you are not using the Orders API to manage orders, you provide the purchase amount in
   * the request for the endpoint to calculate the points.
   *
   * An application might call this endpoint to show the points that a buyer can earn with the
   * specific purchase.
   *
   * For spend-based and visit-based programs, the `tax_mode` setting of the accrual rule indicates how
   * taxes should be treated for loyalty points accrual.
   *
   * @param programId    The [loyalty program]($m/LoyaltyProgram) ID, which
   *                                                             defines the rules for accruing points.
   * @param body         An object containing the fields to POST for the
   *                                                             request.  See the corresponding object definition for
   *                                                             field details.
   * @return Response from the API call
   */
  async calculateLoyaltyPoints(
    programId: string,
    body: CalculateLoyaltyPointsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CalculateLoyaltyPointsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      programId: [programId, string()],
      body: [body, calculateLoyaltyPointsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}/calculate`;
    return req.callAsJson(calculateLoyaltyPointsResponseSchema, requestOptions);
  }

  /**
   * Creates a loyalty reward. In the process, the endpoint does following:
   *
   * - Uses the `reward_tier_id` in the request to determine the number of points
   * to lock for this reward.
   * - If the request includes `order_id`, it adds the reward and related discount to the order.
   *
   * After a reward is created, the points are locked and
   * not available for the buyer to redeem another reward.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async createLoyaltyReward(
    body: CreateLoyaltyRewardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateLoyaltyRewardResponse>> {
    const req = this.createRequest('POST', '/v2/loyalty/rewards');
    const mapped = req.prepareArgs({
      body: [body, createLoyaltyRewardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createLoyaltyRewardResponseSchema, requestOptions);
  }

  /**
   * Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns
   * results for all loyalty accounts.
   * If you include a `query` object, `loyalty_account_id` is required and `status` is  optional.
   *
   * If you know a reward ID, use the
   * [RetrieveLoyaltyReward]($e/Loyalty/RetrieveLoyaltyReward) endpoint.
   *
   * Search results are sorted by `updated_at` in descending order.
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  async searchLoyaltyRewards(
    body: SearchLoyaltyRewardsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchLoyaltyRewardsResponse>> {
    const req = this.createRequest('POST', '/v2/loyalty/rewards/search');
    const mapped = req.prepareArgs({
      body: [body, searchLoyaltyRewardsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchLoyaltyRewardsResponseSchema, requestOptions);
  }

  /**
   * Deletes a loyalty reward by doing the following:
   *
   * - Returns the loyalty points back to the loyalty account.
   * - If an order ID was specified when the reward was created
   * (see [CreateLoyaltyReward]($e/Loyalty/CreateLoyaltyReward)),
   * it updates the order by removing the reward and related
   * discounts.
   *
   * You cannot delete a reward that has reached the terminal state (REDEEMED).
   *
   * @param rewardId  The ID of the [loyalty reward]($m/LoyaltyReward) to delete.
   * @return Response from the API call
   */
  async deleteLoyaltyReward(
    rewardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteLoyaltyRewardResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ rewardId: [rewardId, string()] });
    req.appendTemplatePath`/v2/loyalty/rewards/${mapped.rewardId}`;
    return req.callAsJson(deleteLoyaltyRewardResponseSchema, requestOptions);
  }

  /**
   * Retrieves a loyalty reward.
   *
   * @param rewardId  The ID of the [loyalty reward]($m/LoyaltyReward) to retrieve.
   * @return Response from the API call
   */
  async retrieveLoyaltyReward(
    rewardId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLoyaltyRewardResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ rewardId: [rewardId, string()] });
    req.appendTemplatePath`/v2/loyalty/rewards/${mapped.rewardId}`;
    return req.callAsJson(retrieveLoyaltyRewardResponseSchema, requestOptions);
  }

  /**
   * Redeems a loyalty reward.
   *
   * The endpoint sets the reward to the `REDEEMED` terminal state.
   *
   * If you are using your own order processing system (not using the
   * Orders API), you call this endpoint after the buyer paid for the
   * purchase.
   *
   * After the reward reaches the terminal state, it cannot be deleted.
   * In other words, points used for the reward cannot be returned
   * to the account.
   *
   * @param rewardId     The ID of the [loyalty reward]($m/LoyaltyReward) to
   *                                                          redeem.
   * @param body         An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async redeemLoyaltyReward(
    rewardId: string,
    body: RedeemLoyaltyRewardRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RedeemLoyaltyRewardResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      rewardId: [rewardId, string()],
      body: [body, redeemLoyaltyRewardRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/loyalty/rewards/${mapped.rewardId}/redeem`;
    return req.callAsJson(redeemLoyaltyRewardResponseSchema, requestOptions);
  }
}
