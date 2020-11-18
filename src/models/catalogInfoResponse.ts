import { array, lazy, object, optional, Schema } from '../schema';
import {
  CatalogInfoResponseLimits,
  catalogInfoResponseLimitsSchema,
} from './catalogInfoResponseLimits';
import { Error, errorSchema } from './error';
import {
  StandardUnitDescriptionGroup,
  standardUnitDescriptionGroupSchema,
} from './standardUnitDescriptionGroup';

export interface CatalogInfoResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  limits?: CatalogInfoResponseLimits;
  /** Group of standard measurement units. */
  standardUnitDescriptionGroup?: StandardUnitDescriptionGroup;
}

export const catalogInfoResponseSchema: Schema<CatalogInfoResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  limits: ['limits', optional(lazy(() => catalogInfoResponseLimitsSchema))],
  standardUnitDescriptionGroup: [
    'standard_unit_description_group',
    optional(lazy(() => standardUnitDescriptionGroupSchema)),
  ],
});
