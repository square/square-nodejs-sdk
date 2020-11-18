import { lazy, number, object, Schema, string } from '../schema';
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
  /** Provides details about the loyalty program reward tier definition. */
  definition: LoyaltyProgramRewardDefinition;
  /** The timestamp when the reward tier was created, in RFC 3339 format. */
  createdAt: string;
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
  }
);
