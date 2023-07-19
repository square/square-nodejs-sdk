
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
          "category": "REFUND_ERROR",
          "code": "INVALID_ENUM_VALUE",
          "detail": "detail1",
          "field": "field9"
        }
      ]
    },
    "table-number": {
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_CONTENT_TYPE",
          "detail": "detail2",
          "field": "field0"
        },
        {
          "category": "EXTERNAL_VENDOR_ERROR",
          "code": "INVALID_FORM_VALUE",
          "detail": "detail3",
          "field": "field1"
        }
      ]
    }
  },
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

