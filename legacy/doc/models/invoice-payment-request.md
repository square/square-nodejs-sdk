
# Invoice Payment Request

Represents a payment request for an [invoice](../../doc/models/invoice.md). Invoices can specify a maximum
of 13 payment requests, with up to 12 `INSTALLMENT` request types. For more information,
see [Configuring payment requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests).

Adding `INSTALLMENT` payment requests to an invoice requires an
[Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).

## Structure

`InvoicePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| null \| undefined` | Optional | The Square-generated ID of the payment request in an [invoice](entity:Invoice).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `requestMethod` | [`string \| undefined`](../../doc/models/invoice-request-method.md) | Optional | Specifies the action for Square to take for processing the invoice. For example,<br>email the invoice, charge a customer's card on file, or do nothing. DEPRECATED at<br>version 2021-01-21. The corresponding `request_method` field is replaced by the<br>`Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields. |
| `requestType` | [`string \| undefined`](../../doc/models/invoice-request-type.md) | Optional | Indicates the type of the payment request. For more information, see<br>[Configuring payment requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests). |
| `dueDate` | `string \| null \| undefined` | Optional | The due date (in the invoice's time zone) for the payment request, in `YYYY-MM-DD` format. This field<br>is required to create a payment request. If an `automatic_payment_source` is defined for the request, Square<br>charges the payment source on this date.<br><br>After this date, the invoice becomes overdue. For example, a payment `due_date` of 2021-03-09 with a `timezone`<br>of America/Los\_Angeles becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC<br>timestamp of 2021-03-10T08:00:00Z). |
| `fixedAmountRequestedMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `percentageRequested` | `string \| null \| undefined` | Optional | Specifies the amount for the payment request in percentage:<br><br>- When the payment `request_type` is `DEPOSIT`, it is the percentage of the order's total amount.<br>- When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order's total less<br>  the deposit, if requested. The sum of the `percentage_requested` in all installment<br>  payment requests must be equal to 100.<br><br>You cannot specify this when the payment `request_type` is `BALANCE` or when the<br>payment request specifies the `fixed_amount_requested_money` field. |
| `tippingEnabled` | `boolean \| null \| undefined` | Optional | If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)<br>provides a place for the customer to pay a tip.<br><br>This field is allowed only on the final payment request  <br>and the payment `request_type` must be `BALANCE` or `INSTALLMENT`. |
| `automaticPaymentSource` | [`string \| undefined`](../../doc/models/invoice-automatic-payment-source.md) | Optional | Indicates the automatic payment method for an [invoice payment request](../../doc/models/invoice-payment-request.md). |
| `cardId` | `string \| null \| undefined` | Optional | The ID of the credit or debit card on file to charge for the payment request. To get the cards on file for a customer,<br>call [ListCards](api-endpoint:Cards-ListCards) and include the `customer_id` of the invoice recipient.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `reminders` | [`InvoicePaymentReminder[] \| null \| undefined`](../../doc/models/invoice-payment-reminder.md) | Optional | A list of one or more reminders to send for the payment request. |
| `computedAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalCompletedAmountMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `roundingAdjustmentIncludedMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "request_method": "SHARE_MANUALLY",
  "request_type": "DEPOSIT",
  "due_date": "due_date8",
  "fixed_amount_requested_money": {
    "amount": 162,
    "currency": "JOD"
  }
}
```

