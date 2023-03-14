
# Catalog Object Batch

A batch of catalog objects.

## Structure

`CatalogObjectBatch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `objects` | [`CatalogObject[]`](../../doc/models/catalog-object.md) | Required | A list of CatalogObjects belonging to this batch. |

## Example (as JSON)

```json
{
  "objects": [
    {
      "type": "CUSTOM_ATTRIBUTE_DEFINITION",
      "id": "id8",
      "updated_at": null,
      "version": null,
      "is_deleted": null,
      "custom_attribute_values": null,
      "catalog_v1_ids": null,
      "present_at_all_locations": null,
      "present_at_location_ids": null,
      "absent_at_location_ids": null,
      "item_data": null,
      "category_data": null,
      "item_variation_data": null,
      "tax_data": null,
      "discount_data": null,
      "modifier_list_data": null,
      "modifier_data": null,
      "time_period_data": null,
      "product_set_data": null,
      "pricing_rule_data": null,
      "image_data": null,
      "measurement_unit_data": null,
      "subscription_plan_data": null,
      "item_option_data": null,
      "item_option_value_data": null,
      "custom_attribute_definition_data": null,
      "quick_amounts_settings_data": null
    },
    {
      "type": "ITEM_OPTION_VAL",
      "id": "id9",
      "updated_at": null,
      "version": null,
      "is_deleted": null,
      "custom_attribute_values": null,
      "catalog_v1_ids": null,
      "present_at_all_locations": null,
      "present_at_location_ids": null,
      "absent_at_location_ids": null,
      "item_data": null,
      "category_data": null,
      "item_variation_data": null,
      "tax_data": null,
      "discount_data": null,
      "modifier_list_data": null,
      "modifier_data": null,
      "time_period_data": null,
      "product_set_data": null,
      "pricing_rule_data": null,
      "image_data": null,
      "measurement_unit_data": null,
      "subscription_plan_data": null,
      "item_option_data": null,
      "item_option_value_data": null,
      "custom_attribute_definition_data": null,
      "quick_amounts_settings_data": null
    }
  ]
}
```

