
# Batch Retrieve Orders Response

Defines the fields that are included in the response body of
a request to the `BatchRetrieveOrders` endpoint.

## Structure

`BatchRetrieveOrdersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orders` | [`Order[] \| undefined`](../../doc/models/order.md) | Optional | The requested orders. This will omit any requested orders that do not exist. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "orders": [
    {
      "id": "CAISEM82RcpmcFBM0TfOyiHV3es",
      "line_items": [
        {
          "base_price_money": {
            "amount": 1599,
            "currency": "USD"
          },
          "name": "Awesome product",
          "quantity": "1",
          "total_money": {
            "amount": 1599,
            "currency": "USD"
          },
          "uid": "945986d1-9586-11e6-ad5a-28cfe92138cf",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name1",
                "abbreviation": "abbreviation3"
              },
              "area_unit": "METRIC_SQUARE_CENTIMETER",
              "length_unit": "IMPERIAL_MILE",
              "volume_unit": "METRIC_MILLILITER",
              "weight_unit": "IMPERIAL_POUND"
            },
            "precision": 217,
            "catalog_object_id": "catalog_object_id7",
            "catalog_version": 105
          },
          "note": "note1",
          "catalog_object_id": "catalog_object_id3"
        },
        {
          "base_price_money": {
            "amount": 2000,
            "currency": "USD"
          },
          "name": "Another awesome product",
          "quantity": "3",
          "total_money": {
            "amount": 6000,
            "currency": "USD"
          },
          "uid": "a8f4168c-9586-11e6-bdf0-28cfe92138cf",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "METRIC_SQUARE_METER",
              "length_unit": "IMPERIAL_YARD",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 218,
            "catalog_object_id": "catalog_object_id6",
            "catalog_version": 104
          },
          "note": "note0",
          "catalog_object_id": "catalog_object_id2"
        }
      ],
      "location_id": "057P5VYJ4A5X1",
      "reference_id": "my-order-001",
      "total_money": {
        "amount": 7599,
        "currency": "USD"
      },
      "source": {
        "name": "name8"
      },
      "customer_id": "customer_id4"
    }
  ],
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

