import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalCheckout, terminalCheckoutSchema } from './terminalCheckout';

export interface GetTerminalCheckoutResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  checkout?: TerminalCheckout;
}

export const getTerminalCheckoutResponseSchema: Schema<GetTerminalCheckoutResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkout: ['checkout', optional(lazy(() => terminalCheckoutSchema))],
  }
);
