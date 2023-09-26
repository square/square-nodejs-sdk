
# List Team Member Wages Request

A request for a set of `TeamMemberWage` objects.

## Structure

`ListTeamMemberWagesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string \| null \| undefined` | Optional | Filter the returned wages to only those that are associated with the<br>specified team member. |
| `limit` | `number \| null \| undefined` | Optional | The maximum number of `TeamMemberWage` results to return per page. The number can range between<br>1 and 200. The default is 200.<br>**Constraints**: `>= 1`, `<= 200` |
| `cursor` | `string \| null \| undefined` | Optional | A pointer to the next page of `EmployeeWage` results to fetch. |

## Example (as JSON)

```json
{
  "team_member_id": "team_member_id2",
  "limit": 210,
  "cursor": "cursor8"
}
```

