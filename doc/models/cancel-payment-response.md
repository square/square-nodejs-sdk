
# Cancel Payment Response

Defines the response returned by [CancelPayment](/doc/api/payments.md#cancel-payment).

## Structure

`CancelPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `payment` | [`Payment \| undefined`](/doc/models/payment.md) | Optional | Represents a payment processed by the Square API. |

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
    "approved_money": {
      "amount": 200,
      "currency": "USD"
    },
    "card_details": {
      "auth_result_code": "eWZBDh",
      "avs_status": "AVS_ACCEPTED",
      "card": {
        "bin": "411111",
        "card_brand": "VISA",
        "card_type": "DEBIT",
        "exp_month": 2,
        "exp_year": 2024,
        "fingerprint": "sq-1-9PP0tWfcM6vIsYmfsesdjfhduHSDFNdJFNDfDNFjdfjpseirDErsaP",
        "last_4": "1234",
        "prepaid_type": "PREPAID"
      },
      "card_payment_timeline": {
        "authorized_at": "2018-10-17T20:38:46.753Z",
        "voided_at": "2018-10-17T20:38:57.793Z"
      },
      "cvv_status": "CVV_ACCEPTED",
      "entry_method": "KEYED",
      "statement_description": "SQ *MY MERCHANT",
      "status": "VOIDED"
    },
    "created_at": "2018-10-17T20:38:46.743Z",
    "customer_id": "RDX9Z4XTIZR7MRZJUXNY9HUK6I",
    "id": "GQTFp1ZlXdpoW4o6eGiZhbjosiDFf",
    "location_id": "XTI0H92143A39",
    "note": "Brief description",
    "order_id": "m2Hr8Hk8A3CTyQQ1k4ynExg92tO3",
    "reference_id": "123456",
    "source_type": "CARD",
    "status": "CANCELED",
    "total_money": {
      "amount": 200,
      "currency": "USD"
    },
    "updated_at": "2018-10-17T20:38:57.693Z",
    "version_token": "lAITJ6l8I8tFu62mCf2W4sxJQxN9FOaH5zwfsdPf7Dm6o"
  }
}
```

