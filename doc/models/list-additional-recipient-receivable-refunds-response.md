
# List Additional Recipient Receivable Refunds Response

Defines the fields that are included in the response body of
a request to the [ListAdditionalRecipientReceivableRefunds](#endpoint-listadditionalrecipientreceivablerefunds) endpoint.

One of `errors` or `additional_recipient_receivable_refunds` is present in a given response (never both).

## Structure

`ListAdditionalRecipientReceivableRefundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `receivable_refunds` | [`AdditionalRecipientReceivableRefund[]`](/doc/models/additional-recipient-receivable-refund.md) | Optional | An array of AdditionalRecipientReceivableRefunds that match your query. |
| `cursor` | `string` | Optional | A pagination cursor for retrieving the next set of results,<br>if any remain. Provide this value as the `cursor` parameter in a subsequent<br>request to this endpoint.<br><br>See [Paginating results](#paginatingresults) for more information. |

## Example (as JSON)

```json
{
  "receivable_refunds": [
    {
      "id": "Ge2OT7KA6XAg1GC15qs5S",
      "receivable_id": "ISu5xwxJ5v0CMJTQq7RvqyMF",
      "refund_id": "b27436d1-7f8e-5610-45c6-417ef71434b4-SW",
      "transaction_location_id": "18YC4JDH91E1H",
      "amount_money": {
        "amount": 10,
        "currency": "USD"
      },
      "created_at": "2016-01-20T22:57:56Z"
    }
  ]
}
```

