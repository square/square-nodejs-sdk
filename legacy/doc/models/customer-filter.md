
# Customer Filter

Represents the filtering criteria in a [search query](../../doc/models/customer-query.md) that defines how to filter
customer profiles returned in [SearchCustomers](../../doc/api/customers.md#search-customers) results.

## Structure

`CustomerFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creationSource` | [`CustomerCreationSourceFilter \| undefined`](../../doc/models/customer-creation-source-filter.md) | Optional | The creation source filter.<br><br>If one or more creation sources are set, customer profiles are included in,<br>or excluded from, the result if they match at least one of the filter criteria. |
| `createdAt` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `updatedAt` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `emailAddress` | [`CustomerTextFilter \| undefined`](../../doc/models/customer-text-filter.md) | Optional | A filter to select customers based on exact or fuzzy matching of<br>customer attributes against a specified query. Depending on the customer attributes,<br>the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both. |
| `phoneNumber` | [`CustomerTextFilter \| undefined`](../../doc/models/customer-text-filter.md) | Optional | A filter to select customers based on exact or fuzzy matching of<br>customer attributes against a specified query. Depending on the customer attributes,<br>the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both. |
| `referenceId` | [`CustomerTextFilter \| undefined`](../../doc/models/customer-text-filter.md) | Optional | A filter to select customers based on exact or fuzzy matching of<br>customer attributes against a specified query. Depending on the customer attributes,<br>the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both. |
| `groupIds` | [`FilterValue \| undefined`](../../doc/models/filter-value.md) | Optional | A filter to select resources based on an exact field value. For any given<br>value, the value can only be in one property. Depending on the field, either<br>all properties can be set or only a subset will be available.<br><br>Refer to the documentation of the field. |
| `customAttribute` | [`CustomerCustomAttributeFilters \| undefined`](../../doc/models/customer-custom-attribute-filters.md) | Optional | The custom attribute filters in a set of [customer filters](../../doc/models/customer-filter.md) used in a search query. Use this filter<br>to search based on [custom attributes](../../doc/models/custom-attribute.md) that are assigned to customer profiles. For more information, see<br>[Search by custom attribute](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers#search-by-custom-attribute). |
| `segmentIds` | [`FilterValue \| undefined`](../../doc/models/filter-value.md) | Optional | A filter to select resources based on an exact field value. For any given<br>value, the value can only be in one property. Depending on the field, either<br>all properties can be set or only a subset will be available.<br><br>Refer to the documentation of the field. |

## Example (as JSON)

```json
{
  "creation_source": {
    "values": [
      "THIRD_PARTY_IMPORT",
      "THIRD_PARTY",
      "TERMINAL"
    ],
    "rule": "INCLUDE"
  },
  "created_at": {
    "start_at": "start_at4",
    "end_at": "end_at8"
  },
  "updated_at": {
    "start_at": "start_at6",
    "end_at": "end_at6"
  },
  "email_address": {
    "exact": "exact2",
    "fuzzy": "fuzzy8"
  },
  "phone_number": {
    "exact": "exact2",
    "fuzzy": "fuzzy8"
  }
}
```

