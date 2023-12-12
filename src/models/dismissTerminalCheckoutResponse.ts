import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalCheckout, terminalCheckoutSchema } from './terminalCheckout';

export interface DismissTerminalCheckoutResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents a checkout processed by the Square Terminal. */
  checkout?: TerminalCheckout;
}

export const dismissTerminalCheckoutResponseSchema: Schema<DismissTerminalCheckoutResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkout: ['checkout', optional(lazy(() => terminalCheckoutSchema))],
  }
);
