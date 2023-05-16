
# Bulk Update Vendors Response

Represents an output from a call to [BulkUpdateVendors](../../doc/api/vendors.md#bulk-update-vendors).

## Structure

`BulkUpdateVendorsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors encountered when the request fails. |
| `responses` | [`Record<string, UpdateVendorResponse> \| undefined`](../../doc/models/update-vendor-response.md) | Optional | A set of [UpdateVendorResponse](entity:UpdateVendorResponse) objects encapsulating successfully created [Vendor](entity:Vendor)<br>objects or error responses for failed attempts. The set is represented by a collection of `Vendor`-ID/`UpdateVendorResponse`-object or<br>`Vendor`-ID/error-object pairs. |

## Example (as JSON)

```json
{
  "vendors": {
    "INV_V_FMCYHBWT1TPL8MFH52PBMEN92A": {
      "address": {
        "address_line_1": "202 Mill St",
        "administrative_district_level_1": "NJ",
        "country": "US",
        "locality": "Moorestown",
        "postal_code": "08057"
      },
      "contacts": [
        {
          "email_address": "annie@annieshotsauce.com",
          "id": "INV_VC_ABYYHBWT1TPL8MFH52PBMENPJ4",
          "name": "Annie Thomas",
          "ordinal": 0,
          "phone_number": "1-212-555-4250"
        }
      ],
      "created_at": "2022-03-16T10:21:54.859Z",
      "id": "INV_V_FMCYHBWT1TPL8MFH52PBMEN92A",
      "name": "Annie’s Hot Sauce",
      "status": "ACTIVE",
      "updated_at": "2022-03-16T20:21:54.859Z",
      "version": 11
    },
    "INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4": {
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
          "ordinal": 0,
          "phone_number": "1-212-555-4250"
        }
      ],
      "created_at": "2022-03-16T10:10:54.859Z",
      "id": "INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4",
      "name": "Joe's Fresh Seafood",
      "note": "favorite vendor",
      "status": "ACTIVE",
      "updated_at": "2022-03-16T20:21:54.859Z",
      "version": 31
    }
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ],
  "responses": {
    "key0": {
      "errors": [
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "INVALID_EMAIL_ADDRESS",
          "detail": "detail8",
          "field": "field6"
        },
        {
          "category": "INVALID_REQUEST_ERROR",
          "code": "INVALID_PHONE_NUMBER",
          "detail": "detail9",
          "field": "field7"
        },
        {
          "category": "RATE_LIMIT_ERROR",
          "code": "CHECKOUT_EXPIRED",
          "detail": "detail0",
          "field": "field8"
        }
      ],
      "vendor": {
        "id": "id3",
        "created_at": "created_at1",
        "updated_at": "updated_at9",
        "name": "name3",
        "address": {
          "address_line_1": "address_line_19",
          "address_line_2": "address_line_29",
          "address_line_3": "address_line_35",
          "locality": "locality9",
          "sublocality": "sublocality9"
        }
      }
    }
  }
}
```

