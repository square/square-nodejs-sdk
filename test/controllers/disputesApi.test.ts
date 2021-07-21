import {DisputesApi, ApiResponse, ListDisputesResponse, CreateDisputeEvidenceTextRequest, CreatePaymentRequest, PaymentsApi, CreateDisputeEvidenceFileRequest, FileWrapper} from '../../src'
import { testClient } from '../testClient';
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs';

jest.setTimeout(1000 * 10); // Extends timeout by the milliseconds we wait in the before all hook
describe('Disputes API', () => {
  let disputeApi     : DisputesApi;
  let paymentsApi    : PaymentsApi
  let disputeId      : string
  let textEvidenceId : string

  beforeAll( async () => {
    disputeApi = testClient.disputesApi
    paymentsApi = testClient.paymentsApi

    let duplicatePayment: CreatePaymentRequest = {
      idempotencyKey: uuidv4(),
      autocomplete: true,
      sourceId: 'cnon:card-nonce-ok',
      amountMoney: {
        amount: BigInt(8803), // In sandbox  amount of 88.03 USD automatically generates a dispute with the reason DUPLICATE.
        currency: 'USD'
      }
    }

    await paymentsApi.createPayment(duplicatePayment)

    await new Promise((res) => {
      setTimeout(() =>{res(true)},5000)
    })
  })

  it('should testListDisputes', async () => {
    let { result, statusCode }: ApiResponse<ListDisputesResponse> = await disputeApi.listDisputes(undefined,'EVIDENCE_REQUIRED')
    expect(statusCode).toBe(200)
    expect(result).toEqual(expect.objectContaining({
      disputes : expect.arrayContaining([
        expect.objectContaining({
          reason: 'DUPLICATE',
          state: 'EVIDENCE_REQUIRED',
          cardBrand: 'VISA'
        })
      ])
    }))

    const firstDispute = result.disputes![0];
    disputeId = firstDispute.id! || firstDispute.disputeId!;
  })

  it('should  testRetrieveDispute', async () => {
    let {result, statusCode} = await disputeApi.retrieveDispute(disputeId)
    const localDisputeId = result.dispute?.id! || result.dispute?.disputeId!;
    expect(statusCode).toBe(200)
    expect(localDisputeId).toBe(disputeId);
  })

  it('should testCreateDisputeEvidenceText', async () => {

    const evidenceType = 'GENERIC_EVIDENCE'
    let body: CreateDisputeEvidenceTextRequest = {
      evidenceType,
      idempotencyKey: uuidv4(),
      evidenceText: 'Thi is not a duplicate',

    }
    let { result, statusCode } = await disputeApi.createDisputeEvidenceText(disputeId, body)
    expect(statusCode).toBe(200)

    const evidence = result.evidence;
    textEvidenceId = evidence?.evidenceId! || evidence?.id!;
  })

  it('should  testRetrieveDisputeEvidence', async () => {

    try {
      let { result, statusCode } = await disputeApi.retrieveDisputeEvidence(disputeId, textEvidenceId)
      expect(statusCode).toBe(200)
      expect(result).toEqual(expect.objectContaining({
        evidence: expect.objectContaining({
          id: textEvidenceId
        })
      }))
    } catch (error) {
      console.log(error)
    }
  })

  it('should  testListDisputeEvidence', async () => {
    let { statusCode }  = await disputeApi.listDisputeEvidence(disputeId)
    expect(statusCode).toBe(200)
  })

  it('should test DeleteDisputeEvidence', async () => {

    try {
      let { statusCode } = await disputeApi.deleteDisputeEvidence(disputeId, textEvidenceId)
      expect(statusCode).toBe(200)

    } catch (error) {
      console.log(error)
    }
  })

  it('should testCreateDisputeEvidenceFile', async () => {

    let body : CreateDisputeEvidenceFileRequest = {
      idempotencyKey: uuidv4(),
      evidenceType: 'GENERIC_EVIDENCE',
      contentType: 'image/jpeg'
    }

    let imageFile = new FileWrapper(
      fs.createReadStream('./test/resources/square.png'), {
      filename: 'Doggy'
    })

    let { result, statusCode } = await disputeApi.createDisputeEvidenceFile(disputeId, body, imageFile)
    expect(statusCode).toBe(201)
    expect(result.evidence?.disputeId!).toBe(disputeId);
  })

  it('should  testSubmitEvidence', async () => {

    try {
      let { statusCode } = await disputeApi.submitEvidence(disputeId)
      expect(statusCode).toBe(200)

    } catch (error) {
      console.log(error)
    }
  })

  it('should  testAcceptDispute', async () => {
    let { statusCode } = await disputeApi.acceptDispute(disputeId)
    expect(statusCode).toBe(200)
  })

})
