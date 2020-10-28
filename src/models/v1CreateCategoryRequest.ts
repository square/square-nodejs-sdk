import { lazy, object, optional, Schema } from '../schema';
import { V1Category, v1CategorySchema } from './v1Category';

export interface V1CreateCategoryRequest {
  /** V1Category */
  body?: V1Category;
}

export const v1CreateCategoryRequestSchema: Schema<V1CreateCategoryRequest> = object(
  { body: ['body', optional(lazy(() => v1CategorySchema))] }
);
