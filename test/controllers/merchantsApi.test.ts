import { MerchantsApi } from '../../src';
import { testClient } from '../testClient';

describe('Merchants API', () => {
  let merchantsApi: MerchantsApi;
  let merchantId: string;

  beforeAll(() => {
    merchantsApi = testClient.merchantsApi;
  });

  it('should testListMerchants response', async () => {
    const {result, statusCode} = await merchantsApi.listMerchants();
    expect(statusCode).toBe(200);

    merchantId = (result.merchant!)[0].id!;
  });

  it('should testRetrieveMerchant response', async () => {
    const response = await merchantsApi.retrieveMerchant(merchantId);
    expect(response.statusCode).toBe(200);
  });
});
