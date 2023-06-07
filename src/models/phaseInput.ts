import { nullable, number, object, optional, Schema, string } from '../schema';

/** Represents the arguments used to construct a new phase. */
export interface PhaseInput {
  /** index of phase in total subscription plan */
  ordinal: number;
  /** id of order to be used in billing */
  orderTemplateId?: string | null;
}

export const phaseInputSchema: Schema<PhaseInput> = object({
  ordinal: ['ordinal', number()],
  orderTemplateId: ['order_template_id', optional(nullable(string()))],
});
