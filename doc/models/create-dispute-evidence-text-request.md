
# Create Dispute Evidence Text Request

Defines the parameters for a `CreateDisputeEvidenceText` request.

## Structure

`CreateDisputeEvidenceTextRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A unique key identifying the request. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |
| `evidenceType` | [`string \| undefined`](../../doc/models/dispute-evidence-type.md) | Optional | The type of the dispute evidence. |
| `evidenceText` | `string` | Required | The evidence string.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500` |

## Example (as JSON)

```json
{
  "evidence_text": "1Z8888888888888888",
  "evidence_type": "TRACKING_NUMBER",
  "idempotency_key": "ed3ee3933d946f1514d505d173c82648"
}
```

