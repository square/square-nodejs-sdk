
# Terminal Device Checkout Options

## Structure

`TerminalDeviceCheckoutOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `skipReceiptScreen` | `boolean \| undefined` | Optional | Instructs the device to skip the receipt screen. Defaults to false. |
| `tipSettings` | [`TipSettings \| undefined`](/doc/models/tip-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "skip_receipt_screen": false,
  "tip_settings": {
    "allow_tipping": false,
    "separate_tip_screen": false,
    "custom_tip_field": false,
    "tip_percentages": [
      48
    ],
    "smart_tipping": false
  }
}
```

