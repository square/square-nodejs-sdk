
# Customer Custom Attribute Filters

The custom attribute filters in a set of [customer filters](../../doc/models/customer-filter.md) used in a search query. Use this filter
to search based on [custom attributes](../../doc/models/custom-attribute.md) that are assigned to customer profiles. For more information, see
[Search by custom attribute](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers#search-by-custom-attribute).

## Structure

`CustomerCustomAttributeFilters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`CustomerCustomAttributeFilter[] \| null \| undefined`](../../doc/models/customer-custom-attribute-filter.md) | Optional | The custom attribute filters. Each filter must specify `key` and include the `filter` field with a type-specific filter,<br>the `updated_at` field, or both. The provided keys must be unique within the list of custom attribute filters. |

## Example (as JSON)

```json
{
  "filters": [
    {
      "key": "key0",
      "filter": {
        "email": {
          "exact": "exact6",
          "fuzzy": "fuzzy2"
        },
        "phone": {
          "exact": "exact0",
          "fuzzy": "fuzzy6"
        },
        "text": {
          "exact": "exact0",
          "fuzzy": "fuzzy6"
        },
        "selection": {
          "all": [
            "all1"
          ],
          "any": [
            "any8",
            "any9"
          ],
          "none": [
            "none3"
          ]
        },
        "date": {
          "start_at": "start_at6",
          "end_at": "end_at6"
        }
      },
      "updated_at": {
        "start_at": "start_at6",
        "end_at": "end_at6"
      }
    }
  ]
}
```

