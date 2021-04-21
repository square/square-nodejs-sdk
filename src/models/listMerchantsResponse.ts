import { array, lazy, number, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Merchant, merchantSchema } from './merchant';

/** The response object returned by the [ListMerchant]($e/Merchants/ListMerchants) endpoint. */
export interface ListMerchantsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested `Merchant` entities. */
  merchant?: Merchant[];
  /** If the  response is truncated, the cursor to use in next  request to fetch next set of objects. */
  cursor?: number;
}

export const listMerchantsResponseSchema: Schema<ListMerchantsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchant: ['merchant', optional(array(lazy(() => merchantSchema)))],
    cursor: ['cursor', optional(number())],
  }
);
