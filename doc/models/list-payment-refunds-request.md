
# List Payment Refunds Request

Retrieves a list of refunds for the account making the request.

The maximum results per page is 100.

## Structure

`ListPaymentRefundsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginTime` | `string` | Optional | The timestamp for the beginning of the requested reporting period, in RFC 3339 format.<br><br>Default: The current time minus one year. |
| `endTime` | `string` | Optional | The timestamp for the end of the requested reporting period, in RFC 3339 format.<br><br>Default: The current time. |
| `sortOrder` | `string` | Optional | The order in which results are listed:<br><br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |
| `locationId` | `string` | Optional | Limit results to the location supplied. By default, results are returned<br>for all locations associated with the seller. |
| `status` | `string` | Optional | If provided, only refunds with the given status are returned.<br>For a list of refund status values, see [PaymentRefund](#type-paymentrefund).<br><br>Default: If omitted, refunds are returned regardless of their status. |
| `sourceType` | `string` | Optional | If provided, only refunds with the given source type are returned.<br><br>- `CARD` - List refunds only for payments where `CARD` was specified as the payment<br>  source.<br><br>Default: If omitted, refunds are returned regardless of the source type. |
| `limit` | `number` | Optional | The maximum number of results to be returned in a single page.<br><br>It is possible to receive fewer results than the specified limit on a given page.<br><br>If the supplied value is greater than 100, no more than 100 results are returned.<br><br>Default: 100 |

## Example (as JSON)

```json
{}
```

