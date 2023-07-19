
# Bulk Upsert Order Custom Attributes Response

Represents a response from a bulk upsert of order custom attributes.

## Structure

`BulkUpsertOrderCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `values` | [`Record<string, UpsertOrderCustomAttributeResponse>`](../../doc/models/upsert-order-custom-attribute-response.md) | Required | A map of responses that correspond to individual upsert operations for custom attributes. |

## Example (as JSON)

```json
{
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
  ],
  "values": {
    "key0": {
      "custom_attribute": {
        "key": "key8",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 82,
        "visibility": "VISIBILITY_READ_WRITE_VALUES",
        "definition": {
          "key": "key8",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name8",
          "description": "description8",
          "visibility": "VISIBILITY_HIDDEN"
        }
      },
      "errors": [
        {
          "category": "REFUND_ERROR",
          "code": "INVALID_ENUM_VALUE",
          "detail": "detail1",
          "field": "field9"
        }
      ]
    },
    "key1": {
      "custom_attribute": {
        "key": "key9",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 83,
        "visibility": "VISIBILITY_READ_ONLY",
        "definition": {
          "key": "key9",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name9",
          "description": "description9",
          "visibility": "VISIBILITY_READ_ONLY"
        }
      },
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
    },
    "key2": {
      "custom_attribute": {
        "key": "key0",
        "value": {
          "key1": "val1",
          "key2": "val2"
        },
        "version": 84,
        "visibility": "VISIBILITY_HIDDEN",
        "definition": {
          "key": "key0",
          "schema": {
            "key1": "val1",
            "key2": "val2"
          },
          "name": "name0",
          "description": "description0",
          "visibility": "VISIBILITY_READ_WRITE_VALUES"
        }
      },
      "errors": [
        {
          "category": "EXTERNAL_VENDOR_ERROR",
          "code": "INVALID_FORM_VALUE",
          "detail": "detail3",
          "field": "field1"
        },
        {
          "category": "API_ERROR",
          "code": "CUSTOMER_NOT_FOUND",
          "detail": "detail4",
          "field": "field2"
        },
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "ONE_INSTRUMENT_EXPECTED",
          "detail": "detail5",
          "field": "field3"
        }
      ]
    }
  }
}
```

