import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from './customAttributeDefinition';

/**
 * A custom attribute value. Each custom attribute value has a corresponding
 * `CustomAttributeDefinition` object.
 */
export interface CustomAttribute {
  /**
   * The identifier
   * of the custom attribute definition and its corresponding custom attributes. This value
   * can be a simple key, which is the key that is provided when the custom attribute definition
   * is created, or a qualified key, if the requesting
   * application is not the definition owner. The qualified key consists of the application ID
   * of the custom attribute definition owner
   * followed by the simple key that was provided when the definition was created. It has the
   * format application_id:simple key.
   * The value for a simple key can contain up to 60 alphanumeric characters, periods (.),
   * underscores (_), and hyphens (-).
   */
  key?: string | null;
  /**
   * The value assigned to the custom attribute. It is validated against the custom
   * attribute definition's schema on write operations. For more information about custom
   * attribute values,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  value?: unknown | null;
  /**
   * Read only. The current version of the custom attribute. This field is incremented when the custom attribute is changed.
   * When updating an existing custom attribute value, you can provide this field
   * and specify the current version of the custom attribute to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency).
   * This field can also be used to enforce strong consistency for reads. For more information about strong consistency for reads,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  version?: number;
  /**
   * The level of permission that a seller or other applications requires to
   * view this custom attribute definition.
   * The `Visibility` field controls who can read and write the custom attribute values
   * and custom attribute definition.
   */
  visibility?: string;
  /**
   * Represents a definition for custom attribute values. A custom attribute definition
   * specifies the key, visibility, schema, and other properties for a custom attribute.
   */
  definition?: CustomAttributeDefinition;
  /**
   * The timestamp that indicates when the custom attribute was created or was most recently
   * updated, in RFC 3339 format.
   */
  updatedAt?: string;
  /** The timestamp that indicates when the custom attribute was created, in RFC 3339 format. */
  createdAt?: string;
}

export const customAttributeSchema: Schema<CustomAttribute> = object({
  key: ['key', optional(nullable(string()))],
  value: ['value', optional(nullable(unknown()))],
  version: ['version', optional(number())],
  visibility: ['visibility', optional(string())],
  definition: [
    'definition',
    optional(lazy(() => customAttributeDefinitionSchema)),
  ],
  updatedAt: ['updated_at', optional(string())],
  createdAt: ['created_at', optional(string())],
});
