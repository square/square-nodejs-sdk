
# Invoice Query

Describes query criteria for searching invoices.

## Structure

`InvoiceQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`InvoiceFilter`](../../doc/models/invoice-filter.md) | Required | Describes query filters to apply. |
| `sort` | [`InvoiceSort \| undefined`](../../doc/models/invoice-sort.md) | Optional | Identifies the sort field and sort order. |

## Example (as JSON)

```json
{
  "filter": null,
  "sort": {
    "field": "INVOICE_SORT_DATE"
  }
}
```

