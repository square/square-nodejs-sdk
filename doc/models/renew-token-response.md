
# Renew Token Response

## Structure

`RenewTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `access_token` | `string` | Optional | The renewed access token.<br>This value might be different from the `access_token` you provided in your request.<br>You provide this token in a header with every request to Connect API endpoints.<br>See [Request and response headers](https://developer.squareup.com/docs/api/connect/v2/#requestandresponseheaders) for the format of this header. |
| `token_type` | `string` | Optional | This value is always _bearer_. |
| `expires_at` | `string` | Optional | The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. |
| `merchant_id` | `string` | Optional | The ID of the authorizing merchant's business. |
| `subscription_id` | `string` | Optional | __LEGACY FIELD__. The ID of the merchant subscription associated with<br>the authorization. Only present if the merchant signed up for a subscription<br>during authorization.. |
| `plan_id` | `string` | Optional | __LEGACY FIELD__. The ID of the subscription plan the merchant signed<br>up for. Only present if the merchant signed up for a subscription during<br>authorization. |

## Example (as JSON)

```json
{
  "access_token": "ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_at": "2006-01-02T15:04:05Z",
  "merchant_id": "MERCHANT_ID"
}
```

