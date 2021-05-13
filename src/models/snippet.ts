import { object, optional, Schema, string } from '../schema';

/** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
export interface Snippet {
  /** The Square-assigned ID for the snippet. */
  id?: string;
  /** The ID of the site that contains the snippet. */
  siteId?: string;
  /** The snippet code, which can contain valid HTML, JavaScript, or both. */
  content: string;
  /** The timestamp of when the snippet was initially added to the site, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the snippet was last updated on the site, in RFC 3339 format. */
  updatedAt?: string;
}

export const snippetSchema: Schema<Snippet> = object({
  id: ['id', optional(string())],
  siteId: ['site_id', optional(string())],
  content: ['content', string()],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
