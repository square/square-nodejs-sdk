
# Terminal Action

Represents an action processed by the Square Terminal.

## Structure

`TerminalAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique ID for this `TerminalAction`.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `255` |
| `deviceId` | `string \| null \| undefined` | Optional | The unique Id of the device intended for this `TerminalAction`.<br>The Id can be retrieved from /v2/devices api. |
| `deadlineDuration` | `string \| null \| undefined` | Optional | The duration as an RFC 3339 duration, after which the action will be automatically canceled.<br>TerminalActions that are `PENDING` will be automatically `CANCELED` and have a cancellation reason<br>of `TIMED_OUT`<br><br>Default: 5 minutes from creation<br><br>Maximum: 5 minutes |
| `status` | `string \| undefined` | Optional | The status of the `TerminalAction`.<br>Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED` |
| `cancelReason` | [`string \| undefined`](../../doc/models/action-cancel-reason.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The time when the `TerminalAction` was created as an RFC 3339 timestamp. |
| `updatedAt` | `string \| undefined` | Optional | The time when the `TerminalAction` was last updated as an RFC 3339 timestamp. |
| `appId` | `string \| undefined` | Optional | The ID of the application that created the action. |
| `locationId` | `string \| undefined` | Optional | The location id the action is attached to, if a link can be made.<br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`string \| undefined`](../../doc/models/terminal-action-action-type.md) | Optional | Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. |
| `qrCodeOptions` | [`QrCodeOptions \| undefined`](../../doc/models/qr-code-options.md) | Optional | Fields to describe the action that displays QR-Codes. |
| `saveCardOptions` | [`SaveCardOptions \| undefined`](../../doc/models/save-card-options.md) | Optional | Describes save-card action fields. |
| `signatureOptions` | [`SignatureOptions \| undefined`](../../doc/models/signature-options.md) | Optional | - |
| `confirmationOptions` | [`ConfirmationOptions \| undefined`](../../doc/models/confirmation-options.md) | Optional | - |
| `receiptOptions` | [`ReceiptOptions \| undefined`](../../doc/models/receipt-options.md) | Optional | Describes receipt action fields. |
| `dataCollectionOptions` | [`DataCollectionOptions \| undefined`](../../doc/models/data-collection-options.md) | Optional | - |
| `selectOptions` | [`SelectOptions \| undefined`](../../doc/models/select-options.md) | Optional | - |
| `deviceMetadata` | [`DeviceMetadata \| undefined`](../../doc/models/device-metadata.md) | Optional | - |
| `awaitNextAction` | `boolean \| null \| undefined` | Optional | Indicates the action will be linked to another action and requires a waiting dialog to be<br>displayed instead of returning to the idle screen on completion of the action.<br><br>Only supported on SIGNATURE, CONFIRMATION, DATA_COLLECTION, and SELECT types. |
| `awaitNextActionDuration` | `string \| null \| undefined` | Optional | The timeout duration of the waiting dialog as an RFC 3339 duration, after which the<br>waiting dialog will no longer be displayed and the Terminal will return to the idle screen.<br><br>Default: 5 minutes from when the waiting dialog is displayed<br><br>Maximum: 5 minutes |

## Example (as JSON)

```json
{
  "id": "id8",
  "device_id": "device_id4",
  "deadline_duration": "deadline_duration0",
  "status": "status0",
  "cancel_reason": "TIMED_OUT"
}
```

