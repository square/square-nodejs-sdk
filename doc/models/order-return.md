
# Order Return

The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order.

## Structure

`OrderReturn`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Optional | Unique ID that identifies the return only within this order. |
| `sourceOrderId` | `string` | Optional | Order which contains the original sale of these returned line items. This will be unset<br>for unlinked returns. |
| `returnLineItems` | [`OrderReturnLineItem[]`](/doc/models/order-return-line-item.md) | Optional | Collection of line items which are being returned. |
| `returnServiceCharges` | [`OrderReturnServiceCharge[]`](/doc/models/order-return-service-charge.md) | Optional | Collection of service charges which are being returned. |
| `returnTaxes` | [`OrderReturnTax[]`](/doc/models/order-return-tax.md) | Optional | Collection of references to taxes being returned for an order, including the total<br>applied tax amount to be returned. The taxes must reference a top-level tax ID from the source<br>order. |
| `returnDiscounts` | [`OrderReturnDiscount[]`](/doc/models/order-return-discount.md) | Optional | Collection of references to discounts being returned for an order, including the total<br>applied discount amount to be returned. The discounts must reference a top-level discount ID<br>from the source order. |
| `roundingAdjustment` | [`OrderRoundingAdjustment`](/doc/models/order-rounding-adjustment.md) | Optional | A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding<br>when the minimum unit of account is smaller than the lowest physical denomination of currency. |
| `returnAmounts` | [`OrderMoneyAmounts`](/doc/models/order-money-amounts.md) | Optional | A collection of various money amounts. |

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
        "precision": 73
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
        "precision": 74
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
        "precision": 75
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
      "percentage": "percentage1"
    },
    {
      "uid": "uid4",
      "source_service_charge_uid": "source_service_charge_uid2",
      "name": "name4",
      "catalog_object_id": "catalog_object_id2",
      "percentage": "percentage2"
    }
  ],
  "return_taxes": [
    {
      "uid": "uid6",
      "source_tax_uid": "source_tax_uid4",
      "catalog_object_id": "catalog_object_id0",
      "name": "name6",
      "type": "INCLUSIVE"
    }
  ]
}
```

