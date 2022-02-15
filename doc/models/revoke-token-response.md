
# Revoke Token Response

## Structure

`RevokeTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean \| undefined` | Optional | If the request is successful, this is `true`. |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | An error object that provides details about how creation of the obtain<br>token failed. |

## Example (as JSON)

```json
{
  "success": true
}
```

