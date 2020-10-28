import { array, lazy, object, optional, Schema } from '../schema';
import { V1Merchant, v1MerchantSchema } from './v1Merchant';

export interface V1ListLocationsResponse {
  items?: V1Merchant[];
}

export const v1ListLocationsResponseSchema: Schema<V1ListLocationsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1MerchantSchema)))] }
);
