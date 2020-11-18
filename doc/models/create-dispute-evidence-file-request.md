
# Create Dispute Evidence File Request

Defines parameters for a CreateDisputeEvidenceFile request.

## Structure

`CreateDisputeEvidenceFileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` |  | Unique ID. For more information,<br>see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). |
| `evidenceType` | [`string`](/doc/models/dispute-evidence-type.md) | Optional | Type of the dispute evidence. |
| `contentType` | `string` | Optional | The MIME type of the uploaded file.<br>One of image/heic, image/heif, image/jpeg, application/pdf,  image/png, image/tiff. |

## Example (as JSON)

```json
{
  "idempotency_key": "idempotency_key6",
  "evidence_type": "RECEIPT",
  "content_type": "content_type6"
}
```

