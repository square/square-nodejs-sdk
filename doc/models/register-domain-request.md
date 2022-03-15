
# Register Domain Request

Defines the parameters that can be included in the body of
a request to the [RegisterDomain](../../doc/api/apple-pay.md#register-domain) endpoint.

## Structure

`RegisterDomainRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainName` | `string` | Required | A domain name as described in RFC-1034 that will be registered with ApplePay.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "domain_name": "example.com"
}
```

