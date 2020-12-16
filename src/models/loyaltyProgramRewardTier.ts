import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  CatalogObjectReference,
  catalogObjectReferenceSchema,
} from './catalogObjectReference';
import {
  LoyaltyProgramRewardDefinition,
  loyaltyProgramRewardDefinitionSchema,
} from './loyaltyProgramRewardDefinition';

/** Describes a loyalty program reward tier. */
export interface LoyaltyProgramRewardTier {
  /** The Square-assigned ID of the reward tier. */
  id: string;
  /** The points exchanged for the reward tier. */
  points: number;
  /** The name of the reward tier. */
  name: string;
  /**
   * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
   * are now defined using a catalog pricing rule and other catalog objects. For more information, see
   * [Get discount details for the reward](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details).
   */
  definition: LoyaltyProgramRewardDefinition;
  /** The timestamp when the reward tier was created, in RFC 3339 format. */
  createdAt: string;
  /**
   * A reference to a Catalog object at a specific version. In general this is
   * used as an entry point into a graph of catalog objects, where the objects exist
   * at a specific version.
   */
  pricingRuleReference?: CatalogObjectReference;
}

export const loyaltyProgramRewardTierSchema: Schema<LoyaltyProgramRewardTier> = object(
  {
    id: ['id', string()],
    points: ['points', number()],
    name: ['name', string()],
    definition: [
      'definition',
      lazy(() => loyaltyProgramRewardDefinitionSchema),
    ],
    createdAt: ['created_at', string()],
    pricingRuleReference: [
      'pricing_rule_reference',
      optional(lazy(() => catalogObjectReferenceSchema)),
    ],
  }
);
