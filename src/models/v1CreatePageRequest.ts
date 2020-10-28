import { lazy, object, optional, Schema } from '../schema';
import { V1Page, v1PageSchema } from './v1Page';

export interface V1CreatePageRequest {
  /** V1Page */
  body?: V1Page;
}

export const v1CreatePageRequestSchema: Schema<V1CreatePageRequest> = object({
  body: ['body', optional(lazy(() => v1PageSchema))],
});
