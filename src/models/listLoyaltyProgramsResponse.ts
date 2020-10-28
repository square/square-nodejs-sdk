import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyProgram, loyaltyProgramSchema } from './loyaltyProgram';

/** A response that contains all loyalty programs. */
export interface ListLoyaltyProgramsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A list of `LoyaltyProgram` for the merchant. */
  programs?: LoyaltyProgram[];
}

export const listLoyaltyProgramsResponseSchema: Schema<ListLoyaltyProgramsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    programs: ['programs', optional(array(lazy(() => loyaltyProgramSchema)))],
  }
);
