
# Publish Invoice Request

Describes a `PublishInvoice` request.

## Structure

`PublishInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `number` | Required | The version of the [invoice](entity:Invoice) to publish.<br>This must match the current version of the invoice; otherwise, the request is rejected. |
| `idempotencyKey` | `string \| null \| undefined` | Optional | A unique string that identifies the `PublishInvoice` request. If you do not<br>provide `idempotency_key` (or provide an empty string as the value), the endpoint<br>treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `128` |

## Example (as JSON)

```json
{
  "idempotency_key": "32da42d0-1997-41b0-826b-f09464fc2c2e",
  "version": 1
}
```

