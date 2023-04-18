import { nullable, number, object, optional, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `ADJUST_POINTS`. */
export interface LoyaltyEventAdjustPoints {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId?: string;
  /** The number of points added or removed. */
  points: number;
  /** The reason for the adjustment of points. */
  reason?: string | null;
}

export const loyaltyEventAdjustPointsSchema: Schema<LoyaltyEventAdjustPoints> = object(
  {
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    points: ['points', number()],
    reason: ['reason', optional(nullable(string()))],
  }
);
