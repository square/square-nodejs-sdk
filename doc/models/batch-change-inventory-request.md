
# Batch Change Inventory Request

## Structure

`BatchChangeInventoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string` | Required | A client-supplied, universally unique identifier (UUID) for the<br>request.<br><br>See [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) in the<br>[API Development 101](https://developer.squareup.com/docs/buildbasics) section for more<br>information.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `changes` | [`InventoryChange[] \| null \| undefined`](../../doc/models/inventory-change.md) | Optional | The set of physical counts and inventory adjustments to be made.<br>Changes are applied based on the client-supplied timestamp and may be sent<br>out of order. |
| `ignoreUnchangedCounts` | `boolean \| null \| undefined` | Optional | Indicates whether the current physical count should be ignored if<br>the quantity is unchanged since the last physical count. Default: `true`. |

## Example (as JSON)

```json
{
  "changes": [
    {
      "physical_count": {
        "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
        "location_id": "C6W5YS5QM06F5",
        "occurred_at": "2016-11-16T22:25:24.878Z",
        "quantity": "53",
        "reference_id": "1536bfbf-efed-48bf-b17d-a197141b2a92",
        "state": "IN_STOCK",
        "team_member_id": "LRK57NSQ5X7PUD05",
        "id": "id2",
        "catalog_object_type": "catalog_object_type6"
      },
      "type": "PHYSICAL_COUNT",
      "adjustment": {
        "id": "id4",
        "reference_id": "reference_id2",
        "from_state": "IN_TRANSIT_TO",
        "to_state": "SOLD",
        "location_id": "location_id8"
      },
      "transfer": {
        "id": "id8",
        "reference_id": "reference_id6",
        "state": "RESERVED_FOR_SALE",
        "from_location_id": "from_location_id0",
        "to_location_id": "to_location_id0"
      },
      "measurement_unit": {
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
        "precision": 184
      }
    }
  ],
  "idempotency_key": "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
  "ignore_unchanged_counts": true
}
```

