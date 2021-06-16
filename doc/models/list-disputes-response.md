
# List Disputes Response

Defines fields in a `ListDisputes` response.

## Structure

`ListDisputesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `disputes` | [`Dispute[] \| undefined`](/doc/models/dispute.md) | Optional | The list of disputes. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request.<br>If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "cursor": "G1aSTRm48CLjJsg6Sg3hQN1b1OMaoVuG",
  "disputes": [
    {
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "brand_dispute_id": "100000809947",
      "card_brand": "VISA",
      "created_at": "2018-10-12T02:20:25.577Z",
      "disputed_payments": [
        {
          "payment_id": "APgIq6RX2jM6DKDhMHiC6QEkuaB"
        }
      ],
      "due_at": "2018-10-11T00:00:00.000Z",
      "id": "OnY1AZwhSi775rbNIK4gv",
      "reason": "NO_KNOWLEDGE",
      "state": "EVIDENCE_REQUIRED",
      "updated_at": "2018-10-12T02:20:25.577Z"
    }
  ]
}
```

