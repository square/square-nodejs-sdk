import { CustomerSegmentsApi } from '../../src';
import { testClient } from '../testClient';

describe('CustomerSegments API', () => {
  let customerSegmentsApi: CustomerSegmentsApi;
  let customerSegmentId: string | null = null;

  beforeAll(async () => {
    customerSegmentsApi = testClient.customerSegmentsApi;
  });

  it('should testListCustomerSegments response', async () => {
    const { result, statusCode } = await customerSegmentsApi.listCustomerSegments();

    expect(statusCode).toBe(200);

    if (result.segments?.length) customerSegmentId = result.segments[0].id!
  });

  it('should testRetreiveCustomerSegment response', async () => {

    if (customerSegmentId) {
      let { statusCode } = await customerSegmentsApi.retrieveCustomerSegment(customerSegmentId)
      expect(statusCode).toBe(200);
    }

  });
});
