
# Date Range

A range defined by two dates. Used for filtering a query for Connect v2
objects that have date properties.

## Structure

`DateRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string \| undefined` | Optional | A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601<br>extended format for calendar dates.<br>The beginning of a date range (inclusive). |
| `endDate` | `string \| undefined` | Optional | A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601<br>extended format for calendar dates.<br>The end of a date range (inclusive). |

## Example (as JSON)

```json
{
  "start_date": "start_date6",
  "end_date": "end_date0"
}
```

