import { nullable, object, optional, Schema, string } from '../schema';

/** SEO data for for a seller's Square Online store. */
export interface CatalogEcomSeoData {
  /** The SEO title used for the Square Online store. */
  pageTitle?: string | null;
  /** The SEO description used for the Square Online store. */
  pageDescription?: string | null;
  /** The SEO permalink used for the Square Online store. */
  permalink?: string | null;
}

export const catalogEcomSeoDataSchema: Schema<CatalogEcomSeoData> = object({
  pageTitle: ['page_title', optional(nullable(string()))],
  pageDescription: ['page_description', optional(nullable(string()))],
  permalink: ['permalink', optional(nullable(string()))],
});
