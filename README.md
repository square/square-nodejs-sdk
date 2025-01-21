# Square TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fsquare%2Fsquare-nodejs-sdk)
[![npm shield](https://img.shields.io/npm/v/square)](https://www.npmjs.com/package/square)

The Square TypeScript library provides convenient access to the Square API from TypeScript.

## Requirements

Use of the Square Node.js SDK requires:

- Node.js 14 or higher

This SDK supports Node.js versions that are either current, or that are in long-term support status (LTS). The SDK does not support Node.js versions that have reached their end-of-life (EOL). For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

```sh
npm i -s square
```

## Reference

A full reference for this library is available [here](./reference.md).

## Quickstart

For more information, see [Square Node.js SDK Quickstart](https://developer.squareup.com/docs/sdks/nodejs/quick-start).

## Usage

Instantiate and use the client with the following:

```typescript
import { SquareClient } from "square";

const client = new SquareClient({ token: "YOUR_TOKEN" });
await client.payments.create({
    sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
    idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
    amountMoney: {
        amount: 1000,
        currency: "USD",
    },
    appFeeMoney: {
        amount: 10,
        currency: "USD",
    },
    autocomplete: true,
    customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
    locationId: "L88917AVBK2S5",
    referenceId: "123456",
    note: "Brief description",
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Square } from "square";

const request: Square.CreateMobileAuthorizationCodeRequest = {
    ...
};
```

## Tests

First, clone the repo locally and `cd` into the directory.

```sh
git clone https://github.com/square/square-nodejs-sdk.git
cd square-nodejs-sdk
```

Next, install dependencies and build.

```sh
npm install
npm run build
```

Before running the tests, get a sandbox access token from your [Developer Dashboard] and use it to set a `SQUARE_SANDBOX_TOKEN` environment variable.

```sh
export SQUARE_SANDBOX_TOKEN="YOUR SANDBOX ACCESS TOKEN HERE"
```

And run the tests.

```sh
npm test
```

## SDK Reference

### Payments

- [Payments]
- [Refunds]
- [Disputes]
- [Checkout]
- [Apple Pay]
- [Cards]
- [Payouts]

### Terminal

- [Terminal]

### Orders

- [Orders]
- [Order Custom Attributes]

### Subscriptions

- [Subscriptions]

### Invoices

- [Invoices]

### Items

- [Catalog]
- [Inventory]

### Customers

- [Customers]
- [Customer Groups]
- [Customer Segments]

### Loyalty

- [Loyalty]

### Gift Cards

- [Gift Cards]
- [Gift Card Activities]

### Bookings

- [Bookings]
- [Booking Custom Attributes]

### Business

- [Merchants]
- [Merchant Custom Attributes]
- [Locations]
- [Location Custom Attributes]
- [Devices]
- [Cash Drawers]

### Team

- [Team]
- [Labor]

### Financials

- [Bank Accounts]

### Online

- [Sites]
- [Snippets]

### Authorization

- [Mobile Authorization]
- [OAuth]

### Webhook Subscriptions

- [Webhook Subscriptions]

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
