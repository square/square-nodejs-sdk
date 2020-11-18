
# Order Service Charge Calculation Phase

Represents a phase in the process of calculating order totals.
Service charges are applied __after__ the indicated phase.

[Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)

## Enumeration

`OrderServiceChargeCalculationPhase`

## Fields

| Name | Description |
|  --- | --- |
| `SUBTOTAL_PHASE` | The service charge will be applied after discounts, but before<br>taxes. |
| `TOTAL_PHASE` | The service charge will be applied after all discounts and taxes<br>are applied. |

