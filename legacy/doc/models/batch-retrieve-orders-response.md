
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
                "name": "name2",
                "abbreviation": "abbreviation4"
              },
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
          "catalog_object_id": "catalog_object_id2"
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
              "area_unit": "IMPERIAL_ACRE",
              "length_unit": "IMPERIAL_INCH",
              "volume_unit": "METRIC_LITER",
              "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
            },
            "precision": 54,
            "catalog_object_id": "catalog_object_id0",
            "catalog_version": 12
          },
          "note": "note4",
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
        "name": "name4"
      },
      "customer_id": "customer_id0"
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

