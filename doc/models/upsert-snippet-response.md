
# Upsert Snippet Response

Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.

## Structure

`UpsertSnippetResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `snippet` | [`Snippet \| undefined`](../../doc/models/snippet.md) | Optional | Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. |

## Example (as JSON)

```json
{
  "snippet": {
    "content": "<script>var js = 1;</script>",
    "created_at": "2021-03-11T25:40:09.000000Z",
    "id": "snippet_5d178150-a6c0-11eb-a9f1-437e6a2881e7",
    "site_id": "site_278075276488921835",
    "updated_at": "2021-03-11T25:40:09.000000Z"
  },
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

