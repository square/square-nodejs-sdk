
# Create Payment Response

Defines the fields that are included in the response body of
a request to the [CreatePayment](#endpoint-payments-createpayment) endpoint.

Note: If there are errors processing the request, the payment field might not be
present, or it might be present with a status of `FAILED`.

## Structure

`CreatePaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `payment` | [`Payment`](/doc/models/payment.md) | Optional | Represents a payment processed by the Square API. |

## Example (as JSON)

```json
{
  "payment": {
    "amount_money": {
      "amount": 200,
      "currency": "USD"
    },
    "app_fee_money": {
      "amount": 10,
      "currency": "USD"
    },
    "card_details": {
      "auth_result_code": "nsAyY2",
      "avs_status": "AVS_ACCEPTED",
      "card": {
        "bin": "411111",
        "card_brand": "VISA",
        "card_type": "DEBIT",
        "exp_month": 7,
        "exp_year": 2026,
        "fingerprint": "sq-1-TpmjbNBMFdibiIjpQI5LiRgNUBC7u1689i0TgHjnlyHEWYB7tnn-K4QbW4ttvtaqXw",
        "last_4": "1111",
        "prepaid_type": "PREPAID"
      },
      "cvv_status": "CVV_ACCEPTED",
      "entry_method": "ON_FILE",
      "statement_description": "SQ *MY MERCHANT",
      "status": "CAPTURED"
    },
    "created_at": "2019-07-10T13:23:49.154Z",
    "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
    "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
    "location_id": "XTI0H92143A39",
    "note": "Brief description",
    "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
    "receipt_number": "GQTF",
    "receipt_url": "https://squareup.com/receipt/preview/GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
    "reference_id": "123456",
    "source_type": "CARD",
    "status": "COMPLETED",
    "total_money": {
      "amount": 200,
      "currency": "USD"
    },
    "updated_at": "2019-07-10T13:23:49.446Z"
  }
}
```

