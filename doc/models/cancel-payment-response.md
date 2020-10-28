
# Cancel Payment Response

Return value from the [CancelPayment](#endpoint-payments-cancelpayment) endpoint.

## Structure

`CancelPaymentResponse`

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
    "created_at": "2018-10-17T20:38:46.743Z",
    "updated_at": "2018-10-17T20:38:57.693Z",
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
    "status": "CANCELED",
    "source_type": "CARD",
    "card_details": {
      "status": "VOIDED",
      "card": {
        "card_brand": "VISA",
        "last_4": "1234",
        "exp_month": 2,
        "exp_year": 2024,
        "fingerprint": "sq-1-9PP0tWfcM6vIsYmfsesdjfhduHSDFNdJFNDfDNFjdfjpseirDErsaP",
        "card_type": "DEBIT",
        "prepaid_type": "PREPAID",
        "bin": "411111"
      },
      "entry_method": "KEYED",
      "cvv_status": "CVV_ACCEPTED",
      "avs_status": "AVS_ACCEPTED",
      "auth_result_code": "eWZBDh",
      "statement_description": "SQ *MY MERCHANT"
    },
    "location_id": "XTI0H92143A39",
    "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
    "reference_id": "123456",
    "note": "Brief description",
    "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I"
  }
}
```

