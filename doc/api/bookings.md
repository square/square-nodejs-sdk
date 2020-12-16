# Bookings

```ts
const bookingsApi = client.bookingsApi;
```

## Class Name

`BookingsApi`

## Methods

* [Create Booking](/doc/api/bookings.md#create-booking)
* [Search Availability](/doc/api/bookings.md#search-availability)
* [Retrieve Business Booking Profile](/doc/api/bookings.md#retrieve-business-booking-profile)
* [List Team Member Booking Profiles](/doc/api/bookings.md#list-team-member-booking-profiles)
* [Retrieve Team Member Booking Profile](/doc/api/bookings.md#retrieve-team-member-booking-profile)
* [Retrieve Booking](/doc/api/bookings.md#retrieve-booking)
* [Update Booking](/doc/api/bookings.md#update-booking)
* [Cancel Booking](/doc/api/bookings.md#cancel-booking)


# Create Booking

Creates a booking.

```ts
async createBooking(
  body: CreateBookingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateBookingRequest`](/doc/models/create-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateBookingResponse`](/doc/models/create-booking-response.md)

## Example Usage

```ts
const bodyBooking: Booking = {};
bodyBooking.id = 'id8';
bodyBooking.version = 148;
bodyBooking.status = 'ACCEPTED';
bodyBooking.createdAt = 'created_at6';
bodyBooking.updatedAt = 'updated_at4';

const body: CreateBookingRequest = {
  booking: bodyBooking,
};
body.idempotencyKey = 'idempotency_key2';

try {
  const { result, ...httpResponse } = await bookingsApi.createBooking(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Availability

Searches for availabilities for booking.

```ts
async searchAvailability(
  body: SearchAvailabilityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchAvailabilityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchAvailabilityRequest`](/doc/models/search-availability-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SearchAvailabilityResponse`](/doc/models/search-availability-response.md)

## Example Usage

```ts
const bodyQueryFilterStartAtRange: TimeRange = {};
bodyQueryFilterStartAtRange.startAt = 'start_at8';
bodyQueryFilterStartAtRange.endAt = 'end_at4';

const bodyQueryFilterSegmentFilters: SegmentFilter[] = [];

const bodyQueryFiltersegmentFilters0TeamMemberIdFilterAll: string[] = ['all7'];
const bodyQueryFiltersegmentFilters0TeamMemberIdFilterAny: string[] = ['any0', 'any1'];
const bodyQueryFiltersegmentFilters0TeamMemberIdFilterNone: string[] = ['none5'];
const bodyQueryFiltersegmentFilters0TeamMemberIdFilter: FilterValue = {};
bodyQueryFiltersegmentFilters0TeamMemberIdFilter.all = bodyQueryFiltersegmentFilters0TeamMemberIdFilterAll;
bodyQueryFiltersegmentFilters0TeamMemberIdFilter.any = bodyQueryFiltersegmentFilters0TeamMemberIdFilterAny;
bodyQueryFiltersegmentFilters0TeamMemberIdFilter.none = bodyQueryFiltersegmentFilters0TeamMemberIdFilterNone;

const bodyQueryFiltersegmentFilters0: SegmentFilter = {
  serviceVariationId: 'service_variation_id8',
};
bodyQueryFiltersegmentFilters0.teamMemberIdFilter = bodyQueryFiltersegmentFilters0TeamMemberIdFilter;

bodyQueryFilterSegmentFilters[0] = bodyQueryFiltersegmentFilters0;

const bodyQueryFiltersegmentFilters1TeamMemberIdFilterAll: string[] = ['all6', 'all7', 'all8'];
const bodyQueryFiltersegmentFilters1TeamMemberIdFilterAny: string[] = ['any1', 'any2', 'any3'];
const bodyQueryFiltersegmentFilters1TeamMemberIdFilterNone: string[] = ['none6', 'none7'];
const bodyQueryFiltersegmentFilters1TeamMemberIdFilter: FilterValue = {};
bodyQueryFiltersegmentFilters1TeamMemberIdFilter.all = bodyQueryFiltersegmentFilters1TeamMemberIdFilterAll;
bodyQueryFiltersegmentFilters1TeamMemberIdFilter.any = bodyQueryFiltersegmentFilters1TeamMemberIdFilterAny;
bodyQueryFiltersegmentFilters1TeamMemberIdFilter.none = bodyQueryFiltersegmentFilters1TeamMemberIdFilterNone;

const bodyQueryFiltersegmentFilters1: SegmentFilter = {
  serviceVariationId: 'service_variation_id7',
};
bodyQueryFiltersegmentFilters1.teamMemberIdFilter = bodyQueryFiltersegmentFilters1TeamMemberIdFilter;

bodyQueryFilterSegmentFilters[1] = bodyQueryFiltersegmentFilters1;

const bodyQueryFilter: SearchAvailabilityFilter = {
  startAtRange: bodyQueryFilterStartAtRange,
};
bodyQueryFilter.locationId = 'location_id6';
bodyQueryFilter.segmentFilters = bodyQueryFilterSegmentFilters;
bodyQueryFilter.bookingId = 'booking_id6';

const bodyQuery: SearchAvailabilityQuery = {
  filter: bodyQueryFilter,
};

const body: SearchAvailabilityRequest = {
  query: bodyQuery,
};

try {
  const { result, ...httpResponse } = await bookingsApi.searchAvailability(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Business Booking Profile

Retrieves a seller's booking profile.

```ts
async retrieveBusinessBookingProfile(
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveBusinessBookingProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveBusinessBookingProfileResponse`](/doc/models/retrieve-business-booking-profile-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bookingsApi.retrieveBusinessBookingProfile();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Team Member Booking Profiles

Lists booking profiles for team members.

```ts
async listTeamMemberBookingProfiles(
  bookableOnly?: boolean,
  limit?: number,
  cursor?: string,
  locationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTeamMemberBookingProfilesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookableOnly` | `boolean` | Query, Optional | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). |
| `limit` | `number` | Query, Optional | The maximum number of results to return. |
| `cursor` | `string` | Query, Optional | The cursor for paginating through the results. |
| `locationId` | `string` | Query, Optional | Indicates whether to include only team members enabled at the given location in the returned result. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListTeamMemberBookingProfilesResponse`](/doc/models/list-team-member-booking-profiles-response.md)

## Example Usage

```ts
const bookableOnly = false;
const limit = 172;
const cursor = 'cursor6';
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await bookingsApi.listTeamMemberBookingProfiles(bookableOnly, limit, cursor, locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Team Member Booking Profile

Retrieves a team member's booking profile.

```ts
async retrieveTeamMemberBookingProfile(
  teamMemberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveTeamMemberBookingProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Template, Required | The ID of the team member to retrieve. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveTeamMemberBookingProfileResponse`](/doc/models/retrieve-team-member-booking-profile-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';
try {
  const { result, ...httpResponse } = await bookingsApi.retrieveTeamMemberBookingProfile(teamMemberId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Booking

Retrieves a booking.

```ts
async retrieveBooking(
  bookingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the [Booking](#type-booking) object representing the to-be-retrieved booking. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveBookingResponse`](/doc/models/retrieve-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';
try {
  const { result, ...httpResponse } = await bookingsApi.retrieveBooking(bookingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Booking

Updates a booking.

```ts
async updateBooking(
  bookingId: string,
  body: UpdateBookingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the [Booking](#type-booking) object representing the to-be-updated booking. |
| `body` | [`UpdateBookingRequest`](/doc/models/update-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpdateBookingResponse`](/doc/models/update-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';
const bodyBooking: Booking = {};
bodyBooking.id = 'id8';
bodyBooking.version = 148;
bodyBooking.status = 'ACCEPTED';
bodyBooking.createdAt = 'created_at6';
bodyBooking.updatedAt = 'updated_at4';

const body: UpdateBookingRequest = {
  booking: bodyBooking,
};
body.idempotencyKey = 'idempotency_key2';

try {
  const { result, ...httpResponse } = await bookingsApi.updateBooking(bookingId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Booking

Cancels an existing booking.

```ts
async cancelBooking(
  bookingId: string,
  body: CancelBookingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the [Booking](#type-booking) object representing the to-be-cancelled booking. |
| `body` | [`CancelBookingRequest`](/doc/models/cancel-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CancelBookingResponse`](/doc/models/cancel-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';
const body: CancelBookingRequest = {};
body.idempotencyKey = 'idempotency_key2';
body.bookingVersion = 8;

try {
  const { result, ...httpResponse } = await bookingsApi.cancelBooking(bookingId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

