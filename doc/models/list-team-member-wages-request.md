
# List Team Member Wages Request

A request for a set of `TeamMemberWage` objects

## Structure

`ListTeamMemberWagesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Optional | Filter wages returned to only those that are associated with the<br>specified team member. |
| `limit` | `number` | Optional | Maximum number of Team Member Wages to return per page. Can range between<br>1 and 200. The default is the maximum at 200. |
| `cursor` | `string` | Optional | Pointer to the next page of Employee Wage results to fetch. |

## Example (as JSON)

```json
{
  "team_member_id": "team_member_id0",
  "limit": 172,
  "cursor": "cursor6"
}
```

