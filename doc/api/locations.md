# Locations

```ts
const locationsApi = client.locationsApi;
```

## Class Name

`LocationsApi`

## Methods

* [List Locations](/doc/api/locations.md#list-locations)
* [Create Location](/doc/api/locations.md#create-location)
* [Retrieve Location](/doc/api/locations.md#retrieve-location)
* [Update Location](/doc/api/locations.md#update-location)


# List Locations

Provides information of all locations of a business.

Most other Connect API endpoints have a required `location_id` path parameter.
The `id` field of the [`Location`](#type-location) objects returned by this
endpoint correspond to that `location_id` parameter.

```ts
async listLocations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListLocationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListLocationsResponse`](/doc/models/list-locations-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await locationsApi.listLocations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Location

Creates a location.
For more information about locations, see [Locations API Overview](https://developer.squareup.com/docs/locations-api).

```ts
async createLocation(
  body: CreateLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateLocationRequest`](/doc/models/create-location-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateLocationResponse`](/doc/models/create-location-response.md)

## Example Usage

```ts
const bodyLocationAddress: Address = {};
bodyLocationAddress.addressLine1 = '1234 Peachtree St. NE';
bodyLocationAddress.addressLine2 = 'address_line_26';
bodyLocationAddress.addressLine3 = 'address_line_32';
bodyLocationAddress.locality = 'Atlanta';
bodyLocationAddress.sublocality = 'sublocality6';
bodyLocationAddress.administrativeDistrictLevel1 = 'GA';
bodyLocationAddress.postalCode = '30309';

const bodyLocationCapabilities: string[] = ['CREDIT_CARD_PROCESSING', 'CREDIT_CARD_PROCESSING', 'CREDIT_CARD_PROCESSING'];
const bodyLocation: Location = {};
bodyLocation.id = 'id0';
bodyLocation.name = 'New location name';
bodyLocation.address = bodyLocationAddress;
bodyLocation.timezone = 'timezone0';
bodyLocation.capabilities = bodyLocationCapabilities;
bodyLocation.description = 'My new location.';

const body: CreateLocationRequest = {};
body.location = bodyLocation;

try {
  const { result, ...httpResponse } = await locationsApi.createLocation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Location

Retrieves details of a location. You can specify "main"
as the location ID to retrieve details of the
main location. For more information,
see [Locations API Overview](https://developer.squareup.com/docs/docs/locations-api).

```ts
async retrieveLocation(
  locationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to retrieve. If you specify the string "main",<br>then the endpoint returns the main location. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveLocationResponse`](/doc/models/retrieve-location-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await locationsApi.retrieveLocation(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Location

Updates a location.

```ts
async updateLocation(
  locationId: string,
  body: UpdateLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateLocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to update. |
| `body` | [`UpdateLocationRequest`](/doc/models/update-location-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`UpdateLocationResponse`](/doc/models/update-location-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
const bodyLocationAddress: Address = {};
bodyLocationAddress.addressLine1 = '1234 Peachtree St. NE';
bodyLocationAddress.addressLine2 = 'address_line_26';
bodyLocationAddress.addressLine3 = 'address_line_32';
bodyLocationAddress.locality = 'Atlanta';
bodyLocationAddress.sublocality = 'sublocality6';
bodyLocationAddress.administrativeDistrictLevel1 = 'GA';
bodyLocationAddress.postalCode = '30309';

const bodyLocationCapabilities: string[] = ['CREDIT_CARD_PROCESSING', 'CREDIT_CARD_PROCESSING', 'CREDIT_CARD_PROCESSING'];
const bodyLocationBusinessHoursPeriods: BusinessHoursPeriod[] = [];

const bodyLocationBusinessHoursperiods0: BusinessHoursPeriod = {};
bodyLocationBusinessHoursperiods0.dayOfWeek = 'MON';
bodyLocationBusinessHoursperiods0.startLocalTime = '09:00';
bodyLocationBusinessHoursperiods0.endLocalTime = '17:00';

bodyLocationBusinessHoursPeriods[0] = bodyLocationBusinessHoursperiods0;

const bodyLocationBusinessHours: BusinessHours = {};
bodyLocationBusinessHours.periods = bodyLocationBusinessHoursPeriods;

const bodyLocation: Location = {};
bodyLocation.id = 'id0';
bodyLocation.name = 'Updated nickname';
bodyLocation.address = bodyLocationAddress;
bodyLocation.timezone = 'timezone0';
bodyLocation.capabilities = bodyLocationCapabilities;
bodyLocation.businessHours = bodyLocationBusinessHours;
bodyLocation.description = 'Updated description';
bodyLocation.twitterUsername = 'twitter';
bodyLocation.instagramUsername = 'instagram';

const body: UpdateLocationRequest = {};
body.location = bodyLocation;

try {
  const { result, ...httpResponse } = await locationsApi.updateLocation(locationId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

