import { number, object, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `OTHER`. */
export interface LoyaltyEventOther {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /** The number of points added or removed. */
  points: number;
}

export const loyaltyEventOtherSchema: Schema<LoyaltyEventOther> = object({
  loyaltyProgramId: ['loyalty_program_id', string()],
  points: ['points', number()],
});
