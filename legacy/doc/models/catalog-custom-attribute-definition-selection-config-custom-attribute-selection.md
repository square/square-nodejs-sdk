
# Catalog Custom Attribute Definition Selection Config Custom Attribute Selection

A named selection for this `SELECTION`-type custom attribute definition.

## Structure

`CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| null \| undefined` | Optional | Unique ID set by Square. |
| `name` | `string` | Required | Selection name, unique within `allowed_selections`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "uid": "uid4",
  "name": "name4"
}
```

