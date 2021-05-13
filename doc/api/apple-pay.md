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

To learn more about Web Apple Pay, see
[Add the Apple Pay on the Web Button](https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay).

```ts
async registerDomain(
  body: RegisterDomainRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegisterDomainResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterDomainRequest`](/doc/models/register-domain-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegisterDomainResponse`](/doc/models/register-domain-response.md)

## Example Usage

```ts
const body: RegisterDomainRequest = {
  domainName: 'example.com',
};

try {
  const { result, ...httpResponse } = await applePayApi.registerDomain(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

