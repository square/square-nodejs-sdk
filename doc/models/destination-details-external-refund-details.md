
# Destination Details External Refund Details

Stores details about an external refund. Contains only non-confidential information.

## Structure

`DestinationDetailsExternalRefundDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The type of external refund the seller paid to the buyer. It can be one of the<br>following:<br><br>- CHECK - Refunded using a physical check.<br>- BANK_TRANSFER - Refunded using external bank transfer.<br>- OTHER\_GIFT\_CARD - Refunded using a non-Square gift card.<br>- CRYPTO - Refunded using a crypto currency.<br>- SQUARE_CASH - Refunded using Square Cash App.<br>- SOCIAL - Refunded using peer-to-peer payment applications.<br>- EXTERNAL - A third-party application gathered this refund outside of Square.<br>- EMONEY - Refunded using an E-money provider.<br>- CARD - A credit or debit card that Square does not support.<br>- STORED_BALANCE - Use for house accounts, store credit, and so forth.<br>- FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals<br>- OTHER - A type not listed here.<br>**Constraints**: *Maximum Length*: `50` |
| `source` | `string` | Required | A description of the external refund source. For example,<br>"Food Delivery Service".<br>**Constraints**: *Maximum Length*: `255` |
| `sourceId` | `string \| null \| undefined` | Optional | An ID to associate the refund to its originating source.<br>**Constraints**: *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "type": "type4",
  "source": "source2",
  "source_id": "source_id0"
}
```

