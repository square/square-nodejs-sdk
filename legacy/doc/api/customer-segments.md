# Customer Segments

```ts
const customerSegmentsApi = client.customerSegmentsApi;
```

## Class Name

`CustomerSegmentsApi`

## Methods

* [List Customer Segments](../../doc/api/customer-segments.md#list-customer-segments)
* [Retrieve Customer Segment](../../doc/api/customer-segments.md#retrieve-customer-segment)


# List Customer Segments

Retrieves the list of customer segments of a business.

```ts
async listCustomerSegments(
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCustomerSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by previous calls to `ListCustomerSegments`.<br>This cursor is used to retrieve the next set of query results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>If the specified limit is less than 1 or greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCustomerSegmentsResponse`](../../doc/models/list-customer-segments-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await customerSegmentsApi.listCustomerSegments();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Customer Segment

Retrieves a specific customer segment as identified by the `segment_id` value.

```ts
async retrieveCustomerSegment(
  segmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCustomerSegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | The Square-issued ID of the customer segment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCustomerSegmentResponse`](../../doc/models/retrieve-customer-segment-response.md)

## Example Usage

```ts
const segmentId = 'segment_id4';

try {
  const { result, ...httpResponse } = await customerSegmentsApi.retrieveCustomerSegment(segmentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

