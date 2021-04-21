
# List Payments Response

Defines the response returned by [ListPayments](/doc/api/payments.md#list-payments).

## Structure

`ListPaymentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `payments` | [`Payment[]`](/doc/models/payment.md) | Optional | The requested list of payments. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "cursor": "2TTnuq0yRYDdBRSFF2XuFkgO1Bclt4ZHNI7YrFNeyZ6rL1WZXkdnLn10H8fBIwFKdKW1Af6ifRa",
  "payments": [
    {
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "approved_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "capabilities": [
        "EDIT_AMOUNT_UP",
        "EDIT_AMOUNT_DOWN",
        "EDIT_TIP_AMOUNT_UP",
        "EDIT_TIP_AMOUNT_DOWN"
      ],
      "card_details": {
        "auth_result_code": "NQbV3A",
        "avs_status": "AVS_ACCEPTED",
        "card": {
          "card_brand": "VISA",
          "exp_month": 2,
          "exp_year": 2022,
          "fingerprint": "sq-1-lHpUJIUyqOPQmH89b6GuQEljmc-mZmu4kSTaMlkLDkJI7NVjAl4Zirn2sk3OeyVKVA",
          "last_4": "1111"
        },
        "card_payment_timeline": {
          "authorized_at": "2019-07-09T14:36:13.798Z"
        },
        "cvv_status": "CVV_ACCEPTED",
        "entry_method": "KEYED",
        "status": "AUTHORIZED"
      },
      "created_at": "2019-07-09T14:36:13.745Z",
      "id": "ifrBnAil7rRfDtd27cdf9g9WO8paB",
      "location_id": "QLIJX16Q3UZ0A",
      "order_id": "MvfIilKnIYKBium4rauH67wFzRxv",
      "source_type": "CARD",
      "status": "APPROVED",
      "total_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "updated_at": "2019-07-09T14:36:13.883Z",
      "version_token": "v6orqdHcW2TwuzCQRdF6a4ktbG8T8nbDcBx8eyrkoZl6o"
    },
    {
      "amount_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "approved_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "card_details": {
        "auth_result_code": "vPIr0K",
        "avs_status": "AVS_ACCEPTED",
        "card": {
          "card_brand": "VISA",
          "exp_month": 7,
          "exp_year": 2026,
          "fingerprint": "sq-1-TpmjbNBMFdibiIjpQI5LiRgNUBC7u1689i0TgHjnlyHEWYB7tnn-K4QbW4ttvtaqXw",
          "last_4": "2796"
        },
        "card_payment_timeline": {
          "authorized_at": "2019-07-08T01:00:51.617Z",
          "captured_at": "2019-07-08T01:13:58.508Z"
        },
        "cvv_status": "CVV_ACCEPTED",
        "entry_method": "ON_FILE",
        "status": "CAPTURED"
      },
      "created_at": "2019-07-08T01:00:51.607Z",
      "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
      "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
      "location_id": "XTI0H92143A39",
      "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
      "processing_fee": [
        {
          "amount_money": {
            "amount": 59,
            "currency": "USD"
          },
          "effective_at": "2019-07-08T03:00:53.000Z",
          "type": "INITIAL"
        }
      ],
      "source_type": "CARD",
      "status": "COMPLETED",
      "total_money": {
        "amount": 1000,
        "currency": "USD"
      },
      "updated_at": "2019-07-08T01:13:58.508Z",
      "version_token": "pE0wanQBErcnO4ubL49pHCV1yAs4BUScWXb8fVvkRqa6o"
    }
  ]
}
```

