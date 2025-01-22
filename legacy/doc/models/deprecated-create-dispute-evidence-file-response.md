
# Deprecated Create Dispute Evidence File Response

Defines the fields in a `DeprecatedCreateDisputeEvidenceFile` response.

## Structure

`DeprecatedCreateDisputeEvidenceFileResponse`

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
    "evidence_file": {
      "filename": "evidence.tiff",
      "filetype": "image/tiff"
    },
    "evidence_id": "TOomLInj6iWmP3N8qfCXrB",
    "evidence_type": "GENERIC_EVIDENCE",
    "uploaded_at": "2018-10-18T16:01:10.000Z",
    "id": "id2",
    "evidence_text": "evidence_text6"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

