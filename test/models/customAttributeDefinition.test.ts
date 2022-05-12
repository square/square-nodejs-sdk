import { CustomAttributeDefinition } from '../../src/models/customAttributeDefinition';
import { CustomAttributeTestApi } from './customAttributeTestApi';
import { testClient } from '../testClient';

describe('CustomAttributeDefinition model', () => {
  let testApi: CustomAttributeTestApi;

  beforeAll(() => {
    testApi = new CustomAttributeTestApi(testClient);
  });

  describe('serializes', () => {
    it('string definition', () => {
      let definition: CustomAttributeDefinition = {
        key: 'test key',
        schema: {
          $ref:
            'https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String',
        },
        name: 'Test Custom Attribute',
        description: 'this is a test',
        visibility: 'VISIBILITY_READ_WRITE_VALUES',
      };
      let requestBody = testApi.createCustomAttributeDefinitionRequest(
        definition
      ) as { key: string; value: string }[];
      expect(requestBody[0].value).toEqual(
        JSON.stringify({
          key: 'test key',
          schema: {
            $ref:
              'https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String',
          },
          name: 'Test Custom Attribute',
          description: 'this is a test',
          visibility: 'VISIBILITY_READ_WRITE_VALUES',
        })
      );
    });

    it('selection definition', () => {
      let definition: CustomAttributeDefinition = {
        key: 'test key',
        schema: {
          $schema:
            'https://developer-production-s.squarecdn.com/meta-schemas/v1/selection.json',
          maxItems: 2,
          uniqueItems: true,
          type: 'array',
          items: {
            names: ['Red', 'Yellow', 'Blue'],
          },
        },
        name: 'Test Custom Attribute',
        description: 'this is a test',
        visibility: 'VISIBILITY_READ_WRITE_VALUES',
      };
      let requestBody = testApi.createCustomAttributeDefinitionRequest(
        definition
      ) as { key: string; value: string }[];
      expect(requestBody[0].value).toEqual(
        JSON.stringify({
          key: 'test key',
          schema: {
            $schema:
              'https://developer-production-s.squarecdn.com/meta-schemas/v1/selection.json',
            maxItems: 2,
            uniqueItems: true,
            type: 'array',
            items: {
              names: ['Red', 'Yellow', 'Blue'],
            },
          },
          name: 'Test Custom Attribute',
          description: 'this is a test',
          visibility: 'VISIBILITY_READ_WRITE_VALUES',
        })
      );
    });
  });
});