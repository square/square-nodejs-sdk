
# Create Dispute Evidence Text Response

Defines fields in a CreateDisputeEvidenceText response.

## Structure

`CreateDisputeEvidenceTextResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `evidence` | [`DisputeEvidence`](/doc/models/dispute-evidence.md) | Optional | - |

## Example (as JSON)

```json
{
  "evidence": {
    "evidence_id": "TOomLInj6iWmP3N8qfCXrB",
    "dispute_id": "bVTprrwk0gygTLZ96VX1oB",
    "evidence_text": "1Z8888888888888888",
    "uploaded_at": "2018-10-18T16:01:10.000Z"
  }
}
```

