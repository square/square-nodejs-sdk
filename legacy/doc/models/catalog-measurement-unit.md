
# Catalog Measurement Unit

Represents the unit used to measure a `CatalogItemVariation` and
specifies the precision for decimal quantities.

## Structure

`CatalogMeasurementUnit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `measurementUnit` | [`MeasurementUnit \| undefined`](../../doc/models/measurement-unit.md) | Optional | Represents a unit of measurement to use with a quantity, such as ounces<br>or inches. Exactly one of the following fields are required: `custom_unit`,<br>`area_unit`, `length_unit`, `volume_unit`, and `weight_unit`. |
| `precision` | `number \| null \| undefined` | Optional | An integer between 0 and 5 that represents the maximum number of<br>positions allowed after the decimal in quantities measured with this unit.<br>For example:<br><br>- if the precision is 0, the quantity can be 1, 2, 3, etc.<br>- if the precision is 1, the quantity can be 0.1, 0.2, etc.<br>- if the precision is 2, the quantity can be 0.01, 0.12, etc.<br><br>Default: 3 |

## Example (as JSON)

```json
{
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
  "precision": 78
}
```

