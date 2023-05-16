
# Register Domain Response

Defines the fields that are included in the response body of
a request to the [RegisterDomain](../../doc/api/apple-pay.md#register-domain) endpoint.

Either `errors` or `status` are present in a given response (never both).

## Structure

`RegisterDomainResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `status` | [`string \| undefined`](../../doc/models/register-domain-response-status.md) | Optional | The status of the domain registration. |

## Example (as JSON)

```json
{
  "status": "VERIFIED",
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

