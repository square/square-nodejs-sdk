import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalAction, terminalActionSchema } from './terminalAction';

export interface DismissTerminalActionResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents an action processed by the Square Terminal. */
  action?: TerminalAction;
}

export const dismissTerminalActionResponseSchema: Schema<DismissTerminalActionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(lazy(() => terminalActionSchema))],
  }
);
