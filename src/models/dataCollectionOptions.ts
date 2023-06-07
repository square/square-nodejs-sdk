import { lazy, object, optional, Schema, string } from '../schema';
import { CollectedData, collectedDataSchema } from './collectedData';

export interface DataCollectionOptions {
  /** The title text to display in the data collection flow on the Terminal. */
  title: string;
  /**
   * The body text to display under the title in the data collection screen flow on the
   * Terminal.
   */
  body: string;
  /** Describes the input type of the data. */
  inputType: string;
  collectedData?: CollectedData;
}

export const dataCollectionOptionsSchema: Schema<DataCollectionOptions> = object(
  {
    title: ['title', string()],
    body: ['body', string()],
    inputType: ['input_type', string()],
    collectedData: [
      'collected_data',
      optional(lazy(() => collectedDataSchema)),
    ],
  }
);
