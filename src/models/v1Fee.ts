import { boolean, object, optional, Schema, string } from '../schema';

/** V1Fee */
export interface V1Fee {
  /** The fee's unique ID. */
  id?: string;
  /** The fee's name. */
  name?: string;
  /** The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
  rate?: string;
  calculationPhase?: string;
  adjustmentType?: string;
  /** If true, the fee applies to custom amounts entered into Square Point of Sale that are not associated with a particular item. */
  appliesToCustomAmounts?: boolean;
  /** If true, the fee is applied to all appropriate items. If false, the fee is not applied at all. */
  enabled?: boolean;
  inclusionType?: string;
  type?: string;
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1FeeSchema: Schema<V1Fee> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  rate: ['rate', optional(string())],
  calculationPhase: ['calculation_phase', optional(string())],
  adjustmentType: ['adjustment_type', optional(string())],
  appliesToCustomAmounts: ['applies_to_custom_amounts', optional(boolean())],
  enabled: ['enabled', optional(boolean())],
  inclusionType: ['inclusion_type', optional(string())],
  type: ['type', optional(string())],
  v2Id: ['v2_id', optional(string())],
});
