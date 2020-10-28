import { array, lazy, object, optional, Schema } from '../schema';
import { V1Order, v1OrderSchema } from './v1Order';

export interface V1ListOrdersResponse {
  items?: V1Order[];
}

export const v1ListOrdersResponseSchema: Schema<V1ListOrdersResponse> = object({
  items: ['items', optional(array(lazy(() => v1OrderSchema)))],
});
