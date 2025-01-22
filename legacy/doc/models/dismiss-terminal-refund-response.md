
# Dismiss Terminal Refund Response

## Structure

`DismissTerminalRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `refund` | [`TerminalRefund \| undefined`](../../doc/models/terminal-refund.md) | Optional | Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds. |

## Example (as JSON)

```json
{
  "refund": {
    "amount_money": {
      "amount": 111,
      "currency": "CAD"
    },
    "app_id": "APP_ID",
    "card": {
      "bin": "411111",
      "card_brand": "VISA",
      "card_type": "DEBIT",
      "exp_month": 12,
      "exp_year": 2024,
      "fingerprint": "sq-1-ElNeDpZZqUBNDI7yNghyKO-o0yLXASp4qQDGIPtxnFvTTWoqdfdP6TV8gLsSxoztXA",
      "last_4": "1111",
      "prepaid_type": "NOT_PREPAID"
    },
    "card_details": {
      "auth_result_code": "RNy6Lf",
      "avs_status": "AVS_ACCEPTED",
      "card": {
        "bin": "411111",
        "card_brand": "VISA",
        "card_type": "DEBIT",
        "exp_month": 12,
        "exp_year": 2024,
        "fingerprint": "sq-1-ElNeDpZZqUBNDI7yNghyKO-o0yLXASp3qQDGIPtxnFvTTWoqdfdP6TV9gLsSxoztXA",
        "last_4": "1111",
        "prepaid_type": "NOT_PREPAID"
      },
      "card_payment_timeline": {
        "authorized_at": "2023-11-30T16:15:06.645Z",
        "captured_at": "2023-11-30T16:15:13.272Z"
      },
      "cvv_status": "CVV_ACCEPTED",
      "device_details": {
        "device_credential": {
          "name": "Terminal API Device created on Nov 2, 2023",
          "token": "9BFDXEYKB7H8Y"
        },
        "device_id": "f72dfb8e-4d65-4e56-aade-ec3fb8d33291",
        "device_installation_id": "0ef67d8e-61a3-4418-a0be-c143bfe6108d"
      },
      "entry_method": "SWIPED",
      "statement_description": "SQ TREATS",
      "status": "CAPTURED"
    },
    "created_at": "2023-11-30T16:16:39.299Z",
    "deadline_duration": "PT5M",
    "device_id": "47776348fd8b32b9",
    "id": "vjkNb2HD-xq5kiWWiJ7RhwrQnkxIn2N0l1nPZY",
    "order_id": "s8OMhQcpEp1b61YywlccSHWqUaQZY",
    "payment_id": "xq5kiWWiJ7RhwrQnkxIn2N0l1nPZY",
    "reason": "Returning item",
    "status": "IN_PROGRESS",
    "updated_at": "2023-11-30T16:16:57.863Z",
    "refund_id": "refund_id2"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

