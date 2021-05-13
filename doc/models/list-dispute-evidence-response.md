
# List Dispute Evidence Response

Defines the fields in a `ListDisputeEvidence` response.

## Structure

`ListDisputeEvidenceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `evidence` | [`DisputeEvidence[] \| undefined`](/doc/models/dispute-evidence.md) | Optional | The list of evidence previously uploaded to the specified dispute. |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |

## Example (as JSON)

```json
{
  "cursor": "G1aSTRm48CLjJsg6Sg3hQN1b1OMaoVuG",
  "evidence": [
    {
      "dispute_id": "bVTprrwk0gygTLZ96VX1oB",
      "evidence_id": "TOomLInj6iWmP3N8qfCXrB",
      "evidence_text": "1Z8888888888888888",
      "evidence_type": "TRACKING_NUMBER",
      "uploaded_at": "2018-10-18T16:01:10.000Z"
    },
    {
      "dispute_id": "bVTprrwk0gygTLZ96VX1oB",
      "evidence_file": {
        "filename": "evidence.tiff",
        "filetype": "image/tiff"
      },
      "evidence_id": "TOomLInj6iWmP3N8qfCXrB",
      "evidence_type": "GENERIC_EVIDENCE",
      "uploaded_at": "2018-10-18T16:01:10.000Z"
    }
  ]
}
```

