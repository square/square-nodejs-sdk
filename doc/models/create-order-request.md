
# Create Order Request

## Structure

`CreateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `idempotencyKey` | `string \| undefined` | Optional | A value you specify that uniquely identifies this<br>order among orders you have created.<br><br>If you are unsure whether a particular order was created successfully,<br>you can try it again with the same idempotency key without<br>worrying about creating duplicate orders.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "idempotency_key": "8193148c-9586-11e6-99f9-28cfe92138cf",
  "order": {
    "discounts": [
      {
        "name": "Labor Day Sale",
        "percentage": "5",
        "scope": "ORDER",
        "uid": "labor-day-sale"
      },
      {
        "catalog_object_id": "DB7L55ZH2BGWI4H23ULIWOQ7",
        "scope": "ORDER",
        "uid": "membership-discount"
      },
      {
        "amount_money": {
          "amount": 100,
          "currency": "USD"
        },
        "name": "Sale - $1.00 off",
        "scope": "LINE_ITEM",
        "uid": "one-dollar-off"
      }
    ],
    "line_items": [
      {
        "base_price_money": {
          "amount": 1599,
          "currency": "USD"
        },
        "name": "New York Strip Steak",
        "quantity": "1",
        "uid": "uid1",
        "quantity_unit": {
          "measurement_unit": {
            "custom_unit": {
              "name": "name9",
              "abbreviation": "abbreviation1"
            },
            "area_unit": "METRIC_SQUARE_CENTIMETER",
            "length_unit": "IMPERIAL_MILE",
            "volume_unit": "GENERIC_FLUID_OUNCE",
            "weight_unit": "METRIC_KILOGRAM"
          },
          "precision": 201,
          "catalog_object_id": "catalog_object_id1",
          "catalog_version": 135
        },
        "note": "note3",
        "catalog_object_id": "catalog_object_id5"
      },
      {
        "applied_discounts": [
          {
            "discount_uid": "one-dollar-off"
          }
        ],
        "catalog_object_id": "BEMYCSMIJL46OCDV4KYIKXIB",
        "modifiers": [
          {
            "catalog_object_id": "CHQX7Y4KY6N5KINJKZCFURPZ"
          }
        ],
        "quantity": "2",
        "uid": "uid0",
        "name": "name0",
        "quantity_unit": {
          "measurement_unit": {
            "custom_unit": {
              "name": "name8",
              "abbreviation": "abbreviation0"
            },
            "area_unit": "IMPERIAL_SQUARE_MILE",
            "length_unit": "METRIC_MILLIMETER",
            "volume_unit": "METRIC_LITER",
            "weight_unit": "IMPERIAL_WEIGHT_OUNCE"
          },
          "precision": 200,
          "catalog_object_id": "catalog_object_id0",
          "catalog_version": 134
        },
        "note": "note4"
      }
    ],
    "location_id": "057P5VYJ4A5X1",
    "reference_id": "my-order-001",
    "taxes": [
      {
        "name": "State Sales Tax",
        "percentage": "9",
        "scope": "ORDER",
        "uid": "state-sales-tax"
      }
    ],
    "id": "id6",
    "source": {
      "name": "name2"
    },
    "customer_id": "customer_id4"
  }
}
```

