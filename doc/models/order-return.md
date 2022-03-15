
# Order Return

The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order.

## Structure

`OrderReturn`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | A unique ID that identifies the return only within this order.<br>**Constraints**: *Maximum Length*: `60` |
| `sourceOrderId` | `string \| undefined` | Optional | An order that contains the original sale of these return line items. This is unset<br>for unlinked returns. |
| `returnLineItems` | [`OrderReturnLineItem[] \| undefined`](../../doc/models/order-return-line-item.md) | Optional | A collection of line items that are being returned. |
| `returnServiceCharges` | [`OrderReturnServiceCharge[] \| undefined`](../../doc/models/order-return-service-charge.md) | Optional | A collection of service charges that are being returned. |
| `returnTaxes` | [`OrderReturnTax[] \| undefined`](../../doc/models/order-return-tax.md) | Optional | A collection of references to taxes being returned for an order, including the total<br>applied tax amount to be returned. The taxes must reference a top-level tax ID from the source<br>order. |
| `returnDiscounts` | [`OrderReturnDiscount[] \| undefined`](../../doc/models/order-return-discount.md) | Optional | A collection of references to discounts being returned for an order, including the total<br>applied discount amount to be returned. The discounts must reference a top-level discount ID<br>from the source order. |
| `roundingAdjustment` | [`OrderRoundingAdjustment \| undefined`](../../doc/models/order-rounding-adjustment.md) | Optional | A rounding adjustment of the money being returned. Commonly used to apply cash rounding<br>when the minimum unit of the account is smaller than the lowest physical denomination of the currency. |
| `returnAmounts` | [`OrderMoneyAmounts \| undefined`](../../doc/models/order-money-amounts.md) | Optional | A collection of various money amounts. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "source_order_id": "source_order_id2",
  "return_line_items": [
    {
      "uid": "uid5",
      "source_line_item_uid": "source_line_item_uid7",
      "name": "name5",
      "quantity": "quantity1",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name3",
            "abbreviation": "abbreviation5"
          },
          "area_unit": "METRIC_SQUARE_CENTIMETER",
          "length_unit": "IMPERIAL_MILE",
          "volume_unit": "IMPERIAL_CUBIC_FOOT",
          "weight_unit": "METRIC_KILOGRAM"
        },
        "precision": 73,
        "catalog_object_id": "catalog_object_id5",
        "catalog_version": 249
      },
      "note": "note9"
    },
    {
      "uid": "uid6",
      "source_line_item_uid": "source_line_item_uid6",
      "name": "name6",
      "quantity": "quantity2",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name4",
            "abbreviation": "abbreviation6"
          },
          "area_unit": "METRIC_SQUARE_METER",
          "length_unit": "IMPERIAL_YARD",
          "volume_unit": "IMPERIAL_CUBIC_YARD",
          "weight_unit": "METRIC_GRAM"
        },
        "precision": 74,
        "catalog_object_id": "catalog_object_id4",
        "catalog_version": 248
      },
      "note": "note8"
    },
    {
      "uid": "uid7",
      "source_line_item_uid": "source_line_item_uid5",
      "name": "name7",
      "quantity": "quantity3",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name5",
            "abbreviation": "abbreviation7"
          },
          "area_unit": "METRIC_SQUARE_KILOMETER",
          "length_unit": "IMPERIAL_FOOT",
          "volume_unit": "METRIC_MILLILITER",
          "weight_unit": "METRIC_MILLIGRAM"
        },
        "precision": 75,
        "catalog_object_id": "catalog_object_id3",
        "catalog_version": 247
      },
      "note": "note7"
    }
  ],
  "return_service_charges": [
    {
      "uid": "uid3",
      "source_service_charge_uid": "source_service_charge_uid3",
      "name": "name3",
      "catalog_object_id": "catalog_object_id3",
      "catalog_version": 197
    },
    {
      "uid": "uid4",
      "source_service_charge_uid": "source_service_charge_uid2",
      "name": "name4",
      "catalog_object_id": "catalog_object_id2",
      "catalog_version": 196
    }
  ],
  "return_taxes": [
    {
      "uid": "uid6",
      "source_tax_uid": "source_tax_uid4",
      "catalog_object_id": "catalog_object_id0",
      "catalog_version": 116,
      "name": "name6"
    }
  ]
}
```

