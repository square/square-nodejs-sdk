
# Batch Retrieve Orders Request

Defines the fields that are included in requests to the
BatchRetrieveOrders endpoint.

## Structure

`BatchRetrieveOrdersRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `order_ids` | `string[]` | The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. |

## Example (as JSON)

```json
{
  "order_ids": [
    "CAISEM82RcpmcFBM0TfOyiHV3es",
    "CAISENgvlJ6jLWAzERDzjyHVybY"
  ]
}
```

