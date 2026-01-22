# Square TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fsquare%2Fsquare-nodejs-sdk)
[![npm shield](https://img.shields.io/npm/v/square)](https://www.npmjs.com/package/square)

The Square TypeScript library provides convenient access to the Square APIs from TypeScript.

## Table of Contents

- [Installation](#installation)
- [Reference](#reference)
- [Versioning](#versioning)
- [Usage](#usage)
- [Legacy Sdk](#legacy-sdk)
- [Request and Response Types](#request-and-response-types)
- [Exception Handling](#exception-handling)
- [File Uploads](#file-uploads)
- [Pagination](#pagination)
- [Webhook Signature Verification](#webhook-signature-verification)
- [Advanced](#advanced)
  - [Additional Headers](#additional-headers)
  - [Additional Query String Parameters](#additional-query-string-parameters)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
  - [Aborting Requests](#aborting-requests)
  - [Access Raw Response Data](#access-raw-response-data)
  - [Logging](#logging)
  - [Runtime Compatibility](#runtime-compatibility)
- [Contributing](#contributing)

## Installation

```sh
npm i -s square
```

## Reference

A full reference for this library is available [here](https://github.com/square/square-nodejs-sdk/blob/HEAD/./reference.md).

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
        amount: BigInt("1000"),
        currency: "USD"
    },
    appFeeMoney: {
        amount: BigInt("10"),
        currency: "USD"
    },
    autocomplete: true,
    customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
    locationId: "L88917AVBK2S5",
    referenceId: "123456",
    note: "Brief description"
});
```

## Legacy SDK

> If you're using TypeScript, make sure that the `moduleResolution` setting in your `tsconfig.json` is equal to `node16`, `nodenext`, > or `bundler` to consume the legacy SDK.
While the new SDK has a lot of improvements, we at Square understand that it takes time to upgrade when there are breaking changes. To make the migration easier, the new SDK also exports the legacy SDK as `square/legacy`. Here's an example of how you can use the legacy SDK alongside the new SDK inside a single file:
```typescript import { randomUUID } from "crypto"; import { Square, SquareClient } from "square"; import { Client } from "square/legacy";
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
createOrder(); ```
We recommend migrating to the new SDK using the following steps:
1. Upgrade the NPM module to `^40.0.0` 2. Search and replace all requires and imports from `"square"` to `"square/legacy"`
- For required, replace `require("square")` with `require("square/legacy")` - For imports, replace `from "square"` with `from "square/legacy"` - For dynamic imports, replace `import("square")` with `import("square/legacy")`
3. Gradually move over to use the new SDK by importing it from the `"square"` import.


## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Square } from "square";

const request: Square.RevokeTokenRequest = {
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
        console.log(err.rawResponse);
    }
}
```

## File Uploads

You can upload files using the client:

```typescript
import { createReadStream } from "fs";
import { SquareClient } from "square";

const client = new SquareClient({ token: "YOUR_TOKEN" });
await client.disputes.createEvidenceFile({
    disputeId: "dispute_id"
});
```
The client accepts a variety of types for file upload parameters:
* Stream types: `fs.ReadStream`, `stream.Readable`, and `ReadableStream`
* Buffered types: `Buffer`, `Blob`, `File`, `ArrayBuffer`, `ArrayBufferView`, and `Uint8Array`

### Metadata

You can configure metadata when uploading a file:
```typescript
const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file",       // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949,       // optional
};
```

Alternatively, you can upload a file directly from a file path:
```typescript
const file : Uploadable.FromPath = {
    path: "path/to/file",
    filename: "my-file",        // optional
    contentType: "audio/mpeg",  // optional
    contentLength: 1949,        // optional
};
```

The metadata is used to set the `Content-Length`, `Content-Type`, and `Content-Disposition` headers. If not provided, the client will attempt to determine them automatically.
For example, `fs.ReadStream` has a `path` property which the SDK uses to retrieve the file size from the filesystem without loading it into memory.


## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { SquareClient } from "square";

const client = new SquareClient({ token: "YOUR_TOKEN" });
const pageableResponse = await client.bankAccounts.list({
    cursor: "cursor",
    limit: 1,
    locationId: "location_id",
    customerId: "customer_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bankAccounts.list({
    cursor: "cursor",
    limit: 1,
    locationId: "location_id",
    customerId: "customer_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;
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
import { SquareClient } from "square";

const client = new SquareClient({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.payments.create(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.payments.create(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

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

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.payments.create(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Logging

The SDK supports logging. You can configure the logger by passing in a `logging` object to the client options.

```typescript
import { SquareClient, logging } from "square";

const client = new SquareClient({
    ...
    logging: {
        level: logging.LogLevel.Debug, // defaults to logging.LogLevel.Info
        logger: new logging.ConsoleLogger(), // defaults to ConsoleLogger
        silent: false, // defaults to true, set to false to enable logging
    }
});
```
The `logging` object can have the following properties:
- `level`: The log level to use. Defaults to `logging.LogLevel.Info`.
- `logger`: The logger to use. Defaults to a `logging.ConsoleLogger`.
- `silent`: Whether to silence the logger. Defaults to `true`.

The `level` property can be one of the following values:
- `logging.LogLevel.Debug`
- `logging.LogLevel.Info`
- `logging.LogLevel.Warn`
- `logging.LogLevel.Error`

To provide a custom logger, you can pass in an object that implements the `logging.ILogger` interface.

<details>
<summary>Custom logger examples</summary>

Here's an example using the popular `winston` logging library.
```ts
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
    debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
    info: (msg, ...args) => winstonLogger.info(msg, ...args),
    warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
    error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

Here's an example using the popular `pino` logging library.

```ts
import pino from 'pino';

const pinoLogger = pino({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => pinoLogger.debug(args, msg),
  info: (msg, ...args) => pinoLogger.info(args, msg),
  warn: (msg, ...args) => pinoLogger.warn(args, msg),
  error: (msg, ...args) => pinoLogger.error(args, msg),
};
```
</details>


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

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're running in an
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