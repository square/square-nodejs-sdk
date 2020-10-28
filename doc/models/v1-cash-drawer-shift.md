
# V1 Cash Drawer Shift

Contains details for a single cash drawer shift.

## Structure

`V1CashDrawerShift`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The shift's unique ID. |
| `event_type` | [`string`](/doc/models/v1-cash-drawer-shift-event-type.md) | Optional | - |
| `opened_at` | `string` | Optional | The time when the shift began, in ISO 8601 format. |
| `ended_at` | `string` | Optional | The time when the shift ended, in ISO 8601 format. |
| `closed_at` | `string` | Optional | The time when the shift was closed, in ISO 8601 format. |
| `employee_ids` | `string[]` | Optional | The IDs of all employees that were logged into Square Register at some point during the cash drawer shift. |
| `opening_employee_id` | `string` | Optional | The ID of the employee that started the cash drawer shift. |
| `ending_employee_id` | `string` | Optional | The ID of the employee that ended the cash drawer shift. |
| `closing_employee_id` | `string` | Optional | The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents. |
| `description` | `string` | Optional | A description of the cash drawer shift. |
| `starting_cash_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `cash_payment_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `cash_refunds_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `cash_paid_in_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `cash_paid_out_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `expected_cash_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `closed_cash_money` | [`V1Money`](/doc/models/v1-money.md) | Optional | - |
| `device` | [`Device`](/doc/models/device.md) | Optional | - |
| `events` | [`V1CashDrawerEvent[]`](/doc/models/v1-cash-drawer-event.md) | Optional | All of the events (payments, refunds, and so on) that involved the cash drawer during the shift. |

## Example (as JSON)

```json
{
  "id": "id0",
  "event_type": "ENDED",
  "opened_at": "opened_at8",
  "ended_at": "ended_at2",
  "closed_at": "closed_at2"
}
```

