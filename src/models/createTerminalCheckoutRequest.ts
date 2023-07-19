import { lazy, object, Schema, string } from '../schema';
import { TerminalCheckout, terminalCheckoutSchema } from './terminalCheckout';

export interface CreateTerminalCheckoutRequest {
  /**
   * A unique string that identifies this `CreateCheckout` request. Keys can be any valid string but
   * must be unique for every `CreateCheckout` request.
   * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
   */
  idempotencyKey: string;
  /** Represents a checkout processed by the Square Terminal. */
  checkout: TerminalCheckout;
}

export const createTerminalCheckoutRequestSchema: Schema<CreateTerminalCheckoutRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    checkout: ['checkout', lazy(() => terminalCheckoutSchema)],
  }
);
