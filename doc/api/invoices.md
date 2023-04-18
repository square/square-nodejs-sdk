# Invoices

```ts
const invoicesApi = client.invoicesApi;
```

## Class Name

`InvoicesApi`

## Methods

* [List Invoices](../../doc/api/invoices.md#list-invoices)
* [Create Invoice](../../doc/api/invoices.md#create-invoice)
* [Search Invoices](../../doc/api/invoices.md#search-invoices)
* [Delete Invoice](../../doc/api/invoices.md#delete-invoice)
* [Get Invoice](../../doc/api/invoices.md#get-invoice)
* [Update Invoice](../../doc/api/invoices.md#update-invoice)
* [Cancel Invoice](../../doc/api/invoices.md#cancel-invoice)
* [Publish Invoice](../../doc/api/invoices.md#publish-invoice)


# List Invoices

Returns a list of invoices for a given location. The response
is paginated. If truncated, the response includes a `cursor` that you  
use in a subsequent request to retrieve the next set of invoices.

```ts
async listInvoices(
  locationId: string,
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListInvoicesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` | Query, Required | The ID of the location for which to list invoices. |
| `cursor` | `string \| undefined` | Query, Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of invoices to return (200 is the maximum `limit`).<br>If not provided, the server uses a default limit of 100 invoices. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListInvoicesResponse`](../../doc/models/list-invoices-response.md)

## Example Usage

```ts
const locationId = 'location_id4';
try {
  const { result, ...httpResponse } = await invoicesApi.listInvoices(locationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Invoice

Creates a draft [invoice](../../doc/models/invoice.md)
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken.
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

```ts
async createInvoice(
  body: CreateInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateInvoiceRequest`](../../doc/models/create-invoice-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateInvoiceResponse`](../../doc/models/create-invoice-response.md)

## Example Usage

```ts
const contentType = null;
const bodyInvoicePrimaryRecipient: InvoiceRecipient = {};
bodyInvoicePrimaryRecipient.customerId = 'JDKYHBWT1D4F8MFH63DBMEN8Y4';

const bodyInvoicePaymentRequests: InvoicePaymentRequest[] = [];

const bodyInvoicepaymentRequests0Reminders: InvoicePaymentReminder[] = [];

const bodyInvoicepaymentRequests0reminders0: InvoicePaymentReminder = {};
bodyInvoicepaymentRequests0reminders0.relativeScheduledDays = -1;
bodyInvoicepaymentRequests0reminders0.message = 'Your invoice is due tomorrow';

bodyInvoicepaymentRequests0Reminders[0] = bodyInvoicepaymentRequests0reminders0;

const bodyInvoicepaymentRequests0: InvoicePaymentRequest = {};
bodyInvoicepaymentRequests0.requestType = 'BALANCE';
bodyInvoicepaymentRequests0.dueDate = '2030-01-24';
bodyInvoicepaymentRequests0.tippingEnabled = true;
bodyInvoicepaymentRequests0.automaticPaymentSource = 'NONE';
bodyInvoicepaymentRequests0.reminders = bodyInvoicepaymentRequests0Reminders;

bodyInvoicePaymentRequests[0] = bodyInvoicepaymentRequests0;

const bodyInvoiceAcceptedPaymentMethods: InvoiceAcceptedPaymentMethods = {};
bodyInvoiceAcceptedPaymentMethods.card = true;
bodyInvoiceAcceptedPaymentMethods.squareGiftCard = false;
bodyInvoiceAcceptedPaymentMethods.bankAccount = false;
bodyInvoiceAcceptedPaymentMethods.buyNowPayLater = false;

const bodyInvoiceCustomFields: InvoiceCustomField[] = [];

const bodyInvoicecustomFields0: InvoiceCustomField = {};
bodyInvoicecustomFields0.label = 'Event Reference Number';
bodyInvoicecustomFields0.value = 'Ref. #1234';
bodyInvoicecustomFields0.placement = 'ABOVE_LINE_ITEMS';

bodyInvoiceCustomFields[0] = bodyInvoicecustomFields0;

const bodyInvoicecustomFields1: InvoiceCustomField = {};
bodyInvoicecustomFields1.label = 'Terms of Service';
bodyInvoicecustomFields1.value = 'The terms of service are...';
bodyInvoicecustomFields1.placement = 'BELOW_LINE_ITEMS';

bodyInvoiceCustomFields[1] = bodyInvoicecustomFields1;

const bodyInvoice: Invoice = {};
bodyInvoice.locationId = 'ES0RJRZYEC39A';
bodyInvoice.orderId = 'CAISENgvlJ6jLWAzERDzjyHVybY';
bodyInvoice.primaryRecipient = bodyInvoicePrimaryRecipient;
bodyInvoice.paymentRequests = bodyInvoicePaymentRequests;
bodyInvoice.deliveryMethod = 'EMAIL';
bodyInvoice.invoiceNumber = 'inv-100';
bodyInvoice.title = 'Event Planning Services';
bodyInvoice.description = 'We appreciate your business!';
bodyInvoice.scheduledAt = '2030-01-13T10:00:00Z';
bodyInvoice.acceptedPaymentMethods = bodyInvoiceAcceptedPaymentMethods;
bodyInvoice.customFields = bodyInvoiceCustomFields;
bodyInvoice.saleOrServiceDate = '2030-01-24';
bodyInvoice.storePaymentMethodEnabled = false;

const body: CreateInvoiceRequest = {
  invoice: bodyInvoice,
};
body.idempotencyKey = 'ce3748f9-5fc1-4762-aa12-aae5e843f1f4';

try {
  const { result, ...httpResponse } = await invoicesApi.createInvoice(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Invoices

Searches for invoices from a location specified in
the filter. You can optionally specify customers in the filter for whom to
retrieve invoices. In the current implementation, you can only specify one location and
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor`
that you use in a subsequent request to retrieve the next set of invoices.

```ts
async searchInvoices(
  body: SearchInvoicesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchInvoicesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchInvoicesRequest`](../../doc/models/search-invoices-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchInvoicesResponse`](../../doc/models/search-invoices-response.md)

## Example Usage

```ts
const contentType = null;
const bodyQueryFilterLocationIds: string[] = ['ES0RJRZYEC39A'];
const bodyQueryFilterCustomerIds: string[] = ['JDKYHBWT1D4F8MFH63DBMEN8Y4'];
const bodyQueryFilter: InvoiceFilter = {
  locationIds: bodyQueryFilterLocationIds,
};
bodyQueryFilter.customerIds = bodyQueryFilterCustomerIds;

const bodyQuerySort: InvoiceSort = {
  field: 'INVOICE_SORT_DATE',
};
bodyQuerySort.order = 'DESC';

const bodyQuery: InvoiceQuery = {
  filter: bodyQueryFilter,
};
bodyQuery.sort = bodyQuerySort;

const body: SearchInvoicesRequest = {
  query: bodyQuery,
};

try {
  const { result, ...httpResponse } = await invoicesApi.searchInvoices(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Invoice

Deletes the specified invoice. When an invoice is deleted, the
associated order status changes to CANCELED. You can only delete a draft
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

```ts
async deleteInvoice(
  invoiceId: string,
  version?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The ID of the invoice to delete. |
| `version` | `number \| undefined` | Query, Optional | The version of the [invoice](entity:Invoice) to delete.<br>If you do not know the version, you can call [GetInvoice](api-endpoint:Invoices-GetInvoice) or<br>[ListInvoices](api-endpoint:Invoices-ListInvoices). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteInvoiceResponse`](../../doc/models/delete-invoice-response.md)

## Example Usage

```ts
const invoiceId = 'invoice_id0';
try {
  const { result, ...httpResponse } = await invoicesApi.deleteInvoice(invoiceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Invoice

Retrieves an invoice by invoice ID.

```ts
async getInvoice(
  invoiceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The ID of the invoice to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetInvoiceResponse`](../../doc/models/get-invoice-response.md)

## Example Usage

```ts
const invoiceId = 'invoice_id0';
try {
  const { result, ...httpResponse } = await invoicesApi.getInvoice(invoiceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Invoice

Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a sparse
`Invoice` object to add fields or change values and use the `fields_to_clear` field to specify fields to clear.
However, some restrictions apply. For example, you cannot change the `order_id` or `location_id` field and you
must provide the complete `custom_fields` list to update a custom field. Published invoices have additional restrictions.

```ts
async updateInvoice(
  invoiceId: string,
  body: UpdateInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The ID of the invoice to update. |
| `body` | [`UpdateInvoiceRequest`](../../doc/models/update-invoice-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateInvoiceResponse`](../../doc/models/update-invoice-response.md)

## Example Usage

```ts
const invoiceId = 'invoice_id0';
const contentType = null;
const bodyInvoicePaymentRequests: InvoicePaymentRequest[] = [];

const bodyInvoicepaymentRequests0: InvoicePaymentRequest = {};
bodyInvoicepaymentRequests0.uid = '2da7964f-f3d2-4f43-81e8-5aa220bf3355';
bodyInvoicepaymentRequests0.tippingEnabled = false;

bodyInvoicePaymentRequests[0] = bodyInvoicepaymentRequests0;

const bodyInvoice: Invoice = {};
bodyInvoice.version = 1;
bodyInvoice.paymentRequests = bodyInvoicePaymentRequests;

const bodyFieldsToClear: string[] = ['payments_requests[2da7964f-f3d2-4f43-81e8-5aa220bf3355].reminders'];
const body: UpdateInvoiceRequest = {
  invoice: bodyInvoice,
};
body.idempotencyKey = '4ee82288-0910-499e-ab4c-5d0071dad1be';
body.fieldsToClear = bodyFieldsToClear;

try {
  const { result, ...httpResponse } = await invoicesApi.updateInvoice(invoiceId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Invoice

Cancels an invoice. The seller cannot collect payments for
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

```ts
async cancelInvoice(
  invoiceId: string,
  body: CancelInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The ID of the [invoice](entity:Invoice) to cancel. |
| `body` | [`CancelInvoiceRequest`](../../doc/models/cancel-invoice-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelInvoiceResponse`](../../doc/models/cancel-invoice-response.md)

## Example Usage

```ts
const invoiceId = 'invoice_id0';
const contentType = null;
const body: CancelInvoiceRequest = {
  version: 0,
};

try {
  const { result, ...httpResponse } = await invoicesApi.cancelInvoice(invoiceId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Publish Invoice

Publishes the specified draft invoice.

After an invoice is published, Square
follows up based on the invoice configuration. For example, Square
sends the invoice to the customer's email address, charges the customer's card on file, or does
nothing. Square also makes the invoice available on a Square-hosted invoice page.

The invoice `status` also changes from `DRAFT` to a status
based on the invoice configuration. For example, the status changes to `UNPAID` if
Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the
invoice amount.

```ts
async publishInvoice(
  invoiceId: string,
  body: PublishInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The ID of the invoice to publish. |
| `body` | [`PublishInvoiceRequest`](../../doc/models/publish-invoice-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishInvoiceResponse`](../../doc/models/publish-invoice-response.md)

## Example Usage

```ts
const invoiceId = 'invoice_id0';
const contentType = null;
const body: PublishInvoiceRequest = {
  version: 1,
};
body.idempotencyKey = '32da42d0-1997-41b0-826b-f09464fc2c2e';

try {
  const { result, ...httpResponse } = await invoicesApi.publishInvoice(invoiceId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

