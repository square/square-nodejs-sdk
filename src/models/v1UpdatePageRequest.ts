import { lazy, object, Schema } from '../schema';
import { V1Page, v1PageSchema } from './v1Page';

export interface V1UpdatePageRequest {
  /** V1Page */
  body: V1Page;
}

export const v1UpdatePageRequestSchema: Schema<V1UpdatePageRequest> = object({
  body: ['body', lazy(() => v1PageSchema)],
});
