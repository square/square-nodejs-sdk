import { array, lazy, object, Schema } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

/** A batch of catalog objects. */
export interface CatalogObjectBatch {
  /** A list of CatalogObjects belonging to this batch. */
  objects: CatalogObject[];
}

export const catalogObjectBatchSchema: Schema<CatalogObjectBatch> = object({
  objects: ['objects', array(lazy(() => catalogObjectSchema))],
});
