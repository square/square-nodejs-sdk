
# Invoice Payment Request

Represents a payment request for an [invoice](#type-Invoice). Invoices can specify a maximum
of 13 payment requests, with up to 12 `INSTALLMENT` request types.

For more information,
see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).

## Structure

`InvoicePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Optional | The Square-generated ID of the payment request in an [invoice](#type-invoice).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `requestMethod` | [`string`](/doc/models/invoice-request-method.md) | Optional | Specifies the action for Square to take for processing the invoice. For example,<br>email the invoice, charge a customer's card on file, or do nothing. DEPRECATED at version 2021-01-21. The corresponding `request_method` field is replaced by the `Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields. |
| `requestType` | [`string`](/doc/models/invoice-request-type.md) | Optional | Indicates the type of the payment request. An invoice supports the following payment request combinations:<br><br>- 1 balance<br>- 1 deposit with 1 balance<br>- 2 - 12 installments<br>- 1 deposit with 2 - 12 installments<br><br>For more information,<br>see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests). |
| `dueDate` | `string` | Optional | The due date (in the invoice location's time zone) for the payment request, in `YYYY-MM-DD` format.<br>After this date, the invoice becomes overdue. This field is required to create a payment request. |
| `fixedAmountRequestedMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `percentageRequested` | `string` | Optional | Specifies the amount for the payment request in percentage:<br><br>- When the payment `request_type` is `DEPOSIT`, it is the percentage of the order total amount.<br>- When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order total less<br>  the deposit, if requested. The sum of the `percentage_requested` in all installment<br>  payment requests must be equal to 100.<br><br>You cannot specify this when the payment `request_type` is `BALANCE` or when the<br>payment request specifies the `fixed_amount_requested_money` field. |
| `tippingEnabled` | `boolean` | Optional | If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)<br>provides a place for the customer to pay a tip.<br><br>This field is allowed only on the final payment request  <br>and the payment `request_type` must be `BALANCE` or `INSTALLMENT`. |
| `automaticPaymentSource` | [`string`](/doc/models/invoice-automatic-payment-source.md) | Optional | Indicates the automatic payment method for an [invoice payment request](#type-InvoicePaymentRequest). |
| `cardId` | `string` | Optional | The ID of the card on file to charge for the payment request. To get the customer’s card on file,<br>use the `customer_id` of the invoice recipient to call [RetrieveCustomer](#endpoint-Customers-RetrieveCustomer)<br>in the Customers API. Then, get the ID of the target card from the `cards` field in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `reminders` | [`InvoicePaymentReminder[]`](/doc/models/invoice-payment-reminder.md) | Optional | A list of one or more reminders to send for the payment request. |
| `computedAmountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalCompletedAmountMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `roundingAdjustmentIncludedMoney` | [`Money`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "request_method": "EMAIL",
  "request_type": "BALANCE",
  "due_date": "due_date8",
  "fixed_amount_requested_money": {
    "amount": 162,
    "currency": "TOP"
  }
}
```

