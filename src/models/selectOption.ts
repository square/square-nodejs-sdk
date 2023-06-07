import { object, Schema, string } from '../schema';

export interface SelectOption {
  /** The reference id for the option. */
  referenceId: string;
  /** The title text that displays in the select option button. */
  title: string;
}

export const selectOptionSchema: Schema<SelectOption> = object({
  referenceId: ['reference_id', string()],
  title: ['title', string()],
});
