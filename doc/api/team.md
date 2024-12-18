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
* [List Jobs](../../doc/api/team.md#list-jobs)
* [Create Job](../../doc/api/team.md#create-job)
* [Retrieve Job](../../doc/api/team.md#retrieve-job)
* [Update Job](../../doc/api/team.md#update-job)
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
const body: CreateTeamMemberRequest = {
  idempotencyKey: 'idempotency-key-0',
  teamMember: {
    referenceId: 'reference_id_1',
    status: 'ACTIVE',
    givenName: 'Joe',
    familyName: 'Doe',
    emailAddress: 'joe_doe@gmail.com',
    phoneNumber: '+14159283333',
    assignedLocations: {
      assignmentType: 'EXPLICIT_LOCATIONS',
      locationIds: [
        'YSGH2WBKG94QZ',
        'GA2Y9HSJ8KRYT'
      ],
    },
    wageSetting: {
      jobAssignments: [
        {
          payType: 'SALARY',
          annualRate: {
            amount: BigInt(3000000),
            currency: 'USD',
          },
          weeklyHours: 40,
          jobId: 'FjS8x95cqHiMenw4f1NAUH4P',
        },
        {
          payType: 'HOURLY',
          hourlyRate: {
            amount: BigInt(2000),
            currency: 'USD',
          },
          jobId: 'VDNpRv8da51NU8qZFC5zDWpF',
        }
      ],
      isOvertimeExempt: true,
    },
  },
};

try {
  const { result, ...httpResponse } = await teamApi.createTeamMember(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: BulkCreateTeamMembersRequest = {
  teamMembers: {
    'idempotency-key-1': {
      teamMember: {
        referenceId: 'reference_id_1',
        givenName: 'Joe',
        familyName: 'Doe',
        emailAddress: 'joe_doe@gmail.com',
        phoneNumber: '+14159283333',
        assignedLocations: {
          assignmentType: 'EXPLICIT_LOCATIONS',
          locationIds: [
            'YSGH2WBKG94QZ',
            'GA2Y9HSJ8KRYT'
          ],
        },
      },
    },
    'idempotency-key-2': {
      teamMember: {
        referenceId: 'reference_id_2',
        givenName: 'Jane',
        familyName: 'Smith',
        emailAddress: 'jane_smith@gmail.com',
        phoneNumber: '+14159223334',
        assignedLocations: {
          assignmentType: 'ALL_CURRENT_AND_FUTURE_LOCATIONS',
        },
      },
    }
  },
};

try {
  const { result, ...httpResponse } = await teamApi.bulkCreateTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
const body: BulkUpdateTeamMembersRequest = {
  teamMembers: {
    'AFMwA08kR-MIF-3Vs0OE': {
      teamMember: {
        referenceId: 'reference_id_2',
        status: 'ACTIVE',
        givenName: 'Jane',
        familyName: 'Smith',
        emailAddress: 'jane_smith@gmail.com',
        phoneNumber: '+14159223334',
        assignedLocations: {
          assignmentType: 'ALL_CURRENT_AND_FUTURE_LOCATIONS',
        },
      },
    },
    'fpgteZNMaf0qOK-a4t6P': {
      teamMember: {
        referenceId: 'reference_id_1',
        status: 'ACTIVE',
        givenName: 'Joe',
        familyName: 'Doe',
        emailAddress: 'joe_doe@gmail.com',
        phoneNumber: '+14159283333',
        assignedLocations: {
          assignmentType: 'EXPLICIT_LOCATIONS',
          locationIds: [
            'YSGH2WBKG94QZ',
            'GA2Y9HSJ8KRYT'
          ],
        },
      },
    }
  },
};

try {
  const { result, ...httpResponse } = await teamApi.bulkUpdateTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Jobs

Lists jobs in a seller account. Results are sorted by title in ascending order.

```ts
async listJobs(
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListJobsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor returned by the previous call to this endpoint. Provide this<br>cursor to retrieve the next page of results for your original request. For more information,<br>see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListJobsResponse`](../../doc/models/list-jobs-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await teamApi.listJobs();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Job

Creates a job in a seller account. A job defines a title and tip eligibility. Note that
compensation is defined in a [job assignment](../../doc/models/job-assignment.md) in a team member's wage setting.

```ts
async createJob(
  body: CreateJobRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateJobResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateJobRequest`](../../doc/models/create-job-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateJobResponse`](../../doc/models/create-job-response.md)

## Example Usage

```ts
const body: CreateJobRequest = {
  job: {
    title: 'Cashier',
    isTipEligible: true,
  },
  idempotencyKey: 'idempotency-key-0',
};

try {
  const { result, ...httpResponse } = await teamApi.createJob(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Job

Retrieves a specified job.

```ts
async retrieveJob(
  jobId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveJobResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jobId` | `string` | Template, Required | The ID of the job to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveJobResponse`](../../doc/models/retrieve-job-response.md)

## Example Usage

```ts
const jobId = 'job_id2';

try {
  const { result, ...httpResponse } = await teamApi.retrieveJob(jobId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Job

Updates the title or tip eligibility of a job. Changes to the title propagate to all
`JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.

```ts
async updateJob(
  jobId: string,
  body: UpdateJobRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateJobResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jobId` | `string` | Template, Required | The ID of the job to update. |
| `body` | [`UpdateJobRequest`](../../doc/models/update-job-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateJobResponse`](../../doc/models/update-job-response.md)

## Example Usage

```ts
const jobId = 'job_id2';

const body: UpdateJobRequest = {
  job: {
    title: 'Cashier 1',
    isTipEligible: true,
  },
};

try {
  const { result, ...httpResponse } = await teamApi.updateJob(
  jobId,
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


# Search Team Members

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether
the team member is the Square account owner.

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
const body: SearchTeamMembersRequest = {
  query: {
    filter: {
      locationIds: [
        '0G5P3VGACMMQZ'
      ],
      status: 'ACTIVE',
    },
  },
  limit: 10,
};

try {
  const { result, ...httpResponse } = await teamApi.searchTeamMembers(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
} catch (error) {
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

const body: UpdateTeamMemberRequest = {
  teamMember: {
    referenceId: 'reference_id_1',
    status: 'ACTIVE',
    givenName: 'Joe',
    familyName: 'Doe',
    emailAddress: 'joe_doe@gmail.com',
    phoneNumber: '+14159283333',
    assignedLocations: {
      assignmentType: 'EXPLICIT_LOCATIONS',
      locationIds: [
        'YSGH2WBKG94QZ',
        'GA2Y9HSJ8KRYT'
      ],
    },
  },
};

try {
  const { result, ...httpResponse } = await teamApi.updateTeamMember(
  teamMemberId,
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


# Retrieve Wage Setting

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

Square recommends using [RetrieveTeamMember](../../doc/api/team.md#retrieve-team-member) or [SearchTeamMembers](../../doc/api/team.md#search-team-members)
to get this information directly from the `TeamMember.wage_setting` field.

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
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Wage Setting

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` doesn't exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

Square recommends using [CreateTeamMember](../../doc/api/team.md#create-team-member) or [UpdateTeamMember](../../doc/api/team.md#update-team-member)
to manage the `TeamMember.wage_setting` field directly.

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

const body: UpdateWageSettingRequest = {
  wageSetting: {
    jobAssignments: [
      {
        payType: 'SALARY',
        jobTitle: 'Manager',
        annualRate: {
          amount: BigInt(3000000),
          currency: 'USD',
        },
        weeklyHours: 40,
      },
      {
        payType: 'HOURLY',
        jobTitle: 'Cashier',
        hourlyRate: {
          amount: BigInt(2000),
          currency: 'USD',
        },
      }
    ],
    isOvertimeExempt: true,
  },
};

try {
  const { result, ...httpResponse } = await teamApi.updateWageSetting(
  teamMemberId,
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

