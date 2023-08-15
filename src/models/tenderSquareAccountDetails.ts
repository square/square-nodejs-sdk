import { object, optional, Schema, string } from '../schema';

/** Represents the details of a tender with `type` `SQUARE_ACCOUNT`. */
export interface TenderSquareAccountDetails {
  status?: string;
}

export const tenderSquareAccountDetailsSchema: Schema<TenderSquareAccountDetails> = object(
  { status: ['status', optional(string())] }
);
