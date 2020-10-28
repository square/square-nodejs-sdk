
# List Refunds Response

Defines the fields that are included in the response body of
a request to the [ListRefunds](#endpoint-listrefunds) endpoint.

One of `errors` or `refunds` is present in a given response (never both).

## Structure

`ListRefundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `refunds` | [`Refund[]`](/doc/models/refund.md) | Optional | An array of refunds that match your query. |
| `cursor` | `string` | Optional | A pagination cursor for retrieving the next set of results,<br>if any remain. Provide this value as the `cursor` parameter in a subsequent<br>request to this endpoint.<br><br>See [Paginating results](#paginatingresults) for more information. |

## Example (as JSON)

```json
{
  "refunds": [
    {
      "id": "b27436d1-7f8e-5610-45c6-417ef71434b4-SW",
      "location_id": "18YC4JDH91E1H",
      "transaction_id": "KnL67ZIwXCPtzOrqj0HrkxMF",
      "tender_id": "MtZRYYdDrYNQbOvV7nbuBvMF",
      "created_at": "2016-01-20T00:28:18Z",
      "reason": "some reason",
      "amount_money": {
        "amount": 100,
        "currency": "USD"
      },
      "additional_recipients": [
        {
          "location_id": "057P5VYJ4A5X1",
          "description": "Application fees",
          "amount_money": {
            "amount": 10,
            "currency": "USD"
          }
        }
      ],
      "status": "APPROVED"
    }
  ]
}
```

