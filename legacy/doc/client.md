
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `squareVersion` | `string` | Square Connect API versions<br>*Default*: `'2024-12-18'` |
| `customUrl` | `string` | Sets the base URL requests are made to. Defaults to `https://connect.squareup.com`<br>*Default*: `'https://connect.squareup.com'` |
| `environment` | `string` | The API environment. <br> **Default: `production`** |
| `additionalHeaders` | `Readonly<Record<string, string>>` | Additional headers to add to each API call<br>*Default*: `{}` |
| `userAgentDetail` | `string` | User agent detail to append in the user agent header<br>*Default*: `"''"` |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `60000` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  squareVersion: '2024-12-18',
  timeout: 60000,
  additionalHeaders: {},
  userAgentDetail: '',
  environment: Environment.Production,
  customUrl: 'https://connect.squareup.com',
});
```

## Make Calls with the API Client

```ts
import { ApiError, Client, Environment } from 'square/legacy';

const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  squareVersion: '2024-12-18',
  timeout: 60000,
  additionalHeaders: {},
  userAgentDetail: '',
  environment: Environment.Production,
  customUrl: 'https://connect.squareup.com',
});

const locationsApi = client.locationsApi;

try {
  const { result, ...httpResponse } = await locationsApi.listLocations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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
| bookingCustomAttributes | Gets BookingCustomAttributesApi |
| cards | Gets CardsApi |
| cashDrawers | Gets CashDrawersApi |
| catalog | Gets CatalogApi |
| customers | Gets CustomersApi |
| customerCustomAttributes | Gets CustomerCustomAttributesApi |
| customerGroups | Gets CustomerGroupsApi |
| customerSegments | Gets CustomerSegmentsApi |
| devices | Gets DevicesApi |
| disputes | Gets DisputesApi |
| employees | Gets EmployeesApi |
| events | Gets EventsApi |
| giftCards | Gets GiftCardsApi |
| giftCardActivities | Gets GiftCardActivitiesApi |
| inventory | Gets InventoryApi |
| invoices | Gets InvoicesApi |
| labor | Gets LaborApi |
| locations | Gets LocationsApi |
| locationCustomAttributes | Gets LocationCustomAttributesApi |
| checkout | Gets CheckoutApi |
| transactions | Gets TransactionsApi |
| loyalty | Gets LoyaltyApi |
| merchants | Gets MerchantsApi |
| merchantCustomAttributes | Gets MerchantCustomAttributesApi |
| orders | Gets OrdersApi |
| orderCustomAttributes | Gets OrderCustomAttributesApi |
| payments | Gets PaymentsApi |
| payouts | Gets PayoutsApi |
| refunds | Gets RefundsApi |
| sites | Gets SitesApi |
| snippets | Gets SnippetsApi |
| subscriptions | Gets SubscriptionsApi |
| team | Gets TeamApi |
| terminal | Gets TerminalApi |
| vendors | Gets VendorsApi |
| webhookSubscriptions | Gets WebhookSubscriptionsApi |

