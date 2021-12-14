import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  AcceptDisputeResponse,
  acceptDisputeResponseSchema,
} from '../models/acceptDisputeResponse';
import {
  CreateDisputeEvidenceFileRequest,
  createDisputeEvidenceFileRequestSchema,
} from '../models/createDisputeEvidenceFileRequest';
import {
  CreateDisputeEvidenceFileResponse,
  createDisputeEvidenceFileResponseSchema,
} from '../models/createDisputeEvidenceFileResponse';
import {
  CreateDisputeEvidenceTextRequest,
  createDisputeEvidenceTextRequestSchema,
} from '../models/createDisputeEvidenceTextRequest';
import {
  CreateDisputeEvidenceTextResponse,
  createDisputeEvidenceTextResponseSchema,
} from '../models/createDisputeEvidenceTextResponse';
import {
  DeleteDisputeEvidenceResponse,
  deleteDisputeEvidenceResponseSchema,
} from '../models/deleteDisputeEvidenceResponse';
import {
  ListDisputeEvidenceResponse,
  listDisputeEvidenceResponseSchema,
} from '../models/listDisputeEvidenceResponse';
import {
  ListDisputesResponse,
  listDisputesResponseSchema,
} from '../models/listDisputesResponse';
import {
  RetrieveDisputeEvidenceResponse,
  retrieveDisputeEvidenceResponseSchema,
} from '../models/retrieveDisputeEvidenceResponse';
import {
  RetrieveDisputeResponse,
  retrieveDisputeResponseSchema,
} from '../models/retrieveDisputeResponse';
import {
  SubmitEvidenceResponse,
  submitEvidenceResponseSchema,
} from '../models/submitEvidenceResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class DisputesApi extends BaseApi {
  /**
   * Returns a list of disputes associated with a particular account.
   *
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query. For more
   *                              information, see [Pagination](https://developer.squareup.
   *                              com/docs/basics/api101/pagination).
   * @param states      The dispute states to filter the result. If not specified, the endpoint returns all
   *                              open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`).
   * @param locationId  The ID of the location for which to return a list of disputes. If not specified, the
   *                              endpoint returns all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`,
   *                              or `LOST`) associated with all locations.
   * @return Response from the API call
   */
  async listDisputes(
    cursor?: string,
    states?: string,
    locationId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListDisputesResponse>> {
    const req = this.createRequest('GET', '/v2/disputes');
    const mapped = req.prepareArgs({
      cursor: [cursor, optional(string())],
      states: [states, optional(string())],
      locationId: [locationId, optional(string())],
    });
    req.query('cursor', mapped.cursor);
    req.query('states', mapped.states);
    req.query('location_id', mapped.locationId);
    return req.callAsJson(listDisputesResponseSchema, requestOptions);
  }

  /**
   * Returns details about a specific dispute.
   *
   * @param disputeId  The ID of the dispute you want more details about.
   * @return Response from the API call
   */
  async retrieveDispute(
    disputeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveDisputeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ disputeId: [disputeId, string()] });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}`;
    return req.callAsJson(retrieveDisputeResponseSchema, requestOptions);
  }

  /**
   * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
   * updates the dispute state to ACCEPTED.
   *
   * Square debits the disputed amount from the seller’s Square account. If the Square account
   * does not have sufficient funds, Square debits the associated bank account.
   *
   * @param disputeId  The ID of the dispute you want to accept.
   * @return Response from the API call
   */
  async acceptDispute(
    disputeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AcceptDisputeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ disputeId: [disputeId, string()] });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/accept`;
    return req.callAsJson(acceptDisputeResponseSchema, requestOptions);
  }

  /**
   * Returns a list of evidence associated with a dispute.
   *
   * @param disputeId  The ID of the dispute.
   * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
   *                             to retrieve the next set of results for the original query. For more information, see
   *                             [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
   * @return Response from the API call
   */
  async listDisputeEvidence(
    disputeId: string,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListDisputeEvidenceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      disputeId: [disputeId, string()],
      cursor: [cursor, optional(string())],
    });
    req.query('cursor', mapped.cursor);
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/evidence`;
    return req.callAsJson(listDisputeEvidenceResponseSchema, requestOptions);
  }

  /**
   * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
   * multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
   *
   * @param disputeId  The ID of the dispute you want to upload evidence
   *                                                              for.
   * @param request    Defines the parameters for a
   *                                                              `CreateDisputeEvidenceFile` request.
   * @param imageFile
   * @return Response from the API call
   */
  async createDisputeEvidenceFile(
    disputeId: string,
    request?: CreateDisputeEvidenceFileRequest,
    imageFile?: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateDisputeEvidenceFileResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      disputeId: [disputeId, string()],
      request: [request, optional(createDisputeEvidenceFileRequestSchema)],
    });
    req.formData({
      request: JSON.stringify(mapped.request),
      image_file: imageFile,
    });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/evidence-files`;
    return req.callAsJson(
      createDisputeEvidenceFileResponseSchema,
      requestOptions
    );
  }

  /**
   * Uploads text to use as evidence for a dispute challenge.
   *
   * @param disputeId    The ID of the dispute you want to upload evidence
   *                                                                for.
   * @param body         An object containing the fields to POST for the
   *                                                                request.  See the corresponding object definition
   *                                                                for field details.
   * @return Response from the API call
   */
  async createDisputeEvidenceText(
    disputeId: string,
    body: CreateDisputeEvidenceTextRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateDisputeEvidenceTextResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      disputeId: [disputeId, string()],
      body: [body, createDisputeEvidenceTextRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/evidence-text`;
    return req.callAsJson(
      createDisputeEvidenceTextResponseSchema,
      requestOptions
    );
  }

  /**
   * Removes specified evidence from a dispute.
   *
   * Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
   * submitting it to the bank using [SubmitEvidence]($e/Disputes/SubmitEvidence).
   *
   * @param disputeId   The ID of the dispute you want to remove evidence from.
   * @param evidenceId  The ID of the evidence you want to remove.
   * @return Response from the API call
   */
  async deleteDisputeEvidence(
    disputeId: string,
    evidenceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteDisputeEvidenceResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      disputeId: [disputeId, string()],
      evidenceId: [evidenceId, string()],
    });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/evidence/${mapped.evidenceId}`;
    return req.callAsJson(deleteDisputeEvidenceResponseSchema, requestOptions);
  }

  /**
   * Returns the evidence metadata specified by the evidence ID in the request URL path
   *
   * You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
   * download the evidence after you upload it.
   *
   * @param disputeId   The ID of the dispute that you want to retrieve evidence from.
   * @param evidenceId  The ID of the evidence to retrieve.
   * @return Response from the API call
   */
  async retrieveDisputeEvidence(
    disputeId: string,
    evidenceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveDisputeEvidenceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      disputeId: [disputeId, string()],
      evidenceId: [evidenceId, string()],
    });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/evidence/${mapped.evidenceId}`;
    return req.callAsJson(
      retrieveDisputeEvidenceResponseSchema,
      requestOptions
    );
  }

  /**
   * Submits evidence to the cardholder's bank.
   *
   * Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
   * using the [CreateDisputeEvidenceFile]($e/Disputes/CreateDisputeEvidenceFile) and
   * [CreateDisputeEvidenceText]($e/Disputes/CreateDisputeEvidenceText) endpoints and
   * evidence automatically provided by Square, when available.
   *
   * @param disputeId  The ID of the dispute that you want to submit evidence for.
   * @return Response from the API call
   */
  async submitEvidence(
    disputeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubmitEvidenceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ disputeId: [disputeId, string()] });
    req.appendTemplatePath`/v2/disputes/${mapped.disputeId}/submit-evidence`;
    return req.callAsJson(submitEvidenceResponseSchema, requestOptions);
  }
}
