
# Create Mobile Authorization Code Response

Defines the fields that are included in the response body of
a request to the __CreateMobileAuthorizationCode__ endpoint.

## Structure

`CreateMobileAuthorizationCodeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationCode` | `string` | Optional | Generated authorization code that connects a mobile application instance<br>to a Square account.<br>**Constraints**: *Maximum Length*: `191` |
| `expiresAt` | `string` | Optional | The timestamp when `authorization_code` expires in<br>[RFC 3339](https://tools.ietf.org/html/rfc3339) format, e.g., "2016-09-04T23:59:33.123Z".<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `48` |
| `error` | [`Error`](/doc/models/error.md) | Optional | Represents an error encountered during a request to the Connect API.<br><br>See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information. |

## Example (as JSON)

```json
{
  "authorization_code": "YOUR_MOBILE_AUTHORIZATION_CODE",
  "expires_at": "2019-01-10T19:42:08Z"
}
```

