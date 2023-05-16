
# Update Order Request

Defines the fields that are included in requests to the
[UpdateOrder](../../doc/api/orders.md#update-order) endpoint.

## Structure

`UpdateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Optional | Contains all information related to a single order to process with Square,<br>including line items that specify the products to purchase. `Order` objects also<br>include information about any associated tenders, refunds, and returns.<br><br>All Connect V2 Transactions have all been converted to Orders including all associated<br>itemization data. |
| `fieldsToClear` | `string[] \| undefined` | Optional | The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)<br>fields to clear. For example, `line_items[uid].note`.<br>For more information, see [Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#deleting-fields). |
| `idempotencyKey` | `string \| undefined` | Optional | A value you specify that uniquely identifies this update request.<br><br>If you are unsure whether a particular update was applied to an order successfully,<br>you can reattempt it with the same idempotency key without<br>worrying about creating duplicate updates to the order.<br>The latest order version is returned.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).<br>**Constraints**: *Maximum Length*: `192` |

## Example (as JSON)

```json
{
  "order": {
    "id": "id6",
    "location_id": "location_id0",
    "reference_id": "reference_id4",
    "source": {
      "name": "name2"
    },
    "customer_id": "customer_id4",
    "line_items": [
      {
        "uid": "uid1",
        "name": "name1",
        "quantity": "quantity7",
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
      }
    ]
  },
  "fields_to_clear": [
    "fields_to_clear1"
  ],
  "idempotency_key": "idempotency_key6"
}
```

