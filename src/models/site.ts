import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** Represents a Square Online site, which is an online store for a Square seller. */
export interface Site {
  /** The Square-assigned ID of the site. */
  id?: string;
  /** The title of the site. */
  siteTitle?: string | null;
  /** The domain of the site (without the protocol). For example, `mysite1.square.site`. */
  domain?: string | null;
  /** Indicates whether the site is published. */
  isPublished?: boolean | null;
  /** The timestamp of when the site was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the site was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const siteSchema: Schema<Site> = object({
  id: ['id', optional(string())],
  siteTitle: ['site_title', optional(nullable(string()))],
  domain: ['domain', optional(nullable(string()))],
  isPublished: ['is_published', optional(nullable(boolean()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
