
# Catalog V1 Id

A Square API V1 identifier of an item, including the object ID and its associated location ID.

## Structure

`CatalogV1Id`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `catalogV1Id` | `string \| null \| undefined` | Optional | The ID for an object used in the Square API V1, if the object ID differs from the Square API V2 object ID. |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the `Location` this Connect V1 ID is associated with. |

## Example (as JSON)

```json
{
  "catalog_v1_id": "catalog_v1_id2",
  "location_id": "location_id2"
}
```

