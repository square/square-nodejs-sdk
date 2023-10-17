import { bigint, nullable, object, optional, Schema, string } from '../schema';

/** Represents a phase, which can override subscription phases as defined by plan_id */
export interface Phase {
  /** id of subscription phase */
  uid?: string | null;
  /** index of phase in total subscription plan */
  ordinal?: bigint | null;
  /** id of order to be used in billing */
  orderTemplateId?: string | null;
  /** the uid from the plan's phase in catalog */
  planPhaseUid?: string | null;
}

export const phaseSchema: Schema<Phase> = object({
  uid: ['uid', optional(nullable(string()))],
  ordinal: ['ordinal', optional(nullable(bigint()))],
  orderTemplateId: ['order_template_id', optional(nullable(string()))],
  planPhaseUid: ['plan_phase_uid', optional(nullable(string()))],
});
