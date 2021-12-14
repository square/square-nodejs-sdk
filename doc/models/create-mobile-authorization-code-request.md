
# Create Mobile Authorization Code Request

Defines the body parameters that can be provided in a request to the
`CreateMobileAuthorizationCode` endpoint.

## Structure

`CreateMobileAuthorizationCodeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Optional | The Square location ID that the authorization code should be tied to.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `191` |

## Example (as JSON)

```json
{
  "location_id": "YOUR_LOCATION_ID"
}
```

