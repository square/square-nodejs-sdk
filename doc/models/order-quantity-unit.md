
# Order Quantity Unit

Contains the measurement unit for a quantity and a precision that
specifies the number of digits after the decimal point for decimal quantities.

## Structure

`OrderQuantityUnit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `measurementUnit` | [`MeasurementUnit \| undefined`](../../doc/models/measurement-unit.md) | Optional | Represents a unit of measurement to use with a quantity, such as ounces<br>or inches. Exactly one of the following fields are required: `custom_unit`,<br>`area_unit`, `length_unit`, `volume_unit`, and `weight_unit`. |
| `precision` | `number \| undefined` | Optional | For non-integer quantities, represents the number of digits after the decimal point that are<br>recorded for this quantity.<br><br>For example, a precision of 1 allows quantities such as `"1.0"` and `"1.1"`, but not `"1.01"`.<br><br>Min: 0. Max: 5. |
| `catalogObjectId` | `string \| undefined` | Optional | The catalog object ID referencing the<br>[CatalogMeasurementUnit](../../doc/models/catalog-measurement-unit.md).<br><br>This field is set when this is a catalog-backed measurement unit. |
| `catalogVersion` | `bigint \| undefined` | Optional | The version of the catalog object that this measurement unit references.<br><br>This field is set when this is a catalog-backed measurement unit. |

## Example (as JSON)

```json
{
  "measurement_unit": null,
  "precision": null,
  "catalog_object_id": null,
  "catalog_version": null
}
```

