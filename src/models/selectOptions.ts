import { array, lazy, object, optional, Schema, string } from '../schema';
import { SelectOption, selectOptionSchema } from './selectOption';

export interface SelectOptions {
  /** The title text to display in the select flow on the Terminal. */
  title: string;
  /** The body text to display in the select flow on the Terminal. */
  body: string;
  /** Represents the buttons/options that should be displayed in the select flow on the Terminal. */
  options: SelectOption[];
  selectedOption?: SelectOption;
}

export const selectOptionsSchema: Schema<SelectOptions> = object({
  title: ['title', string()],
  body: ['body', string()],
  options: ['options', array(lazy(() => selectOptionSchema))],
  selectedOption: ['selected_option', optional(lazy(() => selectOptionSchema))],
});
