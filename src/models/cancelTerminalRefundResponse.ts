import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalRefund, terminalRefundSchema } from './terminalRefund';

export interface CancelTerminalRefundResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  refund?: TerminalRefund;
}

export const cancelTerminalRefundResponseSchema: Schema<CancelTerminalRefundResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
  }
);
