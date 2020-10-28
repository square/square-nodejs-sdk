import { lazy, object, Schema } from '../schema';
import { V1Category, v1CategorySchema } from './v1Category';

export interface V1UpdateCategoryRequest {
  /** V1Category */
  body: V1Category;
}

export const v1UpdateCategoryRequestSchema: Schema<V1UpdateCategoryRequest> = object(
  { body: ['body', lazy(() => v1CategorySchema)] }
);
