# Mobile Authorization

```ts
const mobileAuthorizationApi = client.mobileAuthorizationApi;
```

## Class Name

`MobileAuthorizationApi`


# Create Mobile Authorization Code

Generates code to authorize a mobile application to connect to a Square card reader.

Authorization codes are one-time-use codes and expire 60 minutes after being issued.

__Important:__ The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

Replace `ACCESS_TOKEN` with a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

```ts
async createMobileAuthorizationCode(
  body: CreateMobileAuthorizationCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateMobileAuthorizationCodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateMobileAuthorizationCodeRequest`](../../doc/models/create-mobile-authorization-code-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateMobileAuthorizationCodeResponse`](../../doc/models/create-mobile-authorization-code-response.md)

## Example Usage

```ts
const body: CreateMobileAuthorizationCodeRequest = {
  locationId: 'YOUR_LOCATION_ID',
};

try {
  const { result, ...httpResponse } = await mobileAuthorizationApi.createMobileAuthorizationCode(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

