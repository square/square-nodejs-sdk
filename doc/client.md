
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `squareVersion` | `string` | Square Connect API versions<br>*Default*: `'2021-03-17'` |
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
} from 'square';

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
| mobileAuthorization | Gets MobileAuthorizationApi |
| oAuth | Gets OAuthApi |
| v1Employees | Gets V1EmployeesApi |
| v1Transactions | Gets V1TransactionsApi |
| applePay | Gets ApplePayApi |
| bankAccounts | Gets BankAccountsApi |
| bookings | Gets BookingsApi |
| cashDrawers | Gets CashDrawersApi |
| catalog | Gets CatalogApi |
| customers | Gets CustomersApi |
| customerGroups | Gets CustomerGroupsApi |
| customerSegments | Gets CustomerSegmentsApi |
| devices | Gets DevicesApi |
| disputes | Gets DisputesApi |
| employees | Gets EmployeesApi |
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
| subscriptions | Gets SubscriptionsApi |
| team | Gets TeamApi |
| terminal | Gets TerminalApi |

