import { array, object, Schema, string } from '../schema';

/** Filter by the current order `state`. */
export interface SearchOrdersStateFilter {
  /**
   * States to filter for.
   * See [OrderState](#type-orderstate) for possible values
   */
  states: string[];
}

export const searchOrdersStateFilterSchema: Schema<SearchOrdersStateFilter> = object(
  { states: ['states', array(string())] }
);
