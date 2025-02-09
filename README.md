# Square TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fsquare%2Fsquare-nodejs-sdk)
[![npm shield](https://img.shields.io/npm/v/square)](https://www.npmjs.com/package/square)

The Square TypeScript library provides convenient access to the Square API from TypeScript.

## Installation

```sh
npm i -s square
```

## Reference

A full reference for this library is available [here](./reference.md).

## Versioning

By default, the SDK is pinned to the latest version. If you would like
to override this version you can simply pass in a request option.

```ts
await client.payments.create(..., {
    version: "2024-05-04" // override the version used
})
```

## Usage

Instantiate and use the client with the following:

```typescript
import { SquareClient } from "square";

const client = new SquareClient({ token: "YOUR_TOKEN" });
await client.payments.create({
    sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
    idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
    amountMoney: {
        amount: BigInt(1000),
        currency: "USD",
    },
    appFeeMoney: {
        amount: BigInt(10),
        currency: "USD",
    },
    autocomplete: true,
    customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
    locationId: "L88917AVBK2S5",
    referenceId: "123456",
    note: "Brief description",
});
```

## Legacy SDK

> If you're using TypeScript, make sure that the `moduleResolution` setting in your `tsconfig.json` is equal to `node16`, `nodenext`,
> or `bundler` to consume the legacy SDK.

While the new SDK has a lot of improvements, we at Square understand that it takes time to upgrade when there are breaking changes.
To make the migration easier, the new SDK also exports the legacy SDK as `square/legacy`. Here's an example of how you can use the
legacy SDK alongside the new SDK inside a single file:

```typescript
import { randomUUID } from "crypto";
import { Square, SquareClient } from "square";
import { Client } from "square/legacy";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN,
});

const legacyClient = new Client({
  bearerAuthCredentials: {
    accessToken: process.env.SQUARE_ACCESS_TOKEN!,
  },
});

async function getLocation(): Promise<Square.Location> {
  return (
    await client.locations.get({
      locationId: "YOUR_LOCATION_ID",
    })
  ).location!;
}

async function createOrder() {
  const location = await getLocation();
  await legacyClient.ordersApi.createOrder({
    idempotencyKey: randomUUID(),
    order: {
      locationId: location.id!,
      lineItems: [
        {
          name: "New Item",
          quantity: "1",
          basePriceMoney: {
            amount: BigInt(100),
            currency: "USD",
          },
        },
      ],
    },
  });
}

createOrder();
```

We recommend migrating to the new SDK using the following steps:

1. Upgrade the NPM module to `^40.0.0`
2. Search and replace all requires and imports from `"square"` to `"square/legacy"`

- For required, replace `require("square")` with `require("square/legacy")`
- For imports, replace `from "square"` with `from "square/legacy"`
- For dynamic imports, replace `import("square")` with `import("square/legacy")`

3. Gradually move over to use the new SDK by importing it from the `"square"` import.

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Square } from "square";

const request: Square.CreateMobileAuthorizationCodeRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { SquareError } from "square";

try {
    await client.payments.create(...);
} catch (err) {
    if (err instanceof SquareError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { SquareClient } from "square";

const client = new SquareClient({ token: "YOUR_TOKEN" });
const response = await client.bankAccounts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.bankAccounts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

## Webhook Signature Verification

The SDK provides utility methods that allow you to verify webhook signatures and ensure that all 
webhook events originate from Square. The `Webhooks.verifySignature` method will verify the signature.

```ts
import { WebhooksHelper } from "square";

const isValid = WebhooksHelper.verifySignature({
  requestBody,
  signatureHeader: request.headers['x-square-hmacsha256-signature'],
  signatureKey: "YOUR_SIGNATURE_KEY",
  notificationUrl: "https://example.com/webhook", // The URL where event notifications are sent.
});
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.payments.create(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Receive extra properties

Every response includes any extra properties in the JSON response that were not specified in the type.
This can be useful for API features not present in the SDK yet.

You can receive and interact with the extra properties by accessing each one directly like so:

```typescript
const response = await client.locations.create(...);

// Cast the response type into an `any`.
const location = response.location as any;

// Then access the extra property by its name.
const undocumentedProperty = location.undocumentedProperty;
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retriable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.payments.create(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.payments.create(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.payments.create(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { SquareClient } from "square";

const client = new SquareClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
