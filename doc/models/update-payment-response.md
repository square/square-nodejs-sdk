
# Update Payment Response

Defines the response returned by
[UpdatePayment](/doc/api/payments.md#update-payment).

## Structure

`UpdatePaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `payment` | [`Payment \| undefined`](/doc/models/payment.md) | Optional | Represents a payment processed by the Square API. |

## Example (as JSON)

```json
{
  "payment": {
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
      "auth_result_code": "ajM2ZF",
      "avs_status": "AVS_ACCEPTED",
      "card": {
        "bin": "411111",
        "card_brand": "VISA",
        "card_type": "CREDIT",
        "exp_month": 2,
        "exp_year": 2022,
        "fingerprint": "sq-1-n_BL15KP87ClDa4-h2nXOI0fp5VnxNH6hfhzqhptTfAgxgLuGFcg6jIPngDz4IkkTQ",
        "last_4": "1111"
      },
      "card_payment_timeline": {
        "authorized_at": "2021-02-24T03:33:43.681Z"
      },
      "cvv_status": "CVV_ACCEPTED",
      "entry_method": "KEYED",
      "statement_description": "SQ *MY BUSINESS GOSQ.COM",
      "status": "AUTHORIZED"
    },
    "created_at": "2021-03-02T19:53:31.055Z",
    "delay_action": "CANCEL",
    "delay_duration": "PT168H",
    "delayed_until": "2021-03-09T19:53:31.055Z",
    "id": "XllelosAAfmkf9mOa0YB4PqSZACZY",
    "location_id": "XTI0H92143A39",
    "order_id": "B6qiKWus1d3TBoN2Qn5kfDiWZlfZY",
    "receipt_number": "Xlle",
    "source_type": "CARD",
    "status": "APPROVED",
    "tip_money": {
      "amount": 300,
      "currency": "USD"
    },
    "total_money": {
      "amount": 1300,
      "currency": "USD"
    },
    "updated_at": "2021-03-02T19:53:31.164Z",
    "version_token": "9TKsTawsWZvdZZD5uhAZFWfd3chxFXB49cgFpD2Kujf6o"
  }
}
```

