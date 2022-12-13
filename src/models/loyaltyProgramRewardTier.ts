import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  CatalogObjectReference,
  catalogObjectReferenceSchema,
} from './catalogObjectReference';
import {
  LoyaltyProgramRewardDefinition,
  loyaltyProgramRewardDefinitionSchema,
} from './loyaltyProgramRewardDefinition';

/** Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers. */
export interface LoyaltyProgramRewardTier {
  /** The Square-assigned ID of the reward tier. */
  id?: string;
  /** The points exchanged for the reward tier. */
  points: number;
  /** The name of the reward tier. */
  name?: string;
  /**
   * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
   * are now defined using a catalog pricing rule and other catalog objects. For more information, see
   * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
   */
  definition?: LoyaltyProgramRewardDefinition;
  /** The timestamp when the reward tier was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * A reference to a Catalog object at a specific version. In general this is
   * used as an entry point into a graph of catalog objects, where the objects exist
   * at a specific version.
   */
  pricingRuleReference: CatalogObjectReference;
}

export const loyaltyProgramRewardTierSchema: Schema<LoyaltyProgramRewardTier> = object(
  {
    id: ['id', optional(string())],
    points: ['points', number()],
    name: ['name', optional(string())],
    definition: [
      'definition',
      optional(lazy(() => loyaltyProgramRewardDefinitionSchema)),
    ],
    createdAt: ['created_at', optional(string())],
    pricingRuleReference: [
      'pricing_rule_reference',
      lazy(() => catalogObjectReferenceSchema),
    ],
  }
);
