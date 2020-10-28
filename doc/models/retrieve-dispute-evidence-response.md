
# Retrieve Dispute Evidence Response

Defines fields in a RetrieveDisputeEvidence response.

## Structure

`RetrieveDisputeEvidenceResponse`

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
    "evidence_file": {
      "filename": "evidence.tiff",
      "filetype": "image/tiff"
    },
    "uploaded_at": "2018-10-18T16:01:10.000Z"
  }
}
```

