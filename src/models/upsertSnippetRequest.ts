import { lazy, object, Schema } from '../schema';
import { Snippet, snippetSchema } from './snippet';

/** Represents an `UpsertSnippet` request. */
export interface UpsertSnippetRequest {
  /** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
  snippet: Snippet;
}

export const upsertSnippetRequestSchema: Schema<UpsertSnippetRequest> = object({
  snippet: ['snippet', lazy(() => snippetSchema)],
});
