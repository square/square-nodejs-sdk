import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Merchant, merchantSchema } from './merchant';

/** The response object returned by the [RetrieveMerchant]($e/Merchants/RetrieveMerchant) endpoint. */
export interface RetrieveMerchantResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents a business that sells with Square. */
  merchant?: Merchant;
}

export const retrieveMerchantResponseSchema: Schema<RetrieveMerchantResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchant: ['merchant', optional(lazy(() => merchantSchema))],
  }
);
