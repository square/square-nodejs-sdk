import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyProgram, loyaltyProgramSchema } from './loyaltyProgram';

/** A response that contains the loyalty program. */
export interface RetrieveLoyaltyProgramResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  program?: LoyaltyProgram;
}

export const retrieveLoyaltyProgramResponseSchema: Schema<RetrieveLoyaltyProgramResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    program: ['program', optional(lazy(() => loyaltyProgramSchema))],
  }
);
