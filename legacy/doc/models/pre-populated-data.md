
# Pre Populated Data

Describes buyer data to prepopulate in the payment form.
For more information,
see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).

## Structure

`PrePopulatedData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buyerEmail` | `string \| null \| undefined` | Optional | The buyer email to prepopulate in the payment form.<br>**Constraints**: *Maximum Length*: `256` |
| `buyerPhoneNumber` | `string \| null \| undefined` | Optional | The buyer phone number to prepopulate in the payment form.<br>**Constraints**: *Maximum Length*: `17` |
| `buyerAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |

## Example (as JSON)

```json
{
  "buyer_email": "buyer_email8",
  "buyer_phone_number": "buyer_phone_number0",
  "buyer_address": {
    "address_line_1": "address_line_12",
    "address_line_2": "address_line_22",
    "address_line_3": "address_line_38",
    "locality": "locality2",
    "sublocality": "sublocality2"
  }
}
```

