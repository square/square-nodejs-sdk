
# List Sites Response

Represents a `ListSites` response. The response can include either `sites` or `errors`.

## Structure

`ListSitesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `sites` | [`Site[] \| undefined`](../../doc/models/site.md) | Optional | The sites that belong to the seller. |

## Example (as JSON)

```json
{
  "sites": [
    {
      "created_at": "2020-10-28T13:22:51.000000Z",
      "domain": "mysite2.square.site",
      "id": "site_278075276488921835",
      "is_published": false,
      "site_title": "My Second Site",
      "updated_at": "2020-10-28T13:22:51.000000Z"
    },
    {
      "created_at": "2020-06-18T17:45:13.000000Z",
      "domain": "mysite1.square.site",
      "id": "site_102725345836253849",
      "is_published": true,
      "site_title": "My First Site",
      "updated_at": "2020-11-23T02:19:10.000000Z"
    }
  ],
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

