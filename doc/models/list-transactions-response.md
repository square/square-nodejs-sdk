
# List Transactions Response

Defines the fields that are included in the response body of
a request to the [ListTransactions](#endpoint-listtransactions) endpoint.

One of `errors` or `transactions` is present in a given response (never both).

## Structure

`ListTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `transactions` | [`Transaction[]`](/doc/models/transaction.md) | Optional | An array of transactions that match your query. |
| `cursor` | `string` | Optional | A pagination cursor for retrieving the next set of results,<br>if any remain. Provide this value as the `cursor` parameter in a subsequent<br>request to this endpoint.<br><br>See [Paginating results](#paginatingresults) for more information. |

## Example (as JSON)

```json
{
  "transactions": [
    {
      "id": "KnL67ZIwXCPtzOrqj0HrkxMF",
      "location_id": "18YC4JDH91E1H",
      "created_at": "2016-01-20T22:57:56Z",
      "tenders": [
        {
          "id": "MtZRYYdDrYNQbOvV7nbuBvMF",
          "location_id": "18YC4JDH91E1H",
          "transaction_id": "KnL67ZIwXCPtzOrqj0HrkxMF",
          "created_at": "2016-01-20T22:57:56Z",
          "note": "some optional note",
          "amount_money": {
            "amount": 5000,
            "currency": "USD"
          },
          "processing_fee_money": {
            "amount": 138,
            "currency": "USD"
          },
          "type": "CARD",
          "card_details": {
            "status": "CAPTURED",
            "card": {
              "card_brand": "VISA",
              "last_4": "1111"
            },
            "entry_method": "KEYED"
          },
          "additional_recipients": [
            {
              "location_id": "057P5VYJ4A5X1",
              "description": "Application fees",
              "amount_money": {
                "amount": 20,
                "currency": "USD"
              }
            }
          ]
        }
      ],
      "refunds": [
        {
          "id": "7a5RcVI0CxbOcJ2wMOkE",
          "location_id": "18YC4JDH91E1H",
          "transaction_id": "KnL67ZIwXCPtzOrqj0HrkxMF",
          "tender_id": "MtZRYYdDrYNQbOvV7nbuBvMF",
          "created_at": "2016-01-20T22:59:20Z",
          "reason": "some reason why",
          "amount_money": {
            "amount": 5000,
            "currency": "USD"
          },
          "status": "APPROVED",
          "processing_fee_money": {
            "amount": 138,
            "currency": "USD"
          },
          "additional_recipients": [
            {
              "location_id": "057P5VYJ4A5X1",
              "description": "Application fees",
              "amount_money": {
                "amount": 100,
                "currency": "USD"
              }
            }
          ]
        }
      ],
      "reference_id": "some optional reference id",
      "product": "EXTERNAL_API"
    }
  ]
}
```

