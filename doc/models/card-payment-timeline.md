
# Card Payment Timeline

The timeline for card payments.

## Structure

`CardPaymentTimeline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizedAt` | `string \| null \| undefined` | Optional | The timestamp when the payment was authorized, in RFC 3339 format. |
| `capturedAt` | `string \| null \| undefined` | Optional | The timestamp when the payment was captured, in RFC 3339 format. |
| `voidedAt` | `string \| null \| undefined` | Optional | The timestamp when the payment was voided, in RFC 3339 format. |

## Example (as JSON)

```json
{
  "authorized_at": "authorized_at2",
  "captured_at": "captured_at2",
  "voided_at": "voided_at6"
}
```

