
# Search Orders Response

Either the `order_entries` or `orders` field is set, depending on whether
`return_entries` is set on the [SearchOrdersRequest](../../doc/api/orders.md#search-orders).

## Structure

`SearchOrdersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderEntries` | [`OrderEntry[] \| undefined`](../../doc/models/order-entry.md) | Optional | A list of [OrderEntries](entity:OrderEntry) that fit the query<br>conditions. The list is populated only if `return_entries` is set to `true` in the request. |
| `orders` | [`Order[] \| undefined`](../../doc/models/order.md) | Optional | A list of<br>[Order](entity:Order) objects that match the query conditions. The list is populated only if<br>`return_entries` is set to `false` in the request. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | [Errors](entity:Error) encountered during the search. |

## Example (as JSON)

```json
{
  "cursor": "123",
  "order_entries": [
    {
      "location_id": "057P5VYJ4A5X1",
      "order_id": "CAISEM82RcpmcFBM0TfOyiHV3es",
      "version": 1
    },
    {
      "location_id": "18YC4JDH91E1H",
      "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY",
      "version": 134
    },
    {
      "location_id": "057P5VYJ4A5X1",
      "order_id": "CAISEM52YcpmcWAzERDOyiWS3ty",
      "version": 135
    }
  ],
  "orders": [
    {
      "id": "id6",
      "location_id": "location_id0",
      "reference_id": "reference_id6",
      "source": {
        "name": "name8"
      },
      "customer_id": "customer_id4",
      "line_items": [
        {
          "uid": "uid3",
          "name": "name3",
          "quantity": "quantity9",
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
        }
      ]
    },
    {
      "id": "id7",
      "location_id": "location_id1",
      "reference_id": "reference_id5",
      "source": {
        "name": "name7"
      },
      "customer_id": "customer_id5",
      "line_items": [
        {
          "uid": "uid2",
          "name": "name2",
          "quantity": "quantity8",
          "quantity_unit": {
            "measurement_unit": {
              "custom_unit": {
                "name": "name0",
                "abbreviation": "abbreviation2"
              },
              "area_unit": "IMPERIAL_SQUARE_MILE",
              "length_unit": "METRIC_MILLIMETER",
              "volume_unit": "IMPERIAL_CUBIC_YARD",
              "weight_unit": "IMPERIAL_STONE"
            },
            "precision": 216,
            "catalog_object_id": "catalog_object_id8",
            "catalog_version": 106
          },
          "note": "note2",
          "catalog_object_id": "catalog_object_id4"
        },
        {
          "uid": "uid3",
          "name": "name3",
          "quantity": "quantity9",
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
          "uid": "uid4",
          "name": "name4",
          "quantity": "quantity0",
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
      ]
    }
  ],
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

