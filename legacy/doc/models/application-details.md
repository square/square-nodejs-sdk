
# Application Details

Details about the application that took the payment.

## Structure

`ApplicationDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `squareProduct` | [`string \| undefined`](../../doc/models/application-details-external-square-product.md) | Optional | A list of products to return to external callers. |
| `applicationId` | `string \| null \| undefined` | Optional | The Square ID assigned to the application used to take the payment.<br>Application developers can use this information to identify payments that<br>their application processed.<br>For example, if a developer uses a custom application to process payments,<br>this field contains the application ID from the Developer Dashboard.<br>If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)<br>application to process payments, the field contains the corresponding application ID. |

## Example (as JSON)

```json
{
  "square_product": "APPOINTMENTS",
  "application_id": "application_id2"
}
```

