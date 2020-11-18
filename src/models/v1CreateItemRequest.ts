import { lazy, object, optional, Schema } from '../schema';
import { V1Item, v1ItemSchema } from './v1Item';

export interface V1CreateItemRequest {
  /** V1Item */
  body?: V1Item;
}

export const v1CreateItemRequestSchema: Schema<V1CreateItemRequest> = object({
  body: ['body', optional(lazy(() => v1ItemSchema))],
});
