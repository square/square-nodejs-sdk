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
| `order` | [`string \| undefined`](/doc/models/sort-order.md) | Query, Optional | The order in which employees are listed in the response, based on their created_at field.      Default value: ASC |
| `beginUpdatedAt` | `string \| undefined` | Query, Optional | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format |
| `endUpdatedAt` | `string \| undefined` | Query, Optional | If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format. |
| `beginCreatedAt` | `string \| undefined` | Query, Optional | If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endCreatedAt` | `string \| undefined` | Query, Optional | If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format. |
| `status` | [`string \| undefined`](/doc/models/v1-list-employees-request-status.md) | Query, Optional | If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). |
| `externalId` | `string \| undefined` | Query, Optional | If provided, the endpoint returns only employee entities with the specified external_id. |
| `limit` | `number \| undefined` | Query, Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string \| undefined` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `order` | [`string \| undefined`](/doc/models/sort-order.md) | Query, Optional | The order in which employees are listed in the response, based on their created_at field.Default value: ASC |
| `limit` | `number \| undefined` | Query, Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string \| undefined` | Query, Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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

Roles are assigned with the [V1UpdateEmployee](/doc/api/v1-employees.md#update-employee-role)
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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

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

