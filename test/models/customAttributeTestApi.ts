import { optional } from '../../src/schema';
import {
  CustomAttribute,
  customAttributeSchema,
} from '../../src/models/customAttribute';
import { BaseApi } from '../../src/api/baseApi';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from '../../src/models/customAttributeDefinition';

export class CustomAttributeTestApi extends BaseApi {
  createCustomAttributeDefinitionRequest(
    definition: CustomAttributeDefinition
  ): any {
    const req = this.createRequest(
      'POST',
      '/v2/test/custom-attribute-definitions'
    );
    const mapped = req.prepareArgs({
      request: [definition, optional(customAttributeDefinitionSchema)],
    });
    req.formData({
      request: JSON.stringify(mapped.request),
    });
    return req.toRequest().body?.content;
  }

  createCustomAttributeRequest(customAttribute: CustomAttribute): any {
    const req = this.createRequest('POST', '/v2/test/custom-attributes');
    const mapped = req.prepareArgs({
      request: [customAttribute, optional(customAttributeSchema)],
    });
    req.formData({
      request: JSON.stringify(mapped.request),
    });
    return req.toRequest().body?.content;
  }
}