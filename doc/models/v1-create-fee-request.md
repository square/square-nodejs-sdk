
# V1 Create Fee Request

## Structure

`V1CreateFeeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1Fee`](/doc/models/v1-fee.md) | Optional | V1Fee |

## Example (as JSON)

```json
{
  "body": {
    "id": "id6",
    "name": "name6",
    "rate": "rate4",
    "calculation_phase": "FEE_SUBTOTAL_PHASE",
    "adjustment_type": "TAX"
  }
}
```

