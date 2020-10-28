import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  StandardUnitDescription,
  standardUnitDescriptionSchema,
} from './standardUnitDescription';

/** Group of standard measurement units. */
export interface StandardUnitDescriptionGroup {
  /** List of standard (non-custom) measurement units in this description group. */
  standardUnitDescriptions?: StandardUnitDescription[];
  /** IETF language tag. */
  languageCode?: string;
}

export const standardUnitDescriptionGroupSchema: Schema<StandardUnitDescriptionGroup> = object(
  {
    standardUnitDescriptions: [
      'standard_unit_descriptions',
      optional(array(lazy(() => standardUnitDescriptionSchema))),
    ],
    languageCode: ['language_code', optional(string())],
  }
);
