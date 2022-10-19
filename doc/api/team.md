# Team

```ts
const teamApi = client.teamApi;
```

## Class Name

`TeamApi`

## Methods

* [Create Team Member](../../doc/api/team.md#create-team-member)
* [Bulk Create Team Members](../../doc/api/team.md#bulk-create-team-members)
* [Bulk Update Team Members](../../doc/api/team.md#bulk-update-team-members)
* [Search Team Members](../../doc/api/team.md#search-team-members)
* [Retrieve Team Member](../../doc/api/team.md#retrieve-team-member)
* [Update Team Member](../../doc/api/team.md#update-team-member)
* [Retrieve Wage Setting](../../doc/api/team.md#retrieve-wage-setting)
* [Update Wage Setting](../../doc/api/team.md#update-wage-setting)


# Create Team Member

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:

- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

```ts
async createTeamMember(
  body: CreateTeamMemberRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTeamMemberResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTeamMemberRequest`](../../doc/models/create-team-member-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTeamMemberResponse`](../../doc/models/create-team-member-response.md)

## Example Usage

```ts
const contentType = null;
const bodyTeamMemberAssignedLocationsLocationIds: string[] = ['YSGH2WBKG94QZ', 'GA2Y9HSJ8KRYT'];
const bodyTeamMemberAssignedLocations: TeamMemberAssignedLocations = {};
bodyTeamMemberAssignedLocations.assignmentType = 'EXPLICIT_LOCATIONS';
bodyTeamMemberAssignedLocations.locationIds = bodyTeamMemberAssignedLocationsLocationIds;

const bodyTeamMember: TeamMember = {};
bodyTeamMember.referenceId = 'reference_id_1';
bodyTeamMember.status = 'ACTIVE';
bodyTeamMember.givenName = 'Joe';
bodyTeamMember.familyName = 'Doe';
bodyTeamMember.emailAddress = 'joe_doe@gmail.com';
bodyTeamMember.phoneNumber = '+14159283333';
bodyTeamMember.assignedLocations = bodyTeamMemberAssignedLocations;

const body: CreateTeamMemberRequest = {};
body.idempotencyKey = 'idempotency-key-0';
body.teamMember = bodyTeamMember;

try {
  const { result, ...httpResponse } = await teamApi.createTeamMember(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Create Team Members

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

```ts
async bulkCreateTeamMembers(
  body: BulkCreateTeamMembersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkCreateTeamMembersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkCreateTeamMembersRequest`](../../doc/models/bulk-create-team-members-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkCreateTeamMembersResponse`](../../doc/models/bulk-create-team-members-response.md)

## Example Usage

```ts
const contentType = null;
const bodyTeamMembers: Record<string, CreateTeamMemberRequest> = {};
const body: BulkCreateTeamMembersRequest = {
  teamMembers: bodyTeamMembers,
};

try {
  const { result, ...httpResponse } = await teamApi.bulkCreateTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Update Team Members

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

```ts
async bulkUpdateTeamMembers(
  body: BulkUpdateTeamMembersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkUpdateTeamMembersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BulkUpdateTeamMembersRequest`](../../doc/models/bulk-update-team-members-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkUpdateTeamMembersResponse`](../../doc/models/bulk-update-team-members-response.md)

## Example Usage

```ts
const contentType = null;
const bodyTeamMembers: Record<string, UpdateTeamMemberRequest> = {};
const body: BulkUpdateTeamMembersRequest = {
  teamMembers: bodyTeamMembers,
};

try {
  const { result, ...httpResponse } = await teamApi.bulkUpdateTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Team Members

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by the following:

- location IDs
- `status`

```ts
async searchTeamMembers(
  body: SearchTeamMembersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchTeamMembersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchTeamMembersRequest`](../../doc/models/search-team-members-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchTeamMembersResponse`](../../doc/models/search-team-members-response.md)

## Example Usage

```ts
const contentType = null;
const bodyQueryFilterLocationIds: string[] = ['0G5P3VGACMMQZ'];
const bodyQueryFilter: SearchTeamMembersFilter = {};
bodyQueryFilter.locationIds = bodyQueryFilterLocationIds;
bodyQueryFilter.status = 'ACTIVE';

const bodyQuery: SearchTeamMembersQuery = {};
bodyQuery.filter = bodyQueryFilter;

const body: SearchTeamMembersRequest = {};
body.query = bodyQuery;
body.limit = 10;

try {
  const { result, ...httpResponse } = await teamApi.searchTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Team Member

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

```ts
async retrieveTeamMember(
  teamMemberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveTeamMemberResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Template, Required | The ID of the team member to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveTeamMemberResponse`](../../doc/models/retrieve-team-member-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';
try {
  const { result, ...httpResponse } = await teamApi.retrieveTeamMember(teamMemberId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Team Member

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

```ts
async updateTeamMember(
  teamMemberId: string,
  body: UpdateTeamMemberRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateTeamMemberResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Template, Required | The ID of the team member to update. |
| `body` | [`UpdateTeamMemberRequest`](../../doc/models/update-team-member-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateTeamMemberResponse`](../../doc/models/update-team-member-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';
const contentType = null;
const bodyTeamMemberAssignedLocationsLocationIds: string[] = ['YSGH2WBKG94QZ', 'GA2Y9HSJ8KRYT'];
const bodyTeamMemberAssignedLocations: TeamMemberAssignedLocations = {};
bodyTeamMemberAssignedLocations.assignmentType = 'EXPLICIT_LOCATIONS';
bodyTeamMemberAssignedLocations.locationIds = bodyTeamMemberAssignedLocationsLocationIds;

const bodyTeamMember: TeamMember = {};
bodyTeamMember.referenceId = 'reference_id_1';
bodyTeamMember.status = 'ACTIVE';
bodyTeamMember.givenName = 'Joe';
bodyTeamMember.familyName = 'Doe';
bodyTeamMember.emailAddress = 'joe_doe@gmail.com';
bodyTeamMember.phoneNumber = '+14159283333';
bodyTeamMember.assignedLocations = bodyTeamMemberAssignedLocations;

const body: UpdateTeamMemberRequest = {};
body.teamMember = bodyTeamMember;

try {
  const { result, ...httpResponse } = await teamApi.updateTeamMember(teamMemberId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Wage Setting

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

```ts
async retrieveWageSetting(
  teamMemberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveWageSettingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Template, Required | The ID of the team member for which to retrieve the wage setting. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveWageSettingResponse`](../../doc/models/retrieve-wage-setting-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';
try {
  const { result, ...httpResponse } = await teamApi.retrieveWageSetting(teamMemberId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Wage Setting

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` does not exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

```ts
async updateWageSetting(
  teamMemberId: string,
  body: UpdateWageSettingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateWageSettingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `teamMemberId` | `string` | Template, Required | The ID of the team member for which to update the `WageSetting` object. |
| `body` | [`UpdateWageSettingRequest`](../../doc/models/update-wage-setting-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateWageSettingResponse`](../../doc/models/update-wage-setting-response.md)

## Example Usage

```ts
const teamMemberId = 'team_member_id0';
const contentType = null;
const bodyWageSettingJobAssignments: JobAssignment[] = [];

const bodyWageSettingjobAssignments0AnnualRate: Money = {};
bodyWageSettingjobAssignments0AnnualRate.amount = BigInt(3000000);
bodyWageSettingjobAssignments0AnnualRate.currency = 'USD';

const bodyWageSettingjobAssignments0: JobAssignment = {
  jobTitle: 'Manager',
  payType: 'SALARY',
};
bodyWageSettingjobAssignments0.annualRate = bodyWageSettingjobAssignments0AnnualRate;
bodyWageSettingjobAssignments0.weeklyHours = 40;

bodyWageSettingJobAssignments[0] = bodyWageSettingjobAssignments0;

const bodyWageSettingjobAssignments1HourlyRate: Money = {};
bodyWageSettingjobAssignments1HourlyRate.amount = BigInt(1200);
bodyWageSettingjobAssignments1HourlyRate.currency = 'USD';

const bodyWageSettingjobAssignments1: JobAssignment = {
  jobTitle: 'Cashier',
  payType: 'HOURLY',
};
bodyWageSettingjobAssignments1.hourlyRate = bodyWageSettingjobAssignments1HourlyRate;

bodyWageSettingJobAssignments[1] = bodyWageSettingjobAssignments1;

const bodyWageSetting: WageSetting = {};
bodyWageSetting.jobAssignments = bodyWageSettingJobAssignments;
bodyWageSetting.isOvertimeExempt = true;

const body: UpdateWageSettingRequest = {
  wageSetting: bodyWageSetting,
};

try {
  const { result, ...httpResponse } = await teamApi.updateWageSetting(teamMemberId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

