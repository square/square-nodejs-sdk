import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalRefund, terminalRefundSchema } from './terminalRefund';

export interface GetTerminalRefundResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds. */
  refund?: TerminalRefund;
}

export const getTerminalRefundResponseSchema: Schema<GetTerminalRefundResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
  }
);
