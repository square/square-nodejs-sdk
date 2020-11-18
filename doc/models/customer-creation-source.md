
# Customer Creation Source

Indicates the method used to create the customer profile.

## Enumeration

`CustomerCreationSource`

## Fields

| Name | Description |
|  --- | --- |
| `OTHER` | Default creation source. Typically used for backward/future<br>compatibility when the original source of a customer profile is<br>unrecognized. For example, when older clients do not support newer<br>source types. |
| `APPOINTMENTS` | Customer profile created automatically when an appointment<br>was scheduled. |
| `COUPON` | Customer profile created automatically when a coupon was issued<br>using Square Point of Sale. |
| `DELETION_RECOVERY` | Customer profile restored through Square's deletion recovery<br>process. |
| `DIRECTORY` | Customer profile created manually through Square Dashboard or<br>Point of Sale application. |
| `EGIFTING` | Customer profile created automatically when a gift card was<br>issued using Square Point of Sale. Customer profiles are created for<br>both the purchaser and the recipient of the gift card. |
| `EMAIL_COLLECTION` | Customer profile created through Square Point of Sale when<br>signing up for marketing emails during checkout. |
| `FEEDBACK` | Customer profile created automatically when providing feedback<br>through a digital receipt. |
| `IMPORT` | Customer profile created automatically when importing customer<br>data through Square Dashboard. |
| `INVOICES` | Customer profile created automatically during an invoice payment. |
| `LOYALTY` | Customer profile created automatically when customers provide a<br>phone number for loyalty reward programs during checkout. |
| `MARKETING` | Customer profile created as the result of a campaign managed<br>through Square’s Facebook integration. |
| `MERGE` | Customer profile created as the result of explicitly merging<br>multiple customer profiles through the Square Dashboard or Point of<br>Sale application. |
| `ONLINE_STORE` | Customer profile created through Square's Online Store solution<br>(legacy service). |
| `INSTANT_PROFILE` | Customer profile created automatically as the result of a successful<br>transaction that did not explicitly link to an existing customer profile. |
| `TERMINAL` | Customer profile created through Square's Virtual Terminal. |
| `THIRD_PARTY` | Customer profile created through a Square API call. |
| `THIRD_PARTY_IMPORT` | Customer profile created by a third-party product and imported<br>through an official integration. |
| `UNMERGE_RECOVERY` | Customer profile restored through Square's unmerge recovery<br>process. |

