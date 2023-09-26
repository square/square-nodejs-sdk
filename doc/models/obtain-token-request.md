
# Obtain Token Request

## Structure

`ObtainTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | The Square-issued ID of your application, which is available on the **OAuth** page in the<br>[Developer Dashboard](https://developer.squareup.com/apps).<br>**Constraints**: *Maximum Length*: `191` |
| `clientSecret` | `string \| null \| undefined` | Optional | The Square-issued application secret for your application, which is available on the **OAuth** page<br>in the [Developer Dashboard](https://developer.squareup.com/apps). This parameter is only required when<br>you're not using the [OAuth PKCE (Proof Key for Code Exchange) flow](https://developer.squareup.com/docs/oauth-api/overview#pkce-flow).<br>The PKCE flow requires a `code_verifier` instead of a `client_secret` when `grant_type` is set to `authorization_code`.<br>If `grant_type` is set to `refresh_token` and the `refresh_token` is obtained uaing PKCE, the PKCE flow only requires `client_id`, <br>`grant_type`, and `refresh_token`.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `1024` |
| `code` | `string \| null \| undefined` | Optional | The authorization code to exchange.<br>This code is required if `grant_type` is set to `authorization_code` to indicate that<br>the application wants to exchange an authorization code for an OAuth access token.<br>**Constraints**: *Maximum Length*: `191` |
| `redirectUri` | `string \| null \| undefined` | Optional | The redirect URL assigned on the **OAuth** page for your application in the [Developer Dashboard](https://developer.squareup.com/apps).<br>**Constraints**: *Maximum Length*: `2048` |
| `grantType` | `string` | Required | Specifies the method to request an OAuth access token.<br>Valid values are `authorization_code`, `refresh_token`, and `migration_token`.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `20` |
| `refreshToken` | `string \| null \| undefined` | Optional | A valid refresh token for generating a new OAuth access token.<br><br>A valid refresh token is required if `grant_type` is set to `refresh_token`<br>to indicate that the application wants a replacement for an expired OAuth access token.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `1024` |
| `migrationToken` | `string \| null \| undefined` | Optional | A legacy OAuth access token obtained using a Connect API version prior<br>to 2019-03-13. This parameter is required if `grant_type` is set to<br>`migration_token` to indicate that the application wants to get a replacement<br>OAuth access token. The response also returns a refresh token.<br>For more information, see [Migrate to Using Refresh Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `1024` |
| `scopes` | `string[] \| null \| undefined` | Optional | A JSON list of strings representing the permissions that the application is requesting.<br>For example, "`["MERCHANT_PROFILE_READ","PAYMENTS_READ","BANK_ACCOUNTS_READ"]`".<br><br>The access token returned in the response is granted the permissions<br>that comprise the intersection between the requested list of permissions and those<br>that belong to the provided refresh token. |
| `shortLived` | `boolean \| null \| undefined` | Optional | A Boolean indicating a request for a short-lived access token.<br><br>The short-lived access token returned in the response expires in 24 hours. |
| `codeVerifier` | `string \| null \| undefined` | Optional | Must be provided when using the PKCE OAuth flow if `grant_type` is set to `authorization_code`. The `code_verifier` is used to verify against the<br>`code_challenge` associated with the `authorization_code`. |

## Example (as JSON)

```json
{
  "client_id": "APPLICATION_ID",
  "client_secret": "APPLICATION_SECRET",
  "code": "CODE_FROM_AUTHORIZE",
  "grant_type": "authorization_code",
  "redirect_uri": "redirect_uri6",
  "refresh_token": "refresh_token8",
  "migration_token": "migration_token6"
}
```

