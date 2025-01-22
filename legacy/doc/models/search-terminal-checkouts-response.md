
# Search Terminal Checkouts Response

## Structure

`SearchTerminalCheckoutsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `checkouts` | [`TerminalCheckout[] \| undefined`](../../doc/models/terminal-checkout.md) | Optional | The requested search result of `TerminalCheckout` objects. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |

## Example (as JSON)

```json
{
  "checkouts": [
    {
      "amount_money": {
        "amount": 2610,
        "currency": "USD"
      },
      "app_id": "APP_ID",
      "created_at": "2020-03-31T18:13:15.921Z",
      "deadline_duration": "PT5M",
      "device_options": {
        "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
        "skip_receipt_screen": false,
        "tip_settings": {
          "allow_tipping": false,
          "separate_tip_screen": false,
          "custom_tip_field": false,
          "tip_percentages": [
            48
          ],
          "smart_tipping": false
        },
        "collect_signature": false,
        "show_itemized_cart": false
      },
      "id": "tsQPvzwBpMqqO",
      "note": "A brief note",
      "payment_ids": [
        "rXnhZzywrEk4vR6pw76fPZfgvaB"
      ],
      "reference_id": "id14467",
      "status": "COMPLETED",
      "updated_at": "2020-03-31T18:13:52.725Z",
      "order_id": "order_id2",
      "payment_options": {
        "autocomplete": false,
        "delay_duration": "delay_duration2",
        "accept_partial_authorization": false,
        "delay_action": "CANCEL"
      }
    },
    {
      "amount_money": {
        "amount": 2610,
        "currency": "USD"
      },
      "app_id": "APP_ID",
      "created_at": "2020-03-31T18:08:31.882Z",
      "deadline_duration": "PT5M",
      "device_options": {
        "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
        "skip_receipt_screen": true,
        "tip_settings": {
          "allow_tipping": false,
          "separate_tip_screen": false,
          "custom_tip_field": false,
          "tip_percentages": [
            48
          ],
          "smart_tipping": false
        },
        "collect_signature": false,
        "show_itemized_cart": false
      },
      "id": "XlOPTgcEhrbqO",
      "note": "A brief note",
      "payment_ids": [
        "VYBF861PaoKPP7Pih0TlbZiNvaB"
      ],
      "reference_id": "id41623",
      "status": "COMPLETED",
      "updated_at": "2020-03-31T18:08:41.635Z",
      "order_id": "order_id2",
      "payment_options": {
        "autocomplete": false,
        "delay_duration": "delay_duration2",
        "accept_partial_authorization": false,
        "delay_action": "CANCEL"
      }
    }
  ],
  "cursor": "RiTJqBoTuXlbLmmrPvEkX9iG7XnQ4W4RjGnH",
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

