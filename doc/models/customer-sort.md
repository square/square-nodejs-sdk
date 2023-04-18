
# Customer Sort

Represents the sorting criteria in a [search query](../../doc/models/customer-query.md) that defines how to sort
customer profiles returned in [SearchCustomers](../../doc/api/customers.md#search-customers) results.

## Structure

`CustomerSort`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | [`string \| undefined`](../../doc/models/customer-sort-field.md) | Optional | Specifies customer attributes as the sort key to customer profiles returned from a search. |
| `order` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "field": "DEFAULT",
  "order": "DESC"
}
```

