# Disputes

```ts
const disputesApi = client.disputesApi;
```

## Class Name

`DisputesApi`

## Methods

* [List Disputes](../../doc/api/disputes.md#list-disputes)
* [Retrieve Dispute](../../doc/api/disputes.md#retrieve-dispute)
* [Accept Dispute](../../doc/api/disputes.md#accept-dispute)
* [List Dispute Evidence](../../doc/api/disputes.md#list-dispute-evidence)
* [Create Dispute Evidence File](../../doc/api/disputes.md#create-dispute-evidence-file)
* [Create Dispute Evidence Text](../../doc/api/disputes.md#create-dispute-evidence-text)
* [Delete Dispute Evidence](../../doc/api/disputes.md#delete-dispute-evidence)
* [Retrieve Dispute Evidence](../../doc/api/disputes.md#retrieve-dispute-evidence)
* [Submit Evidence](../../doc/api/disputes.md#submit-evidence)


# List Disputes

Returns a list of disputes associated with a particular account.

```ts
async listDisputes(
  cursor?: string,
  states?: string,
  locationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDisputesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `states` | [`string \| undefined`](../../doc/models/dispute-state.md) | Query, Optional | The dispute states used to filter the result. If not specified, the endpoint returns all disputes. |
| `locationId` | `string \| undefined` | Query, Optional | The ID of the location for which to return a list of disputes.<br>If not specified, the endpoint returns disputes associated with all locations. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListDisputesResponse`](../../doc/models/list-disputes-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await disputesApi.listDisputes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Dispute

Returns details about a specific dispute.

```ts
async retrieveDispute(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveDisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute you want more details about. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveDisputeResponse`](../../doc/models/retrieve-dispute-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

try {
  const { result, ...httpResponse } = await disputesApi.retrieveDispute(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Accept Dispute

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

```ts
async acceptDispute(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AcceptDisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute you want to accept. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AcceptDisputeResponse`](../../doc/models/accept-dispute-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

try {
  const { result, ...httpResponse } = await disputesApi.acceptDispute(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Dispute Evidence

Returns a list of evidence associated with a dispute.

```ts
async listDisputeEvidence(
  disputeId: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDisputeEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListDisputeEvidenceResponse`](../../doc/models/list-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

try {
  const { result, ...httpResponse } = await disputesApi.listDisputeEvidence(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Dispute Evidence File

Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.

```ts
async createDisputeEvidenceFile(
  disputeId: string,
  request?: CreateDisputeEvidenceFileRequest,
  imageFile?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateDisputeEvidenceFileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute for which you want to upload evidence. |
| `request` | [`CreateDisputeEvidenceFileRequest \| undefined`](../../doc/models/create-dispute-evidence-file-request.md) | Form (JSON-Encoded), Optional | Defines the parameters for a `CreateDisputeEvidenceFile` request. |
| `imageFile` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateDisputeEvidenceFileResponse`](../../doc/models/create-dispute-evidence-file-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

try {
  const { result, ...httpResponse } = await disputesApi.createDisputeEvidenceFile(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Dispute Evidence Text

Uploads text to use as evidence for a dispute challenge.

```ts
async createDisputeEvidenceText(
  disputeId: string,
  body: CreateDisputeEvidenceTextRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateDisputeEvidenceTextResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute for which you want to upload evidence. |
| `body` | [`CreateDisputeEvidenceTextRequest`](../../doc/models/create-dispute-evidence-text-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateDisputeEvidenceTextResponse`](../../doc/models/create-dispute-evidence-text-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

const body: CreateDisputeEvidenceTextRequest = {
  idempotencyKey: 'ed3ee3933d946f1514d505d173c82648',
  evidenceText: '1Z8888888888888888',
  evidenceType: 'TRACKING_NUMBER',
};

try {
  const { result, ...httpResponse } = await disputesApi.createDisputeEvidenceText(
  disputeId,
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


# Delete Dispute Evidence

Removes specified evidence from a dispute.
Square does not send the bank any evidence that is removed.

```ts
async deleteDisputeEvidence(
  disputeId: string,
  evidenceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteDisputeEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute from which you want to remove evidence. |
| `evidenceId` | `string` | Template, Required | The ID of the evidence you want to remove. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteDisputeEvidenceResponse`](../../doc/models/delete-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

const evidenceId = 'evidence_id2';

try {
  const { result, ...httpResponse } = await disputesApi.deleteDisputeEvidence(
  disputeId,
  evidenceId
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


# Retrieve Dispute Evidence

Returns the metadata for the evidence specified in the request URL path.

You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot be downloaded after you upload it.

```ts
async retrieveDisputeEvidence(
  disputeId: string,
  evidenceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveDisputeEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute from which you want to retrieve evidence metadata. |
| `evidenceId` | `string` | Template, Required | The ID of the evidence to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveDisputeEvidenceResponse`](../../doc/models/retrieve-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

const evidenceId = 'evidence_id2';

try {
  const { result, ...httpResponse } = await disputesApi.retrieveDisputeEvidence(
  disputeId,
  evidenceId
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


# Submit Evidence

Submits evidence to the cardholder's bank.

The evidence submitted by this endpoint includes evidence uploaded
using the [CreateDisputeEvidenceFile](../../doc/api/disputes.md#create-dispute-evidence-file) and
[CreateDisputeEvidenceText](../../doc/api/disputes.md#create-dispute-evidence-text) endpoints and
evidence automatically provided by Square, when available. Evidence cannot be removed from
a dispute after submission.

```ts
async submitEvidence(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubmitEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute for which you want to submit evidence. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubmitEvidenceResponse`](../../doc/models/submit-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';

try {
  const { result, ...httpResponse } = await disputesApi.submitEvidence(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

