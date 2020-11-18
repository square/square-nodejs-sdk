import { array, lazy, object, optional, Schema } from '../schema';
import {
  V1CashDrawerShift,
  v1CashDrawerShiftSchema,
} from './v1CashDrawerShift';

export interface V1ListCashDrawerShiftsResponse {
  items?: V1CashDrawerShift[];
}

export const v1ListCashDrawerShiftsResponseSchema: Schema<V1ListCashDrawerShiftsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1CashDrawerShiftSchema)))] }
);
