import { object, Schema, string } from '../schema';

/**
 * Defines the parameters that can be included in the body of
 * a request to the [RegisterDomain]($e/ApplePay/RegisterDomain) endpoint.
 */
export interface RegisterDomainRequest {
  /** A domain name as described in RFC-1034 that will be registered with ApplePay. */
  domainName: string;
}

export const registerDomainRequestSchema: Schema<RegisterDomainRequest> = object(
  { domainName: ['domain_name', string()] }
);
