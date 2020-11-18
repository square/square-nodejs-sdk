import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
 */
export interface CaptureTransactionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const captureTransactionResponseSchema: Schema<CaptureTransactionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
