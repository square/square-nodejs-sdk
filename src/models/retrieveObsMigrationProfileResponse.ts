import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Error, errorSchema } from './error';

export interface RetrieveObsMigrationProfileResponse {
  /** Indicates whether the seller has enabled the COVID banner (`true`) or not (`false`). */
  bannerEnabled?: boolean;
  /** The text appearing on the COVID banner. */
  bannerText?: string;
  /** The text of the label of the CTA button beneath the banner. */
  bannerCtaText?: string;
  /** The URL to link to when the CTA button is clicked. */
  bannerCtaUrl?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveObsMigrationProfileResponseSchema: Schema<RetrieveObsMigrationProfileResponse> = object(
  {
    bannerEnabled: ['banner_enabled', optional(boolean())],
    bannerText: ['banner_text', optional(string())],
    bannerCtaText: ['banner_cta_text', optional(string())],
    bannerCtaUrl: ['banner_cta_url', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
