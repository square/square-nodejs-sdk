# Disputes

```ts
const disputesApi = client.disputesApi;
```

## Class Name

`DisputesApi`

## Methods

* [List Disputes](/doc/api/disputes.md#list-disputes)
* [Retrieve Dispute](/doc/api/disputes.md#retrieve-dispute)
* [Accept Dispute](/doc/api/disputes.md#accept-dispute)
* [List Dispute Evidence](/doc/api/disputes.md#list-dispute-evidence)
* [Remove Dispute Evidence](/doc/api/disputes.md#remove-dispute-evidence)
* [Retrieve Dispute Evidence](/doc/api/disputes.md#retrieve-dispute-evidence)
* [Create Dispute Evidence File](/doc/api/disputes.md#create-dispute-evidence-file)
* [Create Dispute Evidence Text](/doc/api/disputes.md#create-dispute-evidence-text)
* [Submit Evidence](/doc/api/disputes.md#submit-evidence)


# List Disputes

Returns a list of disputes associated
with a particular account.

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
| `cursor` | `string` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br>For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination). |
| `states` | [`string`](/doc/models/dispute-state.md) | Query, Optional | The dispute states to filter the result.<br>If not specified, the endpoint<br>returns all open disputes (dispute status is not<br>`INQUIRY_CLOSED`, `WON`, or `LOST`). |
| `locationId` | `string` | Query, Optional | The ID of the location for which to return<br>a list of disputes. If not specified,<br>the endpoint returns all open disputes<br>(dispute status is not `INQUIRY_CLOSED`, `WON`, or<br>`LOST`) associated with all locations. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListDisputesResponse`](/doc/models/list-disputes-response.md)

## Example Usage

```ts
const cursor = 'cursor6';
const states = 'EVIDENCE_REQUIRED';
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await disputesApi.listDisputes(cursor, states, locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Dispute

Returns details of a specific dispute.

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
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveDisputeResponse`](/doc/models/retrieve-dispute-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
try {
  const { result, ...httpResponse } = await disputesApi.retrieveDispute(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Accept Dispute

Accepts loss on a dispute. Square returns
the disputed amount to the cardholder and updates the
dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square
account. If the Square account balance does not have
sufficient funds, Square debits the associated bank account.
For an overview of the Disputes API, see [Overview](https://developer.squareup.com/docs/docs/disputes-api/overview).

```ts
async acceptDispute(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AcceptDisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | ID of the dispute you want to accept. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`AcceptDisputeResponse`](/doc/models/accept-dispute-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
try {
  const { result, ...httpResponse } = await disputesApi.acceptDispute(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDisputeEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`ListDisputeEvidenceResponse`](/doc/models/list-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
try {
  const { result, ...httpResponse } = await disputesApi.listDisputeEvidence(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Remove Dispute Evidence

Removes specified evidence from a dispute.

Square does not send the bank any evidence that
is removed. Also, you cannot remove evidence after
submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/docs/reference/square/disputes-api/submit-evidence).

```ts
async removeDisputeEvidence(
  disputeId: string,
  evidenceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RemoveDisputeEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute you want to remove evidence from. |
| `evidenceId` | `string` | Template, Required | The ID of the evidence you want to remove. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RemoveDisputeEvidenceResponse`](/doc/models/remove-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
const evidenceId = 'evidence_id2';
try {
  const { result, ...httpResponse } = await disputesApi.removeDisputeEvidence(disputeId, evidenceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Dispute Evidence

Returns the specific evidence metadata associated with a specific dispute.

You must maintain a copy of the evidence you upload if you want to
reference it later. You cannot download the evidence
after you upload it.

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
| `disputeId` | `string` | Template, Required | The ID of the dispute that you want to retrieve evidence from. |
| `evidenceId` | `string` | Template, Required | The ID of the evidence to retrieve. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`RetrieveDisputeEvidenceResponse`](/doc/models/retrieve-dispute-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
const evidenceId = 'evidence_id2';
try {
  const { result, ...httpResponse } = await disputesApi.retrieveDisputeEvidence(disputeId, evidenceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Dispute Evidence File

Uploads a file to use as evidence in a dispute challenge. The endpoint accepts
HTTP multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG,
and TIFF formats.
For more information, see [Challenge a Dispute](https://developer.squareup.com/docs/docs/disputes-api/process-disputes#challenge-a-dispute).

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
| `disputeId` | `string` | Template, Required | ID of the dispute you want to upload evidence for. |
| `request` | [`CreateDisputeEvidenceFileRequest`](/doc/models/create-dispute-evidence-file-request.md) | Form, Optional | Defines parameters for a CreateDisputeEvidenceFile request. |
| `imageFile` | `FileWrapper` | Form, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateDisputeEvidenceFileResponse`](/doc/models/create-dispute-evidence-file-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
const request: CreateDisputeEvidenceFileRequest = {
  idempotencyKey: 'idempotency_key2',
};
request.evidenceType = 'REBUTTAL_EXPLANATION';
request.contentType = 'content_type0';

const imageFile = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await disputesApi.createDisputeEvidenceFile(disputeId, request, imageFile);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Dispute Evidence Text

Uploads text to use as evidence for a dispute challenge. For more information, see
[Challenge a Dispute](https://developer.squareup.com/docs/docs/disputes-api/process-disputes#challenge-a-dispute).

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
| `disputeId` | `string` | Template, Required | The ID of the dispute you want to upload evidence for. |
| `body` | [`CreateDisputeEvidenceTextRequest`](/doc/models/create-dispute-evidence-text-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`CreateDisputeEvidenceTextResponse`](/doc/models/create-dispute-evidence-text-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
const body: CreateDisputeEvidenceTextRequest = {
  idempotencyKey: 'ed3ee3933d946f1514d505d173c82648',
  evidenceText: '1Z8888888888888888',
};
body.evidenceType = 'TRACKING_NUMBER';

try {
  const { result, ...httpResponse } = await disputesApi.createDisputeEvidenceText(disputeId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Submit Evidence

Submits evidence to the cardholder's bank.

Before submitting evidence, Square compiles all available evidence. This includes
evidence uploaded using the
[CreateDisputeEvidenceFile](https://developer.squareup.com/docs/reference/square/disputes-api/create-dispute-evidence-file) and
[CreateDisputeEvidenceText](https://developer.squareup.com/docs/reference/square/disputes-api/create-dispute-evidence-text) endpoints,
and evidence automatically provided by Square, when
available. For more information, see
[Challenge a Dispute](https://developer.squareup.com/docs/docs/disputes-api/process-disputes#challenge-a-dispute).

```ts
async submitEvidence(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubmitEvidenceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The ID of the dispute you want to submit evidence for. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

## Response Type

[`SubmitEvidenceResponse`](/doc/models/submit-evidence-response.md)

## Example Usage

```ts
const disputeId = 'dispute_id2';
try {
  const { result, ...httpResponse } = await disputesApi.submitEvidence(disputeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

