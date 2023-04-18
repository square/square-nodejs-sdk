import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

export interface CreateCatalogImageRequest {
  /**
   * A unique string that identifies this CreateCatalogImage request.
   * Keys can be any valid string but must be unique for every CreateCatalogImage request.
   * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
   */
  idempotencyKey: string;
  /**
   * Unique ID of the `CatalogObject` to attach this `CatalogImage` object to. Leave this
   * field empty to create unattached images, for example if you are building an integration
   * where an image can be attached to catalog items at a later time.
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
  /**
   * If this is set to `true`, the image created will be the primary, or first image of the object referenced by `object_id`.
   * If the `CatalogObject` already has a primary `CatalogImage`, setting this field to `true` will replace the primary image.
   * If this is set to `false` and you use the Square API version 2021-12-15 or later, the image id will be appended to the list of `image_ids` on the object.
   * With Square API version 2021-12-15 or later, the default value is `false`. Otherwise, the effective default value is `true`.
   */
  isPrimary?: boolean;
}

export const createCatalogImageRequestSchema: Schema<CreateCatalogImageRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    objectId: ['object_id', optional(string())],
    image: ['image', lazy(() => catalogObjectSchema)],
    isPrimary: ['is_primary', optional(boolean())],
  }
);
