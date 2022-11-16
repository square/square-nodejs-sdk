import {
  dict,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

/**
 * Represents a definition for custom attribute values. A custom attribute definition
 * specifies the key, visibility, schema, and other properties for a custom attribute.
 */
export interface CustomAttributeDefinition {
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
   * This field can not be changed
   * after the custom attribute definition is created. This field is required when creating
   * a definition and must be unique per application, seller, and resource type.
   */
  key?: string | null;
  /**
   * The JSON schema for the custom attribute definition, which determines the data type of the corresponding custom attributes. For more information,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview). This field is required when creating a definition.
   */
  schema?: Record<string, unknown> | null;
  /**
   * The name of the custom attribute definition for API and seller-facing UI purposes. The name must
   * be unique within the seller and application pair. This field is required if the
   * `visibility` field is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   */
  name?: string | null;
  /**
   * Seller-oriented description of the custom attribute definition, including any constraints
   * that the seller should observe. May be displayed as a tooltip in Square UIs. This field is
   * required if the `visibility` field is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   */
  description?: string | null;
  /**
   * The level of permission that a seller or other applications requires to
   * view this custom attribute definition.
   * The `Visibility` field controls who can read and write the custom attribute values
   * and custom attribute definition.
   */
  visibility?: string;
  /**
   * Read only. The current version of the custom attribute definition.
   * The value is incremented each time the custom attribute definition is updated.
   * When updating a custom attribute definition, you can provide this field
   * and specify the current version of the custom attribute definition to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency).
   * On writes, this field must be set to the latest version. Stale writes are rejected.
   * This field can also be used to enforce strong consistency for reads. For more information about strong consistency for reads,
   * see [Custom Attributes Overview](https://developer.squareup.com/docs/devtools/customattributes/overview).
   */
  version?: number;
  /**
   * The timestamp that indicates when the custom attribute definition was created or most recently updated,
   * in RFC 3339 format.
   */
  updatedAt?: string;
  /** The timestamp that indicates when the custom attribute definition was created, in RFC 3339 format. */
  createdAt?: string;
}

export const customAttributeDefinitionSchema: Schema<CustomAttributeDefinition> = object(
  {
    key: ['key', optional(nullable(string()))],
    schema: ['schema', optional(nullable(dict(unknown())))],
    name: ['name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    visibility: ['visibility', optional(string())],
    version: ['version', optional(number())],
    updatedAt: ['updated_at', optional(string())],
    createdAt: ['created_at', optional(string())],
  }
);
