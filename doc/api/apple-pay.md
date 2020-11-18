# Apple Pay

```ts
const applePayApi = client.applePayApi;
```

## Class Name

`ApplePayApi`


# Register Domain

Activates a domain for use with Web Apple Pay and Square. A validation
will be performed on this domain by Apple to ensure is it properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Web Apple Pay with Square for merchants using their platform.

To learn more about Apple Pay on Web see the Apple Pay section in the
[Square Payment Form Walkthrough](https://developer.squareup.com/docs/payment-form/payment-form-walkthrough).

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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

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

