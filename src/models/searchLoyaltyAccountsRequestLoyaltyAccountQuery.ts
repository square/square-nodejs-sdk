import { array, lazy, object, optional, Schema } from '../schema';
import {
  LoyaltyAccountMapping,
  loyaltyAccountMappingSchema,
} from './loyaltyAccountMapping';

/** The search criteria for the loyalty accounts. */
export interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
  /** The set of mappings to use in the loyalty account search. */
  mappings?: LoyaltyAccountMapping[];
}

export const searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema: Schema<SearchLoyaltyAccountsRequestLoyaltyAccountQuery> = object(
  {
    mappings: [
      'mappings',
      optional(array(lazy(() => loyaltyAccountMappingSchema))),
    ],
  }
);
