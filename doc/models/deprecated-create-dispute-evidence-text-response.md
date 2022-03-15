
# Deprecated Create Dispute Evidence Text Response

Defines the fields in a `DeprecatedCreateDisputeEvidenceText` response.

## Structure

`DeprecatedCreateDisputeEvidenceTextResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `evidence` | [`DisputeEvidence \| undefined`](../../doc/models/dispute-evidence.md) | Optional | - |

## Example (as JSON)

```json
{
  "evidence": {
    "dispute_id": "bVTprrwk0gygTLZ96VX1oB",
    "evidence_text": "1Z8888888888888888",
    "evidence_type": "TRACKING_NUMBER",
    "id": "TOomLInj6iWmP3N8qfCXrB",
    "uploaded_at": "2018-10-18T16:01:10.000Z"
  }
}
```

