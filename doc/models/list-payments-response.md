
# List Payments Response

Defines the fields that are included in the response body of
a request to the [ListPayments](#endpoint-payments-listpayments) endpoint.

## Structure

`ListPaymentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `payments` | [`Payment[]`](/doc/models/payment.md) | Optional | The requested list of `Payment`s. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |

## Example (as JSON)

```json
{
  "payments": [
    {
      "id": "ifrBnAil7rRfDtd27cdf9g9WO8paB",
      "created_at": "2019-07-09T14:36:13.745Z",
      "updated_at": "2019-07-09T14:36:13.883Z",
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "total_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "status": "APPROVED",
      "source_type": "CARD",
      "card_details": {
        "status": "AUTHORIZED",
        "card": {
          "card_brand": "VISA",
          "last_4": "1111",
          "exp_month": 2,
          "exp_year": 2022,
          "fingerprint": "sq-1-lHpUJIUyqOPQmH89b6GuQEljmc-mZmu4kSTaMlkLDkJI7NVjAl4Zirn2sk3OeyVKVA"
        },
        "entry_method": "KEYED",
        "cvv_status": "CVV_ACCEPTED",
        "avs_status": "AVS_ACCEPTED",
        "auth_result_code": "NQbV3A"
      },
      "location_id": "QLIJX16Q3UZ0A",
      "order_id": "MvfIilKnIYKBium4rauH67wFzRxv"
    },
    {
      "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
      "created_at": "2019-07-08T01:00:51.607Z",
      "updated_at": "2019-07-08T01:13:58.508Z",
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "total_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "status": "COMPLETED",
      "source_type": "CARD",
      "card_details": {
        "status": "CAPTURED",
        "card": {
          "card_brand": "VISA",
          "last_4": "2796",
          "exp_month": 7,
          "exp_year": 2026,
          "fingerprint": "sq-1-TpmjbNBMFdibiIjpQI5LiRgNUBC7u1689i0TgHjnlyHEWYB7tnn-K4QbW4ttvtaqXw"
        },
        "entry_method": "ON_FILE",
        "cvv_status": "CVV_ACCEPTED",
        "avs_status": "AVS_ACCEPTED",
        "auth_result_code": "vPIr0K"
      },
      "location_id": "XTI0H92143A39",
      "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
      "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
      "processing_fee": [
        {
          "effective_at": "2019-07-08T03:00:53.000Z",
          "type": "INITIAL",
          "amount_money": {
            "amount": 59,
            "currency": "USD"
          }
        }
      ]
    }
  ],
  "cursor": "2TTnuq0yRYDdBRSFF2XuFkgO1Bclt4ZHNI7YrFNeyZ6rL1WZXkdnLn10H8fBIwFKdKW1Af6ifRa"
}
```

