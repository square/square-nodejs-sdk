# Webhook Subscriptions

```ts
const webhookSubscriptionsApi = client.webhookSubscriptionsApi;
```

## Class Name

`WebhookSubscriptionsApi`

## Methods

* [List Webhook Event Types](../../doc/api/webhook-subscriptions.md#list-webhook-event-types)
* [List Webhook Subscriptions](../../doc/api/webhook-subscriptions.md#list-webhook-subscriptions)
* [Create Webhook Subscription](../../doc/api/webhook-subscriptions.md#create-webhook-subscription)
* [Delete Webhook Subscription](../../doc/api/webhook-subscriptions.md#delete-webhook-subscription)
* [Retrieve Webhook Subscription](../../doc/api/webhook-subscriptions.md#retrieve-webhook-subscription)
* [Update Webhook Subscription](../../doc/api/webhook-subscriptions.md#update-webhook-subscription)
* [Update Webhook Subscription Signature Key](../../doc/api/webhook-subscriptions.md#update-webhook-subscription-signature-key)
* [Test Webhook Subscription](../../doc/api/webhook-subscriptions.md#test-webhook-subscription)


# List Webhook Event Types

Lists all webhook event types that can be subscribed to.

```ts
async listWebhookEventTypes(
  apiVersion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListWebhookEventTypesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiVersion` | `string \| undefined` | Query, Optional | The API version for which to list event types. Setting this field overrides the default version used by the application. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListWebhookEventTypesResponse`](../../doc/models/list-webhook-event-types-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.listWebhookEventTypes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Webhook Subscriptions

Lists all webhook subscriptions owned by your application.

```ts
async listWebhookSubscriptions(
  cursor?: string,
  includeDisabled?: boolean,
  sortOrder?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListWebhookSubscriptionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `includeDisabled` | `boolean \| undefined` | Query, Optional | Includes disabled [Subscription](entity:WebhookSubscription)s.<br>By default, all enabled [Subscription](entity:WebhookSubscription)s are returned.<br>**Default**: `false` |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | Sorts the returned list by when the [Subscription](entity:WebhookSubscription) was created with the specified order.<br>This field defaults to ASC. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value.<br><br>Default: 100 |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListWebhookSubscriptionsResponse`](../../doc/models/list-webhook-subscriptions-response.md)

## Example Usage

```ts
const includeDisabled = false;

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.listWebhookSubscriptions(
  undefined,
  includeDisabled
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Webhook Subscription

Creates a webhook subscription.

```ts
async createWebhookSubscription(
  body: CreateWebhookSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateWebhookSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateWebhookSubscriptionRequest`](../../doc/models/create-webhook-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateWebhookSubscriptionResponse`](../../doc/models/create-webhook-subscription-response.md)

## Example Usage

```ts
const body: CreateWebhookSubscriptionRequest = {
  subscription: {
    name: 'Example Webhook Subscription',
    eventTypes: [
      'payment.created',
      'payment.updated'
    ],
    notificationUrl: 'https://example-webhook-url.com',
    apiVersion: '2021-12-15',
  },
  idempotencyKey: '63f84c6c-2200-4c99-846c-2670a1311fbf',
};

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.createWebhookSubscription(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Webhook Subscription

Deletes a webhook subscription.

```ts
async deleteWebhookSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteWebhookSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteWebhookSubscriptionResponse`](../../doc/models/delete-webhook-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.deleteWebhookSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Webhook Subscription

Retrieves a webhook subscription identified by its ID.

```ts
async retrieveWebhookSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveWebhookSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveWebhookSubscriptionResponse`](../../doc/models/retrieve-webhook-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.retrieveWebhookSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Webhook Subscription

Updates a webhook subscription.

```ts
async updateWebhookSubscription(
  subscriptionId: string,
  body: UpdateWebhookSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateWebhookSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. |
| `body` | [`UpdateWebhookSubscriptionRequest`](../../doc/models/update-webhook-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateWebhookSubscriptionResponse`](../../doc/models/update-webhook-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: UpdateWebhookSubscriptionRequest = {
  subscription: {
    name: 'Updated Example Webhook Subscription',
    enabled: false,
  },
};

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.updateWebhookSubscription(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Webhook Subscription Signature Key

Updates a webhook subscription by replacing the existing signature key with a new one.

```ts
async updateWebhookSubscriptionSignatureKey(
  subscriptionId: string,
  body: UpdateWebhookSubscriptionSignatureKeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateWebhookSubscriptionSignatureKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. |
| `body` | [`UpdateWebhookSubscriptionSignatureKeyRequest`](../../doc/models/update-webhook-subscription-signature-key-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateWebhookSubscriptionSignatureKeyResponse`](../../doc/models/update-webhook-subscription-signature-key-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: UpdateWebhookSubscriptionSignatureKeyRequest = {
  idempotencyKey: 'ed80ae6b-0654-473b-bbab-a39aee89a60d',
};

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.updateWebhookSubscriptionSignatureKey(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Test Webhook Subscription

Tests a webhook subscription by sending a test event to the notification URL.

```ts
async testWebhookSubscription(
  subscriptionId: string,
  body: TestWebhookSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TestWebhookSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to test. |
| `body` | [`TestWebhookSubscriptionRequest`](../../doc/models/test-webhook-subscription-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TestWebhookSubscriptionResponse`](../../doc/models/test-webhook-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: TestWebhookSubscriptionRequest = {
  eventType: 'payment.created',
};

try {
  const { result, ...httpResponse } = await webhookSubscriptionsApi.testWebhookSubscription(
  subscriptionId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

