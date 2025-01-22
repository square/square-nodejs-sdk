# Events

```ts
const eventsApi = client.eventsApi;
```

## Class Name

`EventsApi`

## Methods

* [Search Events](../../doc/api/events.md#search-events)
* [Disable Events](../../doc/api/events.md#disable-events)
* [Enable Events](../../doc/api/events.md#enable-events)
* [List Event Types](../../doc/api/events.md#list-event-types)


# Search Events

Search for Square API events that occur within a 28-day timeframe.

```ts
async searchEvents(
  body: SearchEventsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchEventsRequest`](../../doc/models/search-events-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchEventsResponse`](../../doc/models/search-events-response.md)

## Example Usage

```ts
const body: SearchEventsRequest = {
};

try {
  const { result, ...httpResponse } = await eventsApi.searchEvents(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disable Events

Disables events to prevent them from being searchable.
All events are disabled by default. You must enable events to make them searchable.
Disabling events for a specific time period prevents them from being searchable, even if you re-enable them later.

```ts
async disableEvents(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisableEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DisableEventsResponse`](../../doc/models/disable-events-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await eventsApi.disableEvents();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Enable Events

Enables events to make them searchable. Only events that occur while in the enabled state are searchable.

```ts
async enableEvents(
  requestOptions?: RequestOptions
): Promise<ApiResponse<EnableEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EnableEventsResponse`](../../doc/models/enable-events-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await eventsApi.enableEvents();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Event Types

Lists all event types that you can subscribe to as webhooks or query using the Events API.

```ts
async listEventTypes(
  apiVersion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListEventTypesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiVersion` | `string \| undefined` | Query, Optional | The API version for which to list event types. Setting this field overrides the default version used by the application. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListEventTypesResponse`](../../doc/models/list-event-types-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await eventsApi.listEventTypes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

