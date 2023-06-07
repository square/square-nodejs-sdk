import { object, optional, Schema, string } from '../schema';

export interface CollectedData {
  /** The buyer's input text. */
  inputText?: string;
}

export const collectedDataSchema: Schema<CollectedData> = object({
  inputText: ['input_text', optional(string())],
});
