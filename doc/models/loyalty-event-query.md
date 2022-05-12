
# Loyalty Event Query

Represents a query used to search for loyalty events.

## Structure

`LoyaltyEventQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`LoyaltyEventFilter \| undefined`](../../doc/models/loyalty-event-filter.md) | Optional | The filtering criteria. If the request specifies multiple filters,<br>the endpoint uses a logical AND to evaluate them. |

## Example (as JSON)

```json
{
  "filter": null
}
```

