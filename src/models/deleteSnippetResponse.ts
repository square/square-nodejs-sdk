import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a `DeleteSnippet` response. */
export interface DeleteSnippetResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteSnippetResponseSchema: Schema<DeleteSnippetResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
