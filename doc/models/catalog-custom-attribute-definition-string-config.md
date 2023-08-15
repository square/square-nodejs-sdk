
# Catalog Custom Attribute Definition String Config

Configuration associated with Custom Attribute Definitions of type `STRING`.

## Structure

`CatalogCustomAttributeDefinitionStringConfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enforceUniqueness` | `boolean \| null \| undefined` | Optional | If true, each Custom Attribute instance associated with this Custom Attribute<br>Definition must have a unique value within the seller's catalog. For<br>example, this may be used for a value like a SKU that should not be<br>duplicated within a seller's catalog. May not be modified after the<br>definition has been created. |

## Example (as JSON)

```json
{
  "enforce_uniqueness": false
}
```

