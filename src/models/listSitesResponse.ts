import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Site, siteSchema } from './site';

/** Represents a `ListSites` response. The response can include either `sites` or `errors`. */
export interface ListSitesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The sites that belong to the seller. */
  sites?: Site[];
}

export const listSitesResponseSchema: Schema<ListSitesResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  sites: ['sites', optional(array(lazy(() => siteSchema)))],
});
