# O Auth

```ts
const oAuthApi = client.oAuthApi;
```

## Class Name

`OAuthApi`

## Methods

* [Renew Token](/doc/api/o-auth.md#renew-token)
* [Revoke Token](/doc/api/o-auth.md#revoke-token)
* [Obtain Token](/doc/api/o-auth.md#obtain-token)


# Renew Token

`RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
[Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).

Renews an OAuth access token before it expires.

OAuth access tokens besides your application's personal access token expire after __30 days__.
You can also renew expired tokens within __15 days__ of their expiration.
You cannot renew an access token that has been expired for more than 15 days.
Instead, the associated user must re-complete the OAuth flow from the beginning.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [application dashboard](https://connect.squareup.com/apps).

:information_source: **Note** This endpoint does not require authentication.

```ts
async renewToken(
  clientId: string,
  body: RenewTokenRequest,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RenewTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Template, Required | Your application ID, available from the [application dashboard](https://connect.squareup.com/apps). |
| `body` | [`RenewTokenRequest`](/doc/models/renew-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `authorization` | `string` | Header, Required | Client APPLICATION_SECRET |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RenewTokenResponse`](/doc/models/renew-token-response.md)

## Example Usage

```ts
const clientId = 'client_id8';
const body: RenewTokenRequest = {};
body.accessToken = 'ACCESS_TOKEN';

const authorization = 'Client CLIENT_SECRET';
try {
  const { result, ...httpResponse } = await oAuthApi.renewToken(clientId, body, authorization);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Revoke Token

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. When an
OAuth access token is revoked, all of the active subscriptions associated
with that OAuth token are canceled immediately.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [Developer Dashboard](https://developer.squareup.com/apps).

:information_source: **Note** This endpoint does not require authentication.

```ts
async revokeToken(
  body: RevokeTokenRequest,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RevokeTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RevokeTokenRequest`](/doc/models/revoke-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `authorization` | `string` | Header, Required | Client APPLICATION_SECRET |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RevokeTokenResponse`](/doc/models/revoke-token-response.md)

## Example Usage

```ts
const body: RevokeTokenRequest = {};
body.clientId = 'CLIENT_ID';
body.accessToken = 'ACCESS_TOKEN';
body.merchantId = 'merchant_id6';
body.revokeOnlyAccessToken = false;

const authorization = 'Client CLIENT_SECRET';
try {
  const { result, ...httpResponse } = await oAuthApi.revokeToken(body, authorization);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Obtain Token

Returns an OAuth access token.

The endpoint supports distinct methods of obtaining OAuth access tokens.
Applications specify a method by adding the `grant_type` parameter
in the request and also provide relevant information.

__Note:__ Regardless of the method application specified,
the endpoint always returns two items; an OAuth access token and
a refresh token in the response.

__OAuth tokens should only live on secure servers. Application clients
should never interact directly with OAuth tokens__.

:information_source: **Note** This endpoint does not require authentication.

```ts
async obtainToken(
  body: ObtainTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ObtainTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ObtainTokenRequest`](/doc/models/obtain-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ObtainTokenResponse`](/doc/models/obtain-token-response.md)

## Example Usage

```ts
const bodyScopes: string[] = ['scopes6', 'scopes7', 'scopes8'];
const body: ObtainTokenRequest = {
  clientId: 'APPLICATION_ID',
  clientSecret: 'APPLICATION_SECRET',
  grantType: 'authorization_code',
};
body.code = 'CODE_FROM_AUTHORIZE';
body.redirectUri = 'redirect_uri4';
body.refreshToken = 'refresh_token6';
body.migrationToken = 'migration_token4';
body.scopes = bodyScopes;

try {
  const { result, ...httpResponse } = await oAuthApi.obtainToken(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

