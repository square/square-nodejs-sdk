
# Register Domain Request

Defines the parameters that can be included in the body of
a request to the [RegisterDomain](#endpoint-registerdomain) endpoint.

## Structure

`RegisterDomainRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `domainName` | `string` | A domain name as described in RFC-1034 that will be registered with ApplePay<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "domain_name": "example.com"
}
```

