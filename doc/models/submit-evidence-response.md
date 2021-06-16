
# Submit Evidence Response

Defines the fields in a `SubmitEvidence` response.

## Structure

`SubmitEvidenceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `dispute` | [`Dispute \| undefined`](/doc/models/dispute.md) | Optional | Represents a dispute a cardholder initiated with their bank. |

## Example (as JSON)

```json
{
  "dispute": {
    "amount_money": {
      "amount": 2000,
      "currency": "USD"
    },
    "brand_dispute_id": "100000399240",
    "card_brand": "VISA",
    "created_at": "2018-10-18T16:02:15.313Z",
    "disputed_payments": [
      {
        "payment_id": "2yeBUWJzllJTpmnSqtMRAL19taB"
      }
    ],
    "due_at": "2018-11-01T00:00:00.000Z",
    "id": "EAZoK70gX3fyvibecLwIGB",
    "reason": "NO_KNOWLEDGE",
    "state": "PROCESSING",
    "updated_at": "2018-10-18T16:02:15.313Z"
  }
}
```

