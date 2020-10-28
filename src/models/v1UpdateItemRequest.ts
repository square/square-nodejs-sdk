import { lazy, object, Schema } from '../schema';
import { V1Item, v1ItemSchema } from './v1Item';

export interface V1UpdateItemRequest {
  /** V1Item */
  body: V1Item;
}

export const v1UpdateItemRequestSchema: Schema<V1UpdateItemRequest> = object({
  body: ['body', lazy(() => v1ItemSchema)],
});
