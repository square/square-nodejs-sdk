
# Customer Custom Attribute Filter

The custom attribute filter. Use this filter in a set of [custom attribute filters](../../doc/models/customer-custom-attribute-filters.md) to search
based on the value or last updated date of a customer-related [custom attribute](../../doc/models/custom-attribute.md).

## Structure

`CustomerCustomAttributeFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | The `key` of the [custom attribute](entity:CustomAttribute) to filter by. The key is the identifier of the custom attribute<br>(and the corresponding custom attribute definition) and can be retrieved using the [Customer Custom Attributes API](api:CustomerCustomAttributes). |
| `filter` | [`CustomerCustomAttributeFilterValue \| undefined`](../../doc/models/customer-custom-attribute-filter-value.md) | Optional | A type-specific filter used in a [custom attribute filter](../../doc/models/customer-custom-attribute-filter.md) to search based on the value<br>of a customer-related [custom attribute](../../doc/models/custom-attribute.md). |
| `updatedAt` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |

## Example (as JSON)

```json
{
  "key": "key6",
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
```

