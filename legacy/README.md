# Square Legacy Node.js SDK

Use this JavaScript library to manage Square resources (such as payments, orders, items, and inventory) for your own Square account or on behalf of Square sellers.

* [Requirements](#requirements)
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [Tests](#tests)
* [SDK Reference](#sdk-reference)
* [Deprecated APIs](#deprecated-apis)

## Requirements

Use of the Square Node.js SDK requires:

* Node.js 14 or higher

This SDK supports Node.js versions that are either current, or that are in long-term support status (LTS).  The SDK does not support Node.js versions that have reached their end-of-life (EOL).  For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

For more information, see [Set Up Your Square SDK for a Node.js Project](https://developer.squareup.com/docs/sdks/nodejs/setup-project).

## Quickstart

For more information, see [Square Node.js SDK Quickstart](https://developer.squareup.com/docs/sdks/nodejs/quick-start).

## Usage
For more information, see [Using the Square Node.js SDK](https://developer.squareup.com/docs/sdks/nodejs/using-nodejs-sdk).

## SDK Reference

### Payments
* [Payments]
* [Refunds]
* [Disputes]
* [Checkout]
* [Apple Pay]
* [Cards]
* [Payouts]

### Terminal
* [Terminal]

### Orders
* [Orders]
* [Order Custom Attributes]

### Subscriptions
* [Subscriptions]

### Invoices
* [Invoices]

### Items
* [Catalog]
* [Inventory]

### Customers
* [Customers]
* [Customer Groups]
* [Customer Segments]

### Loyalty
* [Loyalty]

### Gift Cards
* [Gift Cards]
* [Gift Card Activities]

### Bookings
* [Bookings]
* [Booking Custom Attributes]

### Business
* [Merchants]
* [Merchant Custom Attributes]
* [Locations]
* [Location Custom Attributes]
* [Devices]
* [Cash Drawers]

### Team
* [Team]
* [Labor]

### Financials
* [Bank Accounts]

### Online
* [Sites]
* [Snippets]

### Authorization
* [Mobile Authorization]
* [OAuth]

### Webhook Subscriptions
* [Webhook Subscriptions]
## Deprecated APIs

The following Square APIs are [deprecated](https://developer.squareup.com/docs/build-basics/api-lifecycle):

* [Employees] - replaced by the [Team] API. For more information, see [Migrate from the Employees API](https://developer.squareup.com/docs/team/migrate-from-v2-employees).

* [Transactions] - replaced by the [Orders] and [Payments] APIs.  For more information, see [Migrate from the Transactions API](https://developer.squareup.com/docs/payments-api/migrate-from-transactions-api).


[Developer Dashboard]: https://developer.squareup.com/apps
[Square API]: https://squareup.com/developers
[sign up for a developer account]: https://squareup.com/signup?v=developers
[Locations overview]: https://developer.squareup.com/docs/locations-api
[OAuth overview]: https://developer.squareup.com/docs/oauth-api/overview
[Client]: doc/client.md
[Devices]: doc/api/devices.md
[Disputes]: doc/api/disputes.md
[Terminal]: doc/api/terminal.md
[Team]: doc/api/team.md
[Cash Drawers]: doc/api/cash-drawers.md
[Vendors]: doc/api/vendors.md
[Customer Groups]: doc/api/customer-groups.md
[Customer Segments]: doc/api/customer-segments.md
[Bank Accounts]: doc/api/bank-accounts.md
[Payments]: doc/api/payments.md
[Checkout]: doc/api/checkout.md
[Catalog]: doc/api/catalog.md
[Customers]: doc/api/customers.md
[Customer Custom Attributes]: doc/api/customer-custom-attributes.md
[Inventory]: doc/api/inventory.md
[Labor]: doc/api/labor.md
[Loyalty]: doc/api/loyalty.md
[Bookings]: doc/api/bookings.md
[Booking Custom Attributes]: doc/api/booking-custom-attributes.md
[Locations]: doc/api/locations.md
[Location Custom Attributes]: doc/api/location-custom-attributes.md
[Merchants]: doc/api/merchants.md
[Merchant Custom Attributes]: doc/api/merchant-custom-attributes.md
[Orders]: doc/api/orders.md
[Order Custom Attributes]: doc/api/order-custom-attributes.md
[Invoices]: doc/api/invoices.md
[Apple Pay]: doc/api/apple-pay.md
[Refunds]: doc/api/refunds.md
[Subscriptions]: doc/api/subscriptions.md
[Mobile Authorization]: doc/api/mobile-authorization.md
[OAuth]: doc/api/o-auth.md
[Sites]: doc/api/sites.md
[Snippets]: doc/api/snippets.md
[Cards]: doc/api/cards.md
[Payouts]: doc/api/payouts.md
[Gift Cards]: doc/api/gift-cards.md
[Gift Card Activities]: doc/api/gift-card-activities.md
[Employees]: doc/api/employees.md
[Transactions]: doc/api/transactions.md
[Webhook Subscriptions]: doc/api/webhook-subscriptions.md
