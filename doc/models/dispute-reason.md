
# Dispute Reason

List of possible reasons why a cardholder might initiate a
dispute with their bank.

## Enumeration

`DisputeReason`

## Fields

| Name | Description |
|  --- | --- |
| `AMOUNT_DIFFERS` | The cardholder claims that they were charged the wrong amount for the purchase.<br>To challenge this dispute, provide specific and concrete evidence that the cardholder agreed to the amount charged. |
| `CANCELLED` | The cardholder claims that they attempted to return the goods or cancel the service.<br>To challenge this dispute, provide specific and concrete evidence to prove that the cardholder is not due a refund, and that the cardholder acknowledged your cancellation policy. |
| `DUPLICATE` | The cardholder claims that they were charged twice for the same purchase.<br>To challenge this dispute, provide specific and concrete evidence that shows both charges are legitimate and independent of one another. |
| `NO_KNOWLEDGE` | The cardholder claims that they did not make this purchase nor authorized the charge.<br>To challenge this dispute, provide specific and concrete evidence that proves that the cardholder identity was verified at the time of purchase and that the purchase was authorized. |
| `NOT_AS_DESCRIBED` | The cardholder claims the product or service was provided but the quality of the deliverable did not align with the expectations of the cardholder based on the description.<br>To challenge this dispute, provide specific and concrete evidence that shows the cardholder is in possession of the product as described, or received the service as described (agreed) upon. |
| `NOT_RECEIVED` | The cardholder claims the product or service was not received by the cardholder within the stated time frame.<br>To challenge this dispute, provide specific and concrete evidence to prove that the cardholder is in possession of or received the product or service sold. |
| `PAID_BY_OTHER_MEANS` | The cardholder claims that they previously paid for this purchase.<br>To challenge this dispute, provide specific and concrete evidence that shows both charges are legitimate and independent of one another or proof that you already provided a credit for the charge. |
| `CUSTOMER_REQUESTS_CREDIT` | The cardholder claims that the purchase was either cancelled or returned but they have not yet received the credit.<br>To challenge this dispute, provide specific and concrete evidence to prove that the cardholder is not due a refund, and that they acknowledged your cancellation and/or refund policy. |
| `EMV_LIABILITY_SHIFT` | A chip-enabled card was not processed through a compliant chip-card reader (e.g. it was swiped instead of dipped into a chip-card reader).<br>You cannot challenge this dispute because the payment didn’t comply with EMV security requirements. For more information, see [What Is EMV.](https://squareup.com/emv) |

