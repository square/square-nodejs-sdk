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
  CancelLoyaltyPromotionResponse,
  cancelLoyaltyPromotionResponseSchema,
} from '../models/cancelLoyaltyPromotionResponse';
import {
  CreateLoyaltyAccountRequest,
  createLoyaltyAccountRequestSchema,
} from '../models/createLoyaltyAccountRequest';
import {
  CreateLoyaltyAccountResponse,
  createLoyaltyAccountResponseSchema,
} from '../models/createLoyaltyAccountResponse';
import {
  CreateLoyaltyPromotionRequest,
  createLoyaltyPromotionRequestSchema,
} from '../models/createLoyaltyPromotionRequest';
import {
  CreateLoyaltyPromotionResponse,
  createLoyaltyPromotionResponseSchema,
} from '../models/createLoyaltyPromotionResponse';
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
  ListLoyaltyPromotionsResponse,
  listLoyaltyPromotionsResponseSchema,
} from '../models/listLoyaltyPromotionsResponse';
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
  RetrieveLoyaltyPromotionResponse,
  retrieveLoyaltyPromotionResponseSchema,
} from '../models/retrieveLoyaltyPromotionResponse';
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
import { number, optional, string } from '../schema';
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
   * @param accountId  The ID of the [loyalty account](entity:LoyaltyAccount) to retrieve.
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
   * Adds points earned from a purchase to a [loyalty account]($m/LoyaltyAccount).
   *
   * - If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order
   * to compute the points earned from both the base loyalty program and an associated
   * [loyalty promotion]($m/LoyaltyPromotion). For purchases that qualify for multiple accrual
   * rules, Square computes points based on the accrual rule that grants the most points.
   * For purchases that qualify for multiple promotions, Square computes points based on the most
   * recently created promotion. A purchase must first qualify for program points to be eligible for
   * promotion points.
   *
   * - If you are not using the Orders API to manage orders, provide `points` with the number of points
   * to add.
   * You must first perform a client-side computation of the points earned from the loyalty program and
   * loyalty promotion. For spend-based and visit-based programs, you can call
   * [CalculateLoyaltyPoints]($e/Loyalty/CalculateLoyaltyPoints)
   * to compute the points earned from the base loyalty program. For information about computing points
   * earned from a loyalty promotion, see
   * [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-
   * promotions#calculate-promotion-points).
   *
   * @param accountId    The ID of the target [loyalty account](entity:
   *                                                              LoyaltyAccount).
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
   * @param accountId    The ID of the target [loyalty account](entity:
   *                                                          LoyaltyAccount).
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
   * Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used with
   * the keyword `main`.
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
   * Calculates the number of points a buyer can earn from a purchase. Applications might call this
   * endpoint
   * to display the points to the buyer.
   *
   * - If you are using the Orders API to manage orders, provide the `order_id` and (optional)
   * `loyalty_account_id`.
   * Square reads the order to compute the points earned from the base loyalty program and an associated
   * [loyalty promotion]($m/LoyaltyPromotion).
   *
   * - If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the
   * purchase amount. Square uses this amount to calculate the points earned from the base loyalty
   * program,
   * but not points earned from a loyalty promotion. For spend-based and visit-based programs, the
   * `tax_mode`
   * setting of the accrual rule indicates how taxes should be treated for loyalty points accrual.
   * If the purchase qualifies for program points, call
   * [ListLoyaltyPromotions]($e/Loyalty/ListLoyaltyPromotions) and perform a client-side computation
   * to calculate whether the purchase also qualifies for promotion points. For more information, see
   * [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-
   * promotions#calculate-promotion-points).
   *
   * @param programId    The ID of the [loyalty program](entity:
   *                                                             LoyaltyProgram), which defines the rules for accruing
   *                                                             points.
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
   * Lists the loyalty promotions associated with a [loyalty program]($m/LoyaltyProgram).
   * Results are sorted by the `created_at` date in descending order (newest to oldest).
   *
   * @param programId  The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,
   *                             call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the
   *                             `main` keyword.
   * @param status     The status to filter the results by. If a status is provided, only loyalty promotions
   *                             with the specified status are returned. Otherwise, all loyalty promotions associated
   *                             with the loyalty program are returned.
   * @param cursor     The cursor returned in the paged response from the previous call to this endpoint.
   *                             Provide this cursor to retrieve the next page of results for your original request.
   *                             For more information, see [Pagination](https://developer.squareup.com/docs/build-
   *                             basics/common-api-patterns/pagination).
   * @param limit      The maximum number of results to return in a single paged response. The minimum value
   *                             is 1 and the maximum value is 30. The default value is 30. For more information, see
   *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                             patterns/pagination).
   * @return Response from the API call
   */
  async listLoyaltyPromotions(
    programId: string,
    status?: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListLoyaltyPromotionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      programId: [programId, string()],
      status: [status, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('status', mapped.status);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}/promotions`;
    return req.callAsJson(listLoyaltyPromotionsResponseSchema, requestOptions);
  }

  /**
   * Creates a loyalty promotion for a [loyalty program]($m/LoyaltyProgram). A loyalty promotion
   * enables buyers to earn points in addition to those earned from the base loyalty program.
   *
   * This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
   * `available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
   * `ACTIVE` or `SCHEDULED` status.
   *
   * @param programId    The ID of the [loyalty program](entity:
   *                                                             LoyaltyProgram) to associate with the promotion. To
   *                                                             get the program ID, call [RetrieveLoyaltyProgram](api-
   *                                                             endpoint:Loyalty-RetrieveLoyaltyProgram) using the
   *                                                             `main` keyword.
   * @param body         An object containing the fields to POST for the
   *                                                             request.  See the corresponding object definition for
   *                                                             field details.
   * @return Response from the API call
   */
  async createLoyaltyPromotion(
    programId: string,
    body: CreateLoyaltyPromotionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateLoyaltyPromotionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      programId: [programId, string()],
      body: [body, createLoyaltyPromotionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}/promotions`;
    return req.callAsJson(createLoyaltyPromotionResponseSchema, requestOptions);
  }

  /**
   * Retrieves a loyalty promotion.
   *
   * @param promotionId  The ID of the [loyalty promotion](entity:LoyaltyPromotion) to retrieve.
   * @param programId    The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,
   *                               call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the
   *                               `main` keyword.
   * @return Response from the API call
   */
  async retrieveLoyaltyPromotion(
    promotionId: string,
    programId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveLoyaltyPromotionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      promotionId: [promotionId, string()],
      programId: [programId, string()],
    });
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}/promotions/${mapped.promotionId}`;
    return req.callAsJson(
      retrieveLoyaltyPromotionResponseSchema,
      requestOptions
    );
  }

  /**
   * Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
   * end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED`
   * promotion.
   * Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion
   * before
   * you create a new one.
   *
   * This endpoint sets the loyalty promotion to the `CANCELED` state
   *
   * @param promotionId  The ID of the [loyalty promotion](entity:LoyaltyPromotion) to cancel. You can
   *                               cancel a promotion that has an `ACTIVE` or `SCHEDULED` status.
   * @param programId    The ID of the base [loyalty program](entity:LoyaltyProgram).
   * @return Response from the API call
   */
  async cancelLoyaltyPromotion(
    promotionId: string,
    programId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelLoyaltyPromotionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      promotionId: [promotionId, string()],
      programId: [programId, string()],
    });
    req.appendTemplatePath`/v2/loyalty/programs/${mapped.programId}/promotions/${mapped.promotionId}/cancel`;
    return req.callAsJson(cancelLoyaltyPromotionResponseSchema, requestOptions);
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
   * @param rewardId  The ID of the [loyalty reward](entity:LoyaltyReward) to delete.
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
   * @param rewardId  The ID of the [loyalty reward](entity:LoyaltyReward) to retrieve.
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
   * @param rewardId     The ID of the [loyalty reward](entity:LoyaltyReward) to
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
