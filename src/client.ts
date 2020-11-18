import { ApplePayApi } from './api/applePayApi';
import { BankAccountsApi } from './api/bankAccountsApi';
import { BookingsApi } from './api/bookingsApi';
import { CashDrawersApi } from './api/cashDrawersApi';
import { CatalogApi } from './api/catalogApi';
import { CheckoutApi } from './api/checkoutApi';
import { CustomerGroupsApi } from './api/customerGroupsApi';
import { CustomersApi } from './api/customersApi';
import { CustomerSegmentsApi } from './api/customerSegmentsApi';
import { DevicesApi } from './api/devicesApi';
import { DisputesApi } from './api/disputesApi';
import { EmployeesApi } from './api/employeesApi';
import { InventoryApi } from './api/inventoryApi';
import { InvoicesApi } from './api/invoicesApi';
import { LaborApi } from './api/laborApi';
import { LocationsApi } from './api/locationsApi';
import { LoyaltyApi } from './api/loyaltyApi';
import { MerchantsApi } from './api/merchantsApi';
import { MobileAuthorizationApi } from './api/mobileAuthorizationApi';
import { OAuthApi } from './api/oAuthApi';
import { OrdersApi } from './api/ordersApi';
import { PaymentsApi } from './api/paymentsApi';
import { RefundsApi } from './api/refundsApi';
import { SubscriptionsApi } from './api/subscriptionsApi';
import { TeamApi } from './api/teamApi';
import { TerminalApi } from './api/terminalApi';
import { TransactionsApi } from './api/transactionsApi';
import { V1EmployeesApi } from './api/v1EmployeesApi';
import { V1ItemsApi } from './api/v1ItemsApi';
import { V1LocationsApi } from './api/v1LocationsApi';
import { V1TransactionsApi } from './api/v1TransactionsApi';
import { accessTokenAuthenticationProvider } from './authentication';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import { DEFAULT_CONFIGURATION } from './defaultConfiguration';
import { ApiError } from './errors/apiError';
import { HttpClient } from './http/httpClient';
import { assertHeaders, mergeHeaders } from './http/httpHeaders';
import {
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
} from './http/requestBuilder';

/** Current SDK version */
export const SDK_VERSION = '7.0.0';
const USER_AGENT = 'Square-TypeScript-SDK/7.0.0';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _requestBuilderFactory: SdkRequestBuilderFactory;

  public readonly applePayApi: ApplePayApi;
  public readonly bankAccountsApi: BankAccountsApi;
  public readonly bookingsApi: BookingsApi;
  public readonly cashDrawersApi: CashDrawersApi;
  public readonly catalogApi: CatalogApi;
  public readonly checkoutApi: CheckoutApi;
  public readonly customerGroupsApi: CustomerGroupsApi;
  public readonly customersApi: CustomersApi;
  public readonly customerSegmentsApi: CustomerSegmentsApi;
  public readonly devicesApi: DevicesApi;
  public readonly disputesApi: DisputesApi;
  public readonly employeesApi: EmployeesApi;
  public readonly inventoryApi: InventoryApi;
  public readonly invoicesApi: InvoicesApi;
  public readonly laborApi: LaborApi;
  public readonly locationsApi: LocationsApi;
  public readonly loyaltyApi: LoyaltyApi;
  public readonly merchantsApi: MerchantsApi;
  public readonly mobileAuthorizationApi: MobileAuthorizationApi;
  public readonly oAuthApi: OAuthApi;
  public readonly ordersApi: OrdersApi;
  public readonly paymentsApi: PaymentsApi;
  public readonly refundsApi: RefundsApi;
  public readonly subscriptionsApi: SubscriptionsApi;
  public readonly teamApi: TeamApi;
  public readonly terminalApi: TerminalApi;
  public readonly transactionsApi: TransactionsApi;
  public readonly v1EmployeesApi: V1EmployeesApi;
  public readonly v1ItemsApi: V1ItemsApi;
  public readonly v1LocationsApi: V1LocationsApi;
  public readonly v1TransactionsApi: V1TransactionsApi;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._requestBuilderFactory = createRequestHandlerFactory(
      server => getBaseUri(server, this._config),
      accessTokenAuthenticationProvider(this._config),
      new HttpClient({
        timeout: this._config.timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
      }),
      [
        withErrorHandlers,
        withUserAgent,
        withAdditionalHeaders(this._config),
        withAuthenticationByDefault,
      ]
    );

    this.applePayApi = new ApplePayApi(this);
    this.bankAccountsApi = new BankAccountsApi(this);
    this.bookingsApi = new BookingsApi(this);
    this.cashDrawersApi = new CashDrawersApi(this);
    this.catalogApi = new CatalogApi(this);
    this.checkoutApi = new CheckoutApi(this);
    this.customerGroupsApi = new CustomerGroupsApi(this);
    this.customersApi = new CustomersApi(this);
    this.customerSegmentsApi = new CustomerSegmentsApi(this);
    this.devicesApi = new DevicesApi(this);
    this.disputesApi = new DisputesApi(this);
    this.employeesApi = new EmployeesApi(this);
    this.inventoryApi = new InventoryApi(this);
    this.invoicesApi = new InvoicesApi(this);
    this.laborApi = new LaborApi(this);
    this.locationsApi = new LocationsApi(this);
    this.loyaltyApi = new LoyaltyApi(this);
    this.merchantsApi = new MerchantsApi(this);
    this.mobileAuthorizationApi = new MobileAuthorizationApi(this);
    this.oAuthApi = new OAuthApi(this);
    this.ordersApi = new OrdersApi(this);
    this.paymentsApi = new PaymentsApi(this);
    this.refundsApi = new RefundsApi(this);
    this.subscriptionsApi = new SubscriptionsApi(this);
    this.teamApi = new TeamApi(this);
    this.terminalApi = new TerminalApi(this);
    this.transactionsApi = new TransactionsApi(this);
    this.v1EmployeesApi = new V1EmployeesApi(this);
    this.v1ItemsApi = new V1ItemsApi(this);
    this.v1LocationsApi = new V1LocationsApi(this);
    this.v1TransactionsApi = new V1TransactionsApi(this);
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'default', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://connect.squareup.com';
    }
  }
  if (config.environment === Environment.Sandbox) {
    if (server === 'default') {
      return 'https://connect.squareupsandbox.com';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach(c => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withAdditionalHeaders({
  additionalHeaders,
}: {
  additionalHeaders: Readonly<Record<string, string>>;
}) {
  const clone = { ...additionalHeaders };
  assertHeaders(clone);
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      mergeHeaders(headers, clone);
      return { ...request, headers };
    });
  };
}

function withUserAgent(rb: SdkRequestBuilder) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate(true);
}
