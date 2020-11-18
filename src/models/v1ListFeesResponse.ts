import { array, lazy, object, optional, Schema } from '../schema';
import { V1Fee, v1FeeSchema } from './v1Fee';

export interface V1ListFeesResponse {
  items?: V1Fee[];
}

export const v1ListFeesResponseSchema: Schema<V1ListFeesResponse> = object({
  items: ['items', optional(array(lazy(() => v1FeeSchema)))],
});
