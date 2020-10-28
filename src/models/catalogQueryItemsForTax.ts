import { array, object, Schema, string } from '../schema';

/** The query filter to return the items containing the specified tax IDs. */
export interface CatalogQueryItemsForTax {
  /** A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s. */
  taxIds: string[];
}

export const catalogQueryItemsForTaxSchema: Schema<CatalogQueryItemsForTax> = object(
  { taxIds: ['tax_ids', array(string())] }
);
