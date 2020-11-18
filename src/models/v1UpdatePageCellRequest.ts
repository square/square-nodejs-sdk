import { lazy, object, Schema } from '../schema';
import { V1PageCell, v1PageCellSchema } from './v1PageCell';

export interface V1UpdatePageCellRequest {
  /** V1PageCell */
  body: V1PageCell;
}

export const v1UpdatePageCellRequestSchema: Schema<V1UpdatePageCellRequest> = object(
  { body: ['body', lazy(() => v1PageCellSchema)] }
);
