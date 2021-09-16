import { lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

export interface CreateCatalogImageRequest {
  /**
   * A unique string that identifies this CreateCatalogImage request.
   * Keys can be any valid string but must be unique for every CreateCatalogImage request.
   * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
   */
  idempotencyKey: string;
  /**
   * Unique ID of the `CatalogObject` to attach to this `CatalogImage`. Leave this
   * field empty to create unattached images, for example if you are building an integration
   * where these images can be attached to catalog items at a later time.
   */
  objectId?: string;
  /**
   * The wrapper object for the catalog entries of a given object type.
   * Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.
   * For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.
   * In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.
   * For a more detailed discussion of the Catalog data model, please see the
   * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
   */
  image: CatalogObject;
}

export const createCatalogImageRequestSchema: Schema<CreateCatalogImageRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    objectId: ['object_id', optional(string())],
    image: ['image', lazy(() => catalogObjectSchema)],
  }
);
