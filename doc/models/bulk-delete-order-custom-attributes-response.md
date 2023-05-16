
# Bulk Delete Order Custom Attributes Response

Represents a response from deleting one or more order custom attributes.

## Structure

`BulkDeleteOrderCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `values` | [`Record<string, DeleteOrderCustomAttributeResponse>`](../../doc/models/delete-order-custom-attribute-response.md) | Required | A map of responses that correspond to individual delete requests. Each response has the same ID<br>as the corresponding request and contains either a `custom_attribute` or an `errors` field. |

## Example (as JSON)

```json
{
  "values": {
    "cover-count": {
      "errors": [
        {
          "category": "API_ERROR",
          "code": "INVALID_FEES",
          "detail": "detail1",
          "field": "field9"
        }
      ]
    },
    "table-number": {
      "errors": [
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED",
          "detail": "detail2",
          "field": "field0"
        },
        {
          "category": "INVALID_REQUEST_ERROR",
          "code": "PAYMENT_LIMIT_EXCEEDED",
          "detail": "detail3",
          "field": "field1"
        }
      ]
    }
  },
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

