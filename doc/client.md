
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `squareVersion` | `string` | Square Connect API versions<br>*Default*: `'2021-02-26'` |
| `customUrl` | `string` | Sets the base URL requests are made to. Defaults to `https://connect.squareup.com`<br>*Default*: `'https://connect.squareup.com'` |
| `environment` | `string` | The API environment. <br> **Default: `production`** |
| `additionalHeaders` | `Readonly<Record<string, string>>` | Additional headers to add to each API call<br>*Default*: `{}` |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `60000` |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  squareVersion: null,
  timeout: 60000,
  additionalHeaders: {},
  environment: Environment.Production
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
  SubscriptionsApi,
  TeamApi,
  TerminalApi,
  TransactionsApi,
  V1EmployeesApi,
  V1TransactionsApi,
} from 'squarelib';

const client = new Client({
  squareVersion: null,
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
| mobileAuthorization | Provides access to MobileAuthorizationApi |
| oAuth | Provides access to OAuthApi |
| v1Employees | Provides access to V1EmployeesApi |
| v1Transactions | Provides access to V1TransactionsApi |
| applePay | Provides access to ApplePayApi |
| bankAccounts | Provides access to BankAccountsApi |
| bookings | Provides access to BookingsApi |
| cashDrawers | Provides access to CashDrawersApi |
| catalog | Provides access to CatalogApi |
| customers | Provides access to CustomersApi |
| customerGroups | Provides access to CustomerGroupsApi |
| customerSegments | Provides access to CustomerSegmentsApi |
| devices | Provides access to DevicesApi |
| disputes | Provides access to DisputesApi |
| employees | Provides access to EmployeesApi |
| inventory | Provides access to InventoryApi |
| invoices | Provides access to InvoicesApi |
| labor | Provides access to LaborApi |
| locations | Provides access to LocationsApi |
| checkout | Provides access to CheckoutApi |
| transactions | Provides access to TransactionsApi |
| loyalty | Provides access to LoyaltyApi |
| merchants | Provides access to MerchantsApi |
| orders | Provides access to OrdersApi |
| payments | Provides access to PaymentsApi |
| refunds | Provides access to RefundsApi |
| subscriptions | Provides access to SubscriptionsApi |
| team | Provides access to TeamApi |
| terminal | Provides access to TerminalApi |

