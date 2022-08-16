
# Site

Represents a Square Online site, which is an online store for a Square seller.

## Structure

`Site`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the site.<br>**Constraints**: *Maximum Length*: `32` |
| `siteTitle` | `string \| undefined` | Optional | The title of the site. |
| `domain` | `string \| undefined` | Optional | The domain of the site (without the protocol). For example, `mysite1.square.site`. |
| `isPublished` | `boolean \| undefined` | Optional | Indicates whether the site is published. |
| `createdAt` | `string \| undefined` | Optional | The timestamp of when the site was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp of when the site was last updated, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "site_title": null,
  "domain": null,
  "is_published": null
}
```

