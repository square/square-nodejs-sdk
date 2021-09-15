
# Customer Query

Represents a query (including filtering criteria, sorting criteria, or both) used to search
for customer profiles.

## Structure

`CustomerQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`CustomerFilter \| undefined`](/doc/models/customer-filter.md) | Optional | Represents a set of `CustomerQuery` filters used to limit the set of<br>`Customers` returned by `SearchCustomers`. |
| `sort` | [`CustomerSort \| undefined`](/doc/models/customer-sort.md) | Optional | Specifies how searched customers profiles are sorted, including the sort key and sort order. |

## Example (as JSON)

```json
{
  "filter": {
    "creation_source": {
      "values": [
        "INVOICES",
        "LOYALTY",
        "MARKETING"
      ],
      "rule": "INCLUDE"
    },
    "created_at": {
      "start_at": "start_at4",
      "end_at": "end_at8"
    },
    "updated_at": {
      "start_at": "start_at2",
      "end_at": "end_at0"
    },
    "email_address": {
      "exact": "exact2",
      "fuzzy": "fuzzy2"
    },
    "phone_number": {
      "exact": "exact8",
      "fuzzy": "fuzzy6"
    }
  },
  "sort": {
    "field": "DEFAULT",
    "order": "DESC"
  }
}
```

