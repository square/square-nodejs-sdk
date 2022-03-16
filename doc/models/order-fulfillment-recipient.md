
# Order Fulfillment Recipient

Contains information about the recipient of a fulfillment.

## Structure

`OrderFulfillmentRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| undefined` | Optional | The customer ID of the customer associated with the fulfillment.<br><br>If `customer_id` is provided, the fulfillment recipient's `display_name`,<br>`email_address`, and `phone_number` are automatically populated from the<br>targeted customer profile. If these fields are set in the request, the request<br>values overrides the information from the customer profile. If the<br>targeted customer profile does not contain the necessary information and<br>these fields are left unset, the request results in an error.<br>**Constraints**: *Maximum Length*: `191` |
| `displayName` | `string \| undefined` | Optional | The display name of the fulfillment recipient.<br><br>If provided, the display name overrides the value pulled from the customer profile indicated by `customer_id`.<br>**Constraints**: *Maximum Length*: `255` |
| `emailAddress` | `string \| undefined` | Optional | The email address of the fulfillment recipient.<br><br>If provided, the email address overrides the value pulled from the customer profile indicated by `customer_id`.<br>**Constraints**: *Maximum Length*: `255` |
| `phoneNumber` | `string \| undefined` | Optional | The phone number of the fulfillment recipient.<br><br>If provided, the phone number overrides the value pulled from the customer profile indicated by `customer_id`.<br>**Constraints**: *Maximum Length*: `17` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |

## Example (as JSON)

```json
{
  "customer_id": "customer_id8",
  "display_name": "display_name0",
  "email_address": "email_address2",
  "phone_number": "phone_number2",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "locality": "locality6",
    "sublocality": "sublocality6"
  }
}
```

