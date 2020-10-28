
# Invoice Request Type

Identifies the type of the payment request. For more information,
see [Payment request](TBD).

## Enumeration

`InvoiceRequestType`

## Fields

| Name | Description |
|  --- | --- |
| `BALANCE` | Identifies that the payment request is for the balance amount, after accounting for any<br>other payment requests in the invoice:<br><br>- If the invoice specifies only a balance payment request, it refers to the<br>  total amount identified by the associated order.<br>- If the invoice also specifies a deposit request, the balance payment request refers to<br>  the remaining amount.<br>- `INSTALLMENT` and `BALANCE` are not allowed together. |
| `DEPOSIT` | Identifies that the payment request is for a deposit. You have the option of specifying<br>an exact amount or a percentage of the total order amount. If you request a deposit,<br>it must be due before any other payment requests. |
| `INSTALLMENT` | Identifies that the payment request is for an installment. An invoice can request payments in installments.<br>Along with installments, you can request an optional deposit. All these payment requests must add to the total order amount. |

