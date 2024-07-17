import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogCustomAttributeDefinitionNumberConfig,
  catalogCustomAttributeDefinitionNumberConfigSchema,
} from './catalogCustomAttributeDefinitionNumberConfig';
import {
  CatalogCustomAttributeDefinitionSelectionConfig,
  catalogCustomAttributeDefinitionSelectionConfigSchema,
} from './catalogCustomAttributeDefinitionSelectionConfig';
import {
  CatalogCustomAttributeDefinitionStringConfig,
  catalogCustomAttributeDefinitionStringConfigSchema,
} from './catalogCustomAttributeDefinitionStringConfig';
import {
  SourceApplication,
  sourceApplicationSchema,
} from './sourceApplication';

/**
 * Contains information defining a custom attribute. Custom attributes are
 * intended to store additional information about a catalog object or to associate a
 * catalog object with an entity in another system. Do not use custom attributes
 * to store any sensitive information (personally identifiable information, card details, etc.).
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
 */
export interface CatalogCustomAttributeDefinition {
  /** Defines the possible types for a custom attribute. */
  type: string;
  /**
   * The name of this definition for API and seller-facing UI purposes.
   * The name must be unique within the (merchant, application) pair. Required.
   * May not be empty and may not exceed 255 characters. Can be modified after creation.
   */
  name: string;
  /**
   * Seller-oriented description of the meaning of this Custom Attribute,
   * any constraints that the seller should observe, etc. May be displayed as a tooltip in Square UIs.
   */
  description?: string | null;
  /** Represents information about the application used to generate a change. */
  sourceApplication?: SourceApplication;
  /**
   * The set of `CatalogObject` types that this custom atttribute may be applied to.
   * Currently, only `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, and `CATEGORY` are allowed. At least one type must be included.
   * See [CatalogObjectType](#type-catalogobjecttype) for possible values
   */
  allowedObjectTypes: string[];
  /**
   * Defines the visibility of a custom attribute to sellers in Square
   * client applications, Square APIs or in Square UIs (including Square Point
   * of Sale applications and Square Dashboard).
   */
  sellerVisibility?: string;
  /**
   * Defines the visibility of a custom attribute to applications other than their
   * creating application.
   */
  appVisibility?: string;
  /** Configuration associated with Custom Attribute Definitions of type `STRING`. */
  stringConfig?: CatalogCustomAttributeDefinitionStringConfig;
  numberConfig?: CatalogCustomAttributeDefinitionNumberConfig;
  /** Configuration associated with `SELECTION`-type custom attribute definitions. */
  selectionConfig?: CatalogCustomAttributeDefinitionSelectionConfig;
  /**
   * The number of custom attributes that reference this
   * custom attribute definition. Set by the server in response to a ListCatalog
   * request with `include_counts` set to `true`.  If the actual count is greater
   * than 100, `custom_attribute_usage_count` will be set to `100`.
   */
  customAttributeUsageCount?: number;
  /**
   * The name of the desired custom attribute key that can be used to access
   * the custom attribute value on catalog objects. Cannot be modified after the
   * custom attribute definition has been created.
   * Must be between 1 and 60 characters, and may only contain the characters `[a-zA-Z0-9_-]`.
   */
  key?: string | null;
}

export const catalogCustomAttributeDefinitionSchema: Schema<CatalogCustomAttributeDefinition> = object(
  {
    type: ['type', string()],
    name: ['name', string()],
    description: ['description', optional(nullable(string()))],
    sourceApplication: [
      'source_application',
      optional(lazy(() => sourceApplicationSchema)),
    ],
    allowedObjectTypes: ['allowed_object_types', array(string())],
    sellerVisibility: ['seller_visibility', optional(string())],
    appVisibility: ['app_visibility', optional(string())],
    stringConfig: [
      'string_config',
      optional(lazy(() => catalogCustomAttributeDefinitionStringConfigSchema)),
    ],
    numberConfig: [
      'number_config',
      optional(lazy(() => catalogCustomAttributeDefinitionNumberConfigSchema)),
    ],
    selectionConfig: [
      'selection_config',
      optional(
        lazy(() => catalogCustomAttributeDefinitionSelectionConfigSchema)
      ),
    ],
    customAttributeUsageCount: [
      'custom_attribute_usage_count',
      optional(number()),
    ],
    key: ['key', optional(nullable(string()))],
  }
);
