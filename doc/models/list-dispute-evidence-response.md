
# List Dispute Evidence Response

Defines the fields in a `ListDisputeEvidence` response.

## Structure

`ListDisputeEvidenceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `evidence` | [`DisputeEvidence[] \| undefined`](../../doc/models/dispute-evidence.md) | Optional | The list of evidence previously uploaded to the specified dispute. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request.<br>If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "evidence": [
    {
      "evidence_id": "evidence_id6",
      "id": "id6",
      "dispute_id": "dispute_id8",
      "evidence_file": {
        "filename": "filename4",
        "filetype": "filetype4"
      },
      "evidence_text": "evidence_text0"
    },
    {
      "evidence_id": "evidence_id5",
      "id": "id7",
      "dispute_id": "dispute_id9",
      "evidence_file": {
        "filename": "filename5",
        "filetype": "filetype5"
      },
      "evidence_text": "evidence_text1"
    }
  ],
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "cursor": "cursor6"
}
```

