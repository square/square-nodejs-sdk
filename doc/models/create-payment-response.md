
# Create Payment Response

Defines the fields that are included in the response body of
a request to the [CreatePayment](#endpoint-payments-createpayment) endpoint.

Note: if there are errors processing the request, the payment field may not be
present, or it may be present with a status of `FAILED`.

## Structure

`CreatePaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `payment` | [`Payment`](/doc/models/payment.md) | Optional | Represents a payment processed by the Square API. |

## Example (as JSON)

```json
{
  "payment": {
    "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
    "created_at": "2019-07-10T13:23:49.154Z",
    "updated_at": "2019-07-10T13:23:49.446Z",
    "amount_money": {
      "amount": 200,
      "currency": "USD"
    },
    "app_fee_money": {
      "amount": 10,
      "currency": "USD"
    },
    "total_money": {
      "amount": 200,
      "currency": "USD"
    },
    "status": "COMPLETED",
    "source_type": "CARD",
    "card_details": {
      "status": "CAPTURED",
      "card": {
        "card_brand": "VISA",
        "last_4": "1111",
        "exp_month": 7,
        "exp_year": 2026,
        "fingerprint": "sq-1-TpmjbNBMFdibiIjpQI5LiRgNUBC7u1689i0TgHjnlyHEWYB7tnn-K4QbW4ttvtaqXw",
        "card_type": "DEBIT",
        "prepaid_type": "PREPAID",
        "bin": "411111"
      },
      "entry_method": "ON_FILE",
      "cvv_status": "CVV_ACCEPTED",
      "avs_status": "AVS_ACCEPTED",
      "auth_result_code": "nsAyY2",
      "statement_description": "SQ *MY MERCHANT"
    },
    "location_id": "XTI0H92143A39",
    "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
    "reference_id": "123456",
    "note": "Brief description",
    "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
    "receipt_number": "GQTF",
    "receipt_url": "https://squareup.com/receipt/preview/GQTFp1ZlXdpoW4o6eGiZhbjosiDFf"
  }
}
```

