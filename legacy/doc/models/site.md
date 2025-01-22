
# Site

Represents a Square Online site, which is an online store for a Square seller.

## Structure

`Site`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the site.<br>**Constraints**: *Maximum Length*: `32` |
| `siteTitle` | `string \| null \| undefined` | Optional | The title of the site. |
| `domain` | `string \| null \| undefined` | Optional | The domain of the site (without the protocol). For example, `mysite1.square.site`. |
| `isPublished` | `boolean \| null \| undefined` | Optional | Indicates whether the site is published. |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the site was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp of when the site was last updated, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "site_title": "site_title6",
  "domain": "domain6",
  "is_published": false,
  "created_at": "created_at8"
}
```

