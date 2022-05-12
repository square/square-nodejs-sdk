
# Bulk Upsert Customer Custom Attributes Request

Represents a [BulkUpsertCustomerCustomAttributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes) request.

## Structure

`BulkUpsertCustomerCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>`](../../doc/models/bulk-upsert-customer-custom-attributes-request-customer-custom-attribute-upsert-request.md) | Required | A map containing 1 to 25 individual upsert requests. For each request, provide an<br>arbitrary ID that is unique for this `BulkUpsertCustomerCustomAttributes` request and the<br>information needed to create or update a custom attribute. |

## Example (as JSON)

```json
{
  "values": {
    "id1": {
      "custom_attribute": {
        "key": "favoritemovie",
        "value": "Dune"
      },
      "customer_id": "N3NCVYY3WS27HF0HKANA3R9FP8"
    },
    "id2": {
      "custom_attribute": {
        "key": "ownsmovie",
        "value": false
      },
      "customer_id": "SY8EMWRNDN3TQDP2H4KS1QWMMM"
    },
    "id3": {
      "custom_attribute": {
        "key": "favoritemovie",
        "value": "Star Wars"
      },
      "customer_id": "SY8EMWRNDN3TQDP2H4KS1QWMMM"
    },
    "id4": {
      "custom_attribute": {
        "key": "square:a0f1505a-2aa1-490d-91a8-8d31ff181808",
        "value": "10.5"
      },
      "customer_id": "N3NCVYY3WS27HF0HKANA3R9FP8"
    },
    "id5": {
      "custom_attribute": {
        "key": "sq0ids-0evKIskIGaY45fCyNL66aw:backupemail",
        "value": "fake-email@squareup.com"
      },
      "customer_id": "70548QG1HN43B05G0KCZ4MMC1G"
    }
  }
}
```

