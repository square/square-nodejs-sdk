
# Bulk Create Vendors Response

Represents an output from a call to [BulkCreateVendors](../../doc/api/vendors.md#bulk-create-vendors).

## Structure

`BulkCreateVendorsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `responses` | [`Record<string, CreateVendorResponse> \| undefined`](../../doc/models/create-vendor-response.md) | Optional | A set of [CreateVendorResponse](entity:CreateVendorResponse) objects encapsulating successfully created [Vendor](entity:Vendor)<br>objects or error responses for failed attempts. The set is represented by<br>a collection of idempotency-key/`Vendor`-object or idempotency-key/error-object pairs. The idempotency keys correspond to those specified<br>in the input. |

## Example (as JSON)

```json
{
  "47bb76a8-c9fb-4f33-9df8-25ce02ca4505": {
    "vendor": {
      "contacts": [
        {
          "email_address": "annie@annieshotsauce.com",
          "id": "INV_VC_ABYYHBWT1TPL8MFH52PBMENPJ4",
          "name": "Annie Thomas",
          "phone_number": "1-212-555-4250"
        }
      ],
      "created_at": "2022-03-16T10:21:54.859Z",
      "id": "INV_V_FMCYHBWT1TPL8MFH52PBMEN92A",
      "name": "Annie’s Hot Sauce",
      "status": "ACTIVE",
      "updated_at": "2022-03-16T10:21:54.859Z",
      "version": 1
    }
  },
  "errors": [],
  "vendors": {
    "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe": {
      "vendor": {
        "account_number": "4025391",
        "address": {
          "address_line_1": "505 Electric Ave",
          "address_line_2": "Suite 600",
          "administrative_district_level_1": "NY",
          "country": "US",
          "locality": "New York",
          "postal_code": "10003"
        },
        "contacts": [
          {
            "email_address": "joe@joesfreshseafood.com",
            "id": "INV_VC_FMCYHBWT1TPL8MFH52PBMEN92A",
            "name": "Joe Burrow",
            "phone_number": "1-212-555-4250"
          }
        ],
        "created_at": "2022-03-16T10:21:54.859Z",
        "id": "INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4",
        "name": "Joe's Fresh Seafood",
        "note": "a vendor",
        "status": "ACTIVE",
        "updated_at": "2022-03-16T10:21:54.859Z",
        "version": 0
      }
    }
  },
  "responses": {
    "key0": {
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "MAP_KEY_LENGTH_TOO_LONG",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "MAP_KEY_LENGTH_TOO_LONG",
          "detail": "detail6",
          "field": "field4"
        },
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "MAP_KEY_LENGTH_TOO_LONG",
          "detail": "detail6",
          "field": "field4"
        }
      ],
      "vendor": {
        "id": "id6",
        "created_at": "created_at4",
        "updated_at": "updated_at2",
        "name": "name6",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "locality": "locality6",
          "sublocality": "sublocality6"
        }
      }
    }
  }
}
```

