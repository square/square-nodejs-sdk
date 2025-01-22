# Cash Drawers

```ts
const cashDrawersApi = client.cashDrawersApi;
```

## Class Name

`CashDrawersApi`

## Methods

* [List Cash Drawer Shifts](../../doc/api/cash-drawers.md#list-cash-drawer-shifts)
* [Retrieve Cash Drawer Shift](../../doc/api/cash-drawers.md#retrieve-cash-drawer-shift)
* [List Cash Drawer Shift Events](../../doc/api/cash-drawers.md#list-cash-drawer-shift-events)


# List Cash Drawer Shifts

Provides the details for all of the cash drawer shifts for a location
in a date range.

```ts
async listCashDrawerShifts(
  locationId: string,
  sortOrder?: string,
  beginTime?: string,
  endTime?: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCashDrawerShiftsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Query, Required | The ID of the location to query for a list of cash drawer shifts. |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Query, Optional | The order in which cash drawer shifts are listed in the response,<br>based on their opened_at field. Default value: ASC |
| `beginTime` | `string \| undefined` | Query, Optional | The inclusive start time of the query on opened_at, in ISO 8601 format. |
| `endTime` | `string \| undefined` | Query, Optional | The exclusive end date of the query on opened_at, in ISO 8601 format. |
| `limit` | `number \| undefined` | Query, Optional | Number of cash drawer shift events in a page of results (200 by<br>default, 1000 max). |
| `cursor` | `string \| undefined` | Query, Optional | Opaque cursor for fetching the next page of results. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCashDrawerShiftsResponse`](../../doc/models/list-cash-drawer-shifts-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

try {
  const { result, ...httpResponse } = await cashDrawersApi.listCashDrawerShifts(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Cash Drawer Shift

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](../../doc/api/cash-drawers.md#list-cash-drawer-shift-events) for a list of cash drawer shift events.

```ts
async retrieveCashDrawerShift(
  locationId: string,
  shiftId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCashDrawerShiftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Query, Required | The ID of the location to retrieve cash drawer shifts from. |
| `shiftId` | `string` | Template, Required | The shift ID. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveCashDrawerShiftResponse`](../../doc/models/retrieve-cash-drawer-shift-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const shiftId = 'shift_id0';

try {
  const { result, ...httpResponse } = await cashDrawersApi.retrieveCashDrawerShift(
  locationId,
  shiftId
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


# List Cash Drawer Shift Events

Provides a paginated list of events for a single cash drawer shift.

```ts
async listCashDrawerShiftEvents(
  locationId: string,
  shiftId: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCashDrawerShiftEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Query, Required | The ID of the location to list cash drawer shifts for. |
| `shiftId` | `string` | Template, Required | The shift ID. |
| `limit` | `number \| undefined` | Query, Optional | Number of resources to be returned in a page of results (200 by<br>default, 1000 max). |
| `cursor` | `string \| undefined` | Query, Optional | Opaque cursor for fetching the next page of results. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCashDrawerShiftEventsResponse`](../../doc/models/list-cash-drawer-shift-events-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

const shiftId = 'shift_id0';

try {
  const { result, ...httpResponse } = await cashDrawersApi.listCashDrawerShiftEvents(
  locationId,
  shiftId
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

