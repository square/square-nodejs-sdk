import { CreatePaymentRequest, Money, PaymentsApi, CancelPaymentByIdempotencyKeyRequest } from '../../src';
import { testClient } from '../testClient';
import { v4 as uuidv4 } from 'uuid'

describe('Payments API', () => {
  let paymentsApi: PaymentsApi;
  let paymentId: string;

  beforeAll(() => {
    paymentsApi = testClient.paymentsApi;
  });

  it('should testListPayments response', async () => {
    const result = await paymentsApi.listPayments();
    expect(result.statusCode).toBe(200);
  });

  it('should testCreatePayment response', async () => {
    const sourceId = 'cnon:card-nonce-ok';
    const money: Money = {
      amount: BigInt(200),
      currency: 'USD',
    };

    const body: CreatePaymentRequest = {
      sourceId: sourceId,
      idempotencyKey: uuidv4(),
      amountMoney: money,
      appFeeMoney: {
        amount: BigInt(10),
        currency: 'USD',
      },
      autocomplete: true,
    };

    const result = await paymentsApi.createPayment(body);
    expect(result.statusCode).toBe(200);
    expect(result.result.payment?.appFeeMoney?.currency).toBe(
      body.appFeeMoney?.currency
    );
    expect(result.result.payment?.appFeeMoney?.amount).toBe(
      body.appFeeMoney?.amount
    );
    expect(result.result.payment?.amountMoney?.currency).toBe(
      body.amountMoney?.currency
    );
    expect(result.result.payment?.amountMoney?.amount).toBe(
      body.amountMoney?.amount
    );
  });
  it('should testCreatePaymentDelayed response', async () => {
    const sourceId = 'cnon:card-nonce-ok';
    const money: Money = {
      amount: BigInt(200),
      currency: 'USD',
    };

    const body: CreatePaymentRequest = {
      sourceId: sourceId,
      idempotencyKey: uuidv4(),
      amountMoney: money,
      autocomplete: false,
      appFeeMoney: {
        amount: BigInt(10),
        currency: 'USD',
      },
    };

    const result = await paymentsApi.createPayment(body);
    expect(result.statusCode).toBe(200);

    paymentId = result.result.payment?.id!;
  });

  it('should testGetPayment response', async () => {
    const result = await paymentsApi.getPayment(paymentId);
    expect(result.statusCode).toBe(200);
    expect(result.result.payment?.id).toBe(paymentId);
  });

  it('should testCancelPaymentresponse', async () => {
    const result = await paymentsApi.cancelPayment(paymentId);
    expect(result.statusCode).toBe(200);
    expect(result.result.payment?.id).toBe(paymentId);
  });



  it('should testCreatePaymentDelayed response', async () => {
    const sourceId = 'cnon:card-nonce-ok';
    const money: Money = {
      amount: BigInt(200),
      currency: 'USD',
    };

    const idempotencyKey = uuidv4()
    const body: CreatePaymentRequest = {
      idempotencyKey,
      sourceId: sourceId,
      amountMoney: money,
      autocomplete: false,
      appFeeMoney: {
        amount: BigInt(10),
        currency: 'USD',
      },
    };

    const { statusCode: createStatusCode } = await paymentsApi.createPayment(body);
    expect(createStatusCode).toBe(200);

    let request : CancelPaymentByIdempotencyKeyRequest = {
      idempotencyKey
    }

    const { statusCode: cancelStatusCode } = await paymentsApi.cancelPaymentByIdempotencyKey(request);
    expect(cancelStatusCode).toBe(200);
  });

  it('should testCompletePayment response', async () => {
    const sourceId = 'cnon:card-nonce-ok';
    const money: Money = {
      amount: BigInt(200),
      currency: 'USD',
    };

    const body: CreatePaymentRequest = {
      idempotencyKey: uuidv4(),
      sourceId: sourceId,
      amountMoney: money,
      autocomplete: false,
      appFeeMoney: {
        amount: BigInt(10),
        currency: 'USD',
      },
    };

    const { result: { payment }, statusCode: createStatusCode } = await paymentsApi.createPayment(body);
    expect(createStatusCode).toBe(200);

    const { statusCode} = await paymentsApi.completePayment(payment?.id!, {});
    expect(statusCode).toBe(200);
  });
});
