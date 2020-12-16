# V1 Employees

```ts
const v1EmployeesApi = client.v1EmployeesApi;
```

## Class Name

`V1EmployeesApi`

## Methods

* [List Employees](/doc/api/v1-employees.md#list-employees)
* [Create Employee](/doc/api/v1-employees.md#create-employee)
* [Retrieve Employee](/doc/api/v1-employees.md#retrieve-employee)
* [Update Employee](/doc/api/v1-employees.md#update-employee)
* [List Employee Roles](/doc/api/v1-employees.md#list-employee-roles)
* [Create Employee Role](/doc/api/v1-employees.md#create-employee-role)
* [Retrieve Employee Role](/doc/api/v1-employees.md#retrieve-employee-role)
* [Update Employee Role](/doc/api/v1-employees.md#update-employee-role)
* [List Timecards](/doc/api/v1-employees.md#list-timecards)
* [Create Timecard](/doc/api/v1-employees.md#create-timecard)
* [Delete Timecard](/doc/api/v1-employees.md#delete-timecard)
* [Retrieve Timecard](/doc/api/v1-employees.md#retrieve-timecard)
* [Update Timecard](/doc/api/v1-employees.md#update-timecard)
* [List Timecard Events](/doc/api/v1-employees.md#list-timecard-events)
* [List Cash Drawer Shifts](/doc/api/v1-employees.md#list-cash-drawer-shifts)
* [Retrieve Cash Drawer Shift](/doc/api/v1-employees.md#retrieve-cash-drawer-shift)


# List Employees

Provides summary information for all of a business's employees.

```ts
async listEmployees(
  order?: string,
  beginUpdatedAt?: string,
  endUpdatedAt?: string,
  beginCreatedAt?: string,
  endCreatedAt?: string,
  status?: string,
  externalId?: string,
  limit?: number,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Employee[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string`](/doc/models/sort-order.md) | Query, Optional | The order in which employees are listed in the response, based on their created_at field.      Default value: ASC |
| `beginUpdatedAt` | `string` | Query, Optional | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format |
| `endUpdatedAt` | `string` | Query, Optional | If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format. |
| `beginCreatedAt` | `string` | Query, Optional | If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endCreatedAt` | `string` | Query, Optional | If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format. |
| `status` | [`string`](/doc/models/v1-list-employees-request-status.md) | Query, Optional | If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). |
| `externalId` | `string` | Query, Optional | If provided, the endpoint returns only employee entities with the specified external_id. |
| `limit` | `number` | Query, Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Employee[]`](/doc/models/v1-employee.md)

## Example Usage

```ts
const order = 'DESC';
const beginUpdatedAt = 'begin_updated_at6';
const endUpdatedAt = 'end_updated_at4';
const beginCreatedAt = 'begin_created_at6';
const endCreatedAt = 'end_created_at8';
const status = 'ACTIVE';
const externalId = 'external_id6';
const limit = 172;
const batchToken = 'batch_token2';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.listEmployees(order, beginUpdatedAt, endUpdatedAt, beginCreatedAt, endCreatedAt, status, externalId, limit, batchToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Employee

Use the CreateEmployee endpoint to add an employee to a Square
account. Employees created with the Connect API have an initial status
of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
until they are activated from the Square Dashboard. Employee status
cannot be changed with the Connect API.

Employee entities cannot be deleted. To disable employee profiles,
set the employee's status to <code>INACTIVE</code>

```ts
async createEmployee(
  body: V1Employee,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Employee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1Employee`](/doc/models/v1-employee.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Employee`](/doc/models/v1-employee.md)

## Example Usage

```ts
const bodyRoleIds: string[] = ['role_ids0', 'role_ids1'];
const bodyAuthorizedLocationIds: string[] = ['authorized_location_ids7', 'authorized_location_ids8'];
const body: V1Employee = {
  firstName: 'first_name6',
  lastName: 'last_name4',
};
body.id = 'id6';
body.roleIds = bodyRoleIds;
body.authorizedLocationIds = bodyAuthorizedLocationIds;
body.email = 'email0';
body.status = 'ACTIVE';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.createEmployee(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Employee

Provides the details for a single employee.

```ts
async retrieveEmployee(
  employeeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Employee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeId` | `string` | Template, Required | The employee's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Employee`](/doc/models/v1-employee.md)

## Example Usage

```ts
const employeeId = 'employee_id0';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.retrieveEmployee(employeeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Employee

UpdateEmployee

```ts
async updateEmployee(
  employeeId: string,
  body: V1Employee,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Employee>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeId` | `string` | Template, Required | The ID of the role to modify. |
| `body` | [`V1Employee`](/doc/models/v1-employee.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Employee`](/doc/models/v1-employee.md)

## Example Usage

```ts
const employeeId = 'employee_id0';
const bodyRoleIds: string[] = ['role_ids0', 'role_ids1'];
const bodyAuthorizedLocationIds: string[] = ['authorized_location_ids7', 'authorized_location_ids8'];
const body: V1Employee = {
  firstName: 'first_name6',
  lastName: 'last_name4',
};
body.id = 'id6';
body.roleIds = bodyRoleIds;
body.authorizedLocationIds = bodyAuthorizedLocationIds;
body.email = 'email0';
body.status = 'ACTIVE';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.updateEmployee(employeeId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Employee Roles

Provides summary information for all of a business's employee roles.

```ts
async listEmployeeRoles(
  order?: string,
  limit?: number,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1EmployeeRole[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string`](/doc/models/sort-order.md) | Query, Optional | The order in which employees are listed in the response, based on their created_at field.Default value: ASC |
| `limit` | `number` | Query, Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1EmployeeRole[]`](/doc/models/v1-employee-role.md)

## Example Usage

```ts
const order = 'DESC';
const limit = 172;
const batchToken = 'batch_token2';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.listEmployeeRoles(order, limit, batchToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Employee Role

Creates an employee role you can then assign to employees.

Square accounts can include any number of roles that can be assigned to
employees. These roles define the actions and permissions granted to an
employee with that role. For example, an employee with a "Shift Manager"
role might be able to issue refunds in Square Point of Sale, whereas an
employee with a "Clerk" role might not.

Roles are assigned with the [V1UpdateEmployee](#endpoint-v1updateemployee)
endpoint. An employee can have only one role at a time.

If an employee has no role, they have none of the permissions associated
with roles. All employees can accept payments with Square Point of Sale.

```ts
async createEmployeeRole(
  body: V1EmployeeRole,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1EmployeeRole>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1EmployeeRole`](/doc/models/v1-employee-role.md) | Body, Required | An EmployeeRole object with a name and permissions, and an optional owner flag. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1EmployeeRole`](/doc/models/v1-employee-role.md)

## Example Usage

```ts
const bodyPermissions: string[] = ['REGISTER_APPLY_RESTRICTED_DISCOUNTS', 'REGISTER_CHANGE_SETTINGS', 'REGISTER_EDIT_ITEM'];
const body: V1EmployeeRole = {
  name: 'name6',
  permissions: bodyPermissions,
};
body.id = 'id6';
body.isOwner = false;
body.createdAt = 'created_at4';
body.updatedAt = 'updated_at8';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.createEmployeeRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Employee Role

Provides the details for a single employee role.

```ts
async retrieveEmployeeRole(
  roleId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1EmployeeRole>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleId` | `string` | Template, Required | The role's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1EmployeeRole`](/doc/models/v1-employee-role.md)

## Example Usage

```ts
const roleId = 'role_id6';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.retrieveEmployeeRole(roleId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Employee Role

Modifies the details of an employee role.

```ts
async updateEmployeeRole(
  roleId: string,
  body: V1EmployeeRole,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1EmployeeRole>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleId` | `string` | Template, Required | The ID of the role to modify. |
| `body` | [`V1EmployeeRole`](/doc/models/v1-employee-role.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1EmployeeRole`](/doc/models/v1-employee-role.md)

## Example Usage

```ts
const roleId = 'role_id6';
const bodyPermissions: string[] = ['REGISTER_APPLY_RESTRICTED_DISCOUNTS', 'REGISTER_CHANGE_SETTINGS', 'REGISTER_EDIT_ITEM'];
const body: V1EmployeeRole = {
  name: 'name6',
  permissions: bodyPermissions,
};
body.id = 'id6';
body.isOwner = false;
body.createdAt = 'created_at4';
body.updatedAt = 'updated_at8';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.updateEmployeeRole(roleId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Timecards

Provides summary information for all of a business's employee timecards.

```ts
async listTimecards(
  order?: string,
  employeeId?: string,
  beginClockinTime?: string,
  endClockinTime?: string,
  beginClockoutTime?: string,
  endClockoutTime?: string,
  beginUpdatedAt?: string,
  endUpdatedAt?: string,
  deleted?: boolean,
  limit?: number,
  batchToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Timecard[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string`](/doc/models/sort-order.md) | Query, Optional | The order in which timecards are listed in the response, based on their created_at field. |
| `employeeId` | `string` | Query, Optional | If provided, the endpoint returns only timecards for the employee with the specified ID. |
| `beginClockinTime` | `string` | Query, Optional | If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endClockinTime` | `string` | Query, Optional | If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format. |
| `beginClockoutTime` | `string` | Query, Optional | If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endClockoutTime` | `string` | Query, Optional | If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format. |
| `beginUpdatedAt` | `string` | Query, Optional | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endUpdatedAt` | `string` | Query, Optional | If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format. |
| `deleted` | `boolean` | Query, Optional | If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned. |
| `limit` | `number` | Query, Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Timecard[]`](/doc/models/v1-timecard.md)

## Example Usage

```ts
const order = 'DESC';
const employeeId = 'employee_id0';
const beginClockinTime = 'begin_clockin_time8';
const endClockinTime = 'end_clockin_time2';
const beginClockoutTime = 'begin_clockout_time0';
const endClockoutTime = 'end_clockout_time2';
const beginUpdatedAt = 'begin_updated_at6';
const endUpdatedAt = 'end_updated_at4';
const deleted = false;
const limit = 172;
const batchToken = 'batch_token2';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.listTimecards(order, employeeId, beginClockinTime, endClockinTime, beginClockoutTime, endClockoutTime, beginUpdatedAt, endUpdatedAt, deleted, limit, batchToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Timecard

Creates a timecard for an employee and clocks them in with an
`API_CREATE` event and a `clockin_time` set to the current time unless
the request provides a different value.

To import timecards from another
system (rather than clocking someone in). Specify the `clockin_time`
and* `clockout_time` in the request.

Timecards correspond to exactly one shift for a given employee, bounded
by the `clockin_time` and `clockout_time` fields. An employee is
considered clocked in if they have a timecard that doesn't have a
`clockout_time` set. An employee that is currently clocked in cannot
be clocked in a second time.

```ts
async createTimecard(
  body: V1Timecard,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Timecard>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1Timecard`](/doc/models/v1-timecard.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Timecard`](/doc/models/v1-timecard.md)

## Example Usage

```ts
const body: V1Timecard = {
  employeeId: 'employee_id4',
};
body.id = 'id6';
body.deleted = false;
body.clockinTime = 'clockin_time2';
body.clockoutTime = 'clockout_time2';
body.clockinLocationId = 'clockin_location_id4';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.createTimecard(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Timecard

Deletes a timecard. Timecards can also be deleted through the
Square Dashboard. Deleted timecards are still accessible through
Connect API endpoints, but cannot be modified. The `deleted` field of
the `Timecard` object indicates whether the timecard has been deleted.

__Note__: By default, deleted timecards appear alongside valid timecards in
results returned by the [ListTimecards](#endpoint-v1employees-listtimecards)
endpoint. To filter deleted timecards, include the `deleted` query
parameter in the list request.

Only approved accounts can manage their employees with Square.
Unapproved accounts cannot use employee management features with the
API.

```ts
async deleteTimecard(
  timecardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timecardId` | `string` | Template, Required | The ID of the timecard to delete. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const timecardId = 'timecard_id0';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.deleteTimecard(timecardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Timecard

Provides the details for a single timecard.

<aside>
Only approved accounts can manage their employees with Square.
Unapproved accounts cannot use employee management features with the
API.
</aside>


```ts
async retrieveTimecard(
  timecardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Timecard>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timecardId` | `string` | Template, Required | The timecard's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Timecard`](/doc/models/v1-timecard.md)

## Example Usage

```ts
const timecardId = 'timecard_id0';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.retrieveTimecard(timecardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Timecard

Modifies the details of a timecard with an `API_EDIT` event for
the timecard. Updating an active timecard with a `clockout_time`
clocks the employee out.

```ts
async updateTimecard(
  timecardId: string,
  body: V1Timecard,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1Timecard>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timecardId` | `string` | Template, Required | TThe ID of the timecard to modify. |
| `body` | [`V1Timecard`](/doc/models/v1-timecard.md) | Body, Required | An object containing the fields to POST for the request.<br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1Timecard`](/doc/models/v1-timecard.md)

## Example Usage

```ts
const timecardId = 'timecard_id0';
const body: V1Timecard = {
  employeeId: 'employee_id4',
};
body.id = 'id6';
body.deleted = false;
body.clockinTime = 'clockin_time2';
body.clockoutTime = 'clockout_time2';
body.clockinLocationId = 'clockin_location_id4';

try {
  const { result, ...httpResponse } = await v1EmployeesApi.updateTimecard(timecardId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Timecard Events

Provides summary information for all events associated with a
particular timecard.

Only approved accounts can manage their employees with Square.
Unapproved accounts cannot use employee management features with the
API.

```ts
async listTimecardEvents(
  timecardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1TimecardEvent[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timecardId` | `string` | Template, Required | The ID of the timecard to list events for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1TimecardEvent[]`](/doc/models/v1-timecard-event.md)

## Example Usage

```ts
const timecardId = 'timecard_id0';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.listTimecardEvents(timecardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Cash Drawer Shifts

Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.

```ts
async listCashDrawerShifts(
  locationId: string,
  order?: string,
  beginTime?: string,
  endTime?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1CashDrawerShift[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list cash drawer shifts for. |
| `order` | [`string`](/doc/models/sort-order.md) | Query, Optional | The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC |
| `beginTime` | `string` | Query, Optional | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days. |
| `endTime` | `string` | Query, Optional | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1CashDrawerShift[]`](/doc/models/v1-cash-drawer-shift.md)

## Example Usage

```ts
const locationId = 'location_id4';
const order = 'DESC';
const beginTime = 'begin_time2';
const endTime = 'end_time2';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.listCashDrawerShifts(locationId, order, beginTime, endTime);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Cash Drawer Shift

Provides the details for a single cash drawer shift, including all events that occurred during the shift.

```ts
async retrieveCashDrawerShift(
  locationId: string,
  shiftId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V1CashDrawerShift>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Template, Required | The ID of the location to list cash drawer shifts for. |
| `shiftId` | `string` | Template, Required | The shift's ID. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`V1CashDrawerShift`](/doc/models/v1-cash-drawer-shift.md)

## Example Usage

```ts
const locationId = 'location_id4';
const shiftId = 'shift_id0';
try {
  const { result, ...httpResponse } = await v1EmployeesApi.retrieveCashDrawerShift(locationId, shiftId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

