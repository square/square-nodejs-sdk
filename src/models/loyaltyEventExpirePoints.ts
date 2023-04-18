import { number, object, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `EXPIRE_POINTS`. */
export interface LoyaltyEventExpirePoints {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /** The number of points expired. */
  points: number;
}

export const loyaltyEventExpirePointsSchema: Schema<LoyaltyEventExpirePoints> = object(
  {
    loyaltyProgramId: ['loyalty_program_id', string()],
    points: ['points', number()],
  }
);
