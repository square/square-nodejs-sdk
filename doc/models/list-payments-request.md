
# List Payments Request

Describes a request to list payments using
[ListPayments](../../doc/api/payments.md#list-payments).

The maximum results per page is 100.

## Structure

`ListPaymentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string \| undefined` | Optional | Indicates the start of the time range to retrieve payments for, in RFC 3339 format.  <br>The range is determined using the `created_at` field for each Payment.<br>Inclusive. Default: The current time minus one year. |
| `endTime` | `string \| undefined` | Optional | Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `created_at` field for each Payment.<br><br>Default: The current time. |
| `sortOrder` | `string \| undefined` | Optional | The order in which results are listed by `Payment.created_at`:<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `locationId` | `string \| undefined` | Optional | Limit results to the location supplied. By default, results are returned<br>for the default (main) location associated with the seller. |
| `total` | `bigint \| undefined` | Optional | The exact amount in the `total_money` for a payment. |
| `last4` | `string \| undefined` | Optional | The last four digits of a payment card. |
| `cardBrand` | `string \| undefined` | Optional | The brand of the payment card (for example, VISA). |
| `limit` | `number \| undefined` | Optional | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br><br>The default value of 100 is also the maximum allowed value. If the provided value is<br>greater than 100, it is ignored and the default value is used instead.<br><br>Default: `100` |

## Example (as JSON)

```json
{}
```

