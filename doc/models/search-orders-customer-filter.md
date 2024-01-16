
# Search Orders Customer Filter

A filter based on the order `customer_id` and any tender `customer_id`
associated with the order. It does not filter based on the
[FulfillmentRecipient](../../doc/models/fulfillment-recipient.md) `customer_id`.

## Structure

`SearchOrdersCustomerFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerIds` | `string[] \| null \| undefined` | Optional | A list of customer IDs to filter by.<br><br>Max: 10 customer ids. |

## Example (as JSON)

```json
{
  "customer_ids": [
    "customer_ids9",
    "customer_ids0",
    "customer_ids1"
  ]
}
```

