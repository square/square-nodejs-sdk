# Bookings

```ts
const bookingsApi = client.bookingsApi;
```

## Class Name

`BookingsApi`

## Methods

* [List Bookings](../../doc/api/bookings.md#list-bookings)
* [Create Booking](../../doc/api/bookings.md#create-booking)
* [Search Availability](../../doc/api/bookings.md#search-availability)
* [Bulk Retrieve Bookings](../../doc/api/bookings.md#bulk-retrieve-bookings)
* [Retrieve Business Booking Profile](../../doc/api/bookings.md#retrieve-business-booking-profile)
* [List Location Booking Profiles](../../doc/api/bookings.md#list-location-booking-profiles)
* [Retrieve Location Booking Profile](../../doc/api/bookings.md#retrieve-location-booking-profile)
* [List Team Member Booking Profiles](../../doc/api/bookings.md#list-team-member-booking-profiles)
* [Bulk Retrieve Team Member Booking Profiles](../../doc/api/bookings.md#bulk-retrieve-team-member-booking-profiles)
* [Retrieve Team Member Booking Profile](../../doc/api/bookings.md#retrieve-team-member-booking-profile)
* [Retrieve Booking](../../doc/api/bookings.md#retrieve-booking)
* [Update Booking](../../doc/api/bookings.md#update-booking)
* [Cancel Booking](../../doc/api/bookings.md#cancel-booking)


# List Bookings

Retrieve a collection of bookings.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

```ts
async listBookings(
  limit?: number,
  cursor?: string,
  customerId?: string,
  teamMemberId?: string,
  locationId?: string,
  startAtMin?: string,
  startAtMax?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListBookingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results per page to return in a paged response. |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |
| `customerId` | `string \| undefined` | Query, Optional | The [customer](entity:Customer) for whom to retrieve bookings. If this is not set, bookings for all customers are retrieved. |
| `teamMemberId` | `string \| undefined` | Query, Optional | The team member for whom to retrieve bookings. If this is not set, bookings of all members are retrieved. |
| `locationId` | `string \| undefined` | Query, Optional | The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. |
| `startAtMin` | `string \| undefined` | Query, Optional | The RFC 3339 timestamp specifying the earliest of the start time. If this is not set, the current time is used. |
| `startAtMax` | `string \| undefined` | Query, Optional | The RFC 3339 timestamp specifying the latest of the start time. If this is not set, the time of 31 days after `start_at_min` is used. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListBookingsResponse`](../../doc/models/list-bookings-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bookingsApi.listBookings();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Booking

Creates a booking.

The required input must include the following:

- `Booking.location_id`
- `Booking.start_at`
- `Booking.AppointmentSegment.team_member_id`
- `Booking.AppointmentSegment.service_variation_id`
- `Booking.AppointmentSegment.service_variation_version`

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

```ts
async createBooking(
  body: CreateBookingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateBookingRequest`](../../doc/models/create-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateBookingResponse`](../../doc/models/create-booking-response.md)

## Example Usage

```ts
const body: CreateBookingRequest = {
  booking: {
  },
};

try {
  const { result, ...httpResponse } = await bookingsApi.createBooking(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Availability

Searches for availabilities for booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

```ts
async searchAvailability(
  body: SearchAvailabilityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchAvailabilityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchAvailabilityRequest`](../../doc/models/search-availability-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchAvailabilityResponse`](../../doc/models/search-availability-response.md)

## Example Usage

```ts
const body: SearchAvailabilityRequest = {
  query: {
    filter: {
      startAtRange: {
      },
    },
  },
};

try {
  const { result, ...httpResponse } = await bookingsApi.searchAvailability(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Retrieve Bookings

Bulk-Retrieves a list of bookings by booking IDs.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

```ts
async bulkRetrieveBookings(
  body: BulkRetrieveBookingsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkRetrieveBookingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkRetrieveBookingsRequest`](../../doc/models/bulk-retrieve-bookings-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkRetrieveBookingsResponse`](../../doc/models/bulk-retrieve-bookings-response.md)

## Example Usage

```ts
const body: BulkRetrieveBookingsRequest = {
  bookingIds: [
    'booking_ids8',
    'booking_ids9',
    'booking_ids0'
  ],
};

try {
  const { result, ...httpResponse } = await bookingsApi.bulkRetrieveBookings(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveBusinessBookingProfileResponse`](../../doc/models/retrieve-business-booking-profile-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bookingsApi.retrieveBusinessBookingProfile();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Location Booking Profiles

Lists location booking profiles of a seller.

```ts
async listLocationBookingProfiles(
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLocationBookingProfilesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a paged response. |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListLocationBookingProfilesResponse`](../../doc/models/list-location-booking-profiles-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bookingsApi.listLocationBookingProfiles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Location Booking Profile

Retrieves a seller's location booking profile.

```ts
async retrieveLocationBookingProfile(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLocationBookingProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to retrieve the booking profile. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLocationBookingProfileResponse`](../../doc/models/retrieve-location-booking-profile-response.md)

## Example Usage

```ts
const locationId = 'location_id4';

try {
  const { result, ...httpResponse } = await bookingsApi.retrieveLocationBookingProfile(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `bookableOnly` | `boolean \| undefined` | Query, Optional | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`).<br>**Default**: `false` |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to return in a paged response. |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |
| `locationId` | `string \| undefined` | Query, Optional | Indicates whether to include only team members enabled at the given location in the returned result. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListTeamMemberBookingProfilesResponse`](../../doc/models/list-team-member-booking-profiles-response.md)

## Example Usage

```ts
const bookableOnly = false;

try {
  const { result, ...httpResponse } = await bookingsApi.listTeamMemberBookingProfiles(bookableOnly);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Retrieve Team Member Booking Profiles

Retrieves one or more team members' booking profiles.

```ts
async bulkRetrieveTeamMemberBookingProfiles(
  body: BulkRetrieveTeamMemberBookingProfilesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkRetrieveTeamMemberBookingProfilesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkRetrieveTeamMemberBookingProfilesRequest`](../../doc/models/bulk-retrieve-team-member-booking-profiles-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkRetrieveTeamMemberBookingProfilesResponse`](../../doc/models/bulk-retrieve-team-member-booking-profiles-response.md)

## Example Usage

```ts
const body: BulkRetrieveTeamMemberBookingProfilesRequest = {
  teamMemberIds: [
    'team_member_ids3',
    'team_member_ids4',
    'team_member_ids5'
  ],
};

try {
  const { result, ...httpResponse } = await bookingsApi.bulkRetrieveTeamMemberBookingProfiles(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveTeamMemberBookingProfileResponse`](../../doc/models/retrieve-team-member-booking-profile-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';

try {
  const { result, ...httpResponse } = await bookingsApi.retrieveTeamMemberBookingProfile(teamMemberId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Booking

Retrieves a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

```ts
async retrieveBooking(
  bookingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveBookingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the [Booking](entity:Booking) object representing the to-be-retrieved booking. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveBookingResponse`](../../doc/models/retrieve-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';

try {
  const { result, ...httpResponse } = await bookingsApi.retrieveBooking(bookingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Booking

Updates a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

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
| `bookingId` | `string` | Template, Required | The ID of the [Booking](entity:Booking) object representing the to-be-updated booking. |
| `body` | [`UpdateBookingRequest`](../../doc/models/update-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateBookingResponse`](../../doc/models/update-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';

const body: UpdateBookingRequest = {
  booking: {
  },
};

try {
  const { result, ...httpResponse } = await bookingsApi.updateBooking(
  bookingId,
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


# Cancel Booking

Cancels an existing booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

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
| `bookingId` | `string` | Template, Required | The ID of the [Booking](entity:Booking) object representing the to-be-cancelled booking. |
| `body` | [`CancelBookingRequest`](../../doc/models/cancel-booking-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelBookingResponse`](../../doc/models/cancel-booking-response.md)

## Example Usage

```ts
const bookingId = 'booking_id4';

const body: CancelBookingRequest = {
};

try {
  const { result, ...httpResponse } = await bookingsApi.cancelBooking(
  bookingId,
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

