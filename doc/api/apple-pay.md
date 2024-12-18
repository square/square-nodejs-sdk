# Apple Pay

```ts
const applePayApi = client.applePayApi;
```

## Class Name

`ApplePayApi`


# Register Domain

Activates a domain for use with Apple Pay on the Web and Square. A validation
is performed on this domain by Apple to ensure that it is properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Apple Pay on the Web with Square for merchants using their platform.

Note: You will need to host a valid domain verification file on your domain to support Apple Pay.  The
current version of this file is always available at https://app.squareup.com/digital-wallets/apple-pay/apple-developer-merchantid-domain-association,
and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your
domain.  This file is subject to change; we strongly recommend checking for updates regularly and avoiding
long-lived caches that might not keep in sync with the correct file version.

To learn more about the Web Payments SDK and how to add Apple Pay, see [Take an Apple Pay Payment](https://developer.squareup.com/docs/web-payments/apple-pay).

```ts
async registerDomain(
  body: RegisterDomainRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegisterDomainResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterDomainRequest`](../../doc/models/register-domain-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegisterDomainResponse`](../../doc/models/register-domain-response.md)

## Example Usage

```ts
const body: RegisterDomainRequest = {
  domainName: 'example.com',
};

try {
  const { result, ...httpResponse } = await applePayApi.registerDomain(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

