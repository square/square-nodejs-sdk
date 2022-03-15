
# Dispute Evidence Created Webhook Object

## Structure

`DisputeEvidenceCreatedWebhookObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | [`Dispute \| undefined`](../../doc/models/dispute.md) | Optional | Represents a dispute a cardholder initiated with their bank. |

## Example (as JSON)

```json
{
  "object": {
    "dispute_id": "dispute_id4",
    "id": "id2",
    "amount_money": {
      "amount": 106,
      "currency": "HRK"
    },
    "reason": "DUPLICATE",
    "state": "PROCESSING"
  }
}
```

