
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `squareVersion` | `string` | Square Connect API versions<br>*Default*: `'2022-03-16'` |
| `customUrl` | `string` | Sets the base URL requests are made to. Defaults to `https://connect.squareup.com`<br>*Default*: `'https://connect.squareup.com'` |
| `environment` | `string` | The API environment. <br> **Default: `production`** |
| `additionalHeaders` | `Readonly<Record<string, string>>` | Additional headers to add to each API call<br>*Default*: `{}` |
| `userAgentDetail` | `string` | User agent detail to append in the user agent header<br>*Default*: `'\'\''` |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `60000` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  squareVersion: '2022-03-16',
  timeout: 60000,
  additionalHeaders: {},
  userAgentDetail: '',
  environment: Environment.Production,
  accessToken: 'AccessToken',
})
```

## Make Calls with the API Client

```ts
import fs from 'fs';
import {
  AccumulateLoyaltyPointsRequest,
  ACHDetails,
  AdditionalRecipient,
  Address,
  AdjustLoyaltyPointsRequest,
  AfterpayDetails,
  ApiError,
  ApplePayApi,
  ApplicationDetails,
  AppointmentSegment,
  BankAccountPaymentDetails,
  BankAccountsApi,
  BatchChangeInventoryRequest,
  BatchDeleteCatalogObjectsRequest,
  BatchRetrieveCatalogObjectsRequest,
  BatchRetrieveInventoryChangesRequest,
  BatchRetrieveInventoryCountsRequest,
  BatchRetrieveOrdersRequest,
  BatchUpsertCatalogObjectsRequest,
  Booking,
  BookingCreatorDetails,
  BookingsApi,
  Break,
  BreakType,
  BulkCreateTeamMembersRequest,
  BulkCreateVendorsRequest,
  BulkRetrieveVendorsRequest,
  BulkUpdateTeamMembersRequest,
  BulkUpdateVendorsRequest,
  BusinessHours,
  BusinessHoursPeriod,
  BuyNowPayLaterDetails,
  CalculateLoyaltyPointsRequest,
  CalculateOrderRequest,
  CancelBookingRequest,
  CancelInvoiceRequest,
  CancelPaymentByIdempotencyKeyRequest,
  Card,
  CardPaymentDetails,
  CardPaymentTimeline,
  CardsApi,
  CashDrawersApi,
  CashPaymentDetails,
  CatalogApi,
  CatalogCategory,
  CatalogCustomAttributeDefinition,
  CatalogCustomAttributeDefinitionNumberConfig,
  CatalogCustomAttributeDefinitionSelectionConfig,
  CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection,
  CatalogCustomAttributeDefinitionStringConfig,
  CatalogCustomAttributeValue,
  CatalogDiscount,
  CatalogImage,
  CatalogItem,
  CatalogItemModifierListInfo,
  CatalogItemOption,
  CatalogItemOptionForItem,
  CatalogItemOptionValue,
  CatalogItemOptionValueForItemVariation,
  CatalogItemVariation,
  CatalogMeasurementUnit,
  CatalogModifier,
  CatalogModifierList,
  CatalogModifierOverride,
  CatalogObject,
  CatalogObjectBatch,
  CatalogPricingRule,
  CatalogProductSet,
  CatalogQuery,
  CatalogQueryExact,
  CatalogQueryItemsForItemOptions,
  CatalogQueryItemsForModifierList,
  CatalogQueryItemsForTax,
  CatalogQueryItemVariationsForItemOptionValues,
  CatalogQueryPrefix,
  CatalogQueryRange,
  CatalogQuerySet,
  CatalogQuerySortedAttribute,
  CatalogQueryText,
  CatalogQuickAmount,
  CatalogQuickAmountsSettings,
  CatalogStockConversion,
  CatalogSubscriptionPlan,
  CatalogTax,
  CatalogTimePeriod,
  CatalogV1Id,
  ChargeRequestAdditionalRecipient,
  CheckoutApi,
  Client,
  CloneOrderRequest,
  CompletePaymentRequest,
  Coordinates,
  CreateBookingRequest,
  CreateBreakTypeRequest,
  CreateCardRequest,
  CreateCatalogImageRequest,
  CreateCheckoutRequest,
  CreateCustomerCardRequest,
  CreateCustomerGroupRequest,
  CreateCustomerRequest,
  CreateDeviceCodeRequest,
  CreateDisputeEvidenceFileRequest,
  CreateDisputeEvidenceTextRequest,
  CreateGiftCardActivityRequest,
  CreateGiftCardRequest,
  CreateInvoiceRequest,
  CreateLocationRequest,
  CreateLoyaltyAccountRequest,
  CreateLoyaltyRewardRequest,
  CreateMobileAuthorizationCodeRequest,
  CreateOrderRequest,
  CreatePaymentRequest,
  CreateShiftRequest,
  CreateSubscriptionRequest,
  CreateTeamMemberRequest,
  CreateTerminalCheckoutRequest,
  CreateTerminalRefundRequest,
  CreateVendorRequest,
  CustomAttributeFilter,
  CustomerCreationSourceFilter,
  CustomerFilter,
  CustomerGroup,
  CustomerGroupsApi,
  CustomerQuery,
  CustomersApi,
  CustomerSegmentsApi,
  CustomerSort,
  CustomerTaxIds,
  CustomerTextFilter,
  DateRange,
  DeviceCheckoutOptions,
  DeviceCode,
  DeviceDetails,
  DevicesApi,
  DigitalWalletDetails,
  DisputesApi,
  EmployeesApi,
  Error,
  ExternalPaymentDetails,
  FileWrapper,
  FilterValue,
  GiftCard,
  GiftCardActivitiesApi,
  GiftCardActivity,
  GiftCardActivityActivate,
  GiftCardActivityAdjustDecrement,
  GiftCardActivityAdjustIncrement,
  GiftCardActivityBlock,
  GiftCardActivityClearBalance,
  GiftCardActivityDeactivate,
  GiftCardActivityImport,
  GiftCardActivityImportReversal,
  GiftCardActivityLoad,
  GiftCardActivityRedeem,
  GiftCardActivityRefund,
  GiftCardActivityUnblock,
  GiftCardActivityUnlinkedActivityRefund,
  GiftCardsApi,
  InventoryAdjustment,
  InventoryAdjustmentGroup,
  InventoryApi,
  InventoryChange,
  InventoryPhysicalCount,
  InventoryTransfer,
  Invoice,
  InvoiceAcceptedPaymentMethods,
  InvoiceCustomField,
  InvoiceFilter,
  InvoicePaymentReminder,
  InvoicePaymentRequest,
  InvoiceQuery,
  InvoiceRecipient,
  InvoiceRecipientTaxIds,
  InvoicesApi,
  InvoiceSort,
  ItemVariationLocationOverrides,
  JobAssignment,
  LaborApi,
  LinkCustomerToGiftCardRequest,
  Location,
  LocationsApi,
  LoyaltyAccount,
  LoyaltyAccountExpiringPointDeadline,
  LoyaltyAccountMapping,
  LoyaltyApi,
  LoyaltyEventAccumulatePoints,
  LoyaltyEventAdjustPoints,
  LoyaltyEventDateTimeFilter,
  LoyaltyEventFilter,
  LoyaltyEventLocationFilter,
  LoyaltyEventLoyaltyAccountFilter,
  LoyaltyEventOrderFilter,
  LoyaltyEventQuery,
  LoyaltyEventTypeFilter,
  LoyaltyReward,
  MeasurementUnit,
  MeasurementUnitCustom,
  MerchantsApi,
  MobileAuthorizationApi,
  Money,
  OAuthApi,
  ObtainTokenRequest,
  Order,
  OrderFulfillment,
  OrderFulfillmentFulfillmentEntry,
  OrderFulfillmentPickupDetails,
  OrderFulfillmentPickupDetailsCurbsidePickupDetails,
  OrderFulfillmentRecipient,
  OrderFulfillmentShipmentDetails,
  OrderLineItem,
  OrderLineItemAppliedDiscount,
  OrderLineItemAppliedTax,
  OrderLineItemDiscount,
  OrderLineItemModifier,
  OrderLineItemPricingBlocklists,
  OrderLineItemPricingBlocklistsBlockedDiscount,
  OrderLineItemPricingBlocklistsBlockedTax,
  OrderLineItemTax,
  OrderMoneyAmounts,
  OrderPricingOptions,
  OrderQuantityUnit,
  OrderReturn,
  OrderReturnDiscount,
  OrderReturnLineItem,
  OrderReturnLineItemModifier,
  OrderReturnServiceCharge,
  OrderReturnTax,
  OrderReward,
  OrderRoundingAdjustment,
  OrdersApi,
  OrderServiceCharge,
  OrderSource,
  PauseSubscriptionRequest,
  Payment,
  PaymentsApi,
  PayOrderRequest,
  ProcessingFee,
  PublishInvoiceRequest,
  Range,
  RedeemLoyaltyRewardRequest,
  Refund,
  RefundPaymentRequest,
  RefundsApi,
  RegisterDomainRequest,
  RenewTokenRequest,
  ResumeSubscriptionRequest,
  RetrieveGiftCardFromGANRequest,
  RetrieveGiftCardFromNonceRequest,
  RevokeTokenRequest,
  RiskEvaluation,
  SearchAvailabilityFilter,
  SearchAvailabilityQuery,
  SearchAvailabilityRequest,
  SearchCatalogItemsRequest,
  SearchCatalogObjectsRequest,
  SearchCustomersRequest,
  SearchInvoicesRequest,
  SearchLoyaltyAccountsRequest,
  SearchLoyaltyAccountsRequestLoyaltyAccountQuery,
  SearchLoyaltyEventsRequest,
  SearchLoyaltyRewardsRequest,
  SearchLoyaltyRewardsRequestLoyaltyRewardQuery,
  SearchOrdersCustomerFilter,
  SearchOrdersDateTimeFilter,
  SearchOrdersFilter,
  SearchOrdersFulfillmentFilter,
  SearchOrdersQuery,
  SearchOrdersRequest,
  SearchOrdersSort,
  SearchOrdersSourceFilter,
  SearchOrdersStateFilter,
  SearchShiftsRequest,
  SearchSubscriptionsFilter,
  SearchSubscriptionsQuery,
  SearchSubscriptionsRequest,
  SearchTeamMembersFilter,
  SearchTeamMembersQuery,
  SearchTeamMembersRequest,
  SearchTerminalCheckoutsRequest,
  SearchTerminalRefundsRequest,
  SearchVendorsRequest,
  SearchVendorsRequestFilter,
  SearchVendorsRequestSort,
  SegmentFilter,
  Shift,
  ShiftFilter,
  ShiftQuery,
  ShiftSort,
  ShiftWage,
  ShiftWorkday,
  SitesApi,
  Snippet,
  SnippetsApi,
  SourceApplication,
  Subscription,
  SubscriptionAction,
  SubscriptionPhase,
  SubscriptionsApi,
  SubscriptionSource,
  SwapPlanRequest,
  TaxIds,
  TeamApi,
  TeamMember,
  TeamMemberAssignedLocations,
  Tender,
  TenderCardDetails,
  TenderCashDetails,
  TerminalApi,
  TerminalCheckout,
  TerminalCheckoutQuery,
  TerminalCheckoutQueryFilter,
  TerminalCheckoutQuerySort,
  TerminalRefund,
  TerminalRefundQuery,
  TerminalRefundQueryFilter,
  TerminalRefundQuerySort,
  TimeRange,
  TipSettings,
  TransactionsApi,
  UnlinkCustomerFromGiftCardRequest,
  UpdateBookingRequest,
  UpdateBreakTypeRequest,
  UpdateCatalogImageRequest,
  UpdateCustomerGroupRequest,
  UpdateCustomerRequest,
  UpdateInvoiceRequest,
  UpdateItemModifierListsRequest,
  UpdateItemTaxesRequest,
  UpdateLocationRequest,
  UpdateOrderRequest,
  UpdatePaymentRequest,
  UpdateShiftRequest,
  UpdateSubscriptionRequest,
  UpdateTeamMemberRequest,
  UpdateVendorRequest,
  UpdateWageSettingRequest,
  UpdateWorkweekConfigRequest,
  UpsertCatalogObjectRequest,
  UpsertSnippetRequest,
  V1CreateRefundRequest,
  V1Money,
  V1TransactionsApi,
  V1UpdateOrderRequest,
  Vendor,
  VendorContact,
  VendorsApi,
  WageSetting,
  WorkweekConfig,
} from 'square';

