# Change Log

## Version  (2021-01-21T00:00)
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



## Version  (2020-12-16T00:00)
## Existing API updates

* **Orders API:** 
  * [OrderLineItemPricingBlocklists.](https://developer.squareup.com/reference/square_2020_12_16/objects/OrderLineItemPricingBlocklists) You can explicitly specify taxes and discounts in an order or automatically apply preconfigured taxes and discounts to an order. In addition, you can now block applying these taxes and discounts to a specific [OrderLineItem](https://developer.squareup.com/reference/square_2020_12_16/objects/OrderLineItem) in an [order](https://developer.squareup.com/reference/square_2020_12_16/objects/Order). You add the `pricing_blocklists` attribute to individual line items and specify the `blocked_discounts` and `blocked_taxes` that you do not want to apply. For more information, see [Apply Taxes and Discounts.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts) For example walkthroughs, see [Automatically Apply Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-discounts) and [Automatically Apply Taxes.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes)
  * [OrderPricingOptions](https://developer.squareup.com/reference/square_2020_12_16/objects/OrderPricingOptions). Previously, the `pricing_options` field in an [order](https://developer.squareup.com/reference/square_2020_12_16/objects/OrderPricingOptions) supported only `auto_apply_discounts` to enable the automatic application of preconfigured discounts. Now it also supports `auto_apply_taxes` to enable the automatic application of preconfigured taxes. For more information, see [Automatically apply preconfigured catalog taxes or discounts.](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts#automatically-apply-preconfigured-catalog-taxes-or-discounts)

  * [OrderLineItemTax](https://developer.squareup.com/reference/square_2020_12_16/objects/OrderLineItemTax). It now includes the new `auto_applied` field. It indicates whether the tax was automatically applied using a preconfigured [CatalogTax](https://developer.squareup.com/reference/square_2020_12_16/objects/CatalogTax). 


* **Bookings API:**
  * The [CancelBooking](https://developer.squareup.com/reference/square_2020_12_16/bookings-api/cancel-booking) endpoint supports canceling an accepted or pending booking. 
  * The [booking.created](https://developer.squareup.com/reference/square_2020_12_16/webhooks/booking.created) webhook event notifies when a new booking is created by calling the [CreateBooking](https://developer.squareup.com/reference/square_2020_12_16/bookings-api/cancel-booking) endpoint.
  * The [booking.updated](https://developer.squareup.com/reference/square_2020_12_16/webhooks/booking.updated) webhook event notifies when an existing booking is updated.

* **Catalog API:**
  * [ListCatalog](https://developer.squareup.com/reference/square_2020_12_16/catalog-api/list-catalog), [RetrieveCatalogObject](https://developer.squareup.com/reference/square_2020_12_16/catalog-api/retrieve-catalog-object), and [BatchRetrieveCatalogObjects](https://developer.squareup.com/reference/square_2020_12_16/catalog-api/batch-retrieve-catalog-objects) now support the `catalog_version` filter to return catalog objects of the specified version.
  
* **Customers API:**
  * [SearchCustomers](https://developer.squareup.com/reference/square_2020_12_16/customers-api/search-customers) endpoint. The `email_address`, `group_ids`, `phone_number`, and `reference_id` query filters are now generally available (GA).
  * The [Customer Groups](https://developer.squareup.com/reference/square_2020_12_16/customer-groups-api) API is now GA.
  * The [Customer Segments](https://developer.squareup.com/reference/square_2020_12_16/customer-segments-api) API is now GA.


* **Invoices API:** (beta)
  * [Invoice](https://developer.squareup.com/reference/square_2020_12_16/objects/Invoice) object. Added the  `custom_fields` field, which contains up to two customer-facing, seller-defined fields to display on the invoice. For more information, see [Custom fields.](https://developer.squareup.com/docs/invoices-api/overview#custom-fields)  
    As part of this change, the following objects are added: 
      * [InvoiceCustomField](https://developer.squareup.com/reference/square_2020_12_16/objects/InvoiceCustomField) object
      * [InvoiceCustomFieldPlacement](https://developer.squareup.com/reference/square_2020_12_16/enums/InvoiceCustomFieldPlacement) enum
  * [InvoiceRequestMethod](https://developer.squareup.com/reference/square_2020_12_16/enums/InvoiceRequestMethod) enum. Added the read-only CHARGE_BANK_ON_FILE value, which represents a bank transfer automatic payment method for a recurring invoice.


* **Loyalty API:** (beta)
  * [LoyaltyProgramRewardTier](https://developer.squareup.com/reference/square_2020_12_16/objects/LoyaltyProgramRewardTier) object. The `definition` field in this type is deprecated and replaced by the new `pricing_rule_reference` field. You can use `pricing_rule_reference` fields to retrieve catalog objects that define the discount details for the reward tier. For more information, see [Get discount details for a reward tier.](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details-for-a-reward-tier)  
    As part of this change, the following APIs are deprecated: 
      * [LoyaltyProgramRewardDefinition](https://developer.squareup.com/reference/square_2020_12_16/objects/LoyaltyProgramRewardDefinition) object
      * [LoyaltyProgramRewardDefinitionScope](https://developer.squareup.com/reference/square_2020_12_16/enums/LoyaltyProgramRewardDefinitionScope) enum 
      * [LoyaltyProgramRewardDefinitionType](https://developer.squareup.com/reference/square_2020_12_16/enums/LoyaltyProgramRewardDefinitionType) enum

## New SDK release
* **Square Node.js SDK:**  

  The new [Square Node.js SDK](https://github.com/square/square-nodejs-sdk) is now GA and replaces the deprecated Connect Node.js SDK. For migration information, see the [Connect SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md)
  
  
## Documentation updates

* [Get Right-Sized Permissions with Down-Scoped OAuth Tokens.](https://developer.squareup.com/docs/oauth-api/cookbook/downscoped-access) This new OAuth API topic shows how to get an additional reduced-scope OAuth token with a 24-hour expiration by using the refresh token from the Square account authorization OAuth flow.


## Version  (2020-11-18T00:00)
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


## Version  (2020-10-28T00:00)

## Existing API updates

* **Terminal API.** New endpoints to enable sellers in Canada refund Interac payments.
    *  New endpoints:

       * [CreateTerminalRefund](https://developer.squareup.com/reference/square_2020-10-28/terminal-api/create-terminal-refund)
        * [GetTerminalRefund](https://developer.squareup.com/reference/square_2020-10-28/terminal-api/get-terminal-refund)
       * [CancelTerminalRefund](https://developer.squareup.com/reference/square_2020-10-28/terminal-api/cancel-terminal-refund)
       * [SearchTerminalRefunds](https://developer.squareup.com/reference/square_2020-10-28/terminal-api/search-terminal-refunds)

  * New webhooks:
     * `terminal.refund.created`. Notification of a new Terminal refund request.
     * `terminal.refund.updated`. Notification that a Terminal refund request state is changed.

  * New topic [Refund Interac Payments.](https://developer.squareup.com/docsterminal-api/square-terminal-refunds). Describes how to refund Interac payments.
  
*  **Loyalty API (beta):** 
   *  [SearchLoyaltyAccounts.](https://developer.squareup.com/reference/square_2020-10-28/loyalty-api/search-loyalty-accounts) The endpoint supports a new query parameter to search by customer ID.

* **Locations API:** 
  * [Location](https://developer.squareup.com/reference/square_2020-10-28/objects/Location) object. Has a new read-only field,[full_format_logo_url](https://developer.squareup.com/reference/square_2020-10-28/objects/Location#definition__property-full_format_logo_url), which provides URL of a full-format logo image for the location. 
  * [Webhooks.](https://developer.squareup.com/docswebhooks-api/subscribe-to-events#locations) The Locations API now supports notifications for when a location is created and when a location is updated.

* **Orders API:** 
  * [RetrieveOrder](https://developer.squareup.com/reference/square_2020-10-28/orders-api/retrieve-order), new endpoint. For more information, see the [Retrieve Orders](https://developer.squareup.com/docsorders-api/manage-orders#retrieve-orders) overview.

* **Invoices API (beta):**
  * [Invoice](https://developer.squareup.com/reference/square_2020-10-28/objects/Invoice) object. The [payment_requests](https://developer.squareup.com/reference/square_2020-10-28/objects/Invoice#definition__property-payment_requests) field can now contain up to 13 payment requests, with a maximum of 12 `INSTALLMENT` request types. This is a service-level change that applies to all Square API versions. For more information, see [Payment requests.](https://developer.squareup.com/docsinvoices-api/overview#payment-requests)


