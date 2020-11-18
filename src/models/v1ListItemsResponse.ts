import { array, lazy, object, optional, Schema } from '../schema';
import { V1Item, v1ItemSchema } from './v1Item';

export interface V1ListItemsResponse {
  items?: V1Item[];
}

export const v1ListItemsResponseSchema: Schema<V1ListItemsResponse> = object({
  items: ['items', optional(array(lazy(() => v1ItemSchema)))],
});
