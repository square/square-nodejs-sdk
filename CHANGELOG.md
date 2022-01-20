# Change Log

For general API and SDK changelogs, see  [Square APIs and SDKs Release Notes](https://developer.squareup.com/docs/changelog/connect).

## Version 17.0.0 (2021-12-15)
### API updates

* **Invoices API:**
  * The Invoices API now supports seller accounts in France. For more information, see [International availability and considerations.](https://developer.squareup.com/docs/invoices-api/overview#international-availability-invoices)
  * France only: [`Invoice`](https://developer.squareup.com/reference/square_2021-12-15/objects/Invoice) object. Added a new `payment_conditions` field, which contains payment terms and conditions that are displayed on the invoice. This field is available only for sellers in France. For more information, see [Payment conditions.](https://developer.squareup.com/docs/invoices-api/overview#payment-conditions)

    Square version 2021-12-15 or higher is required to set this field, but it is returned in `ListInvoices` and `RetrieveInvoice` requests for all Square versions.

* **Cards API**
  * Added the `CARD_DECLINED_VERIFICATION_REQUIRED` error code to the list of error codes returned by [CreateCard](https://developer.squareup.com/reference/square_2021-12-15/cards-api/CreateCard). 
* **Catalog API:**
  * [CreateCatalogImage](https://developer.squareup.com/reference/square_2021-12-15/catalog-api/create-catalog-image) endpoint
    *  Updated to support attaching multiple images to a [Catalogbject](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogObject) instance. 
    *  Added `is_primary` option to let the caller choose to attach an image as the primary image on the object for display with the Square Point of Sale and other first-party Square applications. For more information, see [Upload and Attach Images.](https://developer.squareup.com/docs/catalog-api/upload-and-attach-images)
  * [CatalogObject](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogObject) object
    * Retired the `image_id` field, used to hold a single image object attached to an image-supporting object of the `ITEM`, `ITEM_VARIATION`, `CATEGORY`, or `MODIFIER_LIST` type, in Square API version 2021-12-15 and later, which supports attachment of multiple images. The `image_id` field is still supported in Square API version prior to 2021-12-15. For more information, see [Work with Images: Overview.](https://developer.squareup.com/docs/catalog-api/cookbook/create-catalog-image#overview)
  * [CatalogItem](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogItem), [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogItemVariation), [CatalogCategory](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogCategory) or [CatalogModifierList](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogModifierList) object
    *  Added `image_ids` list to hold attached image objects. The first element of `image_ids` list refers to the primary image attached to the catalog object. For more information, see [Work with Images: Overview.](https://developer.squareup.com/docs/catalog-api/cookbook/create-catalog-image#overview)
  * [UpdateCatalogImage](https://developer.squareup.com/reference/square_2021-12-15/catalog-api/update-catalog-image) endpoint
    *  Added to support replacing the image file encapsulated by an existing [CatalogImage](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogImage) object. For more information, see [Replace image file on a CatalogImage object.](https://developer.squareup.com/docs/catalog-api/manage-images#replace-the-image-file-of-a-catalogimage-object)

  * [CatalogPricingRule](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogPricingRule) object
    * Added  [minimum_order_subtotal_money](https://developer.squareup.com/reference/square_2021-12-15/objects/CatalogPricingRule#definition__property-minimum_order_subtotal_money) field to require that the minimum order subtotal be reached before the pricing rule may be applied. 

### Documentation updates
* Added a new top-level node for Developer Tools. This node includes such features as Sandbox, API Logs, and Webhooks.
* Added [Webhook Event Logs (beta)](https://developer.squareup.com/docs/devtools/webhook-logs) documentation to the Developer Tools node.


## Version 16.0.0 (2021-11-17)
## API updates

* **Cards API.** The [Card](https://developer.squareup.com/reference/square_2021-11-17/objects/card) object and webhook response body for all webhooks are updated updated with fields.
  * Added the [Card.merchant_id](https://developer.squareup.com/reference/square_2021-11-17/objects/Card#definition__property-merchant_id) field to identify the Square seller that stored the payment card on file. 
  * Added a [Card](https://developer.squareup.com/reference/square_2021-11-17/objects/Card) object to the response bodies of all [Cards API webhooks](https://developer.squareup.com/docs/webhooks/v2webhook-events-tech-ref#cards-api). The `Card` is added as a child of the `data.object` field in all webhook responses.

* **Bookings API.** The new [ListBookings](https://developer.squareup.com/reference/square_2021-11-17/bookings-api/list-bookings) endpoint supports browsing a collection of bookings of a seller. For more information, see [Use the Bookings API: list bookings.](https://developer.squareup.com/docs/bookings-api/use-the-api#list-bookings) 

* **Subscriptions API.** Introduced the new [actions framework](https://developer.squareup.com/docs/subscriptions-api/overview#subscriptions-actions-overview) representing scheduled, future changes to subscriptions. 
  *  The new [PauseSubscription](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/pause-subscription) endpoint supports temporarily pausing a subscription. Calling this endpoint schedules a new `PAUSE` action.
  * The new [SwapPlan](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/swap-plan) endpoint supports changing the subscription plan associated with a single customer. Calling this endpoint schedules a new `SWAP_PLAN` action.
  * The new [DeleteSubscriptionAction](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/delete-subscription-action) endpoint supports deleting a scheduled action.
  * The [ResumeSubscription](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/resume-subscription) endpoint has been updated to support resuming a paused subscription. Calling this endpoint schedules a new `RESUME` action. 
  * The [CancelSubscription](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/cancel-subscription) endpoint now schedules a new `CANCEL` action.
  * Added an optional `include` body parameter to the [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-11-17/subscriptions-api/search-subscriptions) endpoint. Include `actions` in the request to return all [actions](https://developer.squareup.com/docs/subscriptions-api/overview#subscriptions-actions-overview) associated with the subscriptions.

## Documentation Update

* **Migration  Guides.**
  * [Migrate from the Connect V1 Refunds API.](https://developer.squareup.com/docs/migrate-from-v1/guides/v1-refunds)  The topic is updated to include information to migrate from  the v1 ListRefunds endpoint to the appropriate Square API counterparts.  
  * [Migrate from the Connect V1 Payments API.](https://developer.squareup.com/docs/migrate-from-v1/guides/v1-payments)  The topic provides developers information to migrate from the Connect V1 Payments API to the appropriate Square API counterparts.  

  Code that relies on these V1 API endpoints must be updated to avoid breaking when these APIs reach retirement.


## Version 15.0.0 (2021-10-20)
## API updates
* **Transactions API.** Three previously deprecated endpoints (`ListRefunds`,  `Charge`, and `CreateRefund`) in the [Transactions API](https://developer.squareup.com/reference/square_2021-10-20/transactions-api) are removed from Square API version 2021-10-20 and later. These endpoints will work if you are using Square API versions prior to 2021-10-20. However, these endpoints will eventually be retired from all Square versions. 

   * Instead of the Transactions API `Charge` endpoint, use the Payments API [CreatePayment](https://developer.squareup.com/reference/square_2021-10-20/payments-api/create-payment) endpoint.
   * Instead of the Transactions API `CreateRefund` endpoint, use the Refunds API [RefundPayment](https://developer.squareup.com/reference/square_2021-10-20/payments-api/refund-payment) endpoint.
   * Instead of the Transactions API `ListRefunds` endpoint, use the Refunds API [ListPaymentRefund](https://developer.squareup.com/reference/square_2021-10-20/payments-api/list-payment-refunds) endpoint. 

* **Payments API:** 
  * [Payment](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment) object.
    * Added the [device_details](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-device_details) read-only field to view details of the device used to take a payment. This `Payment`-level field provides device information for all types of payments. Previously, device details were only available for card payments (`Payment.card_details.device_details`), which is now deprecated.
    * Added the [team_member_id](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-team_member_id) that applications can use to view the ID of the [TeamMember](https://developer.squareup.com/reference/square_2021-10-20/objects/TeamMember) associated with the payment. Use this field instead of the `Payment.employee_id` field, which is now deprecated. 
    * Added the [application_details](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-application_details) read-only field to view details of the application that took the payment. 

    * These `Payment` fields have moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle) (GA) state:[tip_money](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-tip_money), [delay_duration](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-delay_duration), [statement_description_identifier](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-statement_description_identifier), [delay_duration](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-delay_duration), [delay_action](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-delay_action), [delayed_until](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-delayed_until), and [statement_description_identifier](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-statement_description_identifier).

    * The [ACH Bank Transfer Payments](https://developer.squareup.com/docs/payments-api/take-payments/ach-payments) feature has moved to the GA state. Accordingly, the [bank_account_details](https://developer.squareup.com/reference/square_2021-10-20/objects/Payment#definition__property-bank_account_details) field (and its [BankAccountPaymentDetails](https://developer.squareup.com/reference/square_2021-10-20/objects/BankAccountPaymentDetails) type) are moved to the GA state. 
  * [CreatePayment](https://developer.squareup.com/reference/square_2021-10-20/payments-api/create-payment) endpoint. 
    * Added the [team_member_id](https://developer.squareup.com/reference/square_2021-10-20/payments-api/create-payment#request__property-team_member_id) request field to record the ID of the team member associated with the payment.
    * The [accept_partial_authorization](https://developer.squareup.com/reference/square_2021-10-20/payments-api/create-payment#request__property-accept_partial_authorization) request field has moved to the GA state.
  * [CompletePayment](https://developer.squareup.com/reference/square_2021-10-20/payments-api/complete-payment) endpoint. Added the `version_token` request field to support optimistic concurrency. For more information, see [Delayed capture of a card payment.](https://developer.squareup.com/docs/payments-api/take-payments/card-payments#delayed-capture-of-a-card-payment) 

* **Refunds API:**
  * [RefundPayment](https://developer.squareup.com/reference/square_2021-10-20/refunds-api/refund-payment) endpoint.    
    * Added the `team_member_id` request field to record the ID of the team  member associated with the refund. 
    * Added the `payment_version_token` request field to support optimistic concurrency. For more information, see [Refund  Payment.](https://developer.squareup.com/docs/payments-api/refund-payments#optimistic-concurrency)

* **Customers API:**
  * [Customer](https://developer.squareup.com/reference/square_2021-10-20/objects/Customer) object. Added a new `tax_ids` field of the [CustomerTaxIds](https://developer.squareup.com/reference/square_2021-10-20/objects/CustomerTaxIds) type, which can contain the EU VAT ID of the customer. This field is available only for customers of sellers in France, Ireland, or the United Kingdom. For more information, see [Customer tax IDs.](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids)

  * [UpdateCustomer](https://developer.squareup.com/reference/square_2021-10-20/customers-api/update-customer) endpoint. The Customers API now returns a `400 BAD_REQUEST` error if the request body does not contain any fields. For earlier Square versions, the Customers API will continue to return a `200 OK` response along with the customer profile. For more information, see [Migration notes.](https://developer.squareup.com/docs/customers-api/what-it-does#migration-notes)

* **Invoices API:**
  * [InvoiceRecipient](https://developer.squareup.com/reference/square_2021-10-20/objects/InvoiceRecipient) object. Added a new, read-only `tax_ids` field of the [InvoiceRecipientTaxIds](https://developer.squareup.com/reference/square_2021-10-20/objects/InvoiceRecipientTaxIds) type, which can contain the EU VAT ID of the invoice recipient. This field is available only for customers of sellers in Ireland or the United Kingdom. If defined, `tax_ids` is returned for all Square API versions. For more information, see [Invoice recipient tax IDs.](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids)
  * Square now sends emails for test invoices that are published in the Sandbox environment.

* **Catalog API:**
  * [CatalogSubscriptionPlan.name](https://developer.squareup.com/reference/square_2021-10-20/objects/CatalogSubscriptionPlan#definition__property-name) can be updated after the subscription plan is created. The change is retroactively applicable to prior versions of the Square API.

* **Subscriptions API:**
  * The new [SubscriptionSource](https://developer.squareup.com/reference/square_2021-10-20/objects/SubscriptionSource) data type is introduced to encapsulate the source where a subscription is created. The new `SubscriptionSource.name` value is propagated to the `Order.source` attribute when an order is made on the subscription. The new feature is retroactively applicable to prior versions of the Square API.
  * The new [Subscription.source](https://developer.squareup.com/reference/square_2021-10-20/objects/Subscription#definition__property-source) attribute is introduced to indicate the source where the subscription was created. This new feature is retroactively applicable to prior versions of the Square API. 
  * The new [SearchSubscriptionsFilter.source_names](https://developer.squareup.com/reference/square_2021-10-20/objects/SearchSubscriptionFilter#definition__property-source_names) query expression is introduced to enable search for subscriptions by the subscription source name. This new feature is retroactively applicable to prior versions of the Square API.


## Version 14.1.0 (2021-09-15)
## API updates

* **Invoices API:** 
  * [Invoice](https://developer.squareup.com/reference/square_2021-09-15/objects/Invoice) object. Added a new, optional `sale_or_service_date` field used to specify the date of the sale or the date that the service is rendered. If specified, this date is displayed on the invoice.

* **Orders API:**
   * [CreateOrder](https://developer.squareup.com/reference/square_2021-09-15/orders-api/create-order). The endpoint now supports creating temporary, draft orders. For more information, see [Create a draft order.](https://developer.squareup.com/docs/orders-api/create-orders#create-a-draft-order)
   * [CloneOrder](https://developer.squareup.com/reference/square_2021-09-15/orders-api/clone-order). The Orders API supports this new endpoint to clone an existing order. For more information, see [Clone an order.](https://developer.squareup.com/docs/orders-api/create-orders#clone-an-order)
   * These fields have moved to the [general availability (GA)](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) state: [OrderLineItem.item_type](https://developer.squareup.com/reference/square_2021-09-15/objects/OrderLineItem#definition__property-item_type), [OrderServiceCharge.type](https://developer.squareup.com/reference/square_2021-09-15/objects/OrderServiceCharge#definition__property-type), and `catalog_version` field on every order type that contains this field.

* **Team API:**
  * [SearchTeamMembersFilter](https://developer.squareup.com/reference/square_2021-09-15/objects/SearchTeamMembersFilter) object now has an `is_owner` field that when set, causes a team member search to return only the seller who owns a Square account.

* **Terminal API:**
  * [TerminalCheckout](https://developer.squareup.com/reference/square_2021-09-15/objects/TerminalCheckout) object.   The `customer_id` field is now GA. 

## Documentation updates
* **OAuth API:**
  * Revised API descriptions for the ObtainToken and Authorize endpoints. Clarified that the Authorize endpoint is not a callable API but is used to direct the seller to the Square authorization page. For more information about the Authorize endpoint, see [Create the Redirect URL and Square Authorization Page URL.](https://developer.squareup.com/docs/oauth-api/create-urls-for-square-authorization)


## Version 13.1.0 (2021-08-18)
## API updates 

* **Customers API:**
  * [Customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) object. The `version` field has moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) (GA) state. This field represents the current version of the customer profile and enables optimistic concurrency control. For more information, see [Customer profile versions and optimistic concurrency support.](https://developer.squareup.com/docs/customers-api/what-it-does#customer-profile-versions-and-optimistic-concurrency-support) 
  * [ListCustomers](https://developer.squareup.com/reference/square_2021-08-18/customers-api/list-customers) endpoint. The new, optional `limit` query parameter can be used to specify the maximum number of results in a paginated response.

* **Customer Groups API:**
  * [ListCustomerGroups](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/list-customer-groups) endpoint. The new, optional `limit` query parameter can be used to specify the maximum number of results in a paginated response.

* **Customer Segments API:**
  * [ListCustomerSegments](https://developer.squareup.com/reference/square_2021-08-18/customer-segments-api/list-customer-segments) endpoint. The new, optional `limit` query parameter can be used to specify the maximum number of results in a paginated response.

* **Invoices API:**
  * Square Invoices Plus is a monthly subscription plan that allows access to premium invoice features. After Invoices Plus is launched in September 2021, a subscription will be required to create invoices with custom fields and installment payments. For more information, including how to handle new errors, see [Premium features available with Invoices Plus.](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription)

* **Loyalty API:**
  * [LoyaltyAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) object. Added a new `expiring_point_deadlines` field that specifies when points in the account balance are scheduled to expire. This field contains a list of [LoyaltyAccountExpiringPointDeadline](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccountExpiringPointDeadline) objects. For more information, see [Expiring points.](https://developer.squareup.com/docs/loyalty-api/overview#expiring-points)

## Documentation updates

* [App Marketplace.](https://developer.squareup.com/docs/app-marketplace) Added the following topics:
  * [How to apply.](https://developer.squareup.com/docs/app-marketplace#how-to-apply) Documented the process to list an application on the Square App Marketplace.
  * [App Marketplace API Usage Requirements.](https://developer.squareup.com/docs/app-marketplace/requirements) Added a topic that describes a set of API usage requirements and recommendations for partner applications.   

* [Automatic communications from Square about invoices.](https://developer.squareup.com/docs/invoices-api/overview#automatic-communication-from-square-to-customers) Documented the invoice-related communications sent from Square to customers and sellers. 

* [Snippets best practices.](https://developer.squareup.com/docs/snippets-api/overview#best-practices) Documented best practices and additional requirements for snippets and applications that integrate with the Snippets API.


## Version 13.0.0 (2021-07-21)
## API updates

* **Orders  API:** 
  * [OrderServiceCharge](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderServiceCharge) object. Added a new field, `type`. It identifies the service charge type.

  * [OrderQuantityUnit](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderQuantityUnit), 
    [OrderLineItem](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderLineItem), 
    [OrderLineItemDiscount](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderLineItemDiscount), 
    [OrderLineItemModifier](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderLineItemModifier), 
    [OrderLineItemTax](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderLineItemTax), 
    [OrderServiceCharge](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderServiceCharge), 
    [OrderReturnLineItem](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderReturnLineItem), 
    [OrderReturnLineItemModifier](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderReturnLineItemModifier), 
    [OrderReturnServiceCharge](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderReturnServiceCharge), 
    [OrderReturnTax](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderReturnTax), and 
    [OrderReturnDiscount](https://developer.squareup.com/reference/square_2021-07-21/objects/OrderReturnDiscount) objects. Added a new field, `catalog_version`.
* **Locations API:**
  * [Location](https://developer.squareup.com/reference/square_2021-07-21/objects/Location) object. Added a new field `tax_ids` of type `TaxIds`. In the current implementation, sellers in Ireland and France can configure tax IDs during the onboarding process. They can also provide the information later by updating the location information in the Seller Dashboard. These tax IDs appear in this field.

* **Loyalty API:**
  * As of July 15, 2021, the country in which the seller’s Square account is activated determines whether Square uses pretax or post-tax purchase amounts to calculate accrued points. This change supports consumption tax models, such as value-added tax (VAT). Previously, point accrual was based on pretax purchase amounts only. This change does not affect the existing point balance of loyalty accounts. For more information, see [Availability of Square Loyalty.](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability)

* **Payments API:** 
  * [UpdatePayment](https://developer.squareup.com/reference/square_2021-07-21/payments-api/update-payment). The endpoint has moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) (GA) state. Also, you can now update gift card payments (similar to card, cash, and external payments).

* **Subscriptions API:**
  * The [Subscriptions API](https://developer.squareup.com/docs/subscriptions-api/overview) has moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) (GA) state.
  * [CatalogSubscriptionPlan](https://developer.squareup.com/reference/square_2021-07-21/objects/CatalogSubscriptionPlan) object. The `name` and `price` are now write-once fields. You specify these values at the time  of creating a plan. After the plan is created, these fields cannot be updated. This makes a subscription plan immutable. 

* **Inventory API:**
  * [RetrieveInventoryTransfer.](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Retrieve-Inventory-Transfer) This new endpoint is introduced to support the retrieval of inventory transfer.
  * [RetrieveInventoryChanges.](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Retrieve-Inventory-Changes) This endpoint is deprecated. Its support ends when it is retired in about 12 months.  
  * The following endpoints have updated URLs to conform to the standard REST API convention. For more information about migrating deprecated URLs to updated URLs in your application, see [Inventory API: Migrate to Updated API Entities.](https://developer.squareup.com/docs/inventory-api/migrate-to-updated-api-entities)
    * [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Retrieve-Inventory-Adjustment)
    * [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Batch-Change-Inventory)
    * [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Batch-Retrieve-Inventory-Changes) 
    * [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Batch-Retrieve-Inventory-Counts)
    * [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-07-21/inventory-api/Retrieve-Inventory-Physical-Count)

## Documentation updates
* **Webhooks.** Revised the steps and descriptions for creating and using webhooks. For more information, see [Webhooks Overview.](https://developer.squareup.com/docs/webhooks/overview)


## Version 12.0.0 (2021-06-16)
## New API releases
* **Gift Cards API and Gift Card Activities API.** Gift card support is integrated in the [Square Seller Dashboard](https://squareup.com/dashboard/) and the [Square Point of Sale](https://squareup.com/us/en/point-of-sale)  application. Sellers can sell, redeem, track, and reload Square gift cards. Now developers can use the [Gift Cards API](https://developer.squareup.com/reference/square_2021-06-16/gift-cards-api) and the [Gift Card Activities API](https://developer.squareup.com/reference/square_2021-06-16/gift-card-activities-api) to integrate Square gift cards into third-party applications. For more information, see [Gift Cards API Overview.](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api)

* **Cards API.** The [Cards API](https://developer.squareup.com/reference/square_2021-06-16/cards-api) replaces the deprecated `CreateCustomerCard` and `DeleteCustomerCard` endpoints and lets an application save a customer payment card on file along with other card management operations. For more information, see [Cards API Overview.](https://developer.squareup.com/docs/cards-api/overview) 

## API updates
* **Catalog API:**
  * [CatalogPricingRule](https://developer.squareup.com/reference/square_2021-06-16/objects/CatalogPricingRule). Support of the [customer group discount](https://developer.squareup.com/reference/square_2021-06-16/objects/CatalogPricingRule#definition__property-customer_group_ids_any) becomes GA. For more information, see [CreateCustomerGroupDiscounts.](https://developer.squareup.com/docs/catalog-api/configure-customer-group-discounts)
  * [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-06-16/objects/CatalogItemVariation). Offers Beta support of the [stockable](https://developer.squareup.com/reference/square_2021-06-16/objects/CatalogItemVariation#definition__property-stockable) and [stockable_conversion](https://developer.squareup.com/reference/square_2021-06-16/objects/CatalogItemVariation#definition__property-stockable_conversion) attributes to enable sales of a product in multiple measurement units.  
  * [UpsertCatalogObject](https://developer.squareup.com/reference/square_2021-06-16/catalog-api/upsert-catalog-object) and [BatchUpsertCatalogObjects](https://developer.squareup.com/reference/square_2021-06-16/catalog-api/batch-upsert-catalog-objects). Support creating an item with stockable and non-stockable variations with a specified stock conversion between the two. For more information, see [Enable Stock Conversion.](https://developer.squareup.com/docs/inventory-api/enable-stock-conversion)
  * [UpsertCatalogObject](https://developer.squareup.com/reference/square_2021-06-16/catalog-api/upsert-catalog-object) and [BatchUpsertCatalogObjects](https://developer.squareup.com/reference/square_2021-06-16/catalog-api/batch-upsert-catalog-objects). Require that an item be created with at least one variation. Otherwise, an `INVALID_REQUEST` error is returned. 
  
* **Customers API:**
  * Using the Customers API to manage cards on file is deprecated:
    * The [CreateCustomerCard](https://developer.squareup.com/reference/square_2021-06-16/customers-api/create-customer-card) endpoint is deprecated and replaced by the [CreateCard](https://developer.squareup.com/reference/square_2021-06-16/cards-api/create-card) and [LinkCustomerToGiftCard](https://developer.squareup.com/reference/square_2021-06-16/gift-cards-api/link-customer-to-gift-card) endpoints.
    * The [DeleteCustomerCard](https://developer.squareup.com/reference/square_2021-06-16/customers-api/delete-customer-card) endpoint is deprecated and replaced by the [DisableCard](https://developer.squareup.com/reference/square_2021-06-16/cards-api/disable-card) and [UnlinkCustomerFromGiftCard](https://developer.squareup.com/reference/square_2021-06-16/gift-cards-api/unlink-customer-from-gift-card) endpoints.
    * The `cards` field in the [Customer](https://developer.squareup.com/reference/square_2021-06-16/objects/Customer) object is deprecated and replaced by the following endpoints:
      * [ListCards](https://developer.squareup.com/reference/square_2021-06-16/cards-api/list-cards) to retrieve credit and debit cards on file.
      * [ListGiftCards](https://developer.squareup.com/reference/square_2021-06-16/gift-cards-api/list-gift-cards) to retrieve gift cards on file.  

       For more information, see [Migrate to the Cards API and Gift Cards API.](https://developer.squareup.com/docs/customers-api/use-the-api/integrate-with-other-services#migrate-customer-cards)
     
     * [Customer](https://developer.squareup.com/reference/square_2021-06-16/objects/Customer) object. In the `cards` field, the IDs for gift cards now have a `gftc:` prefix followed by the card number. This is a service-level change that applies to all Square API versions.

* **Disputes API:** 
  * The Disputes API is now GA. 
  * `RemoveDisputeEvidence`. Renamed to [DeleteDisputeEvidence](https://developer.squareup.com/reference/square_2021-06-16/objects/DeleteDisputeEvidence).
  * [CreateDisputeEvidenceFile.](https://developer.squareup.com/reference/square_2021-06-16/objects/CreateDisputeEvidenceFile) The URL is changed from `/v2/disputes/{dispute_id}/evidence_file` to `/v2/disputes/{dispute_id}/evidence-files`.
  * [CreateDisputeEvidenceText.](https://developer.squareup.com/reference/square_2021-06-16/objects/CreateDisputeEvidenceText) The URL is changed from `/v2/disputes/{dispute_id}/evidence_text` to `/v2/disputes/{dispute_id}/evidence-text`.
  * [ListDisputeEvidence.](https://developer.squareup.com/reference/square_2021-06-16/objects/ListDisputeEvidence) The  endpoint now returns a pagination cursor and accepts a pagination cursor in requests.
  * `DISPUTES_READ` and `DISPUTES_WRITE` permissions are required for all Disputes API endpoints instead of `PAYMENTS_READ` and `PAYMENTS_WRITE`.
  * [DisputeEvidence.](https://developer.squareup.com/reference/square_2021-06-16/objects/DisputeEvidence) The `evidence_id` field is deprecated and replaced by the `id` field.
  * The `dispute.state.changed` webhook is renamed to `dispute.state.updated`.
  * [Dispute](https://developer.squareup.com/reference/square_2021-06-16/objects/Dispute) object. The following breaking changes are made: 
    * The `dispute_id` field is deprecated and replaced by the `id` field.
    * The `reported_date` field is deprecated and replaced by the `reported_at` field.
    * The `evidence_ids` field is deprecated with no replacement.

  For more information about the GA release of the Disputes API, see [Disputes Overview.](https://developer.squareup.com/docs/disputes-api/overview) 
  

* **Inventory API:**
  * [CatalogStockConversion](https://developer.squareup.com/docs/{SQUARE_TECH_REF}/objects/CatalogStockConversion) (Beta). Enables selling a product in multiple measurement units and lets Square sellers manage inventory counts of the product's stockable and a non-stockable variations in a self-consistent manner. For more information, see [Enable Stock Conversion.](https://developer.squareup.com/docs/inventory-api/enable-stock-conversion)

* **Invoices API:**
  * [CreateInvoice.](https://developer.squareup.com/reference/square_2021-06-16/invoices-api/create-invoice) The `location_id` field is now optional and defaults to the location ID of the associated order. If specified in the request, the value must match the location ID of the associated order. This is a service-level change that applies to all Square API versions.

* **Loyalty API:**
  * [LoyaltyProgramAccrualRule](https://developer.squareup.com/reference/square_2021-06-16/objects/LoyaltyProgramAccrualRule) object. New `excluded_category_ids` and `excluded_item_variation_ids` fields that represent any categories and items that are excluded from accruing points in spend-based loyalty programs.

* **Subscriptions API:**
  * [Subscription.](https://developer.squareup.com/reference/square_2021-06-16/objects/Subscription) The `paid_until_date` field is renamed to `charge_through_date`.
  * [UpdateSubscription.](https://developer.squareup.com/reference/square_2021-06-16/subscriptions-api/update-subscription) The `version` field is now optional because it can update only the latest version of a subscription.

  * [CreateSubscription.](https://developer.squareup.com/reference/square_2021-06-16/subscriptions-api/create-subscription) The `idempotency_key` field is now optional in the request. If you do not provide it, each `CreateSubscription` assumes a unique (never used before) value and creates a subscription for each call.

## Documentation updates
* [Order fee structure.](https://developer.squareup.com/docs/payments-pricing#orders-api-fee-structure) Documented the transaction fee related to using the Orders API with a non-Square payments provider.


## Version 11.0.0 (2021-05-13)
## New API releases

* **Sites API.** The [Sites API](https://developer.squareup.com/reference/square_2021-05-13/sites-api) lets you retrieve basic details about the Square Online sites that belong to a Square seller. For more information, see [Sites API Overview.](https://developer.squareup.com/docs/sites-api/overview)


* **Snippets API.** The [Snippets API](https://developer.squareup.com/reference/square_2021-05-13/snippets-api) lets you manage snippets that provide custom functionality on Square Online sites. A snippet is a script that is injected into all pages on a site, except for checkout pages. For more information, see [Snippets API Overview.](https://developer.squareup.com/docs/snippets-api/overview)

The Sites API and Snippets API are publicly available to all developers as part of an early access program (EAP). For more information, see [Early access program for Square Online APIs.](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis)

## API updates

* **Payments API.**
  * [CreatePayment.](https://developer.squareup.com/reference/square_2021-05-13/payments-api/create-payment) The endpoint now supports ACH bank transfer payments. For more information, see [ACH Payment](https://developer.squareup.com/docs/payments-api/take-payments/ach-payments).

* **Loyalty API:**
  * The [Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview) has moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) (GA) state.
  
  * The [ListLoyaltyPrograms](https://developer.squareup.com/reference/square_2021-05-13/loyalty-api/list-loyalty-programs) endpoint is deprecated and replaced by the [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-05-13/loyalty-api/retrieve-loyalty-program) endpoint when used with the `main` keyword.
  
  * [LoyaltyAccount](https://developer.squareup.com/reference/square_2021-05-13/objects/LoyaltyAccount)  object. The `mappings` field is retired and replaced by `mapping`. 

  * [LoyaltyAccountMapping](https://developer.squareup.com/reference/square_2021-05-13/objects/LoyaltyAccountMapping) object. The `type` and `value` fields are retired and replaced by `phone_number`.  
    
    Starting in Square version 2021-05-13: 
    * `mappings` is not accepted in `CreateLoyaltyAccount` requests or returned in responses.  
    * `type` and `value` are not accepted in `CreateLoyaltyAccount` or `SearchLoyaltyAccounts` requests or returned in responses.
    
    For more information, see [Migration notes.](https://developer.squareup.com/docs/loyalty-api/overview#migration-notes)
  
## Documentation updates
* **Getting Started** Added step that shows how to use the API Logs to examine a transaction. 


## Version 10.0.0 (2021-04-21)
## New API releases

## Existing API updates

* **Subscriptions API:** 
  *  [ResumeSubscription.](https://developer.squareup.com/reference/square_2021-04-21/subscriptions-api/resume-subscription) This new endpoint enables applications to resume [deactivated subscriptions.](https://developer.squareup.com/docs/subscriptions-api/overview#deactivated-subscriptions) After a subscription is created, there are events that can make a subscription non-billable, causing Square to deactivate the subscription. A seller can also resume deactivated subscriptions in the Seller Dashboard. Applications can call  [ListSubscriptionEvents](https://developer.squareup.com/reference/square_2021-04-21/subscriptions-api/list-subscription-events) to determine why Square deactivated a subscription.
 
* **Customers API:**

  * [Customer](https://developer.squareup.com/reference/square_2021-04-21/objects/Customer) object:
    * New `version` field (beta). This field represents the current version of the customer profile. You can include it in your `UpdateCustomer` and `DeleteCustomer` requests to  enable optimistic concurrency. For more information, see [Customer profile versions and optimistic concurrency support.](https://developer.squareup.com/docs/customers-api/what-it-does#customer-profile-versions-and-optimistic-concurrency-support) 
    * The `groups` field and corresponding `CustomerGroupInfo` object are retired.
    
  * [Customer webhooks](https://developer.squareup.com/docs/customers-api/use-the-api/customer-webhooks) have moved to the [general availability](https://developer.squareup.com/docs/build-basics/api-lifecycle#general-availability) (GA) state. Event notifications now include the `version` field (beta).
  
* **Invoices API:**

  * The [Invoices API](https://developer.squareup.com/docs/invoices-api/overview) has moved to the GA state.

  * [Invoice](https://developer.squareup.com/reference/square_2021-04-21/objects/Invoice) object:
    * A new required `accepted_payment_methods` field that defines the methods of payment that customers can use to pay an invoice on the Square-hosted invoice page. Valid values are defined in the new [InvoiceAcceptedPaymentMethods](https://developer.squareup.com/reference/square_2021-04-21/objects/InvoiceAcceptedPaymentMethods) enum. For more information, see the [migration notes.](https://developer.squareup.com/docs/invoices-api/overview#migration-notes)
    * A new `subscription_id` field, which is included in invoices created for subscription billing.

* **Loyalty API:** (beta)
 
  * [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-04-21/loyalty-api/retrieve-loyalty-program) endpoint. This new endpoint accepts a program ID or the `main` keyword and returns the loyalty program in a seller's account. For more information, see [Retrieve a loyalty program.](https://developer.squareup.com/docs/loyalty-api/overview#retrieve-loyalty-program) This endpoint is preferred over the `ListLoyaltyPrograms` endpoint.

  * Introduced a new mapping implementation for loyalty accounts:
    * [LoyaltyAccount](https://developer.squareup.com/reference/square_2021-04-21/objects/LoyaltyAccount) object. Added the `mapping` field (of type `LoyaltyAccountMapping`), which is used to associate the loyalty account with a buyer. This field is recommended over the `mappings` field.
    * [LoyaltyAccountMapping](https://developer.squareup.com/reference/square_2021-04-21/objects/LoyaltyAccountMapping) object. Added the `phone_number` field to represent a phone number mapping. This field is recommended over the `type` and `value` fields.

  * A new [loyalty.program.created](https://developer.squareup.com/reference/square_2021-04-21/webhooks/loyalty.program.created) webhook. Square now publishes an event notification when a loyalty program is created in the Square Seller Dashboard.

* **Inventory API:** 
  * [InventoryChange](https://developer.squareup.com/reference/square_2021-04-21/objects/InventoryChange) can now have its own measurement unit.

* **Catalog API:** 
  * [CatalogItem](https://developer.squareup.com/reference/square_2021-04-21/objects/CatalogItem) introduces the  `sort_name` attribute that can take Japanese writing scripts to sort items by. When it is unspecified, the regular `name` attribute is used for sorting.
  * [CatalogPricingRule](https://developer.squareup.com/reference/square_2021-04-21/objects/CatalogCatalogPricingRule) has the new `customer_group_ids_any` attribute included to support automatic application of discounts to specified product set purchased by members of any of the customer groups identified by the `customer_group_ids_any` attribute values.
* **Team API**
  * New [Team webhooks](https://developer.squareup.com/reference/square_2021-04-21/team-api/webhooks): `team_member.created`, `team_member.updated`, `team_member.wage_setting.updated` to notify on created and updated team members and wage settings.  
   
## SDKs 
* **Connect Node.js SDK:** (retired)
  * The Connect Node.js SDK is retired and replaced by the [Square Node.js SDK.](https://github.com/square/square-nodejs-sdk) For migration information, see [Connect Node.js SDK README.](https://github.com/square/connect-nodejs-sdk/blob/master/README.md)




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
