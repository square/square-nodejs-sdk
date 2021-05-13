import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Snippet, snippetSchema } from './snippet';

/** Represents a `RetrieveSnippet` response. The response can include either `snippet` or `errors`. */
export interface RetrieveSnippetResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
  snippet?: Snippet;
}

export const retrieveSnippetResponseSchema: Schema<RetrieveSnippetResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    snippet: ['snippet', optional(lazy(() => snippetSchema))],
  }
);
