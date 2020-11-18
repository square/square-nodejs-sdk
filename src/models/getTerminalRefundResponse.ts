import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalRefund, terminalRefundSchema } from './terminalRefund';

export interface GetTerminalRefundResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  refund?: TerminalRefund;
}

export const getTerminalRefundResponseSchema: Schema<GetTerminalRefundResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
  }
);
