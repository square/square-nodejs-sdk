import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  StandardUnitDescription,
  standardUnitDescriptionSchema,
} from './standardUnitDescription';

/** Group of standard measurement units. */
export interface StandardUnitDescriptionGroup {
  /** List of standard (non-custom) measurement units in this description group. */
  standardUnitDescriptions?: StandardUnitDescription[] | null;
  /** IETF language tag. */
  languageCode?: string | null;
}

export const standardUnitDescriptionGroupSchema: Schema<StandardUnitDescriptionGroup> = object(
  {
    standardUnitDescriptions: [
      'standard_unit_descriptions',
      optional(nullable(array(lazy(() => standardUnitDescriptionSchema)))),
    ],
    languageCode: ['language_code', optional(nullable(string()))],
  }
);
