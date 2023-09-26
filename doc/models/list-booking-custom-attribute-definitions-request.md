
# List Booking Custom Attribute Definitions Request

Represents a [ListBookingCustomAttributeDefinitions](../../doc/api/booking-custom-attributes.md#list-booking-custom-attribute-definitions) request.

## Structure

`ListBookingCustomAttributeDefinitionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: `>= 1`, `<= 100` |
| `cursor` | `string \| null \| undefined` | Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "limit": 98,
  "cursor": "cursor6"
}
```

