
# Search Terminal Checkouts Response

## Structure

`SearchTerminalCheckoutsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `checkouts` | [`TerminalCheckout[]`](/doc/models/terminal-checkout.md) | Optional | The requested search result of `TerminalCheckout`s. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br><br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |

## Example (as JSON)

```json
{
  "checkouts": [
    {
      "id": "tsQPvzwBpMqqO",
      "amount_money": {
        "amount": 2610,
        "currency": "USD"
      },
      "reference_id": "id14467",
      "note": "A brief note",
      "device_options": {
        "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
        "tip_settings": {
          "allow_tipping": false
        },
        "skip_receipt_screen": false
      },
      "status": "COMPLETED",
      "payment_ids": [
        "rXnhZzywrEk4vR6pw76fPZfgvaB"
      ],
      "created_at": "2020-03-31T18:13:15.921Z",
      "updated_at": "2020-03-31T18:13:52.725Z",
      "app_id": "APP_ID",
      "deadline_duration": "PT10M"
    },
    {
      "id": "XlOPTgcEhrbqO",
      "amount_money": {
        "amount": 2610,
        "currency": "USD"
      },
      "reference_id": "id41623",
      "note": "A brief note",
      "device_options": {
        "device_id": "dbb5d83a-7838-11ea-bc55-0242ac130003",
        "tip_settings": {
          "allow_tipping": false
        },
        "skip_receipt_screen": true
      },
      "status": "COMPLETED",
      "payment_ids": [
        "VYBF861PaoKPP7Pih0TlbZiNvaB"
      ],
      "created_at": "2020-03-31T18:08:31.882Z",
      "updated_at": "2020-03-31T18:08:41.635Z",
      "app_id": "APP_ID",
      "deadline_duration": "PT10M"
    }
  ],
  "cursor": "RiTJqBoTuXlbLmmrPvEkX9iG7XnQ4W4RjGnH"
}
```

