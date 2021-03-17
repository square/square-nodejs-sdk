# Change Log

## Version 9.1.0 (2021-03-17)

## Existing API updates

* **Payments API:**
  * [CreatePayment](https://developer.squareup.com/reference/square_2021-03-17/payments-api/create-payment). Until now, the `CreatePayment` endpoint supported only taking card payments. In this release, the API now supports cash and external payments. For more information, see [Take Payments.](https://developer.squareup.com/docs/payments-api/take-payments)
  * [UpdatePayment](https://developer.squareup.com/reference/square_2021-03-17/payments-api/update-payment). This new  endpoint enables developers to change the payment amount and tip amount after a payment is created. For more information, see [Update Payments.](https://developer.squareup.com/docs/payments-api/update-payments)
 
* **Invoices API:**
  * [InvoiceDeliveryMethod](https://developer.squareup.com/reference/square_2021-03-17/enums/InvoiceDeliveryMethod) enum. Added the read-only `SMS` value.  
  * [InvoiceRequestMethod](https://developer.squareup.com/reference/square_2021-03-17/enums/InvoiceRequestMethod) enum (deprecated). Added the read-only `SMS`, `SMS_CHARGE_CARD_ON_FILE`, and `SMS_CHARGE_BANK_ON_FILE` values for backward compatibility.  
  
  These values direct Square to send invoices and receipts to customers using SMS (text message). SMS settings can be configured from first-party Square applications only; they cannot be configured from the Invoices API. Square does not send invoice reminders when using SMS to communicate with customers.


* **Terminal API:**
  * [TerminalCheckout](https://developer.squareup.com/reference/square_2021-03-17/objects/TerminalCheckout). Previously, `TerminalCheckout` only supported tapped, dipped, or swiped credit cards. It now supports manual card entry and e-money. Added the `payment_type` field to denote a request for a manually entered payment card or an e-money payment.
  * [TerminalCheckoutPaymentType.](https://developer.squareup.com/reference/square_2021-03-17enums/TerminalCheckoutPaymentType) A new enum for the Terminal checkout payment types that can be requested.
  * [E-money support](https://developer.squareup.com/docs/terminal-api/e-money-payments) is now available for Terminal checkout requests in Japan.


## SDKs
* **Square Java SDK:**
  * Updated the OkHttp dependency to version 4.9.0.
  * Fixed a `NullPointerException` when passing an empty order ID to the `UpdateOrder` method.

## Documentation updates

* **Multi-language code examples.** Previously, various topics showed only cURL examples for the REST API operations. These topics now show examples in multiple languages. You can use the language drop-down list to choose a language.
  
* [When to Use Connect V1.](https://developer.squareup.com/docs/build-basics/using-connect-v1) Content is revised to reflect the most current information about when to use the Connect V1 API.


## Version 9.0.0 (2021-02-26)
## Existing API updates

* **Customers API:**

  * [New webhooks](https://developer.squareup.com/docs/customers-api/use-the-api/customer-webhooks) (beta). Square now sends notifications for the following events:
     * [customer.created](https://developer.squareup.com/reference/square_2021-02-26/webhooks/customer.created)
     * [customer.deleted](https://developer.squareup.com/reference/square_2021-02-26/webhooks/customer.deleted)
     * [customer.updated](https://developer.squareup.com/reference/square_2021-02-26/webhooks/customer.updated)

* **Orders API:**
   * [CreateOrder](https://developer.squareup.com/reference/square_2021-02-26/orders-api/create-order). Removed the `location_id` field from the request. It was an unused field.

* **Payments API:**
   * [Payment](https://developer.squareup.com/reference/square_2021-02-26/objects/Payment). This type now returns the `card_payment_timeline` [(CardPaymentTimeline](https://developer.squareup.com/reference/square_2021-02-26/objects/CardPaymentTimeline)) as part of the `card_details` field.

* **v1 Items API:**
  * The following endpoints are [retired:](https://developer.squareup.com/docs/build-basics/api-lifecycle)
    * `AdjustInventory`: Use the Square Inventory API [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-02-26/inventory-api/batch-change-inventory) endpoint.
    * `ListInventory`: Use the Square Inventory API  [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-02-26/inventory-api/batch-retrieve-inventory-counts) endpoint.

* **v1 Employees.Timecards:**
  * The following endpoints are retired:
    * `CreateTimecard`: Use the Square Labor API [CreateShift](https://developer.squareup.com/reference/square_2021-02-26/labor-api/create-shift) endpoint.
    * `DeleteTimecard`: Use the Square Labor API [DeleteShift](https://developer.squareup.com/reference/square_2021-02-26/labor-api/delete-shift) endpoint.
    * `ListTimecards`: Use the Square Labor API [SearchShift](https://developer.squareup.com/reference/square_2021-02-26/labor-api/search-shift) endpoint.
    * `RetrieveTimecards`: Use the Square Labor API [GetShift](https://developer.squareup.com/reference/square_2021-02-26/labor-api/get-shift) endpoint.
    * `UpdateTimecard`: Use the Square Labor API [UpdateShift](https://developer.squareup.com/reference/square_2021-02-26/labor-api/update-shift) endpoint.
    * `ListTimecardEvents`: No direct replacement. To learn about replacing the v1 functionality, see the [migration guide.](https://developer.squareup.com/docs/migrate-from-v1/guides/v1-timecards#endpoints)

* **v1 Employees.CashDrawers:**
  * The following endpoints are retired:
    * `ListCashDrawerShifts`: Use the Square CashDrawerShifts API [ListCashDrawerShifts](https://developer.squareup.com/reference/square_2021-02-26/cash-drawers-api/list-cash-drawer-shifts) endpoint.
    * `RetrieveCashDrawerShift`: Use the Square CashDrawerShifts API [RetrieveCashDrawerShift](https://developer.squareup.com/reference/square_2021-02-26/cash-drawers-api/retrieve-cash-drawer-shift) endpoint.
* **v1 Transactions.BankAccounts:**
  * The following endpoints are retired:
    * `ListBankAccounts`: Use the Square Bank Accounts API [ListBankAccounts](https://developer.squareup.com/reference/square_2021-02-26/bank-accounts-api/list-bank-accounts) endpoint.
    * `RetrieveBankAccount`: Use the Square Bank Accounts API [GetBankAccount](https://developer.squareup.com/reference/square_2021-02-26/bank-accounts-api/get-bank-account) endpoint.

## SDKs

* **All Square SDKs:**

    By default, all SDKs send requests to Square's production (https://connect.squareup.com) or sandbox (https://connect.squareupsandbox.com) hosts based on the client's `environment` parameter.

    You now have the option to use a custom URL instead. To use a custom URL, follow the example for your language to set the `environment` parameter to `custom` and the `customUrl` parameter to your URL:

    - Java

      ```java
      new SquareClient.Builder()
        .environment(Environment.CUSTOM)
        .customUrl("https://example.com")
      ```

    - .NET

      ```csharp
      new Square.SquareClient.Builder()
        .Environment(Environment.Custom)
        .CustomUrl("https://example.com")
      ```

    - Node.js

      ```javascript
      new Client({
        environment: Environment.Custom,
        customUrl: 'https://example.com'
      });
      ```

    - PHP

      ```php
      new Square\SquareClient([
        'environment' => Environment::CUSTOM,
        'customUrl' => 'https://example.com',
      ]);
      ```

    - Python

      ```python
      Client(
        environment = 'custom',
        custom_url = 'https://example.com',)
      ```

    - Ruby

      ```ruby
      Square::Client.new(
        environment: 'custom',
        custom_url: 'https://example.com'
      });
      ```


* **Square .NET SDK:**

  Square has overridden the `Equals` and `GetHashCode` methods for models:

  * In the `Equals` override, Square has implemented a field-level comparison.
  * The Square `GetHashCode` override now ensures that hashes are deterministic and unique for each object.

* **Square Node.js SDK:**

  Endpoints that return 64-bit integers now return a `BigInt` object instead of a `Number` object.


* **Connect Node.js SDK:** (deprecated)

  The deprecated Connect Node.js SDK is in the security [maintenance state.](https://developer.squareup.com/docs/build-basics/api-lifecycle#maintenance) It does not receive any bug fixes or API updates from the Square version 2021-02-26 release. However, the SDK will receive support and security patches until it is retired (end of life) in the second quarter of 2021. For more information, including steps for migrating to the [Square Node.js SDK,](https://github.com/square/square-nodejs-sdk) see the [Connect SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md)

## Documentation updates
* **Catalog API:**
  * [Update Catalog Objects.](https://developer.squareup.com/docs/catalog-api/update-catalog-objects) Provides programming guidance to update catalog objects.

* **Inventory API:**
  * [List or retrieve inventory.](https://developer.squareup.com/docs/migrate-from-v1/guides/v1-items#list-or-retrieve-inventory) Migrate the retired v1 endpoint of `ListInventory` to the v2 endpoint of `BatchRetrieveInventoryCounts`. Compare and contrast the programming patterns between the v1 endpoint of `ListInventory` and its v2 counterparts of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-02-26/inventory-api/batch-retrieve-inventory-counts) or [RetrieveInventoryCount](https://developer.squareup.com/reference/square_2021-02-26/inventory-api/retrieve-inventory-count).
  * [Adjust or change inventory.](https://developer.squareup.com/docs/migrate-from-v1/guides/v1-items#adjust-or-change-inventory) Migrate the retired v1 endpoint of `AdjustInventory` to the v2 endpoint of `BatchChangeInventory`. Compare and contrast the programming patterns between the v1 endpoint of `AdjustInventory` and its v2 counterparts of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-02-26/inventory-api/batch-change-inventory).

* **Get Started topic.** Revised the [Get Started](https://developer.squareup.com/docs/get-started) experience. In addition to clarifications, it now includes the use of the Square Sandbox and API Explorer. These are the tools and environments developers use to explore Square APIs.


## Version 8.1.1 (2021-01-27T00:00)
## SDKs
* Fixed Node.js test `testCreateInvoice`. Uses `Invoice.delivery_method` instead of deprecated field `InvoicePaymentRequest.request_method`

## Version 8.1.0 (2021-01-21T00:00)
## Existing API updates

* **Invoices API:** (beta)

  The `InvoicePaymentRequest.request_method` field is deprecated, and its current options are separated into two new fields that better represent their scope:
  * `Invoice.delivery_method` specifies how Square should send invoices, reminders, and receipts to the customer.
  * `InvoicePaymentRequest.automatic_payment_source` specifies the payment method for an automatic payment.

  As part of this change, the [InvoiceDeliveryMethod](https://developer.squareup.com/reference/square_2021-01-21/enums/InvoiceDeliveryMethod) and [InvoiceAutomaticPaymentSource](https://developer.squareup.com/reference/square_2021-01-21/enums/InvoiceAutomaticPaymentSource) enums are added and the `InvoiceRequestMethod` enum is deprecated.

  The Invoices API will continue to accept `request_method` in create and update requests until the field is retired, but starting in this version, `request_method` is not included in returned `Invoice` objects. For more information, see the [migration notes.](https://developer.squareup.com/docs/invoices-api/overview#migrate-InvoicePaymentRequest.request_method)


* **Locations API:**
  * The [Locations.MCC](https://developer.squareup.com/reference/square_2021-01-21/objects/Location#definition__property-mcc) field is now updatable (beta). You can use the `UpdateLocation` endpoint to update the merchant category code (MCC) associated with a seller location. For more information, see [Initialize a merchant category code.](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code)




## SDKs
* **Connect Node.js SDK:** (deprecated)

  The deprecated Connect Node.js SDK is in the security [maintenance state.](https://developer.squareup.com/docs/build-basics/api-lifecycle#maintenance) It will not receive any bug fixes or API updates from the Square version 2021-01-21 release. However, the SDK will receive support and security patches until it is retired (EOL) in Q2, 2021. For more information, including steps for migrating to the [Square Node.js SDK,](https://github.com/square/square-nodejs-sdk) see the [Connect SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md)

## Documentation updates
* **Catalog API:**
  * The [Use Item Options to Manage Item Variations](https://developer.squareup.com/docs/catalog-api/item-options-migration) topic is added. It demonstrates how item variations are usually used and how item options can be used to enable random access to item variations.

* **Inventory API:**
  * The [Inventory API](inventory-api/what-it-does) content is updated. It provides clearer guidance about how to use the API, with a task-oriented TOC and improved code examples.



## Version 8.0.0 (2020-12-16T00:00)
## Existing API updates

* **Orders API:**
  * [OrderLineItemPricingBlocklists.](https://developer.squareup.com/reference/square_2020-12-16/objects/OrderLineItemPricingBlocklists) You can explicitly specify taxes and discounts in an order or automatically apply preconfigured taxes and discounts to an order. In addition, you can now block applying these taxes and discounts to a specific [OrderLineItem](https://developer.squareup.com/reference/square_2020-12-16/objects/OrderLineItem) in an [order](https://developer.squareup.com/reference/square_2020-12-16/objects/Order). You add the `pricing_blocklists` attribute to individual line items and specify the `blocked_discounts` and `blocked_taxes` that you do not want to apply. For more information, see [Apply Taxes and Discounts.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts) For example walkthroughs, see [Automatically Apply Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-discounts) and [Automatically Apply Taxes.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes)
  * [OrderPricingOptions](https://developer.squareup.com/reference/square_2020-12-16/objects/OrderPricingOptions). Previously, the `pricing_options` field in an [order](https://developer.squareup.com/reference/square_2020-12-16/objects/OrderPricingOptions) supported only `auto_apply_discounts` to enable the automatic application of preconfigured discounts. Now it also supports `auto_apply_taxes` to enable the automatic application of preconfigured taxes. For more information, see [Automatically apply preconfigured catalog taxes or discounts.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts#automatically-apply-preconfigured-catalog-taxes-or-discounts)

  * [OrderLineItemTax](https://developer.squareup.com/reference/square_2020-12-16/objects/OrderLineItemTax). It now includes the new `auto_applied` field. It indicates whether the tax was automatically applied using a preconfigured [CatalogTax](https://developer.squareup.com/reference/square_2020-12-16/objects/CatalogTax).


* **Bookings API:**
  * The [CancelBooking](https://developer.squareup.com/reference/square_2020-12-16/bookings-api/cancel-booking) endpoint supports canceling an accepted or pending booking.
  * The [booking.created](https://developer.squareup.com/reference/square_2020-12-16/webhooks/booking.created) webhook event notifies when a new booking is created by calling the [CreateBooking](https://developer.squareup.com/reference/square_2020-12-16/bookings-api/cancel-booking) endpoint.
  * The [booking.updated](https://developer.squareup.com/reference/square_2020-12-16/webhooks/booking.updated) webhook event notifies when an existing booking is updated.

* **Catalog API:**
  * [ListCatalog](https://developer.squareup.com/reference/square_2020-12-16/catalog-api/list-catalog), [RetrieveCatalogObject](https://developer.squareup.com/reference/square_2020-12-16/catalog-api/retrieve-catalog-object), and [BatchRetrieveCatalogObjects](https://developer.squareup.com/reference/square_2020-12-16/catalog-api/batch-retrieve-catalog-objects) now support the `catalog_version` filter to return catalog objects of the specified version.

* **Customers API:**
  * [SearchCustomers](https://developer.squareup.com/reference/square_2020-12-16/customers-api/search-customers) endpoint. The `email_address`, `group_ids`, `phone_number`, and `reference_id` query filters are now generally available (GA).
  * The [Customer Groups](https://developer.squareup.com/reference/square_2020-12-16/customer-groups-api) API is now GA.
  * The [Customer Segments](https://developer.squareup.com/reference/square_2020-12-16/customer-segments-api) API is now GA.


* **Invoices API:** (beta)
  * [Invoice](https://developer.squareup.com/reference/square_2020-12-16/objects/Invoice) object. Added the  `custom_fields` field, which contains up to two customer-facing, seller-defined fields to display on the invoice. For more information, see [Custom fields.](https://developer.squareup.com/docs/invoices-api/overview#custom-fields)
    As part of this change, the following objects are added:
      * [InvoiceCustomField](https://developer.squareup.com/reference/square_2020-12-16/objects/InvoiceCustomField) object
      * [InvoiceCustomFieldPlacement](https://developer.squareup.com/reference/square_2020-12-16/enums/InvoiceCustomFieldPlacement) enum
  * [InvoiceRequestMethod](https://developer.squareup.com/reference/square_2020-12-16/enums/InvoiceRequestMethod) enum. Added the read-only CHARGE_BANK_ON_FILE value, which represents a bank transfer automatic payment method for a recurring invoice.


* **Loyalty API:** (beta)
  * [LoyaltyProgramRewardTier](https://developer.squareup.com/reference/square_2020-12-16/objects/LoyaltyProgramRewardTier) object. The `definition` field in this type is deprecated and replaced by the new `pricing_rule_reference` field. You can use `pricing_rule_reference` fields to retrieve catalog objects that define the discount details for the reward tier. For more information, see [Get discount details for a reward tier.](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details-for-a-reward-tier)
    As part of this change, the following APIs are deprecated:
      * [LoyaltyProgramRewardDefinition](https://developer.squareup.com/reference/square_2020-12-16/objects/LoyaltyProgramRewardDefinition) object
      * [LoyaltyProgramRewardDefinitionScope](https://developer.squareup.com/reference/square_2020-12-16/enums/LoyaltyProgramRewardDefinitionScope) enum
      * [LoyaltyProgramRewardDefinitionType](https://developer.squareup.com/reference/square_2020-12-16/enums/LoyaltyProgramRewardDefinitionType) enum

## New SDK release
* **Square Node.js SDK:**

  The new [Square Node.js SDK](https://github.com/square/square-nodejs-sdk) is now GA and replaces the deprecated Connect Node.js SDK. For migration information, see the [Connect SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md)


## Documentation updates

* [Get Right-Sized Permissions with Down-Scoped OAuth Tokens.](https://developer.squareup.com/docs/oauth-api/cookbook/downscoped-access) This new OAuth API topic shows how to get an additional reduced-scope OAuth token with a 24-hour expiration by using the refresh token from the Square account authorization OAuth flow.


## Version 7.0.0 (2020-11-18T00:00)
## New API releases

* **Bookings API** (beta). This API enables you, as an application developer, to create applications to set up and manage bookings for appointments of fixed duration in which  selected staff members of a Square seller provide specified services in supported locations for particular customers.
  * For an overview, see [Manage Bookings for Square Sellers](https://developer.squareup.com/docs/bookings-api/what-it-is).
  * For technical reference, see [Bookings API](https://developer.squareup.com/reference/square_2020-11-18/bookings-api).

## Existing API updates

*  **Payments API:**
   *  [Payment.](https://developer.squareup.com/reference/square_2020-11-18/objects/Payment) The object now includes the `risk_evaluation` field to identify the Square-assigned risk level associated with the payment. Sellers can use this information to provide the goods and services or refund the payment.

## New SDK release
* **New Square Node.js SDK (beta)**

  The new [Square Node.js SDK](https://github.com/square/square-nodejs-sdk) is available in beta and will eventually replace the deprecated Connect Node.js SDK. For migration information, see the [Connect SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md) The following topics are updated to use the new SDK:
   * [Walkthrough: Integrate Square Payments in a Website](https://developer.squareup.com/docs/payment-form/payment-form-walkthrough)
   * [Verify the Buyer When Using a Nonce for an Online Payment](https://developer.squareup.com/docs/payment-form/cookbook/verify-buyer-on-card-charge)
   * [Create a Gift Card Payment Endpoint](https://developer.squareup.com/docs/payment-form/gift-cards/part-2)


## Documentation Updates

* The **Testing** topics are moved from the end of the table of contents to the top, in the **Home** section under [Testing your App](https://developer.squareup.com/docs/testing-your-app).
* [Pay for orders.]](https://developer.squareup.com/docs/orders-api/pay-for-order) Topic revised to add clarity when to use Payments API and Orders API to pay for an order. The [Orders Integration]](https://developer.squareup.com/docs/payments-api/take-payments?preview=true#orders-integration) topic in Payments API simplified accordingly.
