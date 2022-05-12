import { CustomAttribute } from '../../src/models/customAttribute';
import { CustomAttributeTestApi } from './customAttributeTestApi';
import { testClient } from '../testClient';

describe('CustomAttribute model', () => {
  let testApi: CustomAttributeTestApi;

  beforeAll(() => {
    testApi = new CustomAttributeTestApi(testClient);
  });

  describe('serializes', () => {
    function doTest(value: any) {
      let customAttribute: CustomAttribute = {
        key: 'test key',
        value: value,
      };
      let requestBody = testApi.createCustomAttributeRequest(
        customAttribute
      ) as { key: string; value: string }[];
      expect(requestBody[0].value).toEqual(
        JSON.stringify({
          key: 'test key',
          value: value,
        })
      );
    }

    it('string value', () => {
      doTest('hello world');
    });

    it('number value', () => {
      doTest('-12.345');
    });

    it('boolean value', () => {
      doTest(true);
    });

    it('phone number value', () => {
      doTest('+16175551212');
    });

    it('email value', () => {
      doTest('example@squareup.com');
    });

    it('date value', () => {
      doTest('2020-02-08');
    });

    it('datetime value', () => {
      doTest('2020-02-08T09:30:26.123');
    });

    it('duration value', () => {
      doTest('P3Y6M4DT12H30M5S');
    });

    it('address value', () => {
      doTest({
        first_name: 'Elmo',
        address_line_1: '123 Sesame St.',
        locality: 'San Francisco',
        administrative_district_level_1: 'CA',
        postal_code: '12345',
        country: 'US'
      });
    });

    it('selection value', () => {
      doTest(['a740bb60-1002-4a4f-8280-914eb351f53d', '5ce4be85-16e6-4038-92a8-b7e7aef1c752']);
    });
  });
});