
# Upsert Snippet Request

Represents an `UpsertSnippet` request.

## Structure

`UpsertSnippetRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `snippet` | [`Snippet`](../../doc/models/snippet.md) | Required | Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. |

## Example (as JSON)

```json
{
  "snippet": {
    "content": "<script>var js = 1;</script>",
    "id": "id0",
    "site_id": "site_id6",
    "created_at": "created_at8",
    "updated_at": "updated_at4"
  }
}
```

