
# V1 Timecard Event Event Type

Actions that resulted in a change to a timecard. All timecard
events created with the Connect API have an event type that begins with
`API`.

## Enumeration

`V1TimecardEventEventType`

## Fields

| Name | Description |
|  --- | --- |
| `API_CREATE` | The timecard was created by a request to the<br>[CreateTimecard](#endpoint-v1employees-createtimecard) endpoint. |
| `API_EDIT` | The timecard was edited by a request to the<br>[UpdateTimecard](#endpoint-v1employees-updatetimecard) endpoint. |
| `API_DELETE` | The timecard was deleted by a request to the<br>[DeleteTimecard](#endpoint-v1employees-deletetimecard) endpoint. |
| `REGISTER_CLOCKIN` | The employee clocked in via Square Point of Sale. |
| `REGISTER_CLOCKOUT` | The employee clocked out via Square Point of Sale. |
| `DASHBOARD_SUPERVISOR_CLOSE` | A supervisor clocked out the employee from the merchant<br>dashboard. |
| `DASHBOARD_EDIT` | A supervisor manually edited the timecard from the merchant<br>dashboard |
| `DASHBOARD_DELETE` | A supervisor deleted the timecard from the merchant dashboard. |

