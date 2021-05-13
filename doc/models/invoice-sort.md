
# Invoice Sort

Identifies the sort field and sort order.

## Structure

`InvoiceSort`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string` | Required | The field to use for sorting.<br>**Default**: `'INVOICE_SORT_DATE'`<br>*Default: `'INVOICE_SORT_DATE'`* |
| `order` | [`string \| undefined`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "field": "field6",
  "order": "DESC"
}
```

