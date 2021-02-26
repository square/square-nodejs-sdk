import { CreatePaymentRequest, Money, PaymentsApi, RefundsApi, RefundPaymentRequest, ApiResponse, RefundPaymentResponse } from '../../src';
import { testClient } from '../testClient';
import { v4 as uuidv4 } from 'uuid'

describe('Refunds API', () => {
  let refundApi   : RefundsApi
  let paymentsApi : PaymentsApi;
  let paymentId   : string;
  let refundId    : string

  beforeAll(async () => {
    refundApi =  testClient.refundsApi
    paymentsApi = testClient.paymentsApi;

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

    const { result : { payment } } = await paymentsApi.createPayment(body);
    paymentId = payment?.id!

  });

  it('should testListPaymentRefunds response', async () => {
    const result = await refundApi.listPaymentRefunds();
    expect(result.statusCode).toBe(200);
  });

  it('should testRefundPayment response', async () => {
    let body : RefundPaymentRequest = {
      idempotencyKey: uuidv4(),
      amountMoney: {
        amount: BigInt(200),
        currency: 'USD'
      },
      paymentId: paymentId,
    }
    const { result: { refund }, statusCode}: ApiResponse<RefundPaymentResponse> = await refundApi.refundPayment(body);
    expect(statusCode).toBe(200);
    expect(refund?.paymentId!).toBe(paymentId)

    refundId = refund?.id!
  });

  it('should testGetPaymentRefund response', async () => {
    const { result: { refund }, statusCode} = await refundApi.getPaymentRefund(refundId);
    expect(statusCode).toBe(200);
    expect(refund?.paymentId!).toBe(paymentId)
  });
});
