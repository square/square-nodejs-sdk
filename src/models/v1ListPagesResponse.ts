import { array, lazy, object, optional, Schema } from '../schema';
import { V1Page, v1PageSchema } from './v1Page';

export interface V1ListPagesResponse {
  items?: V1Page[];
}

export const v1ListPagesResponseSchema: Schema<V1ListPagesResponse> = object({
  items: ['items', optional(array(lazy(() => v1PageSchema)))],
});
