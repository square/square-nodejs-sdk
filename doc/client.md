
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `squareVersion` | `string` | Square Connect API versions<br>*Default*: `'2021-11-17'` |
| `customUrl` | `string` | Sets the base URL requests are made to. Defaults to `https://connect.squareup.com`<br>*Default*: `'https://connect.squareup.com'` |
| `environment` | `string` | The API environment. <br> **Default: `production`** |
| `additionalHeaders` | `Readonly<Record<string, string>>` | Additional headers to add to each API call<br>*Default*: `{}` |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `60000` |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  squareVersion: '2021-11-17',
  timeout: 60000,
  additionalHeaders: {},
  environment: Environment.Production,
  accessToken: 'AccessToken',
})
```

## Make Calls with the API Client

```ts
import {
  ApiError,
  ApplePayApi,
  BankAccountsApi,
  BookingsApi,
  CardsApi,
  CashDrawersApi,
  CatalogApi,
  CheckoutApi,
  Client,
  CustomerGroupsApi,
  CustomersApi,
  CustomerSegmentsApi,
  DevicesApi,
  DisputesApi,
  EmployeesApi,
  GiftCardActivitiesApi,
  GiftCardsApi,
  InventoryApi,
  InvoicesApi,
  LaborApi,
  LocationsApi,
  LoyaltyApi,
  MerchantsApi,
  MobileAuthorizationApi,
  OAuthApi,
  OrdersApi,
  PaymentsApi,
  RefundsApi,
  SitesApi,
  SnippetsApi,
  SubscriptionsApi,
  TeamApi,
  TerminalApi,
  TransactionsApi,
  V1TransactionsApi,
} from 'square';

const client = new Client({
  squareVersion: '2021-11-17',
  timeout: 60000,
  additionalHeaders: {},
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

