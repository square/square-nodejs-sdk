import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1PageCell, v1PageCellSchema } from './v1PageCell';

/** V1Page */
export interface V1Page {
  /** The page's unique identifier. */
  id?: string;
  /** The page's name, if any. */
  name?: string;
  /** The page's position in the merchant's list of pages. Always an integer between 0 and 6, inclusive. */
  pageIndex?: number;
  /** The cells included on the page. */
  cells?: V1PageCell[];
}

export const v1PageSchema: Schema<V1Page> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  pageIndex: ['page_index', optional(number())],
  cells: ['cells', optional(array(lazy(() => v1PageCellSchema)))],
});
