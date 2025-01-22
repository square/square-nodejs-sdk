
# Invoice Attachment

Represents a file attached to an [invoice](../../doc/models/invoice.md).

## Structure

`InvoiceAttachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-assigned ID of the attachment. |
| `filename` | `string \| undefined` | Optional | The file name of the attachment, which is displayed on the invoice. |
| `description` | `string \| undefined` | Optional | The description of the attachment, which is displayed on the invoice.<br>This field maps to the seller-defined **Message** field. |
| `filesize` | `number \| undefined` | Optional | The file size of the attachment in bytes. |
| `hash` | `string \| undefined` | Optional | The MD5 hash that was generated from the file contents. |
| `mimeType` | `string \| undefined` | Optional | The mime type of the attachment.<br>The following mime types are supported:<br>image/gif, image/jpeg, image/png, image/tiff, image/bmp, application/pdf. |
| `uploadedAt` | `string \| undefined` | Optional | The timestamp when the attachment was uploaded, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id4",
  "filename": "filename6",
  "description": "description6",
  "filesize": 164,
  "hash": "hash0"
}
```

