import { ApiResponse, RequestOptions } from '../core';
import {
  CancelInvoiceRequest,
  cancelInvoiceRequestSchema,
} from '../models/cancelInvoiceRequest';
import {
  CancelInvoiceResponse,
  cancelInvoiceResponseSchema,
} from '../models/cancelInvoiceResponse';
import {
  CreateInvoiceRequest,
  createInvoiceRequestSchema,
} from '../models/createInvoiceRequest';
import {
  CreateInvoiceResponse,
  createInvoiceResponseSchema,
} from '../models/createInvoiceResponse';
import {
  DeleteInvoiceResponse,
  deleteInvoiceResponseSchema,
} from '../models/deleteInvoiceResponse';
import {
  GetInvoiceResponse,
  getInvoiceResponseSchema,
} from '../models/getInvoiceResponse';
import {
  ListInvoicesResponse,
  listInvoicesResponseSchema,
} from '../models/listInvoicesResponse';
import {
  PublishInvoiceRequest,
  publishInvoiceRequestSchema,
} from '../models/publishInvoiceRequest';
import {
  PublishInvoiceResponse,
  publishInvoiceResponseSchema,
} from '../models/publishInvoiceResponse';
import {
  SearchInvoicesRequest,
  searchInvoicesRequestSchema,
} from '../models/searchInvoicesRequest';
import {
  SearchInvoicesResponse,
  searchInvoicesResponseSchema,
} from '../models/searchInvoicesResponse';
import {
  UpdateInvoiceRequest,
  updateInvoiceRequestSchema,
} from '../models/updateInvoiceRequest';
import {
  UpdateInvoiceResponse,
  updateInvoiceResponseSchema,
} from '../models/updateInvoiceResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class InvoicesApi extends BaseApi {
  /**
   * Returns a list of invoices for a given location. The response
   * is paginated. If truncated, the response includes a `cursor` that you
   * use in a subsequent request to retrieve the next set of invoices.
   *
   * @param locationId  The ID of the location for which to list invoices.
   * @param cursor      A pagination cursor returned by a previous call to this endpoint.  Provide this
   *                              cursor to retrieve the next set of results for your original query.  For more
   *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
   *                              api-patterns/pagination).
   * @param limit       The maximum number of invoices to return (200 is the maximum `limit`).  If not
   *                              provided, the server uses a default limit of 100 invoices.
   * @return Response from the API call
   */
  async listInvoices(
    locationId: string,
    cursor?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListInvoicesResponse>> {
    const req = this.createRequest('GET', '/v2/invoices');
    const mapped = req.prepareArgs({
      locationId: [locationId, string()],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('location_id', mapped.locationId);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    return req.callAsJson(listInvoicesResponseSchema, requestOptions);
  }

  /**
   * Creates a draft [invoice]($m/Invoice)
   * for an order created using the Orders API.
   *
   * A draft invoice remains in your account and no action is taken.
   * You must publish the invoice before Square can process it (send it to the customer's email address
   * or charge the customer’s card on file).
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createInvoice(
    body: CreateInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateInvoiceResponse>> {
    const req = this.createRequest('POST', '/v2/invoices');
    const mapped = req.prepareArgs({
      body: [body, createInvoiceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createInvoiceResponseSchema, requestOptions);
  }

  /**
   * Searches for invoices from a location specified in
   * the filter. You can optionally specify customers in the filter for whom to
   * retrieve invoices. In the current implementation, you can only specify one location and
   * optionally one customer.
   *
   * The response is paginated. If truncated, the response includes a `cursor`
   * that you use in a subsequent request to retrieve the next set of invoices.
   *
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchInvoices(
    body: SearchInvoicesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchInvoicesResponse>> {
    const req = this.createRequest('POST', '/v2/invoices/search');
    const mapped = req.prepareArgs({
      body: [body, searchInvoicesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchInvoicesResponseSchema, requestOptions);
  }

  /**
   * Deletes the specified invoice. When an invoice is deleted, the
   * associated order status changes to CANCELED. You can only delete a draft
   * invoice (you cannot delete a published invoice, including one that is scheduled for processing).
   *
   * @param invoiceId  The ID of the invoice to delete.
   * @param version    The version of the [invoice](entity:Invoice) to delete. If you do not know the
   *                             version, you can call [GetInvoice](api-endpoint:Invoices-GetInvoice) or
   *                             [ListInvoices](api-endpoint:Invoices-ListInvoices).
   * @return Response from the API call
   */
  async deleteInvoice(
    invoiceId: string,
    version?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteInvoiceResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      version: [version, optional(number())],
    });
    req.query('version', mapped.version);
    req.appendTemplatePath`/v2/invoices/${mapped.invoiceId}`;
    return req.callAsJson(deleteInvoiceResponseSchema, requestOptions);
  }

  /**
   * Retrieves an invoice by invoice ID.
   *
   * @param invoiceId  The ID of the invoice to retrieve.
   * @return Response from the API call
   */
  async getInvoice(
    invoiceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ invoiceId: [invoiceId, string()] });
    req.appendTemplatePath`/v2/invoices/${mapped.invoiceId}`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a
   * sparse
   * `Invoice` object to add fields or change values and use the `fields_to_clear` field to specify
   * fields to clear.
   * However, some restrictions apply. For example, you cannot change the `order_id` or `location_id`
   * field and you
   * must provide the complete `custom_fields` list to update a custom field. Published invoices have
   * additional restrictions.
   *
   * @param invoiceId    The ID of the invoice to update.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateInvoice(
    invoiceId: string,
    body: UpdateInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateInvoiceResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      body: [body, updateInvoiceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/invoices/${mapped.invoiceId}`;
    return req.callAsJson(updateInvoiceResponseSchema, requestOptions);
  }

  /**
   * Cancels an invoice. The seller cannot collect payments for
   * the canceled invoice.
   *
   * You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`,
   * `CANCELED`, or `FAILED`.
   *
   * @param invoiceId    The ID of the [invoice](entity:Invoice) to cancel.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  async cancelInvoice(
    invoiceId: string,
    body: CancelInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelInvoiceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      body: [body, cancelInvoiceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/invoices/${mapped.invoiceId}/cancel`;
    return req.callAsJson(cancelInvoiceResponseSchema, requestOptions);
  }

  /**
   * Publishes the specified draft invoice.
   *
   * After an invoice is published, Square
   * follows up based on the invoice configuration. For example, Square
   * sends the invoice to the customer's email address, charges the customer's card on file, or does
   * nothing. Square also makes the invoice available on a Square-hosted invoice page.
   *
   * The invoice `status` also changes from `DRAFT` to a status
   * based on the invoice configuration. For example, the status changes to `UNPAID` if
   * Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the
   * invoice amount.
   *
   * @param invoiceId    The ID of the invoice to publish.
   * @param body         An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  async publishInvoice(
    invoiceId: string,
    body: PublishInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublishInvoiceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      body: [body, publishInvoiceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/invoices/${mapped.invoiceId}/publish`;
    return req.callAsJson(publishInvoiceResponseSchema, requestOptions);
  }
}
