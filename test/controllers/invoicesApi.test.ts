import { InvoicesApi,CustomersApi, LocationsApi, SearchInvoicesRequest, CreateInvoiceRequest, Invoice, OrdersApi, CreateOrderResponse, ApiResponse, SearchInvoicesResponse, CreateInvoiceResponse, InvoicePaymentRequest, DeleteInvoiceResponse, UpdateInvoiceRequest, UpdateInvoiceResponse, PublishInvoiceResponse, PublishInvoiceRequest, CreateCustomerRequest, Address, CancelInvoiceRequest } from '../../src';
import { testClient } from '../testClient'
import { v4 as uuidv4 } from 'uuid'

describe('Invoices API', () => {
  let invoicesApi  : InvoicesApi;
  let locationsApi : LocationsApi;
  let customersApi : CustomersApi;
  let ordersApi    :  OrdersApi;

  let locationId        : string;
  let newCustomerId     : string
  let newOrderId        : string;
  let newInvoiceId      : string;
  let paymentRequestUid : string;
  beforeAll(async () => {
    invoicesApi = testClient.invoicesApi;
    locationsApi = testClient.locationsApi;
    ordersApi = testClient.ordersApi;
    customersApi = testClient.customersApi;

    let { result } = await locationsApi.listLocations();
    locationId = (result.locations!)[0].id!;

    let createOrderResponse: ApiResponse<CreateOrderResponse> = await ordersApi.createOrder({
      idempotencyKey: uuidv4(),
      order: {
        locationId: locationId,
        lineItems: [
          {
            name: 'New Item',
            quantity: '1',
            basePriceMoney: {
              amount: BigInt(100),
              currency: 'USD'
            }
          }
        ]
      }
    });

    newOrderId = createOrderResponse.result?.order?.id!;

    const address: Address = {
      addressLine1: '500 Electric Ave',
      addressLine2: 'Suite 600',
      locality: 'New York',
      administrativeDistrictLevel1: 'NY',
      postalCode: '10003',
      country: 'US',
    };

    const body: CreateCustomerRequest = {
      givenName: 'Amelia',
      familyName: 'Earhart',
      phoneNumber: '1-212-555-4240',
      note: 'a customer',
      address: address,
    };
    let customerResponse = await customersApi.createCustomer(body);

    newCustomerId = customerResponse.result?.customer?.id!;
  })

  afterAll( async () => {
    await customersApi.deleteCustomer(newCustomerId);
  })

  it('should testListInvoices', async () => {
    let { statusCode } = await invoicesApi.listInvoices(locationId);

    expect(statusCode).toBe(200);
  })

  it('should testSearchInvoices', async () => {

    let body: SearchInvoicesRequest = {
      limit: 1,
      query: {
        filter: {
          locationIds: [locationId]
        }
      },
    }

    let { statusCode }: ApiResponse<SearchInvoicesResponse> = await invoicesApi.searchInvoices(body);
    expect(statusCode).toBe(200);
  })

  it('should testCreateInvoice', async () => {

    let paymentRequest: InvoicePaymentRequest = {
      requestType: 'BALANCE',
      dueDate: (new Date()).toISOString().slice(0, 10)
    }

    // Accepted Payment Methods are optional on the request, but all methods of payments are returned
    // in the response, therefore, we ensure that at least the payment methods we specified are returned 
    // accordingly in the response.
    const acceptedPaymentMethods = {
      card: true,
      bankAccount: true,
      squareGiftCard: false
    }

    let invoice: Invoice = {
      title: 'Brand New Invoice',
      description: 'A Blank Invoice',
      orderId: newOrderId,
      locationId: locationId,
      paymentRequests: [paymentRequest],
      invoiceNumber: createInvoiceNumber(),
      deliveryMethod: 'SHARE_MANUALLY',
      acceptedPaymentMethods: acceptedPaymentMethods,
      primaryRecipient:{
        customerId: newCustomerId
      }
    }

    let body: CreateInvoiceRequest = {
      invoice,
      idempotencyKey: uuidv4(),
    }

    let { result, statusCode }: ApiResponse<CreateInvoiceResponse> = await invoicesApi.createInvoice(body);
    expect(statusCode).toBe(200);
    expect(result.invoice).toEqual(expect.objectContaining({
      ...invoice,
      acceptedPaymentMethods: expect.objectContaining(acceptedPaymentMethods),
      paymentRequests: [expect.objectContaining(paymentRequest)],
      primaryRecipient: expect.objectContaining({
        customerId: newCustomerId
      })
    }))

    newInvoiceId = result.invoice?.id!;
    paymentRequestUid = (result.invoice?.paymentRequests!)[0].uid!
  })

  it('should testGetInvoice', async () => {

    let { statusCode }: ApiResponse<DeleteInvoiceResponse> = await invoicesApi.getInvoice(newInvoiceId);
    expect(statusCode).toBe(200)
  })

  it('should testUpdateInvoice', async () => {

    let paymentRequest: InvoicePaymentRequest = {
      requestMethod: 'SHARE_MANUALLY',
      requestType: 'BALANCE',
      dueDate: (new Date()).toISOString().slice(0, 10)
    }

    let invoice: Invoice = {
      version: 0,
      title: 'Updated Invoice',
      description: 'A Blank Invoice',
      orderId: newOrderId,
      locationId: locationId,
      acceptedPaymentMethods: {
        card: true,
        bankAccount: true,
        squareGiftCard: false,
      },
      paymentRequests: [paymentRequest]
    }

    let body: UpdateInvoiceRequest = {
      invoice,
      idempotencyKey: uuidv4(),
      fieldsToClear: [`payment_requests[${paymentRequestUid}]`]
    }

    let { statusCode }: ApiResponse<UpdateInvoiceResponse> = await invoicesApi.updateInvoice(newInvoiceId, body);
    expect(statusCode).toBe(200);
  })

  it('should testPublishInvoice', async () => {
    let body : PublishInvoiceRequest = {
      version: 1,
      idempotencyKey: uuidv4()
    }
    let { statusCode }: ApiResponse<PublishInvoiceResponse> = await invoicesApi.publishInvoice(newInvoiceId, body);
    expect(statusCode).toBe(200);
  })

  it('should testCancelInvoice', async () => {
    let body : CancelInvoiceRequest = {
      version: 2
    };
    let { statusCode }: ApiResponse<PublishInvoiceResponse> = await invoicesApi.cancelInvoice(newInvoiceId, body);
    expect(statusCode).toBe(200);
  })


  it('should testDeleteInvoice', async () => {

    try {

      let createOrderResponse: ApiResponse<CreateOrderResponse> = await ordersApi.createOrder({
        idempotencyKey: uuidv4(),
        order: {
          locationId: locationId,
          lineItems: [
            {
              name: 'New Item',
              quantity: '1',
              basePriceMoney: {
                amount: BigInt(100),
                currency: 'USD'
              }
            }
          ]
        }
      });

      expect(createOrderResponse.statusCode!).toBe(200);

      let paymentRequest: InvoicePaymentRequest = {
        requestMethod: 'SHARE_MANUALLY',
        requestType: 'BALANCE',
        dueDate: (new Date()).toISOString().slice(0, 10)
      }

      let invoice: Invoice = {
        title: 'Brand New Invoice',
        description: 'A Blank Invoice',
        locationId: locationId,
        paymentRequests: [paymentRequest],
        acceptedPaymentMethods: {
          card: true,
          bankAccount: true,
          squareGiftCard: false,
        },
        orderId: createOrderResponse.result?.order?.id!
      }

      let body: CreateInvoiceRequest = {
        invoice,
        idempotencyKey: uuidv4(),
      }

      let {result, statusCode }: ApiResponse<CreateInvoiceResponse> = await invoicesApi.createInvoice(body);
      expect(statusCode).toBe(200);

      let version: number = 0;
      let deleteResponse = await invoicesApi.deleteInvoice(result.invoice?.id!,version);
      expect(deleteResponse.statusCode).toBe(200);
    } catch (error) {
      console.log(error.result)
    }

  })
})


const createInvoiceNumber = () => {
  const MAX: number = 100000000
  const MIN: number = 10000000

  return String(Math.floor(Math.random() * (MAX - MIN) + MIN))
}
