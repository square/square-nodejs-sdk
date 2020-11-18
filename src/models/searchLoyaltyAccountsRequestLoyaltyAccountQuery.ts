import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  LoyaltyAccountMapping,
  loyaltyAccountMappingSchema,
} from './loyaltyAccountMapping';

/** The search criteria for the loyalty accounts. */
export interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
  /**
   * The set of mappings to use in the loyalty account search.
   * This cannot be combined with `customer_ids`.
   * Max: 30 mappings
   */
  mappings?: LoyaltyAccountMapping[];
  /**
   * The set of customer IDs to use in the loyalty account search.
   * This cannot be combined with `mappings`.
   * Max: 30 customer IDs
   */
  customerIds?: string[];
}

export const searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema: Schema<SearchLoyaltyAccountsRequestLoyaltyAccountQuery> = object(
  {
    mappings: [
      'mappings',
      optional(array(lazy(() => loyaltyAccountMappingSchema))),
    ],
    customerIds: ['customer_ids', optional(array(string()))],
  }
);