const client = new Client({
  squareVersion: '2022-03-16',
  timeout: 60000,
  additionalHeaders: {},
  userAgentDetail: '',
  accessToken: 'AccessToken',
})
const locationsApi = client.locationsApi;
try {
  const { result, ...httpResponse } = await locationsApi.listLocations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Square Client

The gateway for the SDK. This class acts as a factory for the Apis and also holds the configuration of the SDK.

## API

| Name | Description |
|  --- | --- |
| mobileAuthorization | Gets MobileAuthorizationApi |
| oAuth | Gets OAuthApi |
| v1Transactions | Gets V1TransactionsApi |
| applePay | Gets ApplePayApi |
| bankAccounts | Gets BankAccountsApi |
| bookings | Gets BookingsApi |
| cards | Gets CardsApi |
| cashDrawers | Gets CashDrawersApi |
| catalog | Gets CatalogApi |
| customers | Gets CustomersApi |
| customerGroups | Gets CustomerGroupsApi |
| customerSegments | Gets CustomerSegmentsApi |
| devices | Gets DevicesApi |
| disputes | Gets DisputesApi |
| employees | Gets EmployeesApi |
| giftCards | Gets GiftCardsApi |
| giftCardActivities | Gets GiftCardActivitiesApi |
| inventory | Gets InventoryApi |
| invoices | Gets InvoicesApi |
| labor | Gets LaborApi |
| locations | Gets LocationsApi |
| checkout | Gets CheckoutApi |
| transactions | Gets TransactionsApi |
| loyalty | Gets LoyaltyApi |
| merchants | Gets MerchantsApi |
| orders | Gets OrdersApi |
| payments | Gets PaymentsApi |
| refunds | Gets RefundsApi |
| sites | Gets SitesApi |
| snippets | Gets SnippetsApi |
| subscriptions | Gets SubscriptionsApi |
| team | Gets TeamApi |
| terminal | Gets TerminalApi |
| vendors | Gets VendorsApi |

