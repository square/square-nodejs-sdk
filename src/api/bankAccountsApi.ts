import { ApiResponse, RequestOptions } from '../core';
import {
  GetBankAccountByV1IdResponse,
  getBankAccountByV1IdResponseSchema,
} from '../models/getBankAccountByV1IdResponse';
import {
  GetBankAccountResponse,
  getBankAccountResponseSchema,
} from '../models/getBankAccountResponse';
import {
  ListBankAccountsResponse,
  listBankAccountsResponseSchema,
} from '../models/listBankAccountsResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class BankAccountsApi extends BaseApi {
  /**
   * Returns a list of [BankAccount]($m/BankAccount) objects linked to a Square account.
   *
   * @param cursor      The pagination cursor returned by a previous call to this endpoint. Use it in the
   *                              next `ListBankAccounts` request to retrieve the next set  of results.  See the
   *                              [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   *                              for more information.
   * @param limit       Upper limit on the number of bank accounts to return in the response.  Currently,
   *                              1000 is the largest supported limit. You can specify a limit  of up to 1000 bank
   *                              accounts. This is also the default limit.
   * @param locationId  Location ID. You can specify this optional filter  to retrieve only the linked bank
   *                              accounts belonging to a specific location.
   * @return Response from the API call
   */
  async listBankAccounts(
    cursor?: string,
    limit?: number,
    locationId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListBankAccountsResponse>> {
    const req = this.createRequest('GET', '/v2/bank-accounts');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
      locationId: [locationId, optional(string())],
    });
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.query('location_id', mapped.locationId);
    return req.callAsJson(listBankAccountsResponseSchema, requestOptions);
  }

  /**
   * Returns details of a [BankAccount]($m/BankAccount) identified by V1 bank account ID.
   *
   * @param v1BankAccountId    Connect V1 ID of the desired `BankAccount`. For more information, see
   *                                     [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https:
   *                                     //developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-
   *                                     using-an-id-issued-by-v1-bank-accounts-api).
   * @return Response from the API call
   */
  async getBankAccountByV1Id(
    v1BankAccountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetBankAccountByV1IdResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      v1BankAccountId: [v1BankAccountId, string()],
    });
    req.appendTemplatePath`/v2/bank-accounts/by-v1-id/${mapped.v1BankAccountId}`;
    return req.callAsJson(getBankAccountByV1IdResponseSchema, requestOptions);
  }

  /**
   * Returns details of a [BankAccount]($m/BankAccount)
   * linked to a Square account.
   *
   * @param bankAccountId   Square-issued ID of the desired `BankAccount`.
   * @return Response from the API call
   */
  async getBankAccount(
    bankAccountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetBankAccountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      bankAccountId: [bankAccountId, string()],
    });
    req.appendTemplatePath`/v2/bank-accounts/${mapped.bankAccountId}`;
    return req.callAsJson(getBankAccountResponseSchema, requestOptions);
  }
}
