# Labor

```ts
const laborApi = client.laborApi;
```

## Class Name

`LaborApi`

## Methods

* [List Break Types](../../doc/api/labor.md#list-break-types)
* [Create Break Type](../../doc/api/labor.md#create-break-type)
* [Delete Break Type](../../doc/api/labor.md#delete-break-type)
* [Get Break Type](../../doc/api/labor.md#get-break-type)
* [Update Break Type](../../doc/api/labor.md#update-break-type)
* [List Employee Wages](../../doc/api/labor.md#list-employee-wages)
* [Get Employee Wage](../../doc/api/labor.md#get-employee-wage)
* [Create Shift](../../doc/api/labor.md#create-shift)
* [Search Shifts](../../doc/api/labor.md#search-shifts)
* [Delete Shift](../../doc/api/labor.md#delete-shift)
* [Get Shift](../../doc/api/labor.md#get-shift)
* [Update Shift](../../doc/api/labor.md#update-shift)
* [List Team Member Wages](../../doc/api/labor.md#list-team-member-wages)
* [Get Team Member Wage](../../doc/api/labor.md#get-team-member-wage)
* [List Workweek Configs](../../doc/api/labor.md#list-workweek-configs)
* [Update Workweek Config](../../doc/api/labor.md#update-workweek-config)


# List Break Types

Returns a paginated list of `BreakType` instances for a business.

```ts
async listBreakTypes(
  locationId?: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListBreakTypesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Query, Optional | Filter the returned `BreakType` results to only those that are associated with the<br>specified location. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of `BreakType` results to return per page. The number can range between 1<br>and 200. The default is 200. |
| `cursor` | `string \| undefined` | Query, Optional | A pointer to the next page of `BreakType` results to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListBreakTypesResponse`](../../doc/models/list-break-types-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await laborApi.listBreakTypes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Break Type

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

```ts
async createBreakType(
  body: CreateBreakTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateBreakTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateBreakTypeRequest`](../../doc/models/create-break-type-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateBreakTypeResponse`](../../doc/models/create-break-type-response.md)

## Example Usage

```ts
const body: CreateBreakTypeRequest = {
  breakType: {
    locationId: 'CGJN03P1D08GF',
    breakName: 'Lunch Break',
    expectedDuration: 'PT30M',
    isPaid: true,
  },
  idempotencyKey: 'PAD3NG5KSN2GL',
};

try {
  const { result, ...httpResponse } = await laborApi.createBreakType(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Break Type

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

```ts
async deleteBreakType(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteBreakTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `BreakType` being deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteBreakTypeResponse`](../../doc/models/delete-break-type-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.deleteBreakType(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Break Type

Returns a single `BreakType` specified by `id`.

```ts
async getBreakType(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBreakTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `BreakType` being retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetBreakTypeResponse`](../../doc/models/get-break-type-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.getBreakType(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Break Type

Updates an existing `BreakType`.

```ts
async updateBreakType(
  id: string,
  body: UpdateBreakTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateBreakTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `BreakType` being updated. |
| `body` | [`UpdateBreakTypeRequest`](../../doc/models/update-break-type-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateBreakTypeResponse`](../../doc/models/update-break-type-response.md)

## Example Usage

```ts
const id = 'id0';

const body: UpdateBreakTypeRequest = {
  breakType: {
    locationId: '26M7H24AZ9N6R',
    breakName: 'Lunch',
    expectedDuration: 'PT50M',
    isPaid: true,
    version: 1,
  },
};

try {
  const { result, ...httpResponse } = await laborApi.updateBreakType(
  id,
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


# List Employee Wages

**This endpoint is deprecated.**

Returns a paginated list of `EmployeeWage` instances for a business.

```ts
async listEmployeeWages(
  employeeId?: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListEmployeeWagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeId` | `string \| undefined` | Query, Optional | Filter the returned wages to only those that are associated with the specified employee. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of `EmployeeWage` results to return per page. The number can range between<br>1 and 200. The default is 200. |
| `cursor` | `string \| undefined` | Query, Optional | A pointer to the next page of `EmployeeWage` results to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListEmployeeWagesResponse`](../../doc/models/list-employee-wages-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await laborApi.listEmployeeWages();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Employee Wage

**This endpoint is deprecated.**

Returns a single `EmployeeWage` specified by `id`.

```ts
async getEmployeeWage(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetEmployeeWageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `EmployeeWage` being retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetEmployeeWageResponse`](../../doc/models/get-employee-wage-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.getEmployeeWage(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Shift

Creates a new `Shift`.

A `Shift` represents a complete workday for a single team member.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `team_member_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:

- The `status` of the new `Shift` is `OPEN` and the team member has another
  shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same team member.
- The `Break` instances are set in the request and a break `start_at`
  is before the `Shift.start_at`, a break `end_at` is after
  the `Shift.end_at`, or both.

```ts
async createShift(
  body: CreateShiftRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateShiftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateShiftRequest`](../../doc/models/create-shift-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateShiftResponse`](../../doc/models/create-shift-response.md)

## Example Usage

```ts
const body: CreateShiftRequest = {
  shift: {
    locationId: 'PAA1RJZZKXBFG',
    startAt: '2019-01-25T03:11:00-05:00',
    endAt: '2019-01-25T13:11:00-05:00',
    wage: {
      title: 'Barista',
      hourlyRate: {
        amount: BigInt(1100),
        currency: 'USD',
      },
      tipEligible: true,
    },
    breaks: [
      {
        startAt: '2019-01-25T06:11:00-05:00',
        breakTypeId: 'REGS1EQR1TPZ5',
        name: 'Tea Break',
        expectedDuration: 'PT5M',
        isPaid: true,
        endAt: '2019-01-25T06:16:00-05:00',
      }
    ],
    teamMemberId: 'ormj0jJJZ5OZIzxrZYJI',
    declaredCashTipMoney: {
      amount: BigInt(500),
      currency: 'USD',
    },
  },
  idempotencyKey: 'HIDSNG5KS478L',
};

try {
  const { result, ...httpResponse } = await laborApi.createShift(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Shifts

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:

- Location IDs
- Team member IDs
- Shift status (`OPEN` or `CLOSED`)
- Shift start
- Shift end
- Workday details

The list can be sorted by:

- `START_AT`
- `END_AT`
- `CREATED_AT`
- `UPDATED_AT`

```ts
async searchShifts(
  body: SearchShiftsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchShiftsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchShiftsRequest`](../../doc/models/search-shifts-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchShiftsResponse`](../../doc/models/search-shifts-response.md)

## Example Usage

```ts
const body: SearchShiftsRequest = {
  query: {
    filter: {
      workday: {
        dateRange: {
          startDate: '2019-01-20',
          endDate: '2019-02-03',
        },
        matchShiftsBy: 'START_AT',
        defaultTimezone: 'America/Los_Angeles',
      },
    },
  },
  limit: 100,
};

try {
  const { result, ...httpResponse } = await laborApi.searchShifts(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Shift

Deletes a `Shift`.

```ts
async deleteShift(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteShiftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `Shift` being deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteShiftResponse`](../../doc/models/delete-shift-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.deleteShift(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Shift

Returns a single `Shift` specified by `id`.

```ts
async getShift(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetShiftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `Shift` being retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetShiftResponse`](../../doc/models/get-shift-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.getShift(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Shift

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

```ts
async updateShift(
  id: string,
  body: UpdateShiftRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateShiftResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the object being updated. |
| `body` | [`UpdateShiftRequest`](../../doc/models/update-shift-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateShiftResponse`](../../doc/models/update-shift-response.md)

## Example Usage

```ts
const id = 'id0';

const body: UpdateShiftRequest = {
  shift: {
    locationId: 'PAA1RJZZKXBFG',
    startAt: '2019-01-25T03:11:00-05:00',
    endAt: '2019-01-25T13:11:00-05:00',
    wage: {
      title: 'Bartender',
      hourlyRate: {
        amount: BigInt(1500),
        currency: 'USD',
      },
      tipEligible: true,
    },
    breaks: [
      {
        startAt: '2019-01-25T06:11:00-05:00',
        breakTypeId: 'REGS1EQR1TPZ5',
        name: 'Tea Break',
        expectedDuration: 'PT5M',
        isPaid: true,
        id: 'X7GAQYVVRRG6P',
        endAt: '2019-01-25T06:16:00-05:00',
      }
    ],
    version: 1,
    teamMemberId: 'ormj0jJJZ5OZIzxrZYJI',
    declaredCashTipMoney: {
      amount: BigInt(500),
      currency: 'USD',
    },
  },
};

try {
  const { result, ...httpResponse } = await laborApi.updateShift(
  id,
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


# List Team Member Wages

Returns a paginated list of `TeamMemberWage` instances for a business.

```ts
async listTeamMemberWages(
  teamMemberId?: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTeamMemberWagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string \| undefined` | Query, Optional | Filter the returned wages to only those that are associated with the<br>specified team member. |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of `TeamMemberWage` results to return per page. The number can range between<br>1 and 200. The default is 200. |
| `cursor` | `string \| undefined` | Query, Optional | A pointer to the next page of `EmployeeWage` results to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListTeamMemberWagesResponse`](../../doc/models/list-team-member-wages-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await laborApi.listTeamMemberWages();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Team Member Wage

Returns a single `TeamMemberWage` specified by `id`.

```ts
async getTeamMemberWage(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTeamMemberWageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `TeamMemberWage` being retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTeamMemberWageResponse`](../../doc/models/get-team-member-wage-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await laborApi.getTeamMemberWage(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Workweek Configs

Returns a list of `WorkweekConfig` instances for a business.

```ts
async listWorkweekConfigs(
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListWorkweekConfigsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of `WorkweekConfigs` results to return per page. |
| `cursor` | `string \| undefined` | Query, Optional | A pointer to the next page of `WorkweekConfig` results to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListWorkweekConfigsResponse`](../../doc/models/list-workweek-configs-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await laborApi.listWorkweekConfigs();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Workweek Config

Updates a `WorkweekConfig`.

```ts
async updateWorkweekConfig(
  id: string,
  body: UpdateWorkweekConfigRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateWorkweekConfigResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The UUID for the `WorkweekConfig` object being updated. |
| `body` | [`UpdateWorkweekConfigRequest`](../../doc/models/update-workweek-config-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateWorkweekConfigResponse`](../../doc/models/update-workweek-config-response.md)

## Example Usage

```ts
const id = 'id0';

const body: UpdateWorkweekConfigRequest = {
  workweekConfig: {
    startOfWeek: 'MON',
    startOfDayLocalTime: '10:00',
    version: 10,
  },
};

try {
  const { result, ...httpResponse } = await laborApi.updateWorkweekConfig(
  id,
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

