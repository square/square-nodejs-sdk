
# Break Type

A defined break template that sets an expectation for possible `Break`
instances on a `Shift`.

## Structure

`BreakType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The UUID for this object.<br>**Constraints**: *Maximum Length*: `255` |
| `locationId` | `string` | Required | The ID of the business location this type of break applies to.<br>**Constraints**: *Minimum Length*: `1` |
| `breakName` | `string` | Required | A human-readable name for this type of break. The name is displayed to<br>employees in Square products.<br>**Constraints**: *Minimum Length*: `1` |
| `expectedDuration` | `string` | Required | Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of<br>this break. Precision less than minutes is truncated.<br><br>Example for break expected duration of 15 minutes: T15M<br>**Constraints**: *Minimum Length*: `1` |
| `isPaid` | `boolean` | Required | Whether this break counts towards time worked for compensation<br>purposes. |
| `version` | `number \| undefined` | Optional | Used for resolving concurrency issues. The request fails if the version<br>provided does not match the server version at the time of the request. If a value is not<br>provided, Square's servers execute a "blind" write; potentially<br>overwriting another writer's data. |
| `createdAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id4",
  "location_id": "location_id8",
  "break_name": "break_name4",
  "expected_duration": "expected_duration0",
  "is_paid": false,
  "version": 236,
  "created_at": "created_at8",
  "updated_at": "updated_at0"
}
```

