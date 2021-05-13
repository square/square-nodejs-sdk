import { boolean, object, optional, Schema, string } from '../schema';

/** Represents a Square Online site, which is an online store for a Square seller. */
export interface Site {
  /** The Square-assigned ID of the site. */
  id?: string;
  /** The title of the site. */
  siteTitle?: string;
  /** The domain of the site (without the protocol). For example, `mysite1.square.site`. */
  domain?: string;
  /** Indicates whether the site is published. */
  isPublished?: boolean;
  /** The timestamp of when the site was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the site was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const siteSchema: Schema<Site> = object({
  id: ['id', optional(string())],
  siteTitle: ['site_title', optional(string())],
  domain: ['domain', optional(string())],
  isPublished: ['is_published', optional(boolean())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
