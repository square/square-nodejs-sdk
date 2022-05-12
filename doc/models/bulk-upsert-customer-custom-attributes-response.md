
# Bulk Upsert Customer Custom Attributes Response

Represents a [BulkUpsertCustomerCustomAttributes](../../doc/api/customer-custom-attributes.md#bulk-upsert-customer-custom-attributes) response,
which contains a map of responses that each corresponds to an individual upsert request.

## Structure

`BulkUpsertCustomerCustomAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `values` | [`Record<string, BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse> \| undefined`](../../doc/models/bulk-upsert-customer-custom-attributes-response-customer-custom-attribute-upsert-response.md) | Optional | A map of responses that correspond to individual upsert requests. Each response has the<br>same ID as the corresponding request and contains either a `customer_id` and `custom_attribute` or an `errors` field. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "values": {
    "id1": {
      "custom_attribute": {
        "created_at": "2021-12-08T23:14:47Z",
        "key": "favoritemovie",
        "updated_at": "2021-12-09T00:16:23Z",
        "value": "Dune",
        "version": 1,
        "visibility": "VISIBILITY_READ_WRITE_VALUES"
      },
      "customer_id": "N3NCVYY3WS27HF0HKANA3R9FP8"
    },
    "id2": {
      "custom_attribute": {
        "created_at": "2021-12-09T00:16:20Z",
        "key": "ownsmovie",
        "updated_at": "2021-12-09T00:16:23Z",
        "value": false,
        "version": 2,
        "visibility": "VISIBILITY_READ_WRITE_VALUES"
      },
      "customer_id": "SY8EMWRNDN3TQDP2H4KS1QWMMM"
    },
    "id3": {
      "custom_attribute": {
        "created_at": "2021-12-09T00:16:20Z",
        "key": "favoritemovie",
        "updated_at": "2021-12-09T00:16:23Z",
        "value": "Star Wars",
        "version": 2,
        "visibility": "VISIBILITY_READ_WRITE_VALUES"
      },
      "customer_id": "SY8EMWRNDN3TQDP2H4KS1QWMMM"
    },
    "id4": {
      "custom_attribute": {
        "created_at": "2021-12-08T23:14:47Z",
        "key": "square:a0f1505a-2aa1-490d-91a8-8d31ff181808",
        "updated_at": "2021-12-09T00:16:23Z",
        "value": "10.5",
        "version": 1,
        "visibility": "VISIBILITY_READ_WRITE_VALUES"
      },
      "customer_id": "N3NCVYY3WS27HF0HKANA3R9FP8"
    },
    "id5": {
      "custom_attribute": {
        "created_at": "2021-12-09T00:16:20Z",
        "key": "sq0ids-0evKIskIGaY45fCyNL66aw:backupemail",
        "updated_at": "2021-12-09T00:16:23Z",
        "value": "fake-email@squareup.com",
        "version": 2,
        "visibility": "VISIBILITY_READ_WRITE_VALUES"
      },
      "customer_id": "70548QG1HN43B05G0KCZ4MMC1G"
    }
  }
}
```

