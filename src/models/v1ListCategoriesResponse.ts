import { array, lazy, object, optional, Schema } from '../schema';
import { V1Category, v1CategorySchema } from './v1Category';

export interface V1ListCategoriesResponse {
  items?: V1Category[];
}

export const v1ListCategoriesResponseSchema: Schema<V1ListCategoriesResponse> = object(
  { items: ['items', optional(array(lazy(() => v1CategorySchema)))] }
);
