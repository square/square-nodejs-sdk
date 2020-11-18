
# List Dispute Evidence Response

Defines fields in a ListDisputeEvidence response.

## Structure

`ListDisputeEvidenceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `evidence` | [`DisputeEvidence[]`](/doc/models/dispute-evidence.md) | Optional | The list of evidence previously uploaded to the specified dispute. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |

## Example (as JSON)

```json
{
  "evidence": [
    {
      "evidence_id": "evidence_id6",
      "dispute_id": "dispute_id8",
      "uploaded_at": "uploaded_at0",
      "evidence_type": "REBUTTAL_EXPLANATION"
    },
    {
      "evidence_id": "evidence_id5",
      "dispute_id": "dispute_id9",
      "uploaded_at": "uploaded_at1",
      "evidence_type": "RELATED_TRANSACTION_DOCUMENTATION"
    }
  ],
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_SHORT",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "CARD_EXPIRED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

