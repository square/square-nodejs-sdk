import { array, object, optional, Schema, string } from '../schema';

export interface MethodErrorCodes {
  /** See [ErrorCode](#type-errorcode) for possible values */
  value?: string[];
}

export const methodErrorCodesSchema: Schema<MethodErrorCodes> = object({
  value: ['value', optional(array(string()))],
});
