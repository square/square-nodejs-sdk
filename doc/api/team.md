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
async createTeamMember(  body: CreateTeamMemberRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<CreateTeamMemberResponse>>
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
async bulkCreateTeamMembers(  body: BulkCreateTeamMembersRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<BulkCreateTeamMembersResponse>>
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
async bulkUpdateTeamMembers(  body: BulkUpdateTeamMembersRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpdateTeamMembersResponse>>
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
        isOwner: false,
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
        isOwner: false,
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


# Search Team Members

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by the following:

- location IDs
- `status`

```ts
async searchTeamMembers(  body: SearchTeamMembersRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<SearchTeamMembersResponse>>
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
async retrieveTeamMember(  teamMemberId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTeamMemberResponse>>
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
async updateTeamMember(  teamMemberId: string,
  body: UpdateTeamMemberRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UpdateTeamMemberResponse>>
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
by `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

```ts
async retrieveWageSetting(  teamMemberId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveWageSettingResponse>>
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
`WageSetting` with the specified `team_member_id` does not exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

```ts
async updateWageSetting(  teamMemberId: string,
  body: UpdateWageSettingRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWageSettingResponse>>
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
        jobTitle: 'Manager',
        payType: 'SALARY',
        annualRate: {
          amount: BigInt(3000000),
          currency: 'USD',
        },
        weeklyHours: 40,
      },
      {
        jobTitle: 'Cashier',
        payType: 'HOURLY',
        hourlyRate: {
          amount: BigInt(1200),
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

